import * as THREE from 'three';
import { box, glow } from './materials';

/** Suspended emergency fixtures and pooled ballistic sparks. */
export function createAtmosphere(scene: THREE.Scene, hemi: THREE.HemisphereLight, key: THREE.DirectionalLight, accents: THREE.PointLight[], compact: boolean) {
  const normalSky = hemi.color.clone();
  const normalGround = hemi.groundColor.clone();
  const normalKey = key.color.clone();
  const red = new THREE.Color(0xff2418);
  const darkRed = new THREE.Color(0x3c0808);
  const normalFog = new THREE.Color(0x03070e);
  const alarmFog = new THREE.Color(0x170405);
  const housing = new THREE.MeshStandardMaterial({ color: 0x262b30, roughness: .4, metalness: .7 });
  const lenses: THREE.MeshStandardMaterial[] = [];
  const white = new THREE.Color(0xd6ebff);
  const blue = new THREE.Color(0x49bbff);
  const repairs = [0, 0, 0];
  let stability = 0;
  const beacons: THREE.PointLight[] = [];
  for (const [x, z] of [[-5.5, -4], [5.5, -24], [-5.5, -45]]) {
    // The first lamp hangs from the chassis; the others from the GPU underside.
    const anchorY = z === -4 ? 24.6 : 15.75;
    for (const offset of [-.52, .52]) {
      box(scene, [.32, .12, .34], [x + offset, anchorY, z], housing);
      box(scene, [.045, anchorY - 7.5, .045], [x + offset, (anchorY + 7.5) / 2, z], housing);
    }
    box(scene, [1.5, .3, .6], [x, 7.3, z], housing);
    const lens = glow(0xff2919, .5);
    lenses.push(lens);
    box(scene, [1.15, .2, .35], [x, 7.05, z], lens);
    for (const offset of [-.48, 0, .48]) box(scene, [.035, .28, .46], [x + offset, 7.02, z], housing);
    const light = new THREE.PointLight(0xff2418, 0, 29, 1.4);
    light.position.set(x, 6.7, z);
    scene.add(light);
    beacons.push(light);
  }

  const sources = [new THREE.Vector3(-17, 24.5, 5), new THREE.Vector3(-6.4, 8.5, -7.8)];
  const perSource = compact ? 28 : 48;
  const sparks = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), sources.length * perSource);
  sparks.name = 'ceiling-fault-sparks';
  sparks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  sparks.frustumCulled = false;
  scene.add(sparks);
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const velocity = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < sparks.count; i++) {
    color.setHex(i % 4 === 0 ? 0xffecaf : i % 3 === 0 ? 0xff541b : 0xffa43b);
    sparks.setColorAt(i, color);
  }
  return {
    update(time: number, reduced: boolean, restored: readonly boolean[] = [], complete = false, delta = 1 / 60) {
      const blend = reduced ? 1 : 1 - Math.exp(-delta * .8);
      stability += ((complete ? 1 : 0) - stability) * blend;
      for (let i = 0; i < repairs.length; i++) repairs[i] += ((restored[i * 2] && restored[i * 2 + 1] ? 1 : 0) - repairs[i]) * blend;
      // Five-second swell and recovery, with a calm interval; never a strobe.
      const wave = .5 - .5 * Math.cos(time * Math.PI * 2 / 5);
      const alarm = (reduced ? .28 : THREE.MathUtils.smoothstep(wave, .18, .9)) * (1 - stability);
      hemi.color.copy(normalSky).lerp(red, alarm * .82);
      hemi.groundColor.copy(normalGround).lerp(darkRed, alarm);
      hemi.intensity = 1.05 - alarm * .5 + stability * .25;
      key.color.copy(normalKey).lerp(red, alarm * .9);
      key.intensity = 1.15 - alarm * .75 + stability * .15;
      scene.environmentIntensity = .22 - alarm * .12;
      if (scene.fog instanceof THREE.FogExp2) scene.fog.color.copy(normalFog).lerp(alarmFog, alarm);
      if (scene.background instanceof THREE.Color) scene.background.copy(normalFog).lerp(alarmFog, alarm);
      accents.forEach((light, i) => { light.intensity = 25 * (i === 1 ? 1 + alarm * .3 : 1 - alarm * .9); if (i === 1) light.color.copy(red).lerp(blue, stability); });
      beacons.forEach((light, i) => {
        const repair = Math.max(stability, repairs[i]);
        light.color.copy(red).lerp(white, repair);
        light.intensity = (1 + alarm * 58) * (1 - repair) + repair * 24;
        lenses[i].color.copy(light.color); lenses[i].emissive.copy(light.color);
        lenses[i].emissiveIntensity = (.12 + alarm * 1.5) * (1 - repair) + repair * .7;
      });
      for (let i = 0; i < sparks.count; i++) {
        const source = Math.floor(i / perSource);
        const slot = i % perSource;
        const period = 4.8 + source * 1.3;
        const age = (time + source * 1.8) % period - slot / perSource * .65;
        const life = source === 0 ? 2.3 : 1.55;
        const visible = !reduced && age >= 0 && age < life && slot / perSource < 1 - stability * .9;
        const t = Math.max(0, age);
        const angle = i * 2.39996;
        const speed = .7 + (i * .37) % 1.7;
        const vx = Math.cos(angle) * speed;
        const vz = Math.sin(angle) * speed;
        dummy.position.copy(sources[source]);
        dummy.position.x += vx * t;
        dummy.position.z += vz * t;
        dummy.position.y -= .6 * t + 4.2 * t * t;
        velocity.set(vx, -.6 - 8.4 * t, vz).normalize();
        dummy.quaternion.setFromUnitVectors(up, velocity);
        const fade = Math.max(0, 1 - t / life);
        dummy.scale.set(visible ? .04 * fade : 0, visible ? (.22 + t * .16) * fade : 0, visible ? .04 * fade : 0);
        dummy.updateMatrix();
        sparks.setMatrixAt(i, dummy.matrix);
      }
      sparks.instanceMatrix.needsUpdate = true;
      return alarm;
    },
  };
}
