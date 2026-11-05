import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { busSupport } from './hardware';
import { glow } from './materials';
import { corruptRed, recoveryBlue, recoveryPackets, recoveryZones, type RecoveryState } from './recovery-state';

/** Persistent packets on two capsule circuits; all repeated parts are instanced. */
export function createTraffic(scene: THREE.Scene, state: RecoveryState) {
  const count = recoveryPackets.length;
  const bodies = new THREE.InstancedMesh(new RoundedBoxGeometry(.55, .43, .43, 2, .025), new THREE.MeshStandardMaterial({ color: 0x24313c, metalness: .55, roughness: .46 }), count);
  // Basic material keeps instance colours luminous without a white emissive wash.
  const eyes = new THREE.InstancedMesh(new THREE.BoxGeometry(.13, .035, .025), new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), count * 4);
  const bits = new THREE.InstancedMesh(new THREE.BoxGeometry(.27, .015, .17), new THREE.MeshStandardMaterial({ color: 0x48545c, metalness: .8, roughness: .4 }), count);
  const contacts = new THREE.InstancedMesh(new THREE.BoxGeometry(.04, .06, .035), new THREE.MeshStandardMaterial({ color: 0x9f7849, metalness: .75, roughness: .4 }), count * 8);
  const pulses = new THREE.InstancedMesh(new THREE.TorusGeometry(.4, .025, 4, 20), glow(recoveryBlue, 1.8), count);
  const meshes = [bodies, eyes, bits, contacts, pulses];
  bodies.name = 'recovery-packet-bodies';
  eyes.name = 'recovery-packet-indicators';
  for (const mesh of meshes) {
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, -29), 40);
    mesh.userData.skipReflection = mesh !== bodies;
    scene.add(mesh);
  }
  const dummy = new THREE.Object3D();
  const position = new THREE.Vector3();
  const offset = new THREE.Vector3();
  const color = new THREE.Color();
  const positions = Array.from({ length: count }, () => new THREE.Vector3());
  const rotations = new Float64Array(count);
  const rescuedAt = new Float64Array(count).fill(-100);
  const progress = recoveryZones.map(() => 0);
  const radius = .57;
  const arc = Math.PI * radius;
  let previousTime = 0;

  // Separating-axis test for both oriented shells, including their connectors.
  // A centimetre-scale skin replaces the old oversized square collision zone.
  function touching(x: number, z: number, yaw: number, other: THREE.Vector3, angle: number, skin: number) {
    const dx = x - other.x, dz = z - other.z;
    if (Math.abs(dx) > 1.1 || Math.abs(dz) > 1.1) return false;
    const c = Math.cos(yaw), s = Math.sin(yaw), a = Math.cos(angle), b = Math.sin(angle);
    const dot = Math.abs(c * a + s * b), cross = Math.abs(s * a - c * b);
    return Math.abs(dx * c - dz * s) <= .435 + .275 * dot + .24 * cross + skin
      && Math.abs(dx * s + dz * c) <= .365 + .275 * cross + .24 * dot + skin
      && Math.abs(dx * a - dz * b) <= .275 + .435 * dot + .365 * cross + skin
      && Math.abs(dx * b + dz * a) <= .24 + .435 * cross + .365 * dot + skin;
  }

  function pose(index: number, advance: number, out: THREE.Vector3): number {
    const packet = recoveryPackets[index];
    const zone = recoveryZones[packet.zoneIndex];
    const straight = zone.start - zone.end;
    const length = straight * 2 + arc * 2;
    const s = ((packet.slot * length / zone.count + advance) % length + length) % length;
    const center = zone.x;
    if (s < straight) { out.set(center - radius, 0, zone.start - s); return Math.PI; }
    if (s < straight + arc) {
      const angle = (s - straight) / radius;
      out.set(center - radius * Math.cos(angle), 0, zone.end - radius * Math.sin(angle));
      return Math.PI - angle;
    }
    if (s < 2 * straight + arc) { out.set(center + radius, 0, zone.end + s - straight - arc); return 0; }
    const angle = (s - 2 * straight - arc) / radius;
    out.set(center + radius * Math.cos(angle), 0, zone.start + radius * Math.sin(angle));
    return -angle;
  }
  function tint(index: number) {
    color.setHex(state.has(recoveryPackets[index].id) ? recoveryBlue : corruptRed);
    for (let eye = 0; eye < 4; eye++) eyes.setColorAt(index * 4 + eye, color);
    eyes.instanceColor!.needsUpdate = true;
  }
  for (let i = 0; i < count; i++) tint(i);
  state.subscribe(() => {
    for (let i = 0; i < count; i++) tint(i);
    if (!state.count) { progress.fill(0); rescuedAt.fill(-100); }
  });
  function part(x: number, y: number, z: number, rotation: number) {
    offset.set(x, y, z).applyAxisAngle(THREE.Object3D.DEFAULT_UP, rotation);
    dummy.position.copy(position).add(offset);
    dummy.updateMatrix();
  }
  return {
    canOccupy(x: number, z: number, yaw = 0) {
      return positions.every((p, i) => !touching(x, z, yaw, p, rotations[i], .008));
    },
    recover(x: number, z: number, height: number, yaw = 0) {
      const added: string[] = [];
      if (height > .25 || !state.accessUnlocked) return added;
      for (let i = 0; i < count; i++) {
        if (!state.has(recoveryPackets[i].id) && touching(x, z, yaw, positions[i], rotations[i], .035)) {
          state.rescue(recoveryPackets[i].id);
          rescuedAt[i] = previousTime;
          added.push(recoveryPackets[i].id);
        }
      }
      return added;
    },
    update(time: number, reduced: boolean, player?: THREE.Vector3, yaw = 0) {
      const delta = Math.min(Math.max(0, time - previousTime), .12);
      previousTime = time;
      // Each circuit yields as a unit, preserving spacing through both U-turns.
      for (let circuit = 0; circuit < recoveryZones.length; circuit++) {
        const next = progress[circuit] + (reduced ? 0 : delta * .85);
        let blocked = false;
        if (player) for (let i = 0; i < count; i++) {
          if (recoveryPackets[i].zoneIndex !== circuit) continue;
          const angle = pose(i, next, position);
          if (touching(player.x, player.z, yaw, position, angle, .02)) blocked = true;
        }
        if (!blocked) progress[circuit] = next;
      }
      for (let i = 0; i < count; i++) {
        const rotation = pose(i, progress[recoveryPackets[i].zoneIndex], position);
        position.y = busSupport(position.z, .28) + .24;
        positions[i].copy(position);
        rotations[i] = rotation;
        dummy.position.copy(position);
        dummy.rotation.set(0, rotation, 0);
        dummy.scale.setScalar(1);
        dummy.updateMatrix(); bodies.setMatrixAt(i, dummy.matrix);
        for (let eye = 0; eye < 4; eye++) {
          part(eye % 2 ? .1 : -.1, state.has(recoveryPackets[i].id) ? .015 : eye % 2 ? -.025 : .055, eye < 2 ? .22 : -.22, rotation);
          eyes.setMatrixAt(i * 4 + eye, dummy.matrix);
        }
        part(0, .222, 0, rotation); bits.setMatrixAt(i, dummy.matrix);
        for (let pin = 0; pin < 8; pin++) {
          part(-.18 + pin % 4 * .12, -.16, pin < 4 ? .224 : -.224, rotation);
          contacts.setMatrixAt(i * 8 + pin, dummy.matrix);
        }
        const age = time - rescuedAt[i];
        const active = !reduced && age >= 0 && age < .65;
        dummy.position.copy(position);
        dummy.rotation.set(Math.PI / 2, 0, 0);
        dummy.scale.setScalar(active ? .3 + age * 2.5 : 0);
        dummy.updateMatrix(); pulses.setMatrixAt(i, dummy.matrix);
      }
      for (const mesh of meshes) mesh.instanceMatrix.needsUpdate = true;
    },
  };
}
