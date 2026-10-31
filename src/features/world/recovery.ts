import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createByte } from './byte';
import { busSupport } from './hardware';
import { label } from './materials';
import { corruptRed, recoveryBlue, recoveryPackets, recoveryZones, type RecoveryState } from './recovery-state';
import './recovery.css';
import { translateText } from '../../i18n';

export function createRecovery(scene: THREE.Scene, layer: HTMLElement, host: HTMLElement, state: RecoveryState, pause: (value: boolean) => void, openMemory: (index: number) => void) {
  const hud = document.createElement('div');
  hud.className = 'recovery-hud';
  hud.innerHTML = `<div class="recovery-meter"><span>RECOVERY PROCESS</span><strong></strong><small></small></div><button class="recovery-interact" type="button" hidden></button><p class="recovery-toast" role="status" aria-live="polite"></p><p class="recovery-direction" aria-live="polite"></p>`;
  layer.append(hud);
  const pdaAccess = document.createElement('button');
  pdaAccess.className = 'pda-access';
  pdaAccess.type = 'button';
  pdaAccess.hidden = !state.hasPda;
  pdaAccess.innerHTML = 'PDA <kbd>Q</kbd>';
  pdaAccess.setAttribute('aria-label', 'Abrir PDA');
  const acquiredNotice = document.createElement('div');
  acquiredNotice.className = 'pda-acquired';
  acquiredNotice.setAttribute('role', 'status');
  acquiredNotice.setAttribute('aria-live', 'polite');
  hud.append(pdaAccess, acquiredNotice);
  let acquisitionPending = false;
  let noticeTimer: number | undefined;
  let pdaPage: 'summary' | 'objectives' = 'summary';
  function finishClose() {
    modal.close(); pause(false);
    if (acquisitionPending) {
      acquisitionPending = false;
      acquiredNotice.innerHTML = '<strong>PDA OBTENIDA</strong><span class="pda-keyboard-notice">Pulsa <kbd>Q</kbd> para volver a abrirla.</span><span class="pda-touch-notice">Toca el botón PDA para volver a abrirla.</span>';
      acquiredNotice.classList.add('is-visible');
      window.clearTimeout(noticeTimer);
      noticeTimer = window.setTimeout(() => acquiredNotice.classList.remove('is-visible'), 6500);
    }
  }
  const modal = document.createElement('dialog');
  modal.className = 'recovery-dialog';
  modal.setAttribute('aria-labelledby', 'recovery-dialog-title');
  host.append(modal);
  const npc = createByte();
  npc.light.removeFromParent();
  npc.root.position.set(-2.85, busSupport(7.4, .4) + .42, 7.4);
  npc.root.rotation.set(.09, .4, -.15);
  npc.root.scale.setScalar(.8);
  npc.core.emissiveIntensity = .22;
  scene.add(npc.root);
  const guideIcon = new THREE.Group();
  const iconMaterial = new THREE.MeshBasicMaterial({ color: recoveryBlue, toneMapped: false });
  const iconFrame = new THREE.Mesh(new THREE.RingGeometry(.23, .27, 24), iconMaterial);
  const iconStroke = new THREE.Mesh(new THREE.BoxGeometry(.045, .19, .025), iconMaterial);
  iconStroke.position.y = .04;
  const iconDot = new THREE.Mesh(new THREE.BoxGeometry(.045, .045, .025), iconMaterial);
  iconDot.position.y = -.115;
  guideIcon.add(iconFrame, iconStroke, iconDot);
  guideIcon.position.copy(npc.root.position).add(new THREE.Vector3(0, .9, 0));
  scene.add(guideIcon);
  const repairMetal = new THREE.MeshStandardMaterial({ color: 0x566574, metalness: .65, roughness: .5 });
  const patch = new THREE.Mesh(new THREE.BoxGeometry(.24, .025, .22), repairMetal);
  patch.position.set(-.12, .355, .02); patch.rotation.y = -.2; npc.root.add(patch);
  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(.016, .016, .28, 5), repairMetal);
  antenna.position.set(.28, .44, -.08); antenna.rotation.z = -.4; npc.root.add(antenna);
  const antennaTip = new THREE.Mesh(new THREE.SphereGeometry(.035, 6, 4), iconMaterial);
  antennaTip.position.set(.335, .57, -.08); npc.root.add(antennaTip);
  // A drooping pair of indicators gives AUX an expressive damaged face.
  const face = new THREE.Mesh(new THREE.BoxGeometry(.76, .42, .025), new THREE.MeshStandardMaterial({ color: 0x09121b, roughness: .8 }));
  face.position.set(0, 0, .38); npc.root.add(face);
  const expressionParts: THREE.BufferGeometry[] = [];
  for (const side of [-1, 1]) {
    expressionParts.push(new THREE.BoxGeometry(.12, .025, .025).rotateZ(side * -.25).translate(side * .17, .08, .404));
    expressionParts.push(new THREE.BoxGeometry(.09, .018, .025).rotateZ(side * -.35).translate(side * .04, -.105, .404));
  }
  const expression = mergeGeometries(expressionParts);
  const expressionMaterial = new THREE.MeshBasicMaterial({ color: recoveryBlue });
  const sadFace = expression ? new THREE.Mesh(expression, expressionMaterial) : undefined;
  if (sadFace) npc.root.add(sadFace);
  expressionParts.forEach(geometry => geometry.dispose());
  const happyParts: THREE.BufferGeometry[] = [];
  for (const side of [-1, 1]) {
    for (const half of [-1, 1]) {
      happyParts.push(new THREE.BoxGeometry(.075, .028, .025).rotateZ(half * -.65).translate(side * .17 + half * .025, .09, .404));
    }
    happyParts.push(new THREE.BoxGeometry(.085, .024, .025).rotateZ(side * .55).translate(side * .075, -.105, .404));
    happyParts.push(new THREE.BoxGeometry(.055, .024, .025).rotateZ(side * 1.05).translate(side * .13, -.058, .404));
  }
  happyParts.push(new THREE.BoxGeometry(.09, .024, .025).translate(0, -.125, .404));
  const happyGeometry = mergeGeometries(happyParts);
  const happyFace = new THREE.Mesh(happyGeometry!, expressionMaterial);
  happyFace.name = 'aux-happy-face'; npc.root.add(happyFace);
  happyParts.forEach(geometry => geometry.dispose());
  const terminals = new THREE.InstancedMesh(new THREE.BoxGeometry(.6, .65, .45), new THREE.MeshStandardMaterial({ color: 0x27353e, metalness: .6, roughness: .5 }), recoveryZones.length);
  const screens = new THREE.InstancedMesh(new THREE.BoxGeometry(.46, .08, .47), new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), recoveryZones.length);
  const traces = new THREE.InstancedMesh(new THREE.BoxGeometry(.035, .035, 4.5), new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), recoveryZones.length);
  const brackets = new THREE.InstancedMesh(new THREE.BoxGeometry(1.15, .12, .7), new THREE.MeshStandardMaterial({ color: 0x3a4853, metalness: .7, roughness: .5 }), recoveryZones.length);
  scene.add(terminals, screens, traces, brackets);
  const pose = new THREE.Object3D();
  const color = new THREE.Color();
  const terminalPositions = recoveryZones.map(zone => new THREE.Vector3(Math.sign(zone.x) * 3.9, busSupport((zone.start + zone.end) / 2, .3) + .34, (zone.start + zone.end) / 2));
  const labels = recoveryZones.map((zone, i) => {
    pose.position.copy(terminalPositions[i]); pose.updateMatrix(); terminals.setMatrixAt(i, pose.matrix);
    pose.position.x = Math.sign(zone.x) * 3.6; pose.position.y -= .38; pose.updateMatrix(); brackets.setMatrixAt(i, pose.matrix);
    pose.position.copy(terminalPositions[i]);
    pose.position.y += .19; pose.updateMatrix(); screens.setMatrixAt(i, pose.matrix);
    pose.position.y -= .48; pose.position.x = Math.sign(zone.x) * 3.45; pose.updateMatrix(); traces.setMatrixAt(i, pose.matrix);
    const mesh = label(`${zone.code} / ${zone.title.toUpperCase()}`, '#9aacbb', 2.2);
    mesh.position.copy(terminalPositions[i]).add(new THREE.Vector3(0, 1.2, 0)); scene.add(mesh); return mesh;
  });
  const terminalIcons = terminalPositions.map((position, index) => {
    const icon = new THREE.Group();
    icon.name = `terminal-ready-${recoveryZones[index].code}`;
    icon.add(iconFrame.clone(), iconStroke.clone(), iconDot.clone());
    icon.scale.setScalar(.65);
    icon.position.copy(position).add(new THREE.Vector3(0, 1.85, 0));
    icon.visible = false;
    scene.add(icon);
    return icon;
  });
  const marker = new THREE.Mesh(new THREE.TorusGeometry(.65, .025, 4, 24), new THREE.MeshBasicMaterial({ color: recoveryBlue, toneMapped: false }));
  marker.rotation.x = Math.PI / 2; marker.visible = false; scene.add(marker);
  let tracked = -1;
  let nearby = -2;
  let exploring = false;
  let toastUntil = 0;
  let lastToast = '';
  let previousCount = state.count;
  let completed = recoveryZones.map((zone, i) => state.zoneCount(i) === zone.count);
  const interact = hud.querySelector<HTMLButtonElement>('.recovery-interact')!;
  const meter = hud.querySelector<HTMLElement>('.recovery-meter strong')!;
  const nearestText = hud.querySelector<HTMLElement>('.recovery-meter small')!;
  const direction = hud.querySelector<HTMLElement>('.recovery-direction')!;
  const toast = hud.querySelector<HTMLElement>('.recovery-toast')!;
  function setText(element: HTMLElement, text: string) { const translated = translateText(text); if (element.textContent !== translated) element.textContent = translated; }
  function notify(text: string) { lastToast = text; toastUntil = performance.now() + 5500; toast.textContent = text; toast.classList.add('is-visible'); }
  function refresh() {
    if (sadFace) sadFace.visible = !state.complete;
    happyFace.visible = state.complete;
    pdaAccess.hidden = !state.hasPda;
    if (!state.hasPda) { acquisitionPending = false; acquiredNotice.classList.remove('is-visible'); pdaPage = 'summary'; }
    meter.textContent = !state.hasPda ? 'HABLA CON AUX' : state.complete ? 'SISTEMA ESTABLE · 20/20' : `RECUPERACIÓN ${String(state.count).padStart(2, '0')} / 20`;
    if (!state.hasPda) setText(nearestText, 'ACÉRCATE AL ROBOT CON EL SÍMBOLO !');
    layer.dataset.recovered = String(state.count);
    layer.dataset.stable = String(state.complete);
    recoveryZones.forEach((zone, i) => {
      color.setHex(state.zoneCount(i) === zone.count ? recoveryBlue : corruptRed);
      screens.setColorAt(i, color); traces.setColorAt(i, color);
    });
    screens.instanceColor!.needsUpdate = traces.instanceColor!.needsUpdate = true;
    if (state.count < previousCount) {
      completed = recoveryZones.map(() => false); notify('NUEVA RECUPERACIÓN / Habla con AUX junto a la entrada.');
    } else if (state.count > previousCount) {
      const newly = recoveryZones.findIndex((zone, i) => !completed[i] && state.zoneCount(i) === zone.count);
      if (state.complete) notify('SYSTEM STABLE / CORE DESBLOQUEADO · Reanuda el sistema al final del bus.');
      else if (newly >= 0) notify(`MEMORIA RESTAURADA / ${recoveryZones[newly].title.toUpperCase()} · Examina los chips desde su terminal.`);
      completed = recoveryZones.map((zone, i) => state.zoneCount(i) === zone.count);
    }
    previousCount = state.count;
  }
  state.subscribe(refresh); refresh();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let closing: Animation | undefined;
  function close() {
    if (!modal.open || closing) return;
    if (reducedMotion.matches) { finishClose(); return; }
    closing = modal.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(8px)' }], { duration: 160, easing: 'ease-in', fill: 'forwards' });
    void closing.finished.then(() => {
      closing?.cancel(); closing = undefined; finishClose();
    }).catch(() => {});
  }
  function show(html: string) {
    const alreadyOpen = modal.open;
    closing?.cancel(); closing = undefined;
    modal.innerHTML = `<div class="recovery-dialog-bar"><span><i></i> AUX / COMM LINK <small>ENCRYPTED · LOCAL</small></span><button type="button" data-close aria-label="Cerrar conversación">CERRAR <kbd>ESC</kbd> ×</button></div><div class="pda-body"><div class="pda-identity"><svg class="aux-portrait" viewBox="0 0 64 64" aria-hidden="true"><path class="aux-shell" d="M12 23 29 15l23 8v26L34 57 12 48Z M12 23l22 8 18-8 M34 31v26"/><path d="m43 19 3-10-6-4 M19 35l7 2 M39 39l7-3 M22 45l5-2 4 4 M16 52v5m6-3v5m19-3v5m6-8v5"/><circle cx="40" cy="5" r="2"/><path class="aux-patch" d="m22 22 8-4 9 4-8 4Z"/></svg><div><strong>AUX<span>_</span></strong><small>MAINTENANCE UNIT / CONNECTED</small></div><span class="pda-signal" aria-hidden="true">▂▄▆</span></div><div class="pda-content">${html}</div><div class="pda-footer" aria-hidden="true"><span>RECOVERY OS / HANDHELD TERMINAL</span><span>LINK ESTABLISHED ●</span></div></div>`;
    modal.querySelector('[data-close]')!.addEventListener('click', close);
    pause(true);
    if (!modal.open) modal.showModal();
    else modal.querySelector<HTMLButtonElement>('[data-close]')!.focus({ preventScroll: true });
    modal.scrollTop = 0;
    if (!reducedMotion.matches) {
      const content = modal.querySelector<HTMLElement>('.pda-content')!;
      if (alreadyOpen) content.animate([{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 240, easing: 'ease-out' });
      else [...content.children].forEach((element, index) => element.animate([
        { opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 420, delay: 220 + Math.min(index * 65, 325), easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }));
    }
  }
  function talk() {
    const complete = state.complete;
    pdaPage = 'summary';
    if (!state.hasPda) { state.greet(); acquisitionPending = true; }
    show(`<p class="recovery-file">AUX / PAQUETE DE MANTENIMIENTO</p><h2 id="recovery-dialog-title">${complete ? 'Lo has conseguido.' : state.count ? 'La señal está volviendo.' : 'Todavía queda un proceso limpio.'}</h2><p>${complete ? 'Has recuperado los veinte paquetes y reconstruido todos los registros. La alarma se ha detenido. El hardware sigue dañado, pero la información está a salvo. Gracias por volver.' : state.count ? `Llevas ${state.count} de 20 paquetes recuperados. Los grupos circulan cerca de sus terminales. Abre los objetivos para localizar los que faltan.` : 'El ataque ha corrompido los paquetes que transportan los registros de Hugo. Soy AUX; mi oruga está averiada y no puedo ir a buscarlos.'}</p>${complete ? '' : '<p>Acércate a un paquete rojo hasta tocar su carcasa: tu señal lo reparará y sus indicadores pasarán a azul. Cada grupo reconstruye un registro distinto.</p><p>No tienes que perseguirlos por todo el ordenador: cada grupo circula en su propia zona. Los primeros paquetes de Identidad están justo delante.</p>'}<div class="recovery-actions"><button data-understood>ENTENDIDO</button><button data-objectives>VER OBJETIVOS</button><a href="#archivo/proyectos" data-read>PREFIERO LEER EL ARCHIVO ↗</a></div>`);
    modal.querySelector('[data-understood]')?.remove();
    if (complete) {
      const next = document.createElement('p');
      next.textContent = 'El CORE al final del bus ya está desbloqueado. Acércate a su conector y reanuda el sistema para completar la carga que quedó interrumpida.';
      modal.querySelector('.recovery-actions')!.before(next);
    }
    modal.querySelector('[data-objectives]')!.addEventListener('click', objectives);
    modal.querySelector('[data-read]')!.addEventListener('click', close);
  }
  function objectives() {
    pdaPage = 'objectives';
    show(`<p class="recovery-file">RECONSTRUIR PETICIÓN / ARCHIVO DE HUGO</p><h2 id="recovery-dialog-title">Recupera la información.</h2><p>Repara los paquetes rojos por contacto. Cada grupo devuelve un registro al sistema. Puedes leer el portfolio directamente en Archivo cuando quieras.</p><div class="recovery-objectives">${recoveryZones.map((zone, i) => `<button data-track="${i}" data-restored="${state.zoneCount(i) === zone.count}"><span>${zone.code} / ${zone.title}</span><strong>${state.zoneCount(i)} / ${zone.count}</strong><small>${state.zoneCount(i) === zone.count ? 'RESTAURADO · LOCALIZAR TERMINAL' : 'PENDIENTE · LOCALIZAR PAQUETES'} ↗</small></button>`).join('')}</div><div class="pda-objective-actions"><button class="reset-recovery" data-reset>REINICIAR RECUPERACIÓN</button></div>`);
    const summary = document.createElement('button');
    summary.type = 'button';
    summary.className = 'pda-summary';
    summary.textContent = '← RESUMEN';
    summary.addEventListener('click', talk);
    modal.querySelector('.pda-objective-actions')!.prepend(summary);
    modal.querySelectorAll<HTMLButtonElement>('[data-track]').forEach(button => button.addEventListener('click', () => {
      tracked = Number(button.dataset.track); close(); notify(`OBJETIVO / ${recoveryZones[tracked].title.toUpperCase()}`);
    }));
    modal.querySelector('[data-reset]')!.addEventListener('click', () => {
      show('<p class="recovery-file">NUEVA PARTIDA</p><h2 id="recovery-dialog-title">¿Reiniciar la recuperación?</h2><p>Los veinte paquetes volverán a estar corruptos y se borrará el progreso guardado. El contenido del Archivo seguirá disponible.</p><div class="recovery-actions"><button data-confirm>REINICIAR</button><button data-cancel>CONSERVAR PARTIDA</button></div>');
      modal.querySelector('[data-confirm]')!.addEventListener('click', () => { state.reset(); tracked = -1; close(); });
      modal.querySelector('[data-cancel]')!.addEventListener('click', objectives);
    });
  }
  function use() {
    if (!exploring || modal.open) return;
    if (nearby === -1) talk();
    else if (nearby >= 0) {
      const zone = recoveryZones[nearby];
      if (state.zoneCount(nearby) === zone.count) openMemory(nearby);
      else {
        tracked = nearby;
        notify(`${zone.title.toUpperCase()} / ${state.zoneCount(nearby)} de ${zone.count} · Repara los paquetes rojos de esta zona.`);
      }
    }
  }
  interact.addEventListener('click', use);
  function openPda() {
    if (!exploring || modal.open || !state.hasPda) return;
    if (pdaPage === 'objectives') objectives(); else talk();
  }
  pdaAccess.addEventListener('click', openPda);
  modal.addEventListener('cancel', event => { event.preventDefault(); close(); });
  window.addEventListener('keydown', event => {
    if (host.dataset.view !== 'explorar' || !exploring || modal.open || event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.code === 'KeyE') { event.preventDefault(); use(); }
    if (event.code === 'KeyQ' && state.hasPda) { event.preventDefault(); openPda(); }
  });
  return {
    canOccupy(x: number, z: number) { return Math.hypot(x - npc.root.position.x, z - npc.root.position.z) > .78; },
    rescued(ids: string[]) {
    if (ids.length && !(performance.now() < toastUntil && lastToast.startsWith('REGISTRO RESTAURADO')) && !state.complete) {
        const packet = recoveryPackets.find(p => p.id === ids[0])!;
        const zone = recoveryZones[packet.zoneIndex];
        notify(`PAQUETE RECUPERADO · ${packet.id} / ${zone.title.toUpperCase()} ${state.zoneCount(packet.zoneIndex)}/${zone.count}`);
      }
    },
    update(player: THREE.Vector3, camera: THREE.Camera, active: boolean, delta: number, reduced: boolean) {
      exploring = active;
      npc.root.rotation.z = THREE.MathUtils.lerp(npc.root.rotation.z, state.complete ? 0 : -.15, reduced ? 1 : 1 - Math.exp(-delta * 2));
      npc.root.rotation.x = THREE.MathUtils.lerp(npc.root.rotation.x, state.complete ? 0 : .09, reduced ? 1 : 1 - Math.exp(-delta * 2));
      antenna.rotation.z = state.complete ? 0 : -.4;
      antennaTip.position.x = state.complete ? .28 : .335;
      antennaTip.position.y = state.complete ? .6 : .57;
      npc.core.emissiveIntensity = state.complete ? .8 : .22;
      guideIcon.visible = active && player.distanceTo(npc.root.position) < 12;
      guideIcon.quaternion.copy(camera.quaternion);
      guideIcon.position.y = npc.root.position.y + .95 + (reduced || state.complete ? 0 : Math.sin(performance.now() * .0025) * .06);
      guideIcon.scale.setScalar(state.greeted ? .8 : 1);
      labels.forEach((mesh, i) => { mesh.visible = active && Math.abs(player.z - terminalPositions[i].z) < 8; mesh.quaternion.copy(camera.quaternion); });
      terminalIcons.forEach((icon, i) => {
        icon.visible = active && state.zoneCount(i) === recoveryZones[i].count;
        icon.quaternion.copy(camera.quaternion);
      });
      if (!active) return;
      nearby = player.distanceTo(npc.root.position) < 2.5 ? -1 : -2;
      if (nearby === -2) terminalPositions.forEach((p, i) => { if (player.distanceTo(p) < 2.4) nearby = i; });
      interact.hidden = nearby === -2;
      setText(interact, nearby === -1 ? '[E] HABLAR CON AUX' : nearby >= 0 ? `[E] ${state.zoneCount(nearby) === recoveryZones[nearby].count ? 'ABRIR' : 'EXAMINAR'} ${recoveryZones[nearby].title.toUpperCase()}` : '');
      const zoneIndex = recoveryZones.findIndex(zone => player.z <= zone.start + 1 && player.z >= zone.end - 1);
      setText(nearestText, !state.hasPda ? 'ACÉRCATE AL ROBOT CON EL SÍMBOLO !' : zoneIndex >= 0 ? `${recoveryZones[zoneIndex].title.toUpperCase()} ${state.zoneCount(zoneIndex)}/${recoveryZones[zoneIndex].count}` : 'BUS DE DATOS / REGISTROS EN RECUPERACIÓN');
      if (performance.now() > toastUntil) { toast.classList.remove('is-visible'); lastToast = ''; }
      marker.visible = tracked >= 0;
      if (tracked >= 0) {
        const destination = terminalPositions[tracked]; marker.position.copy(destination); marker.position.y -= .25;
        setText(direction, `${recoveryZones[tracked].title.toUpperCase()} · ${Math.round(Math.abs(player.z - destination.z))} u · ${player.z > destination.z + 2 ? 'HACIA EL FONDO DEL BUS ↓' : player.z < destination.z - 2 ? 'HACIA LA ENTRADA ↑' : 'ESTÁS EN LA ZONA · BUSCA LOS PAQUETES Y EL TERMINAL'}`);
      } else setText(direction, '');
    },
  };
}
