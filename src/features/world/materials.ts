import * as THREE from 'three';

export const palette = { cyan: 0x70d9db, red: 0xe34760, violet: 0x847de8, amber: 0xcda266 };

export function glow(color: number, intensity = 1.8): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: .35, metalness: .3 });
}

export function label(text: string, color = '#8acbd2', width = 5): THREE.Mesh {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#080f16';
  ctx.fillRect(0, 0, 1024, 256);
  ctx.fillStyle = color;
  ctx.fillRect(32, 32, 6, 192);
  let fontSize = 64;
  ctx.font = `500 ${fontSize}px "IBM Plex Mono", monospace`;
  while (ctx.measureText(text).width > 910 && fontSize > 24) {
    ctx.font = `500 ${--fontSize}px "IBM Plex Mono", monospace`;
  }
  ctx.fillText(text, 70, 123);
  ctx.font = '24px "IBM Plex Mono", monospace';
  ctx.globalAlpha = .65;
  ctx.fillText('HUGO / SYSTEM ARCHITECTURE', 72, 190);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width / 4), new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide }));
  // Keep mipmaps for stable distant lettering; anisotropy preserves angled signs.
  mesh.onBeforeRender = renderer => {
    const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    if (texture.anisotropy !== anisotropy) {
      texture.anisotropy = anisotropy;
      texture.needsUpdate = true;
    }
  };
  return mesh;
}

export function box(parent: THREE.Object3D, size: [number, number, number], position: [number, number, number], material: THREE.Material): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  parent.add(mesh);
  return mesh;
}
