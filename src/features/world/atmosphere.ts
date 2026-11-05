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
  const sparkMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const sparkUniforms = {
    sparkTime: { value: 0 }, sparkStability: { value: 0 },
    sparkBudget: { value: perSource }, sparkReduced: { value: 0 },
  };
  // Purely decorative ballistics run on the GPU. Instance transforms and colors
  // are uploaded once; only four scalar uniforms change during the render loop.
  sparkMaterial.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, sparkUniforms);
    shader.vertexShader = shader.vertexShader.replace('#include <common>', `
      #include <common>
      attribute vec2 sparkSeed;
      uniform float sparkTime, sparkStability, sparkBudget, sparkReduced;
    `).replace('#include <begin_vertex>', `
      float source = sparkSeed.x;
      float slot = sparkSeed.y;
      float period = 4.8 + source * 1.3;
      float age = mod(sparkTime + source * 1.8, period) - slot / max(sparkBudget, 1.0) * .65;
      float life = source < .5 ? 2.3 : 1.55;
      float t = max(0.0, age);
      float seed = slot * 2.0 + source;
      float angle = seed * 2.39996;
      float speed = .7 + mod(seed * .37, 1.7);
      vec3 velocity = vec3(cos(angle) * speed, -.6 - 8.4 * t, sin(angle) * speed);
      vec3 axis = normalize(velocity);
      vec3 side = normalize(cross(axis, vec3(0.0, 0.0, 1.0)));
      vec3 front = cross(side, axis);
      float fade = max(0.0, 1.0 - t / life);
      float sparkVisible = float(sparkReduced < .5 && slot < sparkBudget && age >= 0.0 && age < life && slot / max(sparkBudget, 1.0) < 1.0 - sparkStability * .9);
      vec3 transformed = (side * position.x * .04 + axis * position.y * (.22 + t * .16) + front * position.z * .04) * fade * sparkVisible;
      transformed += vec3(velocity.x * t, -.6 * t - 4.2 * t * t, velocity.z * t);
    `);
  };
  const sparks = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), sparkMaterial, sources.length * perSource);
  sparks.name = 'ceiling-fault-sparks';
  // Fixed conservative bounds cover both emitters and their ballistic trajectories.
  sparks.boundingSphere = new THREE.Sphere(new THREE.Vector3(-11, 11, -1), 28);
  scene.add(sparks);
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const seeds = new Float32Array(sparks.count * 2);
  let activePerSource = perSource;
  for (let i = 0; i < sparks.count; i++) {
    const source = i % sources.length;
    seeds[i * 2] = source; seeds[i * 2 + 1] = Math.floor(i / sources.length);
    dummy.position.copy(sources[source]); dummy.updateMatrix();
    sparks.setMatrixAt(i, dummy.matrix);
    color.setHex(i % 4 === 0 ? 0xffecaf : i % 3 === 0 ? 0xff541b : 0xffa43b);
    sparks.setColorAt(i, color);
  }
  sparks.geometry.setAttribute('sparkSeed', new THREE.InstancedBufferAttribute(seeds, 2));
  return {
    setQuality(level: number) {
      // Fixed light sets avoid shader recompilation on every camera movement.
      // Lighting is part of the art direction, not a resolution tier. Keep a
      // fixed light set: fewer shader variants and no disappearing alarm lamps.
      accents.forEach(light => { light.visible = true; });
      beacons.forEach(light => { light.visible = true; });
      activePerSource = level >= 3 ? 0 : level === 2 ? 8 : level === 1 ? 14 : perSource;
      sparkUniforms.sparkBudget.value = activePerSource;
      sparks.visible = activePerSource > 0;
    },
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
      sparkUniforms.sparkTime.value = time;
      sparkUniforms.sparkStability.value = stability;
      sparkUniforms.sparkReduced.value = reduced ? 1 : 0;
      return alarm;
    },
  };
}
