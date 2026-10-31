export const recoveryBlue = 0x49bbff;
export const corruptRed = 0xff4935;
export const recoveryZones = [
  { id: 'identidad', code: 'ID', title: 'Identidad', count: 3, start: 6, end: 0, x: -2.09, route: '#sobre-mi' },
  { id: 'proyectos', code: 'PRJ', title: 'Proyectos', count: 5, start: -2, end: -11, x: 2.09, route: '#archivo/proyectos' },
  { id: 'experiencia', code: 'EXP', title: 'Experiencia', count: 3, start: -13, end: -19, x: -2.09, route: '#archivo/experiencia' },
  { id: 'educacion', code: 'EDU', title: 'Educación', count: 3, start: -21, end: -27, x: 2.09, route: '#archivo/educacion' },
  { id: 'premios', code: 'AWD', title: 'Premios', count: 3, start: -29, end: -36, x: -2.09, route: '#archivo/premios' },
  { id: 'aptitudes', code: 'SKL', title: 'Aptitudes', count: 3, start: -39, end: -48, x: 2.09, route: '#archivo/aptitudes' },
] as const;
export const recoveryPackets = recoveryZones.flatMap((zone, zoneIndex) => Array.from({ length: zone.count }, (_, slot) => ({
  id: `${zone.code}-${slot + 1}`, zoneIndex, slot,
})));
const storageKey = 'hugo-recovery-v1';

export function createRecoveryState(storage?: Pick<Storage, 'getItem' | 'setItem'>) {
  const rescued = new Set<string>();
  let greeted = false;
  let hasPda = false;
  let saved = !!storage;
  try {
    const data = JSON.parse(storage?.getItem(storageKey) || 'null');
    if (data?.version === 1 && Array.isArray(data.rescued)) {
      for (const packet of recoveryPackets) if (data.rescued.includes(packet.id)) rescued.add(packet.id);
      greeted = data.greeted === true;
      hasPda = data.hasPda === true || greeted;
    }
  } catch { saved = false; /* Storage is optional: gameplay remains available. */ }
  const listeners = new Set<() => void>();
  function persist() {
    try { storage?.setItem(storageKey, JSON.stringify({ version: 1, rescued: [...rescued], greeted, hasPda })); saved = !!storage; }
    catch { saved = false; }
    listeners.forEach(listener => listener());
  }
  return {
    get count() { return rescued.size; },
    get complete() { return rescued.size === recoveryPackets.length; },
    get greeted() { return greeted; },
    get hasPda() { return hasPda; },
    get saved() { return saved; },
    has(id: string) { return rescued.has(id); },
    zoneCount(index: number) { return recoveryPackets.filter(packet => packet.zoneIndex === index && rescued.has(packet.id)).length; },
    rescue(id: string) {
      if (rescued.has(id) || !recoveryPackets.some(packet => packet.id === id)) return false;
      rescued.add(id); persist(); return true;
    },
    greet() { greeted = true; hasPda = true; persist(); },
    reset() { rescued.clear(); greeted = false; hasPda = false; persist(); },
    subscribe(listener: () => void) { listeners.add(listener); return () => listeners.delete(listener); },
  };
}
export type RecoveryState = ReturnType<typeof createRecoveryState>;
