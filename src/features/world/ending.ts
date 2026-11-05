import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { box, glow } from './materials';
import { cableHeight } from './hardware';
import type { RecoveryState } from './recovery-state';
import './ending.css';
import { t, translateText } from '../../i18n';
import { createParticles } from '../loader/particles';

/** The isolated bus endpoint, and the uninterrupted second half of the boot. */
export function createEnding(scene: THREE.Scene, host: HTMLElement, layer: HTMLElement, state: RecoveryState,
  changeStage: (stage: 'start' | 'screen' | 'return') => void) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const metal = new THREE.MeshStandardMaterial({ color: 0x344553, metalness: .8, roughness: .3 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x101b25, metalness: .65, roughness: .4 });
  const signal = glow(0xe6a34e, .55);
  const housing = new THREE.MeshStandardMaterial({ color: 0xa0abb0, metalness: .18, roughness: .48 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xd6a449, metalness: .85, roughness: .27 });
  const root = new THREE.Group();
  root.position.set(0, cableHeight(-57.8) - .15, -57.8);
  scene.add(root);
  function batch(group: THREE.Group) {
    const materials = new Map<THREE.Material, THREE.Mesh[]>();
    for (const child of group.children) {
      if (!(child instanceof THREE.Mesh) || Array.isArray(child.material)) continue;
      const meshes = materials.get(child.material) || [];
      meshes.push(child); materials.set(child.material, meshes);
    }
    for (const [material, meshes] of materials) {
      const geometries = meshes.map(mesh => { mesh.updateMatrix(); return mesh.geometry.clone().applyMatrix4(mesh.matrix); });
      const merged = mergeGeometries(geometries);
      if (merged) {
        for (const mesh of meshes) { mesh.removeFromParent(); mesh.geometry.dispose(); }
        group.add(new THREE.Mesh(merged, material));
      }
      geometries.forEach(geometry => geometry.dispose());
    }
  }
  // Keystone socket: moulded cheeks, stepped latch cut-out and shielded throat.
  for (const side of [-1, 1]) {
    box(root, [.7, 4.6, 4], [side * 3.8, 2, -1.4], housing);
    box(root, [.12, 3.7, 3.7], [side * 3.42, 1.8, -1.5], metal);
    box(root, [2.35, .65, 4], [side * 2.65, 4.15, -1.4], housing);
    box(root, [.7, .38, 3.6], [side * 1.15, 4.03, -1.5], housing);
    box(root, [.34, .2, .06], [side * 3.78, .22, .64], signal);
    for (const y of [.7, 2.1, 3.3]) box(root, [.26, .48, 1.4], [side * 4.23, y, -1.3], metal);
    box(root, [.035, 2.7, 2.8], [side * 3.32, 1.8, -1.9], dark);
  }
  box(root, [8.3, .5, 4.2], [0, -.28, -1.4], housing);
  box(root, [1.65, .22, 4], [0, 4.6, -1.4], housing);
  box(root, [6.6, .18, 3.8], [0, -.01, -1.4], dark);
  const voidMaterial = new THREE.MeshBasicMaterial({ color: 0x010204 });
  box(root, [6.6, 4.7, .18], [0, 2.1, -3.75], voidMaterial);
  box(root, [6.6, .15, 2.9], [0, 3.75, -1.9], dark);
  const contacts = Array.from({ length: 8 }, (_, i) => {
    const x = (i - 3.5) * .72;
    const pin = box(root, [.18, .1, 2.9], [x, .14, -1.8], gold);
    pin.rotation.x = -.12;
    box(root, [.18, .48, .12], [x, .45, -3.2], gold);
    const material = glow(0x76cfff, 0);
    material.color.setHex(0x193544);
    box(root, [.12, .035, 1.9], [x, .31, -2], material);
    return material;
  });
  // Recessed guide rails, shield fingers and socket ribs fade into an unlit throat.
  for (const side of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      const z = -.65 - i * .56;
      box(root, [.13, 2.65, .09], [side * 3.15, 1.75, z], metal);
      const finger = box(root, [.09, .64, .14], [side * 3.05, 2.5, z], gold);
      finger.rotation.z = side * .2;
      box(root, [.12, .12, .25], [side * 2.9, .42, z], dark);
    }
    box(root, [.16, .18, 3], [side * 2.9, .3, -1.8], metal);
  }
  // An opaque depth-gradient hides the back wall and its corners without extra lights.
  const depthCanvas = document.createElement('canvas'); depthCanvas.width = 8; depthCanvas.height = 256;
  const depthContext = depthCanvas.getContext('2d')!;
  const gradient = depthContext.createLinearGradient(0, 0, 0, 256);
  gradient.addColorStop(0, 'rgba(1,2,4,0)');
  gradient.addColorStop(.3, 'rgba(1,2,4,.3)');
  gradient.addColorStop(.7, 'rgba(1,2,4,.92)');
  gradient.addColorStop(1, 'rgba(1,2,4,1)');
  depthContext.fillStyle = gradient; depthContext.fillRect(0, 0, 8, 256);
  const depthTexture = new THREE.CanvasTexture(depthCanvas); depthTexture.colorSpace = THREE.SRGBColorSpace;
  const depthMaterial = new THREE.MeshBasicMaterial({ map: depthTexture, transparent: true, side: THREE.DoubleSide, depthWrite: false, toneMapped: false });
  for (const side of [-1, 1]) {
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(6.7, 3.7), depthMaterial);
    wall.rotation.x = side * Math.PI / 2;
    // UV depth runs towards the back on both floor and ceiling.
    if (side === -1) wall.geometry.rotateZ(Math.PI);
    wall.position.set(0, side === 1 ? .03 : 3.73, -1.8); root.add(wall);
    const cheek = new THREE.Mesh(new THREE.PlaneGeometry(3.7, 3.7), depthMaterial);
    cheek.rotation.y = side * Math.PI / 2;
    cheek.geometry.rotateZ(side * Math.PI / 2);
    cheek.position.set(side * 3.33, 1.85, -1.8); root.add(cheek);
  }
  // A single dust/isolation flap retracts into the upper socket housing.
  const flap = new THREE.Group(); flap.name = 'core-isolation-flap'; root.add(flap);
  box(flap, [6.6, 3.7, .2], [0, 1.8, -.25], metal);
  for (let i = 0; i < 7; i++) box(flap, [6.35, .045, .055], [0, .3 + i * .47, -.12], dark);
  box(flap, [1.3, .28, .12], [0, .36, -.06], dark);
  box(flap, [.65, .055, .04], [0, .36, .02], signal);
  const latch = new THREE.Group(); root.add(latch);
  box(latch, [.85, .24, .42], [0, .04, .02], metal);
  box(latch, [.3, .07, .04], [0, .18, .25], signal);
  batch(flap); batch(latch); batch(root);
  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const display = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 1.6), new THREE.MeshBasicMaterial({ map: texture }));
  display.position.set(0, 5, .3); root.add(display);
  let opened = state.complete ? 1 : 0;
  let openingTime = state.complete ? 8.5 : 0;
  let unlockTime = -100;
  let wasComplete = state.complete;
  function refresh() {
    if (state.complete && !wasComplete) { unlockTime = 0; openingTime = 0; }
    if (!state.complete) { openingTime = 0; opened = 0; }
    wasComplete = state.complete;
    ctx.fillStyle = '#061018'; ctx.fillRect(0, 0, 1024, 256);
    ctx.fillStyle = state.complete ? '#a7e4ff' : '#ff7964';
    ctx.font = '500 48px "IBM Plex Mono", monospace';
    ctx.fillText(t(state.complete ? 'coreLinkRestored' : 'coreIsolatedTitle'), 38, 76);
    ctx.font = '27px "IBM Plex Mono", monospace';
    ctx.fillText(t('coreData', { count: state.count }), 38, 134);
    ctx.fillStyle = '#87a6b8'; ctx.font = '22px "IBM Plex Mono", monospace';
    ctx.fillText(t(state.complete ? 'coreReady' : 'coreRestore'), 38, 193);
    texture.needsUpdate = true;
    signal.color.setHex(state.complete ? 0x76cfff : 0xe6a34e);
    signal.emissive.copy(signal.color);
    layer.dataset.core = state.complete ? 'ready' : 'isolated';
  }
  state.subscribe(refresh); refresh();
  window.addEventListener('languagechange', refresh);
  const pulse = new THREE.Group(); scene.add(pulse); pulse.visible = false;
  const pulseMaterial = new THREE.MeshBasicMaterial({ color: 0xa9eaff });
  for (const x of [-3, -1.5, 0, 1.5, 3]) box(pulse, [.07, .045, 1.3], [x, 0, 0], pulseMaterial);
  batch(pulse);
  const prompt = document.createElement('button'); prompt.className = 'core-interact'; prompt.type = 'button'; prompt.hidden = true;
  layer.append(prompt);
  const notice = document.createElement('p'); notice.className = 'core-notice'; notice.setAttribute('role', 'status'); layer.append(notice);
  const touchControls = matchMedia('(hover: none) and (pointer: coarse)');
  const dialog = document.createElement('dialog'); dialog.className = 'ending-dialog';
  dialog.setAttribute('aria-label', 'Restauración del sistema y créditos');
  dialog.innerHTML = `<div class="ending-veil"></div><button class="ending-skip" type="button">OMITIR TRANSICIÓN</button>
    <section class="ending-boot" hidden aria-labelledby="ending-title">
      <div class="console-meta"><span>SYS / RESUME_087</span><span>LOCAL CHANNEL / VERIFIED</span></div>
      <div class="title-block"><p class="eyebrow">PERSONAL PORTFOLIO / RECOVERED</p><h2 id="ending-title"><span class="title-line">HUGO /</span><span class="title-line">SOFTWARE DEVELOPER</span><span class="title-cursor" aria-hidden="true">_</span></h2></div>
      <div class="load-module"><div class="load-heading"><span class="phase">RESUMING PORTFOLIO DATA…</span><span class="percentage"><span data-percent>087</span><span class="percentage-sign">%</span></span></div><div class="progress-track" role="progressbar" aria-label="Carga del portfolio restaurado" aria-valuemin="0" aria-valuemax="100" aria-valuenow="87"><div class="progress-fill"></div><div class="progress-grid" aria-hidden="true"></div></div></div>
      <div class="event-log"><p class="log-line">› Recovery verified / 20 packets restored</p><p class="log-line" data-boot-status role="status">› Resuming interrupted session…</p></div>
    </section>
    <section class="ending-signature" hidden aria-labelledby="ending-signature-title"><p class="eyebrow">END OF THE DATA BUS / SYSTEM RESTORED</p><span class="ending-heart" aria-hidden="true">♡</span><h2 id="ending-signature-title" tabindex="-1">Made with love<br>by <span>Hugo.</span></h2><p>Gracias por llegar hasta el final.</p><div class="ending-links"><button type="button" data-return>← VOLVER AL MUNDO</button><a href="#archivo/proyectos" data-archive>VER ARCHIVO ↗</a></div><small>20 / 20 PACKETS · CONNECTION COMPLETE</small></section>
    <p class="sr-only" role="status" data-announcement></p>`;
  host.append(dialog);
  const cursorParticles = document.createElement('canvas');
  cursorParticles.className = 'ending-cursor-particles';
  cursorParticles.setAttribute('aria-hidden', 'true');
  dialog.append(cursorParticles);
  dialog.dataset.state = 'entered';
  createParticles(cursorParticles, dialog, { cursorOnly: true });
  const boot = dialog.querySelector<HTMLElement>('.ending-boot')!;
  const signature = dialog.querySelector<HTMLElement>('.ending-signature')!;
  const skip = dialog.querySelector<HTMLButtonElement>('.ending-skip')!;
  const veil = dialog.querySelector<HTMLElement>('.ending-veil')!;
  let phase: 'idle' | 'travel' | 'loading' | 'signature' | 'leaving' = 'idle';
  let time = 0;
  let nearby = false;
  let noticeUntil = 0;
  let run = 0;
  const from = new THREE.Vector3();
  const cameraFrom = new THREE.Vector3();
  const look = new THREE.Vector3();
  const destination = new THREE.Vector3(0, cableHeight(-60.4) + .48, -60.4);
  const follow = new THREE.Vector3();
  const lookOffset = new THREE.Vector3();
  const smooth = (t: number) => t * t * (3 - 2 * t);
  function use() {
    if (!nearby || phase !== 'idle') return;
    if (!state.complete) {
      notice.textContent = `CORE AISLADO / Recupera todos los paquetes para restablecer el enlace (${state.count}/20).`;
      noticeUntil = performance.now() + 4500;
      return;
    }
    if (opened < .99) {
      notice.textContent = 'ENLACE VERIFICADO / Liberando el seguro del conector…';
      noticeUntil = performance.now() + 2500;
      return;
    }
    phase = 'travel'; time = 0; prompt.hidden = true; notice.textContent = '';
    layer.dataset.ending = 'true'; host.dataset.ending = 'true';
    // The first cinematic frame captures the real player and camera.
    captured = false;
    boot.hidden = signature.hidden = true; skip.hidden = false;
    veil.style.opacity = '0';
    dialog.showModal(); skip.focus({ preventScroll: true });
    dialog.querySelector('[data-announcement]')!.textContent = 'Enlace restablecido. Reanudando el sistema.';
    changeStage('start');
  }
  let captured = false;
  const wait = (ms: number) => new Promise<void>(resolve => window.setTimeout(resolve, ms));
  async function load() {
    if (phase !== 'travel') return;
    phase = 'loading'; const token = ++run;
    dialog.dataset.state = 'restored';
    changeStage('screen');
    skip.hidden = true; veil.style.opacity = '1'; boot.hidden = false;
    dialog.style.setProperty('--progress', '87%');
    dialog.querySelector('[data-percent]')!.textContent = '087';
    dialog.querySelector('.progress-track')!.setAttribute('aria-valuenow', '87');
    dialog.querySelector('.phase')!.textContent = 'RESUMING PORTFOLIO DATA…';
    dialog.querySelector('[data-boot-status]')!.textContent = '› Resuming interrupted session…';
    boot.classList.remove('is-finished');
    dialog.classList.remove('is-revealing-signature');
    for (let value = 88; value <= 100; value++) {
      await wait(reduced.matches ? 45 : 180);
      if (token !== run) return;
      dialog.style.setProperty('--progress', `${value}%`);
      dialog.querySelector('[data-percent]')!.textContent = String(value).padStart(3, '0');
      dialog.querySelector('.progress-track')!.setAttribute('aria-valuenow', String(value));
    }
    dialog.querySelector('.phase')!.textContent = 'SYSTEM RESTORED';
    dialog.querySelector('[data-boot-status]')!.textContent = '› Todos los registros recuperados. Conexión completada.';
    dialog.querySelector('[data-announcement]')!.textContent = 'Carga completada al cien por cien. Sistema restaurado.';
    await wait(reduced.matches ? 350 : 1200);
    boot.classList.add('is-finished');
    if (!reduced.matches) {
      const fade = boot.animate([
        { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
        { opacity: 0, transform: 'translateY(-10px)', filter: 'blur(3px)' },
      ], { duration: 1100, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' });
      await fade.finished;
      boot.hidden = true;
      fade.cancel();
      await wait(120);
    } else boot.hidden = true;
    if (token !== run) return;
    signature.hidden = false;
    dialog.classList.add('is-revealing-signature');
    phase = 'signature';
    signature.querySelector<HTMLElement>('h2')!.focus({ preventScroll: true });
  }
  async function leave(archive = false) {
    if (phase !== 'signature') return;
    run++; phase = 'leaving';
    // Fade the whole signature, including any staggered child animations.
    if (!reduced.matches) {
      await fadeOut(signature, 500);
      signature.hidden = true; signature.style.removeProperty('opacity');
    } else signature.hidden = true;
    delete layer.dataset.ending; delete host.dataset.ending;
    changeStage('return');
    if (archive) {
      location.hash = 'archivo/proyectos';
      // Keep the opaque modal above the router's own transition until ready.
      const deadline = performance.now() + 2500;
      while (host.dataset.view !== 'archivo' && performance.now() < deadline) await wait(16);
      await wait(reduced.matches ? 0 : 350);
    } else await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    if (!reduced.matches) {
      await fadeOut(dialog, 850);
      dialog.close(); dialog.style.removeProperty('opacity');
    } else dialog.close();
    phase = 'idle';
    dialog.dataset.state = 'entered';
    host.querySelector<HTMLElement>(archive ? '.reading-hero h1' : '.world-viewport canvas')?.focus({ preventScroll: true });
  }
  function fadeOut(element: HTMLElement, duration: number) {
    return new Promise<void>(resolve => {
      const start = performance.now();
      function tick() {
        const t = Math.min((performance.now() - start) / duration, 1);
        element.style.opacity = String(1 - smooth(t));
        if (t < 1) window.setTimeout(tick, 16); else resolve();
      }
      tick();
    });
  }
  prompt.addEventListener('click', use);
  skip.addEventListener('click', () => void load());
  dialog.querySelector('[data-return]')!.addEventListener('click', () => void leave());
  dialog.querySelector('[data-archive]')!.addEventListener('click', event => { event.preventDefault(); void leave(true); });
  dialog.addEventListener('cancel', event => { event.preventDefault(); if (phase === 'signature') void leave(); else if (phase === 'travel') void load(); });
  window.addEventListener('keydown', event => {
    if (event.code !== 'KeyE' || event.repeat || event.ctrlKey || event.metaKey || event.altKey || !nearby || host.dataset.view !== 'explorar' || dialog.open || host.querySelector('dialog[open]')) return;
    event.preventDefault(); use();
  });
  return {
    canOccupy(z: number) { return z > (state.complete && opened >= .99 ? -59.9 : -56.95); },
    update(player: THREE.Vector3, camera: THREE.PerspectiveCamera, byte: THREE.Group, active: boolean, delta: number, animate: (distance: number) => void) {
      if (state.complete) openingTime = Math.min(openingTime + delta, 8.5);
      // 3.8s signal travel, .6s latch release, then a deliberate four-second lift.
      const opening = THREE.MathUtils.clamp((openingTime - 4.4) / 4, 0, 1);
      opened = reduced.matches ? Number(state.complete) : smooth(opening);
      // Telescoping segments stack beneath the upper lip instead of crossing the display.
      flap.position.y = opened * 3.7;
      flap.scale.y = Math.max(.001, 1 - opened);
      flap.visible = opened < .999;
      flap.position.z = -opened * .65;
      latch.position.y = -.22 * (reduced.matches ? Number(state.complete) : THREE.MathUtils.clamp((openingTime - 3.8) / .6, 0, 1));
      contacts.forEach((material, i) => {
        const lit = state.complete && (reduced.matches || opened > .3 + i * .075);
        material.color.setHex(lit ? 0x76cfff : 0x193544);
        material.emissiveIntensity = lit ? .65 : 0;
      });
      layer.dataset.coreOpening = opened.toFixed(3);
      if (unlockTime >= 0 && unlockTime < 3.8 && !reduced.matches) {
        unlockTime += delta; pulse.visible = true;
        pulse.position.z = THREE.MathUtils.lerp(7, -60, Math.min(unlockTime / 3.8, 1));
        pulse.position.y = cableHeight(pulse.position.z) + .14;
      } else pulse.visible = false;
      nearby = active && player.z < -54.7 && phase === 'idle';
      prompt.hidden = !nearby;
      let promptText = translateText(state.complete ? opened < .99 ? 'LIBERANDO CONECTOR…' : '[E] REANUDAR EL SISTEMA' : `[E] EXAMINAR CORE · ${state.count}/20`);
      if (touchControls.matches) promptText = promptText.replace(/^\[E\]\s*/, '');
      if (prompt.textContent !== promptText) prompt.textContent = promptText;
      if (notice.textContent && performance.now() > noticeUntil) notice.textContent = '';
      if (phase !== 'travel') return;
      if (!captured) { from.copy(player); cameraFrom.copy(camera.position); captured = true; }
      time += delta;
      const t = reduced.matches ? 1 : Math.min(time / 4.2, 1);
      const oldZ = player.z;
      player.lerpVectors(from, destination, smooth(t));
      player.y = cableHeight(player.z) + .48;
      byte.position.copy(player); byte.rotation.set(0, Math.PI, 0);
      if (!reduced.matches) animate(Math.abs(player.z - oldZ));
      follow.set(player.x, player.y + 1.1, player.z + 4.5 - t * 4.8);
      camera.position.lerpVectors(cameraFrom, follow, smooth(Math.min(t * 2, 1)));
      look.copy(player).add(lookOffset.set(0, .35, -1.5 * t)); camera.lookAt(look);
      veil.style.opacity = String(smooth(THREE.MathUtils.clamp((t - .65) / .35, 0, 1)));
      if (t === 1) void load();
    },
  };
}
