import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { recoveryBlue } from './recovery-state';
import { box, glow } from './materials';

/** A local data packet, with a dark shell, luminous visor and a corrupted bit. */
export function createByte() {
  const root = new THREE.Group();
  const shell = new THREE.MeshStandardMaterial({ color: 0x171d23, metalness: .65, roughness: .4 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x56616a, metalness: .8, roughness: .38 });
  const copper = new THREE.MeshStandardMaterial({ color: 0xa77a49, metalness: .8, roughness: .4 });
  const body = new THREE.Mesh(new RoundedBoxGeometry(.85, .68, .65, 2, .045), shell);
  root.add(body);
  const core = glow(recoveryBlue, .85);
  const visor = new THREE.Mesh(new RoundedBoxGeometry(.7, .24, .045, 2, .015), new THREE.MeshStandardMaterial({ color: 0x030608, roughness: .32 }));
  visor.position.set(0, .025, .325);
  root.add(visor);
  for (let i = 0; i < 8; i++) box(root, [.035, i % 3 === 0 ? .095 : .045, .018], [-.245 + i * .07, .03, .356], core);
  box(root, [.23, .018, .018], [-.14, -.23, .333], core);
  box(root, [.1, .018, .018], [.23, -.23, .333], trim);
  const breach = box(root, [.035, .36, .018], [.29, .1, .337], core);
  breach.rotation.z = -.24;
  box(root, [.16, .025, .22], [.2, .345, -.12], trim);
  for (const x of [-.37, .37]) {
    box(root, [.035, .58, .025], [x, 0, .328], trim);
    for (let i = 0; i < 5; i++) box(root, [.025, .05, .07], [x, -.22 + i * .11, -.325], copper);
  }
  for (let i = 0; i < 4; i++) box(root, [.26, .012, .04], [-.08, .343, -.2 + i * .1], trim);
  for (const x of [-.34, .34]) for (const y of [-.27, .27]) box(root, [.035, .035, .012], [x, y, .346], trim);
  for (const x of [-.26, .26]) box(root, [.15, .09, .3], [x, -.37, .04], shell);
  // Rear-facing corruption traces remain readable from the chase camera.
  for (const z of [-.337, .337]) {
    box(root, [.58, .19, .02], [0, .06, z], shell);
    for (let i = 0; i < 8; i++) box(root, [.035, .045 + (i % 3) * .025, .025], [-.245 + i * .07, .06, z * 1.04], core);
    const scar = box(root, [.025, .29, .025], [.27, .015, z * 1.04], core);
    scar.rotation.z = -.3;
    box(root, [.22, .018, .025], [-.12, -.22, z * 1.04], core);
  }
  for (const x of [-.431, .431]) {
    box(root, [.018, .022, .4], [x, .1, 0], core);
    for (let i = 0; i < 3; i++) box(root, [.018, .08, .025], [x, .06, -.14 + i * .14], core);
  }
  const treadMaterial = new THREE.MeshStandardMaterial({ color: 0x303a43, metalness: .65, roughness: .55 });
  const treads = new THREE.InstancedMesh(new THREE.BoxGeometry(.2, .025, .045), treadMaterial, 28);
  treads.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  treads.frustumCulled = false;
  root.add(treads);
  const treadPose = new THREE.Object3D();
  for (const x of [-.29, .29]) {
    const track = new THREE.Mesh(new RoundedBoxGeometry(.19, .14, .52, 2, .055), shell);
    track.position.set(x, -.345, 0);
    root.add(track);
  }
  let travel = 0;
  function animate(distance: number) {
    travel += distance;
    for (let i = 0; i < 28; i++) {
      const angle = (i % 14 / 14 + travel / 1.15) * Math.PI * 2;
      treadPose.position.set(i < 14 ? -.29 : .29, -.345 + Math.cos(angle) * .056, Math.sin(angle) * .225);
      treadPose.rotation.x = -Math.atan2(.056 * Math.sin(angle), .225 * Math.cos(angle));
      treadPose.updateMatrix();
      treads.setMatrixAt(i, treadPose.matrix);
    }
    treads.instanceMatrix.needsUpdate = true;
  }
  animate(0);
  const light = new THREE.PointLight(recoveryBlue, .65, 3, 2);
  light.position.set(0, .35, .7);
  root.add(light);
  // Batch the shell, traces and contacts by material; only the tread belt moves.
  const batches = new Map<THREE.Material, THREE.BufferGeometry[]>();
  for (const child of [...root.children]) {
    if (!(child instanceof THREE.Mesh) || child instanceof THREE.InstancedMesh || Array.isArray(child.material)) continue;
    child.updateMatrix();
    const geometry = (child.geometry.index ? child.geometry.toNonIndexed() : child.geometry.clone()).applyMatrix4(child.matrix);
    const list = batches.get(child.material) ?? [];
    list.push(geometry);
    batches.set(child.material, list);
    child.removeFromParent();
    child.geometry.dispose();
  }
  for (const [material, geometries] of batches) {
    const geometry = mergeGeometries(geometries, false);
    if (geometry) root.add(new THREE.Mesh(geometry, material));
    geometries.forEach(part => part.dispose());
  }
  return { root, core, light, animate };
}
