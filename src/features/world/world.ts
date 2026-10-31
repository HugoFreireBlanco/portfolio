import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createByte } from './byte';
import { buildEnvironment } from './environment';
import { palette } from './materials';
import { cableHeight } from './hardware';
import { createAtmosphere } from './atmosphere';
import { byteSupport, flightRotation } from './landing';
import { createRecoveryState, recoveryBlue, recoveryZones } from './recovery-state';
import { createRecovery } from './recovery';
import { createEnding } from './ending';
import { createMemory } from './memory';
import './world.css';

export interface WorldController {
  enter: (source: DOMRect) => Promise<void>;
  setPaused: (paused: boolean) => void;
}

export async function prepareWorld(host: HTMLElement): Promise<WorldController> {
  const layer = document.createElement('section');
  layer.className = 'world-layer';
  layer.hidden = true;
  layer.setAttribute('aria-label', 'Interior del ordenador. Explora el bus de datos con WASD o las flechas.');
  layer.innerHTML = `<div class="world-viewport"></div>
    <div class="world-heading"><h2 tabindex="-1">THE DATA BUS<span>_</span></h2><p>Recupera los paquetes. Restaura la información.</p></div>
    <button class="skip-transit" type="button">OMITIR <kbd>ESC</kbd></button>
    <div class="world-bottom"><div class="movement-hint"><span class="keyboard-hint"><kbd>W A S D</kbd> MOVER &nbsp; <kbd>ESPACIO</kbd> SALTAR &nbsp; ARRASTRA PARA MIRAR</span><span class="touch-hint">ARRASTRA EL ESCENARIO PARA MIRAR</span></div></div>
    <div class="mobile-controls" aria-label="Controles de movimiento"><div class="movement-joystick" role="group" aria-label="Joystick de movimiento: arrastra para moverte"><span class="joystick-guide" aria-hidden="true"></span><span class="joystick-thumb" aria-hidden="true"></span></div><button class="jump-control" type="button" aria-label="Saltar">↥</button></div>
    <span class="world-announcement sr-only" aria-live="polite"></span>`;
  host.append(layer);
  const viewport = layer.querySelector<HTMLElement>('.world-viewport')!;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 700px), (pointer: coarse)').matches;
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', alpha: false });
  const gl = renderer.getContext();
  const debug = gl.getExtension('WEBGL_debug_renderer_info');
  const software = debug ? /swiftshader|llvmpipe|software/i.test(gl.getParameter(debug.UNMASKED_RENDERER_WEBGL)) : false;
  // Bound fill-rate on large displays while keeping high-density screens crisp.
  function preferredRenderRatio() {
    if (software) return .75;
    const pixelBudget = mobile ? 2_000_000 : 4_000_000;
    return Math.min(devicePixelRatio, mobile ? 1.5 : 1.75, Math.sqrt(pixelBudget / (innerWidth * innerHeight)));
  }
  let renderRatio = preferredRenderRatio();
  renderer.setPixelRatio(renderRatio);
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(0x03070e);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .95;
  renderer.domElement.tabIndex = 0;
  renderer.domElement.setAttribute('aria-label', 'Escena 3D. Flechas o WASD para moverte, espacio para saltar.');
  viewport.append(renderer.domElement);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x03070e);
  scene.fog = new THREE.FogExp2(0x03070e, .019);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pmrem.fromScene(room, .04).texture;
  scene.environmentIntensity = .45;
  room.dispose();
  pmrem.dispose();
  const camera = new THREE.PerspectiveCamera(57, innerWidth / innerHeight, .1, 200);
  const hemi = new THREE.HemisphereLight(0x819ac4, 0x182236, 3);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xa6c3e7, 3);
  key.position.set(5, 20, 15);
  scene.add(key);
  const accents: THREE.PointLight[] = [];
  for (const [x, z, color] of [[-9, -3, palette.cyan], [10, -18, palette.red], [-9, -38, palette.violet], [0, -55, palette.cyan]]) {
    const light = new THREE.PointLight(color, 60, 25, 2);
    light.position.set(x, 4, z);
    scene.add(light);
    accents.push(light);
  }
  let storage: Storage | undefined;
  try { storage = sessionStorage; } catch { /* Recovery also works without persistence. */ }
  const recoveryState = createRecoveryState(storage);
  const environment = buildEnvironment(scene, mobile || software, recoveryState);
  const atmosphere = createAtmosphere(scene, hemi, key, accents, mobile || software);
  const byte = createByte();
  scene.add(byte.root);
  const composer = new EffectComposer(renderer);
  composer.renderTarget1.samples = mobile || software ? 0 : 2;
  composer.renderTarget2.samples = mobile || software ? 0 : 2;
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), .18, .2, 1.1));
  composer.addPass(new OutputPass());

  const keys = new Set<string>();
  const joystick = layer.querySelector<HTMLElement>('.movement-joystick')!;
  const stick = { id: -1, x: 0, z: 0 };
  function resetJoystick() {
    const id = stick.id;
    stick.id = -1; stick.x = stick.z = 0;
    joystick.classList.remove('is-active');
    joystick.style.setProperty('--stick-x', '0px');
    joystick.style.setProperty('--stick-y', '0px');
    if (id !== -1 && joystick.hasPointerCapture(id)) joystick.releasePointerCapture(id);
  }
  const target = new THREE.Vector3();
  const desiredCamera = new THREE.Vector3();
  const player = new THREE.Vector3(0, .7, 7);
  let elapsed = 0;
  let atmosphereTime = 0;
  let lastFrame = 0;
  let slowFrames = 0;
  let landedAt = 0;
  let transitTime = 0;
  let mode: 'idle' | 'forming' | 'transit' | 'falling' | 'explore' | 'ending' | 'memory' = 'idle';
  let jumpVelocity = 0;
  let jumpHeight = 0;
  let formationResolve: (() => void) | undefined;
  let frame = 0;
  let paused = false;
  let externalPaused = false;
  let dialoguePaused = false;
  let endingPaused = false;
  const formationCamera = new THREE.Vector3();
  const cameraOffset = new THREE.Vector3();
  let yaw = .38;
  let pitch = .32;
  let distance = mobile ? 7.8 : 6.4;
  const drag = { active: false, id: -1, x: 0, y: 0 };
  function orbitOffset(): THREE.Vector3 {
    return cameraOffset.set(Math.sin(yaw) * Math.cos(pitch) * distance, .65 + Math.sin(pitch) * distance, Math.cos(yaw) * Math.cos(pitch) * distance);
  }
  orbitOffset();
  const red = new THREE.Color(recoveryBlue);
  const intruder = new THREE.Color(recoveryBlue);
  const smooth = (t: number) => t * t * (3 - 2 * t);
  const exitPosition = environment.path.getPointAt(1);
  const exitTangent = environment.path.getTangentAt(1);
  const exitVelocity = exitTangent.clone().multiplyScalar(environment.path.getLength() * 1.58 / 5.8);
  const exitCameraOffset = exitTangent.clone().multiplyScalar(-2.8).add(new THREE.Vector3(0, .9, 0));
  const fallPosition = new THREE.Vector3();
  let fallTime = 0;
  let flightDuration = .5;
  const arrivalTarget = new THREE.Vector3();
  const cameraLook = new THREE.Vector3();
  const impactRotation = new THREE.Quaternion();
  const unitScale = new THREE.Vector3(1, 1, 1);
  const slideVelocity = new THREE.Vector3();
  const memory = createMemory(scene, host, layer, recoveryState, camera, active => {
    resetJoystick();
    keys.clear(); drag.active = false;
    mode = active ? 'memory' : 'explore'; layer.dataset.mode = mode;
    recovery.update(player, camera, !active, 0, reduced.matches);
    if (!active) renderer.domElement.focus({ preventScroll: true });
  }, value => { dialoguePaused = value; applyPause(); });
  const recovery = createRecovery(scene, layer, host, recoveryState, value => {
    dialoguePaused = value;
    applyPause();
  }, index => memory.open(index));
  const ending = createEnding(scene, host, layer, recoveryState, stage => {
    resetJoystick();
    keys.clear(); drag.active = false;
    if (stage === 'start') { mode = 'ending'; layer.dataset.mode = 'ending'; }
    else if (stage === 'screen') { endingPaused = true; applyPause(); }
    else {
      player.set(-1.2, 0, 7.15);
      byte.root.rotation.set(0, -.95, 0);
      player.y = byteSupport(player.z, byte.root.quaternion, byte.root.scale);
      byte.root.position.copy(player);
      yaw = .38; pitch = .32;
      camera.position.copy(player).add(orbitOffset());
      cameraLook.copy(player).add(new THREE.Vector3(0, .45, 0));
      camera.lookAt(cameraLook);
      jumpHeight = jumpVelocity = 0; slideVelocity.set(0, 0, 0);
      mode = 'explore'; layer.dataset.mode = 'explore';
      endingPaused = false; applyPause();
    }
  });
  const restoredZones = recoveryZones.map((zone, i) => recoveryState.zoneCount(i) === zone.count);
  function refreshRecovery() {
    recoveryZones.forEach((zone, i) => { restoredZones[i] = recoveryState.zoneCount(i) === zone.count; });
  }
  recoveryState.subscribe(refreshRecovery);
  refreshRecovery();

  function applyPause() {
    resetJoystick();
    paused = externalPaused || dialoguePaused || endingPaused;
    keys.clear();
    drag.active = false;
    layer.classList.remove('is-orbiting');
    layer.inert = paused;
    if (mode === 'idle') layer.hidden = !externalPaused;
    cancelAnimationFrame(frame);
    if (!paused && mode !== 'idle' && !document.hidden) {
      lastFrame = 0;
      render();
      if (mode === 'explore') renderer.domElement.focus({ preventScroll: true });
    }
  }

  function flightPoint(time: number, out: THREE.Vector3): THREE.Vector3 {
    out.copy(exitPosition).addScaledVector(exitVelocity, time);
    out.y -= 5.5 * time * time;
    return out;
  }
  // Resolve the actual cable contact once, rather than blending into a spawn point.
  for (let time = .005; time <= 2; time += .005) {
    flightPoint(time, arrivalTarget);
    flightRotation(exitTangent, time, impactRotation);
    if (arrivalTarget.y <= byteSupport(arrivalTarget.z, impactRotation, unitScale)) {
      let low = time - .005;
      let high = time;
      for (let i = 0; i < 12; i++) {
        const mid = (low + high) / 2;
        flightPoint(mid, arrivalTarget);
        flightRotation(exitTangent, mid, impactRotation);
        if (arrivalTarget.y > byteSupport(arrivalTarget.z, impactRotation, unitScale)) low = mid;
        else high = mid;
      }
      flightDuration = high;
      break;
    }
  }
  flightPoint(flightDuration, arrivalTarget);
  flightRotation(exitTangent, flightDuration, impactRotation);
  arrivalTarget.y = byteSupport(arrivalTarget.z, impactRotation, unitScale);

  function land(preserveCamera = false): void {
    mode = 'explore';
    landedAt = elapsed;
    layer.dataset.mode = 'explore';
    keys.clear();
    player.copy(arrivalTarget);
    byte.root.scale.setScalar(1);
    byte.root.quaternion.copy(preserveCamera ? impactRotation : new THREE.Quaternion());
    player.y = byteSupport(player.z, byte.root.quaternion, byte.root.scale);
    byte.root.position.copy(player);
    slideVelocity.copy(exitVelocity).multiplyScalar(preserveCamera ? .38 : 0);
    slideVelocity.y = 0;
    jumpHeight = 0;
    jumpVelocity = preserveCamera ? Math.min(1.55, Math.abs(exitVelocity.y - 11 * flightDuration) * .18) : 0;
    if (!preserveCamera) {
      camera.position.copy(player).add(orbitOffset());
      cameraLook.copy(player).add(new THREE.Vector3(0, .45, 0));
      camera.lookAt(cameraLook);
    }
    layer.querySelector<HTMLElement>('.world-bottom')!.inert = false;
    layer.querySelector<HTMLElement>('.mobile-controls')!.inert = false;
    byte.core.color.copy(intruder);
    byte.core.emissive.copy(intruder);
    byte.light.color.copy(intruder);
    layer.querySelector('.world-announcement')!.textContent = 'Proceso de recuperación desplegado. Habla con AUX junto a la entrada: acércate y pulsa E para conocer los objetivos. Usa WASD para moverte.';
    renderer.domElement.focus({ preventScroll: true });
    formationResolve?.();
    formationResolve = undefined;
  }

  function formationPose(progress: number): void {
    byte.root.position.copy(environment.path.getPointAt(0));
    byte.root.scale.setScalar(.1 + smooth(progress) * .9);
    byte.root.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), environment.path.getTangentAt(0));
    camera.position.copy(formationCamera);
    cameraLook.copy(byte.root.position).add(new THREE.Vector3(0, .15, 0));
    camera.lookAt(cameraLook);
  }

  function update(wallDelta: number): void {
    const delta = Math.min(wallDelta, .12);
    elapsed += delta;
    atmosphereTime += wallDelta;
    const alarm = atmosphere.update(atmosphereTime, reduced.matches, restoredZones, recoveryState.complete, delta);
    layer.dataset.alert = alarm.toFixed(2);
    environment.update(elapsed, reduced.matches, mode === 'explore' || mode === 'memory' ? player : arrivalTarget, byte.root.rotation.y);
    if (mode === 'forming') {
      transitTime += wallDelta;
      const t = Math.min(transitTime / 1.1, 1);
      formationPose(t);
      if (t === 1) { mode = 'transit'; transitTime = 0; layer.dataset.mode = 'transit'; }
    } else if (mode === 'transit') {
      transitTime += wallDelta;
      const raw = Math.min(transitTime / 5.8, 1);
      // Increasing speed along arc length; unlike smoothstep, no stop at the mouth.
      const t = .42 * raw + .58 * raw * raw;
      const pos = environment.path.getPointAt(t);
      const tangent = environment.path.getTangentAt(t);
      byte.root.position.copy(pos);
      byte.root.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), tangent);
      const follow = pos.clone().addScaledVector(tangent, -2.8).add(new THREE.Vector3(0, .9, 0));
      const formationBlend = smooth(Math.min(raw * 5, 1));
      desiredCamera.copy(formationCamera).lerp(follow, formationBlend);
      camera.position.copy(desiredCamera);
      cameraLook.copy(byte.root.position).add(new THREE.Vector3(0, .15, 0));
      camera.lookAt(cameraLook);
      byte.core.color.copy(red).lerp(intruder, smooth(Math.max(0, (raw - .65) / .35)));
      byte.core.emissive.copy(byte.core.color);
      byte.light.color.copy(byte.core.color);
      layer.style.setProperty('--transit', `${raw * 100}%`);
      if (raw === 1) {
        mode = 'falling';
        layer.dataset.mode = 'falling';
        fallTime = 0;
        byte.root.position.copy(exitPosition);
      }
    } else if (mode === 'falling') {
      fallTime = Math.min(fallTime + Math.min(wallDelta, .1), flightDuration);
      flightPoint(fallTime, fallPosition);
      byte.root.position.copy(fallPosition);
      flightRotation(exitTangent, fallTime, byte.root.quaternion);
      desiredCamera.copy(fallPosition).add(exitCameraOffset);
      camera.position.copy(desiredCamera);
      cameraLook.lerp(fallPosition.clone().add(new THREE.Vector3(0, .3, 0)), 1 - Math.exp(-delta * 9));
      camera.lookAt(cameraLook);
      if (fallTime >= flightDuration) land(true);
    } else if (mode === 'explore') {
      const dx = Number(keys.has('KeyD') || keys.has('ArrowRight')) - Number(keys.has('KeyA') || keys.has('ArrowLeft')) + stick.x;
      const dz = Number(keys.has('KeyS') || keys.has('ArrowDown')) - Number(keys.has('KeyW') || keys.has('ArrowUp')) + stick.z;
      const length = Math.max(1, Math.hypot(dx, dz));
      const worldX = (dx * Math.cos(yaw) + dz * Math.sin(yaw)) / length;
      const worldZ = (-dx * Math.sin(yaw) + dz * Math.cos(yaw)) / length;
      const slideStep = (1 - Math.exp(-delta * 4)) / 4;
      const nextX = THREE.MathUtils.clamp(player.x + worldX * delta * 4.5 + slideVelocity.x * slideStep, -3.15, 3.15);
      const nextZ = THREE.MathUtils.clamp(player.z + worldZ * delta * 4.5 + slideVelocity.z * slideStep, -53.9, 8.5);
      slideVelocity.multiplyScalar(Math.exp(-delta * 4));
      const oldX = player.x;
      const oldZ = player.z;
      const steps = Math.max(1, Math.ceil(Math.hypot(nextX - oldX, nextZ - oldZ) / .015));
      const stepX = (nextX - oldX) / steps;
      const stepZ = (nextZ - oldZ) / steps;
      for (let step = 0; step < steps; step++) {
        if (environment.canOccupy(player.x + stepX, player.z, byte.root.rotation.y) && recovery.canOccupy(player.x + stepX, player.z)) player.x += stepX;
        if (ending.canOccupy(player.z + stepZ) && environment.canOccupy(player.x, player.z + stepZ, byte.root.rotation.y) && recovery.canOccupy(player.x, player.z + stepZ)) player.z += stepZ;
      }
      const recovered = environment.recover(player.x, player.z, jumpHeight, byte.root.rotation.y);
      if (recovered.length) {
        recovery.rescued(recovered);
        layer.querySelector('.world-announcement')!.textContent = `${recoveryState.count} paquetes recuperados de veinte.`;
      }
      const travelled = Math.hypot(player.x - oldX, player.z - oldZ);
      if (jumpHeight === 0 && travelled > 0) byte.animate(travelled);
      if (keys.has('Space') && jumpHeight === 0) jumpVelocity = 4;
      jumpVelocity -= delta * 11;
      jumpHeight = Math.max(0, jumpHeight + jumpVelocity * delta);
      if (jumpHeight === 0) jumpVelocity = 0;
      const sinceLanding = elapsed - landedAt;
      const squash = reduced.matches ? 0 : Math.max(0, 1 - sinceLanding / .16) * .07;
      byte.root.scale.set(1 + squash * .5, 1 - squash, 1 + squash * .5);
      const lean = reduced.matches || jumpHeight > 0 ? 0 : -Math.min(.045, travelled * .09 / Math.max(delta, .001));
      byte.root.rotation.x = THREE.MathUtils.lerp(byte.root.rotation.x, lean, 1 - Math.exp(-delta * 5));
      if (dx || dz) {
        const rotation = Math.atan2(worldX, worldZ);
        const turn = Math.atan2(Math.sin(rotation - byte.root.rotation.y), Math.cos(rotation - byte.root.rotation.y)) * Math.min(delta * 12, 1);
        const turnSteps = Math.max(1, Math.ceil(Math.abs(turn) / .03));
        for (let step = 0; step < turnSteps; step++) {
          const nextYaw = byte.root.rotation.y + turn / turnSteps;
          if (!environment.canOccupy(player.x, player.z, nextYaw)) break;
          byte.root.rotation.y = nextYaw;
        }
      }
      byte.root.rotation.z *= reduced.matches ? 0 : Math.exp(-delta * 4.5);
      player.y = byteSupport(player.z, byte.root.quaternion, byte.root.scale);
      byte.root.position.copy(player);
      byte.root.position.y += jumpHeight;
      layer.dataset.landing = `${sinceLanding.toFixed(2)},${jumpHeight.toFixed(3)},${slideVelocity.length().toFixed(3)}`;
      desiredCamera.copy(player).add(orbitOffset());
      camera.position.lerp(desiredCamera, reduced.matches ? 1 : 1 - Math.exp(-delta * 3));
      target.copy(player).add(new THREE.Vector3(0, .45, 0));
      cameraLook.lerp(target, reduced.matches ? 1 : 1 - Math.exp(-delta * 6));
      camera.lookAt(cameraLook);
      layer.dataset.camera = `${yaw.toFixed(2)},${pitch.toFixed(2)}`;
      // Useful scene state for diagnostics and future proximity-based stations.
      layer.dataset.position = `${player.x.toFixed(2)},${player.z.toFixed(2)}`;
    }
    recovery.update(player, camera, mode === 'explore', delta, reduced.matches);
    ending.update(player, camera, byte.root, mode === 'explore', wallDelta, byte.animate);
    memory.update(wallDelta);
  }

  function render(): void {
    if (mode === 'idle' || document.hidden || paused) return;
    const now = performance.now();
    const delta = lastFrame ? (now - lastFrame) / 1000 : 1 / 60;
    lastFrame = now;
    // Keep the cinematic duration independent of frame rate; lower fill cost on slow GPUs.
    const minimumRatio = Math.min(preferredRenderRatio(), software ? .65 : .85);
    slowFrames = delta > .05 ? slowFrames + 1 : 0;
    if (slowFrames > 120 && renderRatio > minimumRatio && elapsed > 3) {
      renderRatio = Math.max(minimumRatio, renderRatio - .15);
      renderer.setPixelRatio(renderRatio);
      composer.setPixelRatio(renderRatio);
      slowFrames = 0;
    }
    update(delta);
    composer.render();
    if (!paused) frame = requestAnimationFrame(render);
  }

  async function enter(source: DOMRect): Promise<void> {
    if (mode !== 'idle' && mode !== 'explore') return;
    keys.clear();
    cancelAnimationFrame(frame);
    resetJoystick();
    transitTime = 0;
    jumpHeight = jumpVelocity = 0;
    player.set(0, cableHeight(7) + .45, 7);
    yaw = .38;
    pitch = .32;
    orbitOffset();
    byte.core.color.copy(red);
    byte.core.emissive.copy(red);
    byte.light.color.copy(red);
    const start = environment.path.getPointAt(0);
    formationCamera.copy(start).addScaledVector(environment.path.getTangentAt(0), -3.5).add(new THREE.Vector3(0, .65, 0));
    layer.dataset.mode = 'forming';
    mode = 'forming';
    layer.querySelector<HTMLElement>('.world-bottom')!.inert = true;
    layer.querySelector<HTMLElement>('.mobile-controls')!.inert = true;
    layer.style.setProperty('--origin-x', `${source.x + source.width / 2}px`);
    layer.style.setProperty('--origin-y', `${source.y + source.height / 2}px`);
    layer.style.setProperty('--transit', '0%');
    const done = new Promise<void>(resolve => { formationResolve = resolve; });
    if (reduced.matches) {
      land();
    } else formationPose(0);
    // Replace the GPU warm-up view before exposing the canvas; start time at this pose.
    composer.render();
    layer.hidden = false;
    lastFrame = performance.now();
    frame = requestAnimationFrame(render);
    await done;
  }

  const movementKeys = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'];
  window.addEventListener('keydown', event => {
    if (paused || mode === 'idle' || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.code === 'Escape' && ['forming', 'transit', 'falling'].includes(mode)) { event.preventDefault(); land(); return; }
    if (mode !== 'explore' || !movementKeys.includes(event.code)) return;
    if (event.target instanceof Element && event.target.closest('button, a, input, textarea')) return;
    event.preventDefault();
    keys.add(event.code);
  });
  window.addEventListener('keyup', event => keys.delete(event.code));
  window.addEventListener('blur', () => { keys.clear(); resetJoystick(); drag.active = false; layer.classList.remove('is-orbiting'); });
  viewport.addEventListener('pointermove', event => {
    if (!drag.active || event.pointerId !== drag.id || mode !== 'explore') return;
    yaw -= (event.clientX - drag.x) * .005;
    pitch = THREE.MathUtils.clamp(pitch + (event.clientY - drag.y) * .004, .05, .95);
    drag.x = event.clientX;
    drag.y = event.clientY;
  });
  viewport.addEventListener('pointerdown', event => {
    renderer.domElement.focus({ preventScroll: true });
    if (mode !== 'explore' || event.button !== 0) return;
    drag.active = true; drag.id = event.pointerId; drag.x = event.clientX; drag.y = event.clientY;
    viewport.setPointerCapture(event.pointerId);
    layer.classList.add('is-orbiting');
  });
  for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) viewport.addEventListener(name, () => { drag.active = false; layer.classList.remove('is-orbiting'); });
  viewport.addEventListener('wheel', event => {
    if (mode !== 'explore') return;
    event.preventDefault();
    distance = THREE.MathUtils.clamp(distance + event.deltaY * .005, 4, 9);
  }, { passive: false });
  function moveJoystick(event: PointerEvent) {
    if (event.pointerId !== stick.id) return;
    const rect = joystick.getBoundingClientRect();
    const radius = rect.width * .3;
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const distance = Math.hypot(x, y);
    const scale = distance > radius ? radius / distance : 1;
    const magnitude = Math.max(0, (Math.min(distance / radius, 1) - .12) / .88);
    stick.x = distance ? x / distance * magnitude : 0;
    stick.z = distance ? y / distance * magnitude : 0;
    joystick.style.setProperty('--stick-x', `${x * scale}px`);
    joystick.style.setProperty('--stick-y', `${y * scale}px`);
  }
  joystick.addEventListener('pointerdown', event => {
    if (paused || mode !== 'explore' || stick.id !== -1 || event.button !== 0) return;
    event.preventDefault();
    stick.id = event.pointerId;
    joystick.setPointerCapture(event.pointerId);
    joystick.classList.add('is-active');
    moveJoystick(event);
  });
  joystick.addEventListener('pointermove', moveJoystick);
  for (const name of ['pointerup', 'pointercancel', 'lostpointercapture'] as const) joystick.addEventListener(name, event => {
    if (event.pointerId === stick.id) resetJoystick();
  });
  joystick.addEventListener('contextmenu', event => event.preventDefault());
  const jumpControl = layer.querySelector<HTMLButtonElement>('.jump-control')!;
  jumpControl.addEventListener('pointerdown', event => {
    if (paused || mode !== 'explore' || event.button !== 0) return;
    event.preventDefault();
    jumpControl.setPointerCapture(event.pointerId);
    keys.add('Space');
  });
  for (const name of ['pointerup', 'pointercancel', 'lostpointercapture'] as const) jumpControl.addEventListener(name, () => keys.delete('Space'));
  jumpControl.addEventListener('click', event => {
    if (event.detail === 0 && !paused && mode === 'explore' && jumpHeight === 0) jumpVelocity = 4;
  });
  layer.querySelector('.skip-transit')!.addEventListener('click', () => land());
  window.addEventListener('resize', () => {
    resetJoystick();
    keys.delete('Space');
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderRatio = Math.min(renderRatio, preferredRenderRatio());
    renderer.setPixelRatio(renderRatio);
    composer.setPixelRatio(renderRatio);
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
    distance = innerWidth < 700 ? 7.8 : 6.4;
    orbitOffset();
  });
  document.addEventListener('visibilitychange', () => {
    resetJoystick();
    keys.clear();
    cancelAnimationFrame(frame);
    if (!document.hidden && mode !== 'idle' && !paused) { lastFrame = 0; render(); }
  });
  reduced.addEventListener('change', () => {
    if (reduced.matches && ['forming', 'transit', 'falling'].includes(mode)) land();
  });
  camera.position.copy(formationCamera.copy(environment.path.getPointAt(0)).addScaledVector(environment.path.getTangentAt(0), -3.5).add(new THREE.Vector3(0, .65, 0)));
  camera.lookAt(environment.path.getPointAt(0));
  environment.update(0, true);
  atmosphere.update(0, reduced.matches);
  byte.root.position.copy(environment.path.getPointAt(0));
  await renderer.compileAsync(scene, camera);
  composer.render();
  // Warm the actual postprocessing targets at both ends before exposing the canvas.
  camera.position.copy(arrivalTarget).add(orbitOffset());
  camera.lookAt(arrivalTarget);
  composer.render();
  // Upload side-wall hardware and ceiling batches while the loader is still visible.
  for (const side of [-1, 1]) {
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
    camera.position.set(side * 3, 3, -9);
    camera.lookAt(side * 13, 9, -23);
    composer.render();
  }
  camera.position.copy(arrivalTarget).add(orbitOffset());
  camera.lookAt(arrivalTarget);
  composer.render();
  formationPose(0);
  composer.render();
  return {
    enter,
    setPaused(value) { externalPaused = value; if (value) memory.cancel(); applyPause(); },
  };
}
