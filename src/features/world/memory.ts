import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { box, label } from './materials';
import { recoveryZones, type RecoveryState } from './recovery-state';
import { memoryRecords, memoryRecordMarkup, escapeContent } from '../portfolio/content';
import './memory.css';

export function createMemory(scene: THREE.Scene, host: HTMLElement, layer: HTMLElement, state: RecoveryState,
  camera: THREE.PerspectiveCamera, onMode: (active: boolean) => void, pause: (active: boolean) => void) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const shell = new THREE.MeshStandardMaterial({ color: 0x1b303d, metalness: .55, roughness: .4 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x516273, metalness: .8, roughness: .3 });
  const chip = new THREE.MeshStandardMaterial({ color: 0x101921, metalness: .45, roughness: .4 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xcda266, metalness: .7, roughness: .4 });
  const copper = new THREE.MeshStandardMaterial({ color: 0x527e80, metalness: .65, roughness: .45 });
  const indicatorsMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(.68, .04, .035), new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), recoveryZones.length * 12);
  indicatorsMesh.name = 'memory-chip-indicators'; scene.add(indicatorsMesh);
  const indicatorPose = new THREE.Object3D(); const indicatorColor = new THREE.Color();
  const staticGroup = new THREE.Group(); scene.add(staticGroup);
  const boards = recoveryZones.map((zone, index) => {
    const group = new THREE.Group();
    group.name = `memory-board-${zone.id}`;
    group.position.set(Math.sign(zone.x) * 11.5, -2.5, (zone.start + zone.end) / 2);
    group.rotation.y = Math.sign(zone.x) * -.2;
    staticGroup.add(group);
    box(group, [6.4, 7.6, .55], [0, 3.8, 0], shell);
    box(group, [6.8, .25, 1.15], [0, .1, 0], metal);
    box(group, [6.4, .07, .1], [0, 7.5, .32], metal);
    const restored = state.zoneCount(index) === zone.count;
    const title = label(`${zone.code} / ${zone.title.toUpperCase()}`, restored ? '#8ecfe9' : '#ff4935', 5.8);
    title.position.set(0, 6.6, .4); group.add(title);
    for (let pin = 0; pin < 18; pin++) box(group, [.15, .55, .12], [-2.9 + pin * .34, .55, .35], gold);
    // Fine routed traces and solder pads on both faces, including the visible backs.
    for (const face of [-1, 1]) {
      const surface = face * .286;
      for (let lane = 0; lane < 10; lane++) {
        const x = -2.85 + lane * .62;
        const bendY = 1.05 + (lane % 3) * .13;
        const endY = 2.05 + (lane % 4) * 1.12;
        const offset = (lane % 2 ? 1 : -1) * .2;
        box(group, [.018, bendY - .65, .012], [x, (.65 + bendY) / 2, surface], copper);
        box(group, [.22, .018, .012], [x + offset / 2, bendY, surface], copper);
        box(group, [.018, endY - bendY, .012], [x + offset, (endY + bendY) / 2, surface], copper);
        box(group, [.065, .065, .018], [x + offset, endY, surface], gold);
      }
      for (const side of [-1, 1]) {
        box(group, [.025, 6.7, .015], [side * 3.02, 3.9, surface], copper);
        for (const y of [1.2, 2.85, 4.4, 5.8, 7.2]) {
          box(group, [.12, .12, .035], [side * 3.02, y, surface], metal);
          box(group, [.052, .052, .042], [side * 3.02, y, surface + face * .018], chip);
        }
      }
      for (let part = 0; part < 8; part++) {
        const x = -2.65 + part * .75;
        box(group, [.23, .12, .08], [x, 1.05, face * .33], chip);
        for (const side of [-1, 1]) box(group, [.045, .13, .085], [x + side * .12, 1.05, face * .33], metal);
      }
    }
    // The back carries a controller, surface-mount components and a compact heat spreader.
    box(group, [1.25, 1.25, .16], [.65, 4.2, -.35], chip);
    for (let pin = 0; pin < 7; pin++) for (const side of [-1, 1]) {
      box(group, [.07, .075, .06], [.65 + side * .68, 3.7 + pin * .16, -.34], metal);
      box(group, [.075, .07, .06], [.15 + pin * .16, 4.2 + side * .68, -.34], metal);
    }
    for (let fin = 0; fin < 6; fin++) box(group, [.12, 1.5, .18], [-2.2 + fin * .23, 4.25, -.39], metal);
    for (let part = 0; part < 6; part++) {
      const x = .1 + part % 3 * .63;
      const y = 2.15 + Math.floor(part / 3) * .47;
      box(group, [.35, .18, .13], [x, y, -.34], gold);
      for (const side of [-1, 1]) box(group, [.06, .2, .14], [x + side * .18, y, -.35], metal);
    }
    // Small capacitor clusters sit behind each socket, outside the playable bus.
    for (let cap = 0; cap < 3; cap++) {
      const x = -2 + cap * 1.2;
      const height = .6 + cap % 2 * .25;
      const body = new THREE.Mesh(new THREE.CylinderGeometry(.22, .22, height, 10), chip);
      body.position.set(x, height / 2 + .18, -1); group.add(body);
      const lid = new THREE.Mesh(new THREE.CylinderGeometry(.2, .2, .035, 10), metal);
      lid.position.set(x, height + .2, -1); group.add(lid);
      box(group, [.27, .012, .02], [x, height + .22, -1], chip);
      box(group, [.02, .012, .27], [x, height + .22, -1], chip);
      for (const side of [-1, 1]) box(group, [.035, .2, .035], [x + side * .11, .13, -1], gold);
    }
    const indicators = Array.from({ length: 12 }, (_, slot) => {
      const x = -2.19 + slot % 4 * 1.46;
      const y = 5.2 - Math.floor(slot / 4) * 1.55;
      box(group, [1.08, 1.05, .2], [x, y, .39], chip);
      for (const side of [-1, 1]) for (let pin = 0; pin < 4; pin++) box(group, [.09, .055, .12], [x + side * .58, y - .3 + pin * .2, .4], metal);
      return { instance: index * 12 + slot, local: new THREE.Vector3(x, y, .55), world: new THREE.Vector3(), color: -1 };
    });
    return { group, title, titleRestored: restored, indicators, restoredAt: restored ? -100 : Infinity };
  });
  // Static board components share draws; moving UI indicators retain basic materials.
  staticGroup.updateMatrixWorld(true);
  boards.forEach(board => board.indicators.forEach(indicator => {
    board.group.localToWorld(indicator.world.copy(indicator.local));
    indicatorPose.position.copy(indicator.local); indicatorPose.position.y -= .27; indicatorPose.position.z = .51;
    indicatorPose.updateMatrix();
    indicatorsMesh.setMatrixAt(indicator.instance, new THREE.Matrix4().multiplyMatrices(board.group.matrixWorld, indicatorPose.matrix));
    indicatorsMesh.setColorAt(indicator.instance, indicatorColor.setHex(0xff4935));
  }));
  const batches = new Map<THREE.Material, THREE.BufferGeometry[]>();
  const originals: THREE.Mesh[] = [];
  staticGroup.traverse(object => {
    if (!(object instanceof THREE.Mesh) || !(object.material instanceof THREE.MeshStandardMaterial)) return;
    const list = batches.get(object.material) || [];
    list.push(object.geometry.clone().applyMatrix4(object.matrixWorld)); batches.set(object.material, list); originals.push(object);
  });
  originals.forEach(mesh => { mesh.removeFromParent(); mesh.geometry.dispose(); });
  for (const [material, geometries] of batches) {
    const geometry = mergeGeometries(geometries);
    if (geometry) scene.add(new THREE.Mesh(geometry, material));
    geometries.forEach(part => part.dispose());
  }
  const panel = document.createElement('section'); panel.className = 'memory-explorer'; panel.hidden = true;
  panel.setAttribute('aria-label', 'Explorador de memoria');
  panel.innerHTML = '<header><div><small>MEMORY / READ ONLY</small><h2 tabindex="-1"></h2><p><span class="memory-pointer-hint">Selecciona un registro azul.</span><span class="memory-touch-hint">Toca para abrir. Mantén pulsado para ver la etiqueta.</span></p></div><button type="button" data-back>← VOLVER AL BUS <kbd>ESC</kbd></button></header><div class="memory-chip-targets"></div><p class="memory-selection" aria-live="polite"></p>';
  host.append(panel);
  const targets = panel.querySelector<HTMLElement>('.memory-chip-targets')!;
  const modal = document.createElement('dialog'); modal.className = 'recovery-dialog memory-dialog';
  modal.setAttribute('aria-label', 'Registro de memoria'); host.append(modal);
  let phase: 'idle' | 'enter' | 'browse' | 'return' = 'idle';
  let selected = -1;
  let clock = 0;
  let time = 0;
  let hovered = -1;
  let savedNear = camera.near;
  let startNear = camera.near;
  let destinationNear = camera.near;
  const savedPosition = new THREE.Vector3(); const savedRotation = new THREE.Quaternion();
  const startPosition = new THREE.Vector3(); const startRotation = new THREE.Quaternion();
  const destination = new THREE.Vector3(); const destinationRotation = new THREE.Quaternion();
  const probe = new THREE.PerspectiveCamera(); const projected = new THREE.Vector3();
  function frameBoard() {
    const board = boards[selected];
    const center = board.group.localToWorld(new THREE.Vector3(0, 3.8, .4));
    const fit = Math.max(8.8, 7.4 / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect));
    // The reader scans the board plane: foreground hardware cannot cover its chips.
    destinationNear = fit - .9;
    destination.copy(board.group.localToWorld(new THREE.Vector3(0, 3.8, fit + .4)));
    probe.position.copy(destination); probe.lookAt(center); destinationRotation.copy(probe.quaternion);
  }
  function focusChip(slot: number) {
    hovered = slot;
    targets.querySelectorAll<HTMLButtonElement>('button').forEach(button => button.classList.toggle('is-active', Number(button.dataset.chip) === slot));
    panel.querySelector('.memory-selection')!.textContent = slot < 0 ? '' : memoryRecords[recoveryZones[selected].id][slot].title;
  }
  let keyboardRecord = false;
  let cancelTouchPreview = () => {};
  function closeRecord() {
    if (!modal.open) return;
    const slot = hovered;
    modal.close(); pause(false);
    if (keyboardRecord) targets.querySelector<HTMLButtonElement>(`[data-chip="${slot}"]`)?.focus({ preventScroll: true });
    else {
      panel.querySelector<HTMLElement>('h2')!.focus({ preventScroll: true });
      focusChip(-1);
    }
  }
  function showRecord(slot: number) {
    if (phase !== 'browse') return;
    const record = memoryRecords[recoveryZones[selected].id][slot];
    focusChip(slot);
    modal.innerHTML = `<div class="recovery-dialog-bar"><span>MEMORY / ${escapeContent(recoveryZones[selected].code)} / RECORD ${String(slot + 1).padStart(2, '0')}</span><button type="button" data-close>VOLVER A LA TARJETA ×</button></div><div class="pda-body"><div class="pda-content">${memoryRecordMarkup(record)}</div><div class="pda-footer"><span>RECOVERY OS / MEMORY READER</span><span>RECORD VERIFIED ●</span></div></div>`;
    modal.querySelector('[data-close]')!.addEventListener('click', closeRecord);
    pause(true); modal.showModal(); modal.scrollTop = 0;
  }
  function open(index: number) {
    if (phase !== 'idle' || state.zoneCount(index) !== recoveryZones[index].count) return;
    cancelTouchPreview();
    selected = index; phase = 'enter'; time = 0;
    hovered = -1; panel.querySelector('.memory-selection')!.textContent = '';
    savedPosition.copy(camera.position); savedRotation.copy(camera.quaternion);
    savedNear = startNear = camera.near;
    startPosition.copy(camera.position); startRotation.copy(camera.quaternion); frameBoard();
    panel.hidden = false; panel.dataset.phase = phase;
    panel.querySelector('h2')!.textContent = recoveryZones[index].title;
    targets.replaceChildren();
    memoryRecords[recoveryZones[index].id].forEach((record, slot) => {
      const button = document.createElement('button'); button.type = 'button'; button.dataset.chip = String(slot);
      button.setAttribute('aria-label', `${record.title}${record.demo ? ' · DEMO' : ''}`);
      button.innerHTML = `<span>${String(slot + 1).padStart(2, '0')}</span><small>${escapeContent(record.title)}</small>`;
      let holdTimer: number | undefined;
      let touchId: number | undefined;
      let originX = 0; let originY = 0;
      let suppressClick = false;
      const endPreview = () => {
        window.clearTimeout(holdTimer);
        touchId = undefined;
        if (hovered === slot) focusChip(-1);
      };
      button.addEventListener('click', event => {
        if (suppressClick && event.detail !== 0) { event.preventDefault(); suppressClick = false; return; }
        suppressClick = false;
        keyboardRecord = event.detail === 0; showRecord(slot);
      });
      button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') focusChip(slot); });
      button.addEventListener('pointerdown', event => {
        if (event.pointerType === 'mouse' || !event.isPrimary || phase !== 'browse') return;
        cancelTouchPreview();
        cancelTouchPreview = endPreview;
        suppressClick = false;
        touchId = event.pointerId; originX = event.clientX; originY = event.clientY;
        button.setPointerCapture(event.pointerId);
        holdTimer = window.setTimeout(() => {
          if (touchId === undefined || phase !== 'browse') return;
          suppressClick = true;
          focusChip(slot);
        }, 350);
      });
      button.addEventListener('pointermove', event => {
        if (event.pointerId === touchId && Math.hypot(event.clientX - originX, event.clientY - originY) > 12) {
          suppressClick = true; endPreview();
        }
      });
      for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) button.addEventListener(name, event => {
        if ((event as PointerEvent).pointerId === touchId) endPreview();
      });
      button.addEventListener('contextmenu', event => { if (touchId !== undefined || suppressClick) event.preventDefault(); });
      button.addEventListener('focus', () => { if (button.matches(':focus-visible')) focusChip(slot); });
      button.addEventListener('blur', () => { if (hovered === slot) focusChip(-1); });
      button.addEventListener('pointerleave', () => { if (hovered === slot) focusChip(-1); });
      targets.append(button);
    });
    onMode(true); layer.dataset.memory = 'true';
  }
  function finish() {
    cancelTouchPreview();
    phase = 'idle'; panel.hidden = true; delete layer.dataset.memory;
    camera.position.copy(savedPosition); camera.quaternion.copy(savedRotation); onMode(false);
    camera.near = savedNear; camera.updateProjectionMatrix();
  }
  function back() {
    cancelTouchPreview();
    if (modal.open) { closeRecord(); return; }
    if (phase !== 'browse' && phase !== 'enter') return;
    phase = 'return'; time = 0; panel.dataset.phase = phase;
    startPosition.copy(camera.position); startRotation.copy(camera.quaternion);
    startNear = camera.near; destinationNear = savedNear;
    destination.copy(savedPosition); destinationRotation.copy(savedRotation);
  }
  panel.querySelector('[data-back]')!.addEventListener('click', back);
  window.addEventListener('blur', () => cancelTouchPreview());
  document.addEventListener('visibilitychange', () => { if (document.hidden) cancelTouchPreview(); });
  modal.addEventListener('cancel', event => { event.preventDefault(); closeRecord(); });
  window.addEventListener('keydown', event => { if (event.key === 'Escape' && phase !== 'idle' && !modal.open) { event.preventDefault(); back(); } });
  window.addEventListener('resize', () => { if (phase === 'enter' || phase === 'browse') frameBoard(); });
  return {
    open,
    cancel() { if (phase !== 'idle') { closeRecord(); finish(); } },
    update(delta: number) {
      clock += delta;
      boards.forEach((board, index) => {
        const restored = state.zoneCount(index) === recoveryZones[index].count;
        if (board.titleRestored !== restored) {
          const replacement = label(`${recoveryZones[index].code} / ${recoveryZones[index].title.toUpperCase()}`, restored ? '#8ecfe9' : '#ff4935', 5.8);
          const material = board.title.material as THREE.MeshBasicMaterial;
          material.map?.dispose();
          material.map = (replacement.material as THREE.MeshBasicMaterial).map;
          material.needsUpdate = true;
          replacement.geometry.dispose();
          (replacement.material as THREE.MeshBasicMaterial).dispose();
          board.titleRestored = restored;
        }
        if (restored && board.restoredAt === Infinity) board.restoredAt = clock;
        if (!restored) board.restoredAt = Infinity;
        board.indicators.forEach((indicator, slot) => {
          const lit = restored && slot < memoryRecords[recoveryZones[index].id].length && (reduced.matches || clock - board.restoredAt >= slot * .15);
          const color = !restored ? 0xff4935 : lit ? selected === index && hovered === slot && phase !== 'idle' ? 0xc3efff : 0x49bbff : 0x14242f;
          if (indicator.color !== color) {
            indicator.color = color; indicatorsMesh.setColorAt(indicator.instance, indicatorColor.setHex(color));
            indicatorsMesh.instanceColor!.needsUpdate = true;
          }
        });
      });
      if (phase === 'idle') return;
      if (phase === 'enter' || phase === 'return') {
        time += delta; const t = reduced.matches ? 1 : Math.min(time / 1.7, 1); const ease = t * t * (3 - 2 * t);
        camera.position.lerpVectors(startPosition, destination, ease); camera.quaternion.slerpQuaternions(startRotation, destinationRotation, ease);
        camera.near = THREE.MathUtils.lerp(startNear, destinationNear, ease); camera.updateProjectionMatrix();
        if (t === 1) {
          if (phase === 'return') { finish(); return; }
          phase = 'browse'; panel.dataset.phase = phase;
          targets.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true });
        }
      } else { camera.position.copy(destination); camera.quaternion.copy(destinationRotation); camera.near = destinationNear; camera.updateProjectionMatrix(); }
      camera.updateMatrixWorld();
      targets.querySelectorAll<HTMLButtonElement>('button').forEach((button, slot) => {
        projected.copy(boards[selected].indicators[slot].world).project(camera);
        button.style.left = `${(projected.x + 1) * innerWidth / 2}px`;
        button.style.top = `${(1 - projected.y) * innerHeight / 2}px`;
      });
    },
  };
}
