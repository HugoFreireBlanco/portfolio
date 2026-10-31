import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { box, glow, label, palette } from './materials';
import { addHardware, cableHeight } from './hardware';
import { createTraffic } from './traffic';
import type { RecoveryState } from './recovery-state';

export interface Environment {
  path: THREE.CatmullRomCurve3;
  packets: THREE.InstancedMesh;
  fault: THREE.MeshStandardMaterial;
  update: (time: number, reduced: boolean, player?: THREE.Vector3, yaw?: number) => void;
  canOccupy: (x: number, z: number, yaw?: number) => boolean;
  recover: (x: number, z: number, height: number, yaw?: number) => string[];
}

/** Procedural motherboard kit: no external models or video downloads. */
export function buildEnvironment(scene: THREE.Scene, mobile: boolean, recovery: RecoveryState): Environment {
  const dark = new THREE.MeshStandardMaterial({ color: 0x1d2b3b, metalness: .65, roughness: .35 });
  const silicon = new THREE.MeshStandardMaterial({ color: 0x192733, metalness: .45, roughness: .45 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x455465, metalness: .8, roughness: .28 });
  const cyan = glow(palette.cyan, .35);
  const violet = glow(palette.violet, .3);
  const fault = glow(palette.red, .5);

  // Lower motherboard reflects the suspended bus and vertical components.
  const mirror = new Reflector(new THREE.PlaneGeometry(180, 180), { color: 0x253443, textureWidth: mobile ? 256 : 512, textureHeight: mobile ? 256 : 512, clipBias: .003 });
  mirror.rotation.x = -Math.PI / 2;
  mirror.position.set(0, -3.15, -22);
  scene.add(mirror);
  const grid = new THREE.GridHelper(150, 75, 0x1a3a4b, 0x0f202d);
  grid.position.set(0, -3.12, -25);
  scene.add(grid);

  addHardware(scene, mobile);
  for (let z = 4; z > -53; z -= 12) {
    box(scene, [17, .28, 2.8], [0, -1.7, z], dark);
    for (const x of [-8.4, 8.4]) box(scene, [.04, .04, 2.8], [x, -1.53, z], cyan);
    for (const x of [-3, 3]) box(scene, [.5, 2.7, .5], [x, -1.8, z], metal);
  }

  // Interactive RAM modules are built separately by memory.ts, with shared records.

  // CPU socket at the far end, framed by heatsink fins and activity rings.
  box(scene, [20, 2, 15], [0, -2.1, -56], dark);
  box(scene, [10, 4.5, 6], [0, 1.2, -59], metal);
  for (let i = 0; i < 19; i++) box(scene, [.24, 7, 6.8], [-5.4 + i * .6, 3.2, -59], silicon);
  box(scene, [12, .1, .1], [0, 6.6, -55.55], cyan);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(7.5, .035, 6, 100), violet);
  ring.position.set(0, 6, -61);
  scene.add(ring);

  // Chassis and rear cooling units make this an enclosed machine, not a skyline.
  box(scene, [76, 29, 1], [0, 10, -72], dark);
  for (const side of [-1, 1]) {
    box(scene, [1, 19, 89], [side * 36, 6, -26], dark);
    box(scene, [.4, .4, 89], [side * 35.4, 15.5, -26], metal);
    for (let z = 10; z > -68; z -= 13) box(scene, [.4, 18, .45], [side * 35.4, 6, z], metal);
    const fan = new THREE.Group();
    fan.position.set(side * 18, 8, -70.8);
    scene.add(fan);
    const frame = new THREE.Mesh(new THREE.TorusGeometry(4.8, .16, 8, 64), metal);
    fan.add(frame);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(4.55, .025, 5, 64), side === -1 ? fault : violet);
    fan.add(rim);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(.75, .75, .6, 20), silicon);
    hub.rotation.x = Math.PI / 2;
    fan.add(hub);
    for (let blade = 0; blade < 7; blade++) {
      const arm = new THREE.Group();
      arm.rotation.z = blade / 7 * Math.PI * 2;
      fan.add(arm);
      const fin = box(arm, [1.5, 3.2, .1], [0, 2.3, 0], dark);
      fin.rotation.z = .3;
    }
  }

  // Cylindrical capacitors, wire runs and PCB traces fill the lower board.
  const capacitorGeo = new THREE.CylinderGeometry(.65, .65, 2.4, 16);
  const capTop = new THREE.CylinderGeometry(.53, .53, .05, 16);
  for (let i = 0; i < 36; i++) {
    const x = (i % 2 ? -1 : 1) * (7 + ((i * 17) % 19));
    const z = 14 - ((i * 13) % 78);
    const cap = new THREE.Mesh(capacitorGeo, dark);
    cap.position.set(x, -1.9, z);
    scene.add(cap);
    const top = new THREE.Mesh(capTop, metal);
    top.position.set(x, -.68, z);
    scene.add(top);
    box(scene, [.09, 1.5, .05], [x, -1.8, z + .65], i % 9 === 0 ? fault : cyan);
    const trace = new THREE.CatmullRomCurve3([new THREE.Vector3(x, -3.06, z), new THREE.Vector3(x + 3, -3.06, z - 3), new THREE.Vector3(x + 3, -3.06, z - 9), new THREE.Vector3(x + 7, -3.06, z - 13)]);
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(trace, 8, .025, 3, false), i % 7 === 0 ? fault : cyan));
  }

  // Small stations establish the future portfolio geography, with honest labels.
  for (const [index, text] of ['01 / IDENTITY', '02 / PROJECTS', '03 / MEMORY'].entries()) {
    const sign = label(text, '#86b6c2', 4.6);
    sign.position.set(index % 2 ? 6.5 : -6.5, 1.8, 2 - index * 13);
    sign.rotation.y = index % 2 ? -.3 : .3;
    scene.add(sign);
    box(scene, [.1, 2.5, .1], [sign.position.x, .4, sign.position.z], metal);
  }

  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 19, 30), new THREE.Vector3(5, 16, 25), new THREE.Vector3(6, 11, 20),
    new THREE.Vector3(-2, 7, 16), new THREE.Vector3(-3, 4.4, 12), new THREE.Vector3(-1.3, 2.8, 9),
  ], false, 'catmullrom', .35);
  const tubeMat = new THREE.MeshStandardMaterial({ color: 0x142536, metalness: .7, roughness: .35 });
  const tangent = new THREE.Vector3();
  for (let i = 0; i <= 50; i++) {
    const t = i / 50;
    const point = path.getPointAt(t);
    tangent.copy(path.getTangentAt(t));
    const collar = new THREE.Mesh(new THREE.TorusGeometry(2.6, i % 5 === 0 ? .12 : .025, 5, 40), i % 9 === 0 ? fault : i % 3 === 0 ? cyan : tubeMat);
    collar.position.copy(point);
    collar.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
    scene.add(collar);
  }
  for (let lane = 0; lane < 7; lane++) {
    const angle = Math.PI * .12 + lane / 6 * Math.PI * .76;
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 80; i++) {
      const t = i / 80;
      const offset = new THREE.Vector3(Math.cos(angle) * 2.6, -Math.sin(angle) * 2.6, 0);
      offset.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), path.getTangentAt(t)));
      points.push(path.getPointAt(t).add(offset));
    }
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 140, lane % 2 === 0 ? .065 : .12, 5, false), lane % 2 === 0 ? cyan : tubeMat));
  }
  // Rails and character use the same local frame, including on steep bends.
  for (const x of [-.36, 0, .36]) {
    const points = Array.from({ length: 181 }, (_, i) => {
      const t = i / 180;
      const frame = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, -1), path.getTangentAt(t));
      return path.getPointAt(t).add(new THREE.Vector3(x, -.59, 0).applyQuaternion(frame));
    });
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 120, .14, 8, false), tubeMat));
  }
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(2.6, .1, 8, 64), metal);
  mouth.position.copy(path.getPointAt(1));
  mouth.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), path.getTangentAt(1));
  scene.add(mouth);
  // A recessed inlet housing gives the rails a physical origin, not cut ends.
  const inlet = new THREE.Group();
  inlet.position.copy(path.getPointAt(0));
  inlet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), path.getTangentAt(0));
  scene.add(inlet);
  for (const side of [-1, 1]) {
    box(inlet, [.55, 6.3, .5], [side * 2.95, 0, 1.2], dark);
    box(inlet, [5.4, .55, .5], [0, side * 2.95, 1.2], dark);
  }
  const intake = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.9, 1.3, 48, 1, true), tubeMat);
  intake.rotation.x = Math.PI / 2;
  intake.position.z = .6;
  inlet.add(intake);
  const inletLabel = label('I/O / PACKET INTAKE', '#86b6c2', 4);
  inletLabel.position.set(0, 2.85, .9);
  inlet.add(inletLabel);

  // Merge the repeated kit by material: hundreds of components, a handful of draws.
  scene.updateMatrixWorld(true);
  const batches = new Map<THREE.Material, THREE.BufferGeometry[]>();
  const originals: THREE.Mesh[] = [];
  scene.traverse(object => {
    if (!(object instanceof THREE.Mesh) || !(object.material instanceof THREE.MeshStandardMaterial)) return;
    const geometry = object.geometry.clone().applyMatrix4(object.matrixWorld);
    if (!geometry.index) geometry.setIndex(Array.from({ length: geometry.getAttribute('position').count }, (_, index) => index));
    if (!geometry.getAttribute('uv')) geometry.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(geometry.getAttribute('position').count * 2), 2));
    const list = batches.get(object.material) || [];
    list.push(geometry);
    batches.set(object.material, list);
    originals.push(object);
  });
  for (const mesh of originals) { mesh.removeFromParent(); mesh.geometry.dispose(); }
  for (const [material, geometries] of batches) {
    const combined = mergeGeometries(geometries, false);
    if (combined) scene.add(new THREE.Mesh(combined, material));
    geometries.forEach(geometry => geometry.dispose());
  }

  const packets = new THREE.InstancedMesh(new THREE.BoxGeometry(.12, .12, .34), glow(palette.cyan, .8), 65);
  packets.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(packets);
  const dummy = new THREE.Object3D();
  const updateTraffic = createTraffic(scene, recovery);
  return {
    path, packets, fault,
    canOccupy: (x, z, yaw) => updateTraffic.canOccupy(x, z, yaw),
    recover: (x, z, height, yaw) => updateTraffic.recover(x, z, height, yaw),
    update(time, reduced, player, yaw) {
      updateTraffic.update(time, reduced, player, yaw);
      fault.emissiveIntensity = reduced ? .5 : .4 + Math.pow(Math.sin(time * 2.3), 12) * .6;
      for (let i = 0; i < 65; i++) {
        if (i < 35) {
          const t = ((reduced ? 0 : time * .035) + i / 35) % 1;
          dummy.position.copy(path.getPointAt(t));
          dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), path.getTangentAt(t));
          // Reserve the central sled volume: packets run along the outer wall.
          const angle = i * 2.39996;
          dummy.position.add(new THREE.Vector3(Math.cos(angle) * 1.95, Math.sin(angle) * 1.95, 0).applyQuaternion(dummy.quaternion));
        } else {
          const z = 10 - (((reduced ? 0 : time * 3) + i * 3.1) % 64);
          dummy.position.set(i % 2 ? 3.1 : -3.1, cableHeight(z) + .08, z);
          dummy.rotation.set(0, 0, 0);
        }
        dummy.updateMatrix();
        packets.setMatrixAt(i, dummy.matrix);
      }
      packets.instanceMatrix.needsUpdate = true;
    },
  };
}
