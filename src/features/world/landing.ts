import * as THREE from 'three';
import { busSupport } from './hardware';

// Shell corners and tread envelope, including both connector panels.
const contacts: THREE.Vector3[] = [];
for (const x of [-.425, .425]) for (const y of [-.34, .34]) for (const z of [-.365, .365]) contacts.push(new THREE.Vector3(x, y, z));
for (const x of [-.39, -.19, .19, .39]) for (const z of [-.26, .26]) contacts.push(new THREE.Vector3(x, -.415, z));
const rotated = new THREE.Vector3();

/** Lowest safe centre for the actual tilted shell/skids over the curved bus. */
export function byteSupport(z: number, rotation: THREE.Quaternion, scale: THREE.Vector3): number {
  let height = -Infinity;
  for (const contact of contacts) {
    rotated.copy(contact).multiply(scale).applyQuaternion(rotation);
    height = Math.max(height, busSupport(z + rotated.z, .025) - rotated.y);
  }
  return height + .012;
}

export function flightRotation(tangent: THREE.Vector3, time: number, out: THREE.Quaternion): THREE.Quaternion {
  // Angular momentum from the lip: a modest pitch and off-centre roll, never auto-level.
  return out.setFromUnitVectors(new THREE.Vector3(0, 0, -1), tangent)
    .multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(time * .55, time * .22, -time * .8)));
}
