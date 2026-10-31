/** Personal content lives here. Replace pending records with verified CV details. */
export const profile = {
  name: 'Hugo',
  surname: 'Freire Blanco',
  introduction: 'Un portfolio dentro de un ordenador. Una forma diferente de conocer lo que construyo.',
  summary: 'Soy Hugo. Este espacio reúne mis proyectos y mi recorrido, con dos formas de descubrirlos: recuperar el sistema como un byte de mantenimiento o consultar sus archivos en modo lectura.',
  note: 'La biografía profesional, el CV y los enlaces de contacto están pendientes de incorporar.',
};

export const projects = [{
  id: 'internal-system',
  title: 'Internal System',
  category: 'PORTFOLIO / EXPERIENCIA INTERACTIVA',
  description: 'Un portfolio convertido en un ordenador bajo ataque. Explora un bus de datos, rescata paquetes corruptos y restaura los registros del sistema junto a AUX.',
  role: 'Diseño y desarrollo del portfolio personal.',
  details: 'Una interfaz de arranque da paso a un mundo procedural en Three.js. El protagonista recorre un conducto y aterriza sobre cables transitables, entre módulos electrónicos, tráfico persistente y una alerta de emergencia. El modo Archivo ofrece otra forma de consultar el contenido.',
  technologies: ['TypeScript', 'Three.js', 'WebGL', 'Vite', 'HTML / CSS'],
  implementation: ['Entorno procedural y geometría agrupada por material.', 'Veinte paquetes recuperables en circuitos locales, objetivos y progreso guardado.', 'NPC de mantenimiento, terminales y estabilización progresiva de la iluminación.', 'Controles de teclado y táctiles, movimiento reducido y precarga de GPU.'],
}];

export const archiveSections = [
  { id: 'proyectos', code: '01', title: 'Proyectos', description: 'Ideas convertidas en experiencias.' },
  { id: 'experiencia', code: '02', title: 'Experiencia', description: 'Dónde he trabajado y qué he aportado.' },
  { id: 'educacion', code: '03', title: 'Educación', description: 'Los cimientos del recorrido.' },
  { id: 'premios', code: '04', title: 'Premios', description: 'Reconocimientos y logros.' },
  { id: 'aptitudes', code: '05', title: 'Aptitudes', description: 'Herramientas y formas de construir.' },
];

export interface MemoryRecord {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  tags?: string[];
  demo?: boolean;
}

/** Shared by the readable archive and the physical memory chips. Demo is never CV data. */
export const memoryRecords: Record<string, MemoryRecord[]> = {
  identidad: [{ id: 'hugo', title: `${profile.name} ${profile.surname}`, subtitle: 'IDENTIDAD / PERFIL', paragraphs: [profile.introduction, profile.summary, profile.note] }],
  proyectos: projects.map(project => ({ id: project.id, title: project.title, subtitle: project.category, paragraphs: [project.description, project.role, project.details, ...project.implementation], tags: project.technologies })),
  experiencia: [
    { id: 'demo-web', title: 'Desarrollo de una aplicación web', subtitle: 'DEMO / EQUIPO DE EJEMPLO / 2025–2026', demo: true, paragraphs: ['Registro ficticio para probar la experiencia interactiva. No representa un empleo de Hugo.', 'Ejemplo de responsabilidades: construir interfaces adaptables, integrar servicios y colaborar en revisiones de código.'], tags: ['TypeScript', 'Interfaces', 'Trabajo en equipo'] },
    { id: 'demo-interactive', title: 'Prototipado de experiencias interactivas', subtitle: 'DEMO / ESTUDIO DE EJEMPLO / 2024–2025', demo: true, paragraphs: ['Registro ficticio, pendiente de sustituir por experiencia real.', 'Ejemplo de aportación: explorar animación, interacción y rendimiento en prototipos para navegador.'], tags: ['WebGL', 'Prototipos'] },
  ],
  educacion: [
    { id: 'demo-training', title: 'Formación en desarrollo web', subtitle: 'DEMO / CENTRO DE EJEMPLO / 2023–2025', demo: true, paragraphs: ['Estudios ficticios para probar los chips de Educación. No son una titulación de Hugo.', 'Ejemplo de contenidos: programación, bases de datos, interfaces y desarrollo de aplicaciones.'], tags: ['Programación', 'Bases de datos'] },
    { id: 'demo-3d', title: 'Taller de gráficos 3D para la web', subtitle: 'DEMO / FORMACIÓN COMPLEMENTARIA / 2026', demo: true, paragraphs: ['Curso ficticio para mostrar un segundo registro de formación.', 'Ejemplo de contenidos: geometría, materiales, cámaras y optimización de escenas interactivas.'], tags: ['Three.js', 'WebGL'] },
    { id: 'demo-accessibility', title: 'Accesibilidad y diseño de interfaces', subtitle: 'DEMO / CURSO DE EJEMPLO / 2026', demo: true, paragraphs: ['Contenido de demostración; no acredita una formación real.', 'Ejemplo de contenidos: navegación por teclado, semántica HTML y movimiento reducido.'], tags: ['HTML', 'Accesibilidad'] },
  ],
  premios: [{ id: 'demo-award', title: 'Reconocimiento a un proyecto interactivo', subtitle: 'DEMO / CERTAMEN DE EJEMPLO / 2026', demo: true, paragraphs: ['Premio ficticio para probar esta sección. No es un reconocimiento recibido por Hugo.', 'Aquí aparecerán la entidad, el proyecto y los detalles del reconocimiento real.'] }],
  aptitudes: [
    { id: 'web', title: 'Desarrollo web', subtitle: 'STACK VERIFICABLE / ESTE PROYECTO', paragraphs: ['Interfaz desarrollada con TypeScript, HTML y CSS; Vite prepara el entorno de desarrollo y la compilación.'], tags: ['TypeScript', 'HTML', 'CSS', 'Vite'] },
    { id: 'graphics', title: 'Experiencias 3D', subtitle: 'STACK VERIFICABLE / ESTE PROYECTO', paragraphs: ['Escenario procedural con geometría, materiales e interacción mediante Three.js y WebGL.'], tags: ['Three.js', 'WebGL', 'Animación'] },
    { id: 'implementation', title: 'Implementación', subtitle: 'STACK VERIFICABLE / ESTE PROYECTO', paragraphs: ['Controles de teclado y táctiles, diseño adaptable, movimiento reducido y optimización del renderizado.'], tags: ['Accesibilidad', 'Rendimiento', 'Responsive'] },
  ],
};

export const escapeContent = (text: string) => text.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
export function memoryRecordMarkup(record: MemoryRecord) {
  return `<p class="recovery-file">${escapeContent(record.subtitle)}</p><h2>${escapeContent(record.title)}</h2>${record.demo ? '<p class="memory-demo">DEMO / Contenido ficticio de prueba. No forma parte del historial real de Hugo.</p>' : ''}${record.paragraphs.map(p => `<p>${escapeContent(p)}</p>`).join('')}${record.tags ? `<ul class="tech-tags">${record.tags.map(tag => `<li>${escapeContent(tag)}</li>`).join('')}</ul>` : ''}`;
}
