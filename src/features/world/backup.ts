import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { box, label } from './materials';
import { unlockArchive } from '../portfolio/archive-access';
import type { RecoveryState } from './recovery-state';
import { busSupport } from './hardware';
import './backup.css';

export function createBackup(scene: THREE.Scene, host: HTMLElement, layer: HTMLElement, state: RecoveryState,
  camera: THREE.PerspectiveCamera, onMode: (active: boolean) => void) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const cabinet = new THREE.Group();
  cabinet.name = 'legacy-tape-backup';
  // Fixed mounting beside the landing, clear of the slide, AUX and the first RAM.
  cabinet.position.set(-11.5, -2.5, 5);
  cabinet.rotation.y = Math.PI / 2;
  scene.add(cabinet);
  const body = new THREE.MeshStandardMaterial({ color: 0x263139, metalness: .65, roughness: .52 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x83929a, metalness: .85, roughness: .34 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x0c1216, metalness: .35, roughness: .55 });
  const worn = new THREE.MeshStandardMaterial({ color: 0x9d937b, metalness: .25, roughness: .8 });
  const tape = new THREE.MeshStandardMaterial({ color: 0x211914, metalness: .25, roughness: .48, side: THREE.DoubleSide });
  const orange = new THREE.MeshStandardMaterial({ color: 0xff7144, emissive: 0xff4d20, emissiveIntensity: 1.4, roughness: .3 });
  const signal = new THREE.MeshBasicMaterial({ color: 0x27333a, toneMapped: false });
  const terminalPosition = new THREE.Vector3(-4.35, busSupport(5, .3) + .34, 5);
  const terminal = new THREE.Group(); terminal.name = 'backup-access-terminal'; scene.add(terminal);
  const stemTop = terminalPosition.y - .12;
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(.12, .17, stemTop + 1.56, 12), metal);
  stem.position.set(terminalPosition.x, (stemTop - 1.56) / 2, terminalPosition.z); terminal.add(stem);
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(.29, .33, .1, 16), metal);
  foot.position.set(terminalPosition.x, -1.51, terminalPosition.z); terminal.add(foot);
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(.19, .19, .09, 12), body);
  collar.position.set(terminalPosition.x, stemTop - .08, terminalPosition.z); terminal.add(collar);
  const consoleHead = new THREE.Group(); consoleHead.position.copy(terminalPosition);
  consoleHead.rotation.set(-.35, Math.PI / 2 - .3, 0, 'YXZ'); terminal.add(consoleHead);
  const housing = new THREE.Mesh(new RoundedBoxGeometry(.72, .44, .3, 2, .065), body); consoleHead.add(housing);
  box(consoleHead, [.53, .22, .02], [0, .035, .16], dark);
  box(consoleHead, [.37, .025, .025], [0, -.13, .16], metal);
  const screenSignal = new THREE.MeshBasicMaterial({ color: 0x27333a, toneMapped: false });
  // Small tape-reel pictogram identifies this terminal without duplicating a RAM screen.
  for (const side of [-1, 1]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(.044, .058, 16), screenSignal);
    ring.position.set(side * .105, .055, .175); consoleHead.add(ring);
  }
  box(consoleHead, [.21, .013, .008], [0, .005, .175], screenSignal);
  const terminalIcon = new THREE.Group();
  const iconMaterial = new THREE.MeshBasicMaterial({ color: 0x8ecfe9, toneMapped: false });
  terminalIcon.add(new THREE.Mesh(new THREE.RingGeometry(.23, .27, 24), iconMaterial));
  const iconStroke = new THREE.Mesh(new THREE.BoxGeometry(.045, .19, .025), iconMaterial);
  iconStroke.position.y = .04;
  const iconDot = new THREE.Mesh(new THREE.BoxGeometry(.045, .045, .025), iconMaterial);
  iconDot.position.y = -.115;
  terminalIcon.add(iconStroke, iconDot);
  terminalIcon.position.copy(terminalPosition).add(new THREE.Vector3(0, .95, 0)); scene.add(terminalIcon);
  const fixed = new THREE.Group(); cabinet.add(fixed);
  const shell = new THREE.Mesh(new RoundedBoxGeometry(5.8, 7.2, 1.65, 2, .14), body);
  shell.position.y = 3.6; fixed.add(shell);
  box(fixed, [6.2, .24, 2.2], [0, .12, 0], metal);
  box(fixed, [5.35, 5.45, .12], [0, 4.05, .86], dark);
  box(fixed, [5.05, 3.65, .1], [0, 4.6, .95], body);
  for (const side of [-1, 1]) {
    box(fixed, [.16, 6.65, .15], [side * 2.64, 3.65, .94], metal);
    box(fixed, [.13, 1.05, .35], [side * 2.53, 3.1, 1.06], dark);
    for (const y of [.45, 2.1, 5.8, 6.85]) {
      const screw = new THREE.Mesh(new THREE.CylinderGeometry(.065, .065, .04, 8), metal);
      screw.rotation.x = Math.PI / 2; screw.position.set(side * 2.65, y, 1.04); fixed.add(screw);
      box(fixed, [.075, .012, .008], [side * 2.65, y, 1.065], dark);
    }
    for (let vent = 0; vent < 11; vent++) box(fixed, [.48, .055, .025], [side * 2, .65 + vent * .09, .852], dark);
    // Rubber isolation feet and mounting bolts ground the unit on the motherboard.
    box(fixed, [.75, .2, 1.5], [side * 2.1, -.08, 0], dark);
  }
  const reels: THREE.Group[] = [];
  for (const side of [-1, 1]) {
    const reel = new THREE.Group(); reel.position.set(side * 1.28, 5.08, 1.08); cabinet.add(reel); reels.push(reel);
    const winding = new THREE.Mesh(new THREE.CylinderGeometry(side < 0 ? .94 : .74, side < 0 ? .94 : .74, .24, 48), tape);
    winding.rotation.x = Math.PI / 2; reel.add(winding);
    for (const face of [-1, 1]) {
      const rim = new THREE.Mesh(new THREE.TorusGeometry(1.04, .045, 6, 48), metal);
      rim.position.z = face * .17; reel.add(rim);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(.26, .26, .07, 20), metal);
      hub.rotation.x = Math.PI / 2; hub.position.z = face * .18; reel.add(hub);
      for (let spoke = 0; spoke < 3; spoke++) {
        const arm = box(reel, [.14, .85, .035], [0, 0, face * .17], metal);
        const angle = spoke * Math.PI * 2 / 3;
        arm.position.x = Math.sin(angle) * .6; arm.position.y = Math.cos(angle) * .6;
        arm.rotation.z = -angle;
      }
      // Concentric edges reveal the layered magnetic tape rather than a solid disc.
      for (let ring = 0; ring < 5; ring++) {
        const groove = new THREE.Mesh(new THREE.TorusGeometry(.4 + ring * (side < 0 ? .1 : .075), .007, 3, 48), worn);
        groove.position.z = face * .125; reel.add(groove);
      }
    }
    const spindle = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, .48, 12), dark);
    spindle.rotation.x = Math.PI / 2; reel.add(spindle);
    const roller = new THREE.Mesh(new THREE.CylinderGeometry(.12, .12, .35, 16), metal);
    roller.rotation.x = Math.PI / 2; roller.position.set(side * 1.45, 3.45, 1.14); fixed.add(roller);
  }
  const route = [new THREE.Vector3(-2.18, 4.8, 1.12), new THREE.Vector3(-1.45, 3.45, 1.12), new THREE.Vector3(1.45, 3.45, 1.12), new THREE.Vector3(1.98, 4.72, 1.12)];
  for (let i = 1; i < route.length; i++) {
    const a = route[i - 1], b = route[i];
    const strip = box(fixed, [.075, a.distanceTo(b), .1], [0, 0, 0], tape);
    strip.position.copy(a).lerp(b, .5); strip.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
  }
  box(fixed, [1.3, .38, .38], [0, 3.45, 1.15], metal);
  box(fixed, [1.08, .13, .05], [0, 3.48, 1.36], dark);
  box(fixed, [1.18, .055, .2], [0, 3.36, 1.37], metal);
  box(fixed, [4.6, 1.1, .3], [0, 2.3, 1], metal);
  box(fixed, [2.65, .73, .04], [-.64, 2.3, 1.17], dark);
  const display = label('ÚLTIMO BACKUP', '#8ecfe9', 2.45, '');
  display.position.set(-.65, 2.33, 1.2); cabinet.add(display);
  box(fixed, [.62, .45, .15], [1.55, 2.3, 1.26], orange);
  box(fixed, [.3, .025, .02], [1.55, 2.3, 1.345], dark);
  box(fixed, [.09, .09, .04], [.91, 2.3, 1.2], signal);
  const title = label('ARCHIVO / BACKUP', '#b5c5ca', 4.1, '');
  title.position.set(0, 6.65, 1.12); cabinet.add(title);
  const plate = label('MAGNETIC STORAGE / REV. 01', '#baab8f', 3.1, '');
  plate.position.set(0, 1.02, .88); cabinet.add(plate);
  // A faded inventory sticker, barcode, scuffed corners and service markings.
  box(fixed, [1.15, .37, .02], [-1.6, 1.5, .88], worn);
  for (let i = 0; i < 22; i++) box(fixed, [.013 + (i % 3) * .008, .24, .008], [-2.1 + i * .045, 1.5, .895], dark);
  for (let i = 0; i < 15; i++) {
    const mark = box(fixed, [.08 + i % 4 * .045, .012, .009], [-2.4 + (i * .73) % 4.8, .35 + (i * 1.37) % 6.4, .837], metal);
    mark.rotation.z = -.3 + i % 3 * .23;
  }
  for (let i = 0; i < 5; i++) box(fixed, [.035, .1, .035], [.95 + i * .12, 1.48, .87], orange);
  // The static enclosure is batched by material; only the two reels move.
  cabinet.updateMatrixWorld(true);
  for (const material of [body, metal, dark, worn, tape, orange, signal]) {
    const geometries: THREE.BufferGeometry[] = [];
    const inverse = new THREE.Matrix4().copy(cabinet.matrixWorld).invert();
    fixed.traverse(object => {
      if (object instanceof THREE.Mesh && object.material === material) {
        const geometry = object.geometry.index ? object.geometry.toNonIndexed() : object.geometry.clone();
        geometries.push(geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, object.matrixWorld)));
      }
    });
    if (geometries.length) {
      const merged = mergeGeometries(geometries);
      if (merged) cabinet.add(new THREE.Mesh(merged, material));
      geometries.forEach(geometry => geometry.dispose());
    }
  }
  fixed.traverse(object => { if (object instanceof THREE.Mesh) object.geometry.dispose(); });
  fixed.removeFromParent();
  for (const reel of reels) {
    const parts = [...reel.children] as THREE.Mesh[];
    for (const material of [metal, dark, tape, worn]) {
      const geometries = parts.filter(part => part.material === material).map(part => {
        part.updateMatrix();
        return (part.geometry.index ? part.geometry.toNonIndexed() : part.geometry.clone()).applyMatrix4(part.matrix);
      });
      if (geometries.length) {
        const merged = mergeGeometries(geometries);
        if (merged) reel.add(new THREE.Mesh(merged, material));
        geometries.forEach(geometry => geometry.dispose());
      }
    }
    parts.forEach(part => { part.geometry.dispose(); part.removeFromParent(); });
  }

  const ribbonGeometry = new THREE.PlaneGeometry(1, 1, 1, 48);
  const ribbonDetail = { value: 1 };
  const ribbonMaterial = new THREE.MeshBasicMaterial({ color: 0x071019, side: THREE.DoubleSide, toneMapped: false, fog: false, transparent: true, depthWrite: false });
  ribbonMaterial.onBeforeCompile = shader => {
    shader.uniforms.tapeDetail = ribbonDetail;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vTapeUv;')
      .replace('#include <uv_vertex>', '#include <uv_vertex>\nvTapeUv = uv;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vTapeUv;\nuniform float tapeDetail;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        // One large film frame across the strip, with simple sprocket holes.
        float frameY = fract(vTapeUv.y * 7.0);
        float frame = step(0.16, vTapeUv.x) * (1.0 - step(0.84, vTapeUv.x))
          * step(0.055, frameY) * (1.0 - step(0.945, frameY));
        float edgeX = min(vTapeUv.x, 1.0 - vTapeUv.x);
        float holeY = fract(vTapeUv.y * 28.0);
        float hole = step(0.035, edgeX) * (1.0 - step(0.105, edgeX))
          * step(0.22, holeY) * (1.0 - step(0.78, holeY));
        diffuseColor.rgb += tapeDetail * frame * vec3(0.018, 0.033, 0.046);
        diffuseColor.a *= mix(1.0, mix(0.97, 0.84, frame) * (1.0 - hole), tapeDetail);
      `);
  };
  const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial); ribbon.visible = false; ribbon.frustumCulled = false; cabinet.add(ribbon);
  const consolePanel = document.createElement('section');
  consolePanel.hidden = true;
  consolePanel.className = 'backup-console';
  consolePanel.setAttribute('aria-labelledby', 'backup-title');
  consolePanel.innerHTML = '<p class="backup-code">TAPE DRIVE / LOCAL ARCHIVE_01</p><h2 id="backup-title">Última copia disponible.</h2><p>Consulta el portfolio en modo texto. El progreso del bus quedará guardado.</p><div class="backup-console-actions"><button type="button" data-cancel>VOLVER AL BUS</button></div><p class="backup-status" role="status" aria-live="polite"></p>';
  host.append(consolePanel);
  const loadButton = document.createElement('button'); loadButton.type = 'button'; loadButton.className = 'backup-physical-button';
  loadButton.setAttribute('aria-label', 'CARGAR ÚLTIMA COPIA ↗'); loadButton.title = 'CARGAR ÚLTIMA COPIA ↗'; loadButton.hidden = true;
  host.append(loadButton);
  const curtain = document.createElement('div'); curtain.className = 'backup-tape-curtain'; curtain.setAttribute('aria-hidden', 'true'); document.body.append(curtain);
  let active = false, loading = false, time = 0, tapeTime = 0, viewingDistance = 7.5;
  let finishTape: (() => void) | undefined;
  const savedPosition = new THREE.Vector3(), savedQuaternion = new THREE.Quaternion();
  const destination = new THREE.Vector3(), look = new THREE.Vector3();
  const destinationQuaternion = new THREE.Quaternion();
  let phase: 'idle' | 'enter' | 'browse' | 'return' = 'idle';
  let savedNear = camera.near, startNear = camera.near, destinationNear = camera.near;
  const startPosition = new THREE.Vector3(), startQuaternion = new THREE.Quaternion();
  const projected = new THREE.Vector3();
  function close() {
    if (loading || !active || phase === 'return') return;
    consolePanel.hidden = true; loadButton.hidden = true;
    phase = 'return'; time = 0;
    startPosition.copy(camera.position); startQuaternion.copy(camera.quaternion); startNear = camera.near;
    destination.copy(savedPosition); destinationQuaternion.copy(savedQuaternion); destinationNear = savedNear;
  }
  consolePanel.querySelector('[data-cancel]')!.addEventListener('click', close);
  window.addEventListener('keydown', event => { if (event.key === 'Escape' && active) { event.preventDefault(); close(); } });
  async function load() {
    if (loading || phase !== 'browse') return;
    loading = true; tapeTime = 0; ribbonDetail.value = 1;
    consolePanel.querySelectorAll('button').forEach(button => { button.disabled = true; });
    loadButton.hidden = true;
    consolePanel.querySelector('.backup-status')!.textContent = 'Leyendo cinta…';
    if (!reduced.matches) await new Promise<void>(resolve => { finishTape = resolve; });
    consolePanel.hidden = true;
    curtain.classList.add('is-active');
    // The 3D ribbon already fills the view. This uniform handoff only holds
    // the covered frame while the route changes; it never grows over the scene.
    const cover = curtain.animate([{ opacity: 0 }, { opacity: 1 }],
      { duration: reduced.matches ? 160 : 120, fill: 'forwards' });
    await cover.finished;
    unlockArchive();
    location.hash = 'inicio';
    // Keep the tape opaque while the portfolio's own route transition completes.
    await new Promise(resolve => setTimeout(resolve, 400));
    active = false; phase = 'idle'; ribbon.visible = false;
    camera.near = savedNear; camera.updateProjectionMatrix();
    camera.position.copy(savedPosition); camera.quaternion.copy(savedQuaternion); onMode(false);
    cover.cancel();
    const reveal = curtain.animate([{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(0)', opacity: 0 }], { duration: reduced.matches ? 120 : 550, fill: 'forwards' });
    await reveal.finished;
    curtain.classList.remove('is-active'); host.classList.remove('is-backup-covering'); reveal.cancel(); loading = false;
    consolePanel.querySelectorAll('button').forEach(button => { button.disabled = false; });
    consolePanel.querySelector('.backup-status')!.textContent = '';
  }
  loadButton.addEventListener('click', () => { void load(); });
  return {
    isNearby: (player: THREE.Vector3) => state.accessUnlocked && player.distanceTo(terminalPosition) < 2.4,
    open() {
      if (active || !state.accessUnlocked) return;
      active = true; time = 0; phase = 'enter';
      savedPosition.copy(camera.position); savedQuaternion.copy(camera.quaternion);
      startPosition.copy(camera.position); startQuaternion.copy(camera.quaternion);
      savedNear = startNear = camera.near;
      cabinet.updateMatrixWorld(true);
      viewingDistance = Math.max(7.5, 3.3 / (Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect) + 1);
      destination.copy(cabinet.localToWorld(new THREE.Vector3(0, 3.8, viewingDistance)));
      look.copy(cabinet.localToWorld(new THREE.Vector3(0, 3.8, 1)));
      destinationNear = viewingDistance - 1.65;
      const cameraProbe = new THREE.PerspectiveCamera(); cameraProbe.position.copy(destination); cameraProbe.lookAt(look);
      destinationQuaternion.copy(cameraProbe.quaternion);
      onMode(true);
      consolePanel.hidden = true;
    },
    update(delta: number) {
      signal.color.setHex(state.accessUnlocked ? 0x8ecfe9 : 0x27333a);
      screenSignal.color.copy(signal.color);
      terminalIcon.visible = !active && state.accessUnlocked;
      terminalIcon.quaternion.copy(camera.quaternion);
      terminalIcon.position.y = terminalPosition.y + .95 + (reduced.matches ? 0 : Math.sin(performance.now() * .0025) * .06);
      layer.dataset.backup = active ? loading ? 'reading' : 'console' : state.accessUnlocked ? 'ready' : 'locked';
      if (!active) return;
      if (phase === 'enter' || phase === 'return') {
        time += delta;
        const t = reduced.matches ? 1 : Math.min(time / 1.7, 1);
        const eased = t * t * (3 - 2 * t);
        camera.position.lerpVectors(startPosition, destination, eased);
        camera.quaternion.slerpQuaternions(startQuaternion, destinationQuaternion, eased);
        camera.near = THREE.MathUtils.lerp(startNear, destinationNear, eased); camera.updateProjectionMatrix();
        if (t === 1) {
          if (phase === 'return') { active = false; phase = 'idle'; onMode(false); return; }
          phase = 'browse'; consolePanel.hidden = false; loadButton.hidden = false;
          loadButton.focus({ preventScroll: true });
        }
      } else {
        camera.position.copy(destination); camera.quaternion.copy(destinationQuaternion);
      }
      camera.updateMatrixWorld();
      projected.copy(cabinet.localToWorld(new THREE.Vector3(1.55, 2.3, 1.35))).project(camera);
      loadButton.style.left = `${(projected.x + 1) * innerWidth / 2}px`;
      loadButton.style.top = `${(1 - projected.y) * innerHeight / 2}px`;
      orange.emissiveIntensity = state.accessUnlocked ? reduced.matches ? 1.4 : 1.3 + Math.sin(performance.now() * .003) * .3 : .2;
      if (!loading || reduced.matches) return;
      tapeTime += delta;
      // Release the reader's foreground clipping gradually as the tape leaves the unit.
      const release = Math.min(1, tapeTime / 1.2);
      camera.near = THREE.MathUtils.lerp(destinationNear, .035, release * release * (3 - 2 * release));
      camera.updateProjectionMatrix();
      reels.forEach((reel, i) => { reel.rotation.z -= delta * (i ? 1.8 : 1.3); });
      ribbon.visible = true;
      const positions = ribbonGeometry.attributes.position;
      const raw = Math.min(1, tapeTime / 6.2);
      const extension = raw * raw * (3 - 2 * raw);
      ribbonDetail.value = 1 - THREE.MathUtils.smoothstep(extension, .68, .89);
      const unfold = THREE.MathUtils.smoothstep(extension, .45, 1);
      if (extension > .65) {
        consolePanel.hidden = true;
        host.classList.add('is-backup-covering');
      }
      // Make the parabola tangent to a line just inside the upper view edge.
      // This keeps its crest visible rather than letting perspective cut it off.
      const roofSlope = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
        * (.84 + .7 * THREE.MathUtils.smoothstep(extension, .65, .86));
      const fall = 4 * (.32 + roofSlope * (viewingDistance - 1.4));
      const rise = fall - roofSlope * (viewingDistance - .6);
      for (let row = 0; row <= 48; row++) {
        const t = row / 48;
        const travel = t * extension;
        const z = 1.4 + travel * (viewingDistance - .6);
        const width = .8 + 44 * unfold * travel * travel;
        // Crest just below the cabinet top, then fall forwards past the lens.
        // The unfolding ribbon itself spans the frustum before navigation.
        const y = 3.48 + rise * travel - fall * travel * travel;
        const bank = Math.sin(travel * Math.PI / 2) * .025;
        for (let side = 0; side < 2; side++) {
          const x = (side ? 1 : -1) * width / 2;
          positions.setXYZ(row * 2 + side, x, y + x * bank, z);
        }
      }
      positions.needsUpdate = true; ribbonGeometry.computeVertexNormals();
      if (raw >= .8 && finishTape) {
        const finish = finishTape; finishTape = undefined;
        // Let the fully covered geometry render before handing off the route.
        requestAnimationFrame(() => requestAnimationFrame(finish));
      }
    },
  };
}
