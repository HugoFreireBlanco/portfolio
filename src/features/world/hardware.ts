import * as THREE from 'three';
import { box, glow, palette } from './materials';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Shared by geometry, player collision height and the background byte traffic. */
export function cableHeight(z: number): number {
  const t = THREE.MathUtils.clamp((10 - z) / 66, 0, 1);
  return -.12 - Math.sin(t * Math.PI * 3) ** 2 * .72;
}

/** Highest support beneath a footprint, including raised cable clamps. */
export function busSupport(z: number, halfDepth: number): number {
  let height = Math.max(cableHeight(z - halfDepth), cableHeight(z), cableHeight(z + halfDepth));
  for (const clampZ of [8, -5, -18, -31, -44, -55]) {
    const clearance = Math.max(0, Math.abs(z - clampZ) - halfDepth - .1);
    if (clearance < .25) height = Math.max(height, cableHeight(clampZ) + .06 - clearance * .4);
  }
  return height;
}

export function addHardware(scene: THREE.Scene, mobile: boolean): void {
  const grain = document.createElement('canvas');
  grain.width = grain.height = 128;
  const ctx = grain.getContext('2d')!;
  const image = ctx.createImageData(128, 128);
  for (let i = 0; i < image.data.length; i += 4) {
    const value = 110 + Math.sin(i * 12.9898) * 22;
    image.data[i] = image.data[i + 1] = image.data[i + 2] = value;
    image.data[i + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(grain);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 24);
  const rubber = new THREE.MeshStandardMaterial({ color: 0x101820, metalness: .08, roughness: .42, bumpMap: texture, bumpScale: .014 });
  const satin = new THREE.MeshStandardMaterial({ color: 0x24313e, metalness: .65, roughness: .23 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x64717e, metalness: .9, roughness: .23 });
  const copper = new THREE.MeshStandardMaterial({ color: 0x99613b, metalness: .85, roughness: .3 });
  const pcb = new THREE.MeshStandardMaterial({ color: 0x0b2426, metalness: .35, roughness: .48 });
  const burnt = new THREE.MeshStandardMaterial({ color: 0x090909, metalness: .05, roughness: .95 });
  const cyan = glow(palette.cyan, .38);
  const red = glow(palette.red, .65);
  const pipe = (points: THREE.Vector3[], radius: number, material: THREE.Material, segments = 40, sides = 8) => {
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), segments, radius, sides, false), material);
    scene.add(mesh);
    return mesh;
  };

  // Ribbon of individual round insulated conductors, not a flat road.
  for (let lane = 0; lane < 19; lane++) {
    const x = (lane - 9) * .38;
    const points = Array.from({ length: 100 }, (_, i) => {
      const z = 10 - i / 99 * 66;
      return new THREE.Vector3(x, cableHeight(z) - .2, z);
    });
    pipe(points, .185, lane % 5 === 0 ? satin : rubber, mobile ? 80 : 140, 8);
    if (lane % 3 === 0) pipe(points.map(p => p.clone().add(new THREE.Vector3(0, .184, 0))), .012, lane === 0 ? red : cyan, 80, 3);
  }
  for (const z of [8, -5, -18, -31, -44, -55]) {
    const y = cableHeight(z);
    box(scene, [7.4, .09, .19], [0, y + .015, z], satin);
    box(scene, [7.4, .12, .3], [0, y - .58, z], rubber);
    for (const x of [-3.65, 3.65]) {
      box(scene, [.12, .65, .3], [x, y - .28, z], satin);
      const screw = new THREE.Mesh(new THREE.CylinderGeometry(.085, .085, .05, 8), steel);
      screw.position.set(x, y + .1, z);
      scene.add(screw);
    }
  }
  for (const z of [10, -56]) {
    const socket = new THREE.Mesh(new RoundedBoxGeometry(8.1, 1.3, 1.6, 2, .12), rubber);
    socket.position.set(0, -.7, z);
    scene.add(socket);
    box(scene, [8.4, .18, 2], [0, -1.4, z], satin);
    for (let i = 0; i < 19; i++) box(scene, [.22, .15, .8], [(i - 9) * .38, -.05, z], copper);
  }
  // Collar ribs, mould seams, locking tabs and recessed screw heads.
  for (const z of [8, -5, -18, -31, -44]) {
    const y = cableHeight(z);
    for (const x of [-3.65, 3.65]) {
      box(scene, [.09, .012, .018], [x, y + .13, z], burnt);
      box(scene, [.018, .012, .09], [x, y + .131, z], burnt);
    }
  }
  for (const z of [9.4, -55.4]) for (let i = 0; i < 19; i++) {
    const x = (i - 9) * .38;
    for (let rib = 0; rib < 4; rib++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(.195, .015, 3, 8), rubber);
      ring.position.set(x, cableHeight(z) - .2, z + rib * .1);
      scene.add(ring);
    }
  }

  // Overhead GPU backplate, fin stack and coolant tubes frame the whole space.
  box(scene, [27, .7, 39], [0, 17, -25], satin);
  box(scene, [25, .14, 37], [0, 16.58, -25], pcb);
  for (let i = 0; i < 23; i++) box(scene, [17, .7, .16], [0, 16.15, -8 - i * 1.5], steel);
  for (const x of [-11, 11]) {
    box(scene, [.12, .08, 37], [x, 16.45, -25], cyan);
    for (let z = -9; z > -43; z -= 6) {
      box(scene, [1.7, .3, 2.5], [x, 16.15, z], rubber);
      box(scene, [.2, 2.8, .2], [x, 18.5, z], steel);
    }
  }
  for (let i = 0; i < 6; i++) {
    const x = -9 + i * .45;
    pipe([new THREE.Vector3(x, 15, 16), new THREE.Vector3(x - 4, 12, 0), new THREE.Vector3(x - 8, 13, -21), new THREE.Vector3(-24, 5, -43)], .18, i % 3 ? rubber : satin, 42);
  }
  for (const x of [-5, 5]) pipe([new THREE.Vector3(x, 7, -58), new THREE.Vector3(x * 2, 12, -49), new THREE.Vector3(x * 2, 14, -26), new THREE.Vector3(x * 3, 10, -12)], .3, copper, 36, 10);
  // Service harnesses follow the outer ceiling, clear of the GPU and camera route.
  for (const side of [-1, 1]) {
    for (let wire = 0; wire < (mobile ? 3 : 5); wire++) {
      const x = side * (20 + wire * .3);
      pipe([new THREE.Vector3(x, 24, 25), new THREE.Vector3(x, 22.9, 10), new THREE.Vector3(x + side * .5, 23.7, -6), new THREE.Vector3(x, 22.8, -26), new THREE.Vector3(x, 23.6, -47), new THREE.Vector3(side * 29, 18, -61)], .1, wire === 0 ? satin : rubber, mobile ? 32 : 48, 6);
    }
    for (const z of [24, 9, -7, -27, -47]) {
      box(scene, [2.5, .18, .35], [side * 20.6, 23.9, z], steel);
      for (const x of [side * 19.4, side * 21.8]) box(scene, [.12, .7, .18], [x, 24.2, z], satin);
    }
  }
  // Case ceiling: cut-outs between ribs, screws, ventilation, front I/O bulkhead.
  // Real opening in the chassis, outside the GPU footprint: no dark decal over a lid.
  box(scene, [15, .6, 110], [-30.5, 25, -18], satin);
  box(scene, [53, .6, 110], [11.5, 25, -18], satin);
  box(scene, [8, .6, 73], [-19, 25, -36.5], satin);
  box(scene, [8, .6, 27], [-19, 25, 23.5], satin);
  for (let i = 0; i < 12; i++) {
    const side = i % 2 ? -1 : 1;
    const torn = box(scene, [.75, .18, 1.1], [-19 + side * 3.8, 24.65, .5 + Math.floor(i / 2) * 1.7], steel);
    torn.rotation.set(side * .35, i * .23, side * .45);
    box(scene, [.14, .04, .5], [-19 + side * 3.65, 24.5, .5 + Math.floor(i / 2) * 1.7], burnt);
  }
  // Ripped cable tray hangs below the ceiling; falling sparks remain visible from the bus.
  const tray = box(scene, [3.6, .25, 2], [-6.5, 8.8, -8], burnt);
  tray.rotation.z = -.18;
  for (let i = 0; i < 5; i++) {
    pipe([new THREE.Vector3(-16 + i * .22, 24.6, 5), new THREE.Vector3(-12 + i * .2, 17, 1), new THREE.Vector3(-7 + i * .24, 9, -8)], .065, i % 2 ? rubber : copper, 24, 5);
    pipe([new THREE.Vector3(-7 + i * .24, 9, -8), new THREE.Vector3(-6.8 + i * .24, 8.35, -7.8)], .035, copper, 3, 5);
  }
  box(scene, [76, 28, 1], [0, 11, 36], satin);
  for (let z = 28; z > -70; z -= 9) {
    if (z === 1) {
      box(scene, [12, .75, .5], [-29, 24.25, z], steel);
      box(scene, [50, .75, .5], [10, 24.25, z], steel);
    } else box(scene, [70, .75, .5], [0, 24.25, z], steel);
    for (const x of [-30, 30]) box(scene, [.8, 5, .9], [x, 22, z], rubber);
  }
  for (let i = 0; i < 28; i++) {
    box(scene, [18, .12, .14], [21, 14 + i * .26, 35.4], rubber);
    box(scene, [18, .12, .14], [-21, 14 + i * .26, 35.4], rubber);
  }
  // Small surface mounted components and solder pads, all batched later.
  for (let i = 0; i < (mobile ? 100 : 210); i++) {
    const side = i % 2 ? -1 : 1;
    const x = side * (6 + (i * 7.13) % 26);
    const z = 20 - (i * 11.37) % 86;
    box(scene, [.65 + i % 3 * .25, .18, .4], [x, -2.96, z], i % 8 === 0 ? burnt : rubber);
    for (const offset of [-.48, .48]) box(scene, [.17, .1, .4], [x + offset, -2.98, z], steel);
  }

  // A ripped auxiliary connector and hanging broken wires beside the safe route.
  const connector = new THREE.Group();
  connector.position.set(-6.4, -.65, -9);
  connector.rotation.set(.23, -.32, -.19);
  scene.add(connector);
  // Open shell, torn lid and retained mounting bracket instead of a floating block.
  box(connector, [2.8, .18, 1.8], [0, -.6, 0], satin);
  box(connector, [2.8, 1.25, .16], [0, -.02, -.82], burnt);
  for (const x of [-1.32, 1.32]) box(connector, [.16, 1.1, 1.7], [x, -.08, 0], burnt);
  box(connector, [2.4, .12, 1.3], [0, -.36, 0], pcb);
  const lid = box(connector, [2.7, .12, 1.25], [0, .68, -.48], satin);
  lid.rotation.x = -.55;
  for (let rib = 0; rib < 5; rib++) box(connector, [.18, .08, .7], [-.9 + rib * .45, .78, -.5], burnt).rotation.x = -.55;
  box(scene, [.3, 1.1, 2.1], [-7.8, -1.9, -9], steel);
  box(scene, [3.8, .16, 2.4], [-6.7, -1.5, -9], satin);
  connector.updateMatrixWorld(true);
  for (let i = 0; i < 8; i++) {
    const x = -.96 + i % 4 * .64;
    const y = i < 4 ? -.2 : .2;
    box(connector, [.23, .23, .2], [x, y, .66], rubber);
    box(connector, [.12, .12, .25], [x, y, .81], copper);
    const start = connector.localToWorld(new THREE.Vector3(x, y, .94));
    const neck = connector.localToWorld(new THREE.Vector3(x, y, 1.25));
    const end = new THREE.Vector3(-8.3 + i * .18, -2.72 + (i % 3) * .1, -4.8 - i % 2 * .4);
    pipe([start, neck, new THREE.Vector3(neck.x - .15, neck.y - .1, -7.15), new THREE.Vector3(start.x - .25, -2.5, -6.25), end], .065, i % 3 === 0 ? satin : rubber, 22, 6);
    pipe([end, end.clone().add(new THREE.Vector3(-.14, .08, .22))], .032, copper, 2, 5);
  }
  box(scene, [4, .03, 5], [-7, -3.03, -10], burnt);
  for (let i = 0; i < 16; i++) {
    const chip = box(scene, [.3 + i % 3 * .15, .18, .4], [-5 - (i * .71) % 5, -2.85 + i % 4 * .08, -7 - (i * 1.13) % 6], i % 3 ? burnt : copper);
    chip.rotation.set(i * .7, i * 1.4, i * .3);
  }
  // A second fractured card has a missing corner and hanging metallic pins.
  const fracture = new THREE.Shape();
  fracture.moveTo(-2.25, -2.5); fracture.lineTo(2.25, -2.5);
  fracture.lineTo(2.25, .5); fracture.lineTo(1.5, .35);
  fracture.lineTo(1.7, 1.15); fracture.lineTo(.8, .9);
  fracture.lineTo(.4, 2.5); fracture.lineTo(-2.25, 2.5); fracture.closePath();
  const broken = new THREE.Mesh(new THREE.ExtrudeGeometry(fracture, { depth: .3, bevelEnabled: false }), pcb);
  broken.position.set(8, 1, -26);
  scene.add(broken);
  broken.rotation.z = .28;
  for (let row = 0; row < 3; row++) for (let col = 0; col < 3; col++) {
    if (row === 2 && col === 2) continue;
    box(broken, [.9, .6, .12], [-1.4 + col * 1.15, -1.4 + row * 1.25, .36], rubber);
    box(broken, [.55, .025, .02], [-1.4 + col * 1.15, -1.6 + row * 1.25, .43], row === 2 ? red : cyan);
  }
  box(scene, [5.4, .3, 1.4], [8, -2.7, -26], satin);
  const shard = box(scene, [1.8, 2, .3], [10.7, -1.8, -25], burnt);
  shard.rotation.set(.3, .5, -.5);
  for (let i = 0; i < 12; i++) box(scene, [.08, .4 + i % 3 * .17, .08], [6 + i * .34, -1.6, -25.7], copper);
  // Recognisable TO-220 power transistors and open electromechanical relays.
  for (const side of [-1, 1]) for (let i = 0; i < 3; i++) {
    const x = side * (8.8 + i % 2 * 2.5), z = -3 - i * 16;
    box(scene, [1.3, 1.65, .45], [x, -1.6, z], rubber);
    box(scene, [1.3, .7, .14], [x, -.43, z - .12], steel);
    const hole = new THREE.Mesh(new THREE.CylinderGeometry(.17, .17, .16, 10), burnt);
    hole.rotation.x = Math.PI / 2; hole.position.set(x, -.4, z - .02); scene.add(hole);
    for (let pin = 0; pin < 3; pin++) box(scene, [.09, .65, .1], [x - .4 + pin * .4, -2.65, z], copper);
    const relay = new THREE.Group(); relay.position.set(side * 12, -2.85, z - 5); scene.add(relay);
    box(relay, [2.5, .2, 1.6], [0, 0, 0], pcb);
    const coil = new THREE.Mesh(new THREE.CylinderGeometry(.45, .45, 1.1, 12), copper);
    coil.rotation.z = Math.PI / 2; coil.position.set(-.3, .65, 0); relay.add(coil);
    for (let ring = 0; ring < 9; ring++) {
      const winding = new THREE.Mesh(new THREE.TorusGeometry(.46, .025, 4, 12), burnt);
      winding.rotation.y = Math.PI / 2; winding.position.set(-.8 + ring * .125, .65, 0); relay.add(winding);
    }
    box(relay, [.15, 1.1, 1.1], [.55, .6, 0], steel);
    const arm = box(relay, [1.8, .09, .28], [.15, 1.22, .18], steel); arm.rotation.z = -.12;
    for (const contactX of [.65, .95]) box(relay, [.12, .65, .18], [contactX, .4, .3], copper);
  }
}
