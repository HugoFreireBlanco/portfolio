export interface BootStep {
  code: string;
  label: string;
  message: string;
  run: () => Promise<unknown>;
}

/** Real preparation tasks for this first chapter. Add scene assets here later. */
export function bootSteps(root: HTMLElement): BootStep[] {
  return [
    { code: '01', label: 'INTERFACE', message: 'Interfaz de acceso montada', run: async () => {
      if (!root.querySelector('.boot-console')) throw new Error('No se pudo montar la interfaz');
    } },
    { code: '02', label: 'TYPOGRAPHY', message: 'Buffer tipográfico preparado', run: () => document.fonts.ready },
    { code: '03', label: 'DISPLAY', message: 'Canal de visualización calibrado', run: async () => {
      await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    } },
    { code: '04', label: 'SESSION', message: 'Sesión local inicializada · sin conexión externa', run: async () => {
      root.dataset.session = crypto.randomUUID();
    } },
  ];
}
