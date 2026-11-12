import * as THREE from 'three';
import { getLanguage, t, translateText } from '../../i18n';

export const palette = { cyan: 0x70d9db, red: 0xe34760, violet: 0x847de8, amber: 0xcda266 };

export function glow(color: number, intensity = 1.8): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: .35, metalness: .3 });
}

export function label(text: string, color = '#8acbd2', width = 5, subtitle?: string): THREE.Mesh {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = subtitle === '' ? 160 : 256;
  const texture = new THREE.CanvasTexture(canvas);
  texture.userData = { labelText: text, labelColor: color };
  function draw(map: THREE.Texture) {
    const ctx = (map.image as HTMLCanvasElement).getContext('2d')!;
    const title = translateText(map.userData.labelText as string).toLocaleUpperCase();
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#080f16'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = map.userData.labelColor as string;
    ctx.fillRect(32, 20, 6, canvas.height - 40);
    let fontSize = 64;
    ctx.font = `500 ${fontSize}px "IBM Plex Mono", monospace`;
    while (ctx.measureText(title).width > 910 && fontSize > 24) ctx.font = `500 ${--fontSize}px "IBM Plex Mono", monospace`;
    ctx.fillText(title, 70, subtitle === '' ? 100 : 123);
    ctx.font = '24px "IBM Plex Mono", monospace'; ctx.globalAlpha = .65;
    ctx.fillText(subtitle === undefined ? t('architecture') : translateText(subtitle), 72, 190);
    map.userData.language = getLanguage();
    map.needsUpdate = true;
  }
  draw(texture);
  texture.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width * canvas.height / canvas.width), new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide }));
  // Keep mipmaps for stable distant lettering; anisotropy preserves angled signs.
  mesh.onBeforeRender = renderer => {
    const map = (mesh.material as THREE.MeshBasicMaterial).map!;
    if (map.userData.language !== getLanguage()) draw(map);
    const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    if (map.anisotropy !== anisotropy) {
      map.anisotropy = anisotropy;
      map.needsUpdate = true;
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
