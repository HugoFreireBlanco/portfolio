import { archiveSections, profile, projects, memoryRecords, memoryRecordMarkup } from './content';
import './portfolio.css';
import { translateText } from '../../i18n';

export function createPortfolio(root: HTMLElement, onReading: (reading: boolean) => void) {
  const navigation = document.createElement('nav');
  navigation.className = 'portfolio-nav';
  navigation.setAttribute('aria-label', 'Navegación principal');
  const modes = [
    { view: 'explorar', href: '#explorar', label: 'EXPLORAR', icon: '<path d="m8 2 6 3.5v7L8 16l-6-3.5v-7L8 2Z M2 5.5l6 3.6 6-3.6 M8 9v7"/>', code: '01' },
    { view: 'archivo', href: '#archivo/proyectos', label: 'ARCHIVO', icon: '<path d="M2 5h12v10H2z M1 2h14v3H1z M6 8h4"/>', code: '02' },
    { view: 'sobre-mi', href: '#sobre-mi', label: 'SOBRE MÍ', icon: '<circle cx="8" cy="5" r="3"/><path d="M2 16v-2a6 6 0 0 1 12 0v2 M5 16h6"/>', code: '03' },
  ];
  navigation.innerHTML = modes.map(mode => `<a href="${mode.href}" data-view="${mode.view}" aria-label="${mode.label}"><svg viewBox="0 0 16 18" aria-hidden="true">${mode.icon}</svg><span class="nav-label" aria-hidden="true" data-label="${mode.label}">${mode.label}</span><small aria-hidden="true">${mode.code}</small></a>`).join('');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const stopGlitches: (() => void)[] = [];
  for (const link of navigation.querySelectorAll<HTMLAnchorElement>('a')) {
    const label = link.querySelector<HTMLElement>('.nav-label')!;
    const original = label.dataset.label!;
    let timer: number | undefined;
    const stop = () => {
      window.clearInterval(timer);
      timer = undefined;
      label.textContent = translateText(original);
      link.classList.remove('is-scrambling');
    };
    const scramble = () => {
      stop();
      if (reducedMotion.matches) return;
      const glyphs = '01_/#<>+*░';
      const localized = translateText(original);
      let tick = 0;
      link.classList.add('is-scrambling');
      const update = () => {
        tick++;
        label.textContent = [...localized].map((letter, index) => letter === ' ' ? ' ' : index < (tick - 2) / 7 * localized.length ? letter : Math.random() < .65 ? glyphs[Math.floor(Math.random() * glyphs.length)] : letter).join('');
        if (tick >= 9) stop();
      };
      update();
      timer = window.setInterval(update, 45);
    };
    link.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') scramble(); });
    link.addEventListener('focus', () => { if (link.matches(':focus-visible')) scramble(); });
    link.addEventListener('pointerleave', stop);
    link.addEventListener('blur', stop);
    link.addEventListener('click', stop);
    stopGlitches.push(stop);
  }
  reducedMotion.addEventListener('change', () => stopGlitches.forEach(stop => stop()));
  window.addEventListener('languagechange', () => stopGlitches.forEach(stop => stop()));
  const reading = document.createElement('main');
  reading.className = 'portfolio-reading';
  reading.hidden = true;
  reading.innerHTML = `<div class="reading-topline"><a href="#explorar" class="reading-brand">h<span>_</span> <small>HUGO / DEV</small></a><span>LOCAL ARCHIVE <i></i> READ ONLY</span></div>
    <div class="archive-view">
      <header class="reading-hero"><p class="file-code">SYS / PERSONAL_ARCHIVE</p><h1 tabindex="-1">El otro lado<br>del <em>sistema.</em></h1><p class="reading-intro">Proyectos, recorrido y herramientas.<br>Sin perderte entre los cables.</p><span class="hero-counter">01—05 / ÍNDICE ABIERTO</span></header>
      <div class="archive-layout"><aside class="archive-index" aria-label="Índice del archivo"><span>DIRECTORIO /</span>${archiveSections.map(s => `<a href="#archivo/${s.id}" data-section="${s.id}"><small>${s.code}</small>${s.title}<span>↗</span></a>`).join('')}<a class="index-about" href="#sobre-mi">¿Quién está detrás? ↗</a></aside>
      <div class="archive-records">${archiveSections.map(section => `<section class="archive-section" id="record-${section.id}" aria-labelledby="title-${section.id}"><header><span class="file-code">${section.code} / ${section.id.toUpperCase()}</span><h2 id="title-${section.id}">${section.title}<span>_</span></h2><p>${section.description}</p></header>${section.id === 'proyectos' ? projects.map(project => `<article class="project-record"><a class="project-visual" href="#proyecto/${project.id}" aria-label="Abrir proyecto ${project.title}"><div class="project-circuit" aria-hidden="true"><i></i><i></i><i></i><i></i><b>0x87</b></div><span>INTERNAL SYSTEM / LIVE BUILD</span><strong>Entrar en<br>la brecha<span>↗</span></strong><small>THREE.JS / PROCEDURAL WORLD</small></a><div class="project-heading"><div><p class="file-code">${project.category}</p><h3>${project.title}</h3></div><a href="#proyecto/${project.id}" class="text-link">ABRIR FICHA ↗</a></div><p>${project.description}</p><ul class="tech-tags">${project.technologies.map(t => `<li>${t}</li>`).join('')}</ul></article>`).join('') : section.id === 'aptitudes' ? `<div class="skill-record"><p class="record-status">STACK DE ESTE PROYECTO / VERIFICABLE EN EL CÓDIGO</p><div class="skill-grid"><div><h3>Desarrollo web</h3><p>TypeScript<br>HTML · CSS<br>Vite</p></div><div><h3>Experiencias 3D</h3><p>Three.js · WebGL<br>Geometría procedural<br>Animación e interacción</p></div><div><h3>Implementación</h3><p>Diseño adaptable<br>Controles táctiles<br>Optimización de renderizado</p></div></div><p class="pending-note">El perfil completo de aptitudes está pendiente de incorporar.</p></div>` : `<div class="pending-record"><span aria-hidden="true">[ ··· ]</span><div><h3>Registro pendiente</h3><p>${section.id === 'experiencia' ? 'Puestos, empresas, fechas y aportaciones por incorporar.' : section.id === 'educacion' ? 'Estudios, centros, especialidades y fechas por incorporar.' : 'Reconocimientos, entidades, fechas y proyectos asociados por incorporar.'}</p></div><small>NO DATA YET</small></div>`}</section>`).join('')}</div></div>
    </div>
    <section class="about-view" hidden aria-labelledby="about-title"><header class="about-hero"><p class="file-code">SYS / IDENTITY / 0x01</p><h1 id="about-title" tabindex="-1">${profile.name}<span>_</span></h1><p class="about-surname">${profile.surname}</p></header><div class="about-grid"><div><p class="about-lead">${profile.introduction}</p><p>${profile.summary}</p><a href="#archivo/proyectos" class="text-link">CONSULTAR MIS PROYECTOS ↗</a></div><aside><p class="file-code">DOS FORMAS DE CONOCERME</p><a href="#explorar"><span>01 / EXPLORAR</span>Recorre el mundo.<b>↗</b></a><a href="#archivo/proyectos"><span>02 / LEER</span>Abre el archivo.<b>↗</b></a><p class="pending-note">${profile.note}</p></aside></div></section>
    <footer class="reading-footer"><span>HUGO / PERSONAL SYSTEM</span><a href="#explorar">VOLVER AL SISTEMA ↗</a><span>SIN SALIR DE LA SESIÓN</span></footer>`;
  const dialog = document.createElement('dialog');
  for (const id of ['experiencia', 'educacion', 'premios', 'aptitudes']) {
    const section = reading.querySelector(`#record-${id}`)!;
    section.querySelector('.pending-record, .skill-record')?.remove();
    const records = document.createElement('div');
    records.className = 'shared-memory-records';
    records.innerHTML = memoryRecords[id].map(record => `<article class="project-record">${memoryRecordMarkup(record)}</article>`).join('');
    section.append(records);
  }
  dialog.className = 'project-dialog';
  dialog.setAttribute('aria-labelledby', 'project-detail-title');
  root.append(reading, navigation, dialog);
  const directory = reading.querySelector<HTMLElement>('.archive-index')!;
  const directoryResizeObserver = new ResizeObserver(() => {
    if (directory.offsetHeight) directory.style.setProperty('--directory-height', `${directory.offsetHeight}px`);
  });
  directoryResizeObserver.observe(directory);
  const curtain = document.createElement('div');
  curtain.className = 'view-transition-curtain';
  curtain.setAttribute('aria-hidden', 'true');
  root.append(curtain);
  const revealElements = [...reading.querySelectorAll<HTMLElement>('.archive-section>header, .project-visual, .project-heading, .project-record>p, .project-record>.tech-tags, .pending-record, .skill-record, .reading-footer')];
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed');
      revealObserver.unobserve(entry.target);
    }
  }, { root: reading, threshold: .08, rootMargin: '0px 0px -35px 0px' });
  for (const element of revealElements) {
    element.classList.add('scroll-reveal');
    revealObserver.observe(element);
  }
  let viewAnimations: Animation[] = [];
  let transitionAnimation: Animation | undefined;
  let transitionId = 0;
  function animateEntrance(view: string) {
    viewAnimations.forEach(animation => animation.cancel());
    viewAnimations = [];
    if (reducedMotion.matches || view === 'explorar') return;
    const selector = view === 'sobre-mi'
      ? '.about-hero>.file-code, #about-title, .about-surname, .about-grid>div>*, .about-grid>aside>*'
      : '.reading-hero>.file-code, .reading-hero>h1, .reading-intro, .hero-counter, .archive-index';
    reading.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
      const title = element.matches('h1');
      const animation = element.animate([
        { opacity: 0, transform: `translateY(${title ? 24 : 12}px)` },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: title ? 750 : 550, delay: Math.min(index * 85, 650), easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
      viewAnimations.push(animation);
    });
  }
  let currentView = '';
  let lastSection = 'proyectos';
  let savedScroll = 0;
  let returnFocus: HTMLElement | null = null;
  const sectionIds = archiveSections.map(s => s.id);
  const sectionLinks = [...reading.querySelectorAll<HTMLAnchorElement>('[data-section]')];
  const sectionElements = sectionIds.map(id => reading.querySelector<HTMLElement>(`#record-${id}`)!);
  let scrollFrame = 0;

  function markSection(section: string) {
    for (const link of sectionLinks) {
      if (link.dataset.section === section) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  function syncDirectory() {
    scrollFrame = 0;
    if (currentView !== 'archivo' || dialog.open) return;
    const mobile = matchMedia('(max-width: 700px), (max-height: 500px) and (pointer: coarse)').matches;
    const marker = reading.getBoundingClientRect().top + (mobile ? 230 : 190);
    let section = sectionIds[0];
    for (let i = 0; i < sectionElements.length; i++) {
      if (sectionElements[i].getBoundingClientRect().top <= marker) section = sectionIds[i];
    }
    if (reading.scrollTop + reading.clientHeight >= reading.scrollHeight - 2) section = sectionIds[sectionIds.length - 1];
    if (section === lastSection) return;
    lastSection = section;
    markSection(section);
    // Keep deep links current without adding history entries or triggering a jump.
    history.replaceState(history.state, '', `#archivo/${section}`);
    const active = sectionLinks.find(link => link.dataset.section === section)!;
    const index = active.parentElement!;
    if (mobile) index.scrollTo({ left: active.offsetLeft - index.clientWidth / 2 + active.offsetWidth / 2, behavior: 'instant' });
  }
  function scheduleDirectorySync() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(syncDirectory);
  }
  reading.addEventListener('scroll', scheduleDirectorySync, { passive: true });
  window.addEventListener('resize', scheduleDirectorySync);

  function route() {
    const [path, requested] = location.hash.slice(1).split('/');
    const isProject = path === 'proyecto' && projects.some(p => p.id === requested);
    const view = path === 'sobre-mi' ? 'sobre-mi' : path === 'archivo' || isProject ? 'archivo' : 'explorar';
    const changed = view !== currentView;
    if (currentView === 'archivo' && changed) savedScroll = reading.scrollTop;
    if (changed) {
      currentView = view;
      root.dataset.view = view;
      reading.hidden = view === 'explorar';
      reading.querySelector<HTMLElement>('.archive-view')!.hidden = view !== 'archivo';
      reading.querySelector<HTMLElement>('.about-view')!.hidden = view !== 'sobre-mi';
      root.querySelector<HTMLElement>('.system-shell')!.inert = view !== 'explorar';
      onReading(view !== 'explorar');
      document.title = view === 'archivo' ? 'Archivo / Hugo' : view === 'sobre-mi' ? 'Sobre mí / Hugo' : 'HUGO / Internal system';
      reading.scrollTop = view === 'archivo' ? savedScroll : 0;
      if (view !== 'explorar') reading.querySelector<HTMLElement>(view === 'archivo' ? '.reading-hero h1' : '#about-title')!.focus({ preventScroll: true });
    }
    for (const link of navigation.querySelectorAll<HTMLAnchorElement>('a')) {
      if (link.dataset.view === view) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
    if (view === 'archivo') {
      const section = sectionIds.includes(requested) ? requested : lastSection;
      markSection(section);
      if (!isProject && path === 'archivo' && (section !== lastSection || !changed)) {
        reading.querySelector(`#record-${section}`)?.scrollIntoView({ block: 'start' });
      }
      lastSection = section;
      scheduleDirectorySync();
    }
    if (isProject) {
      const project = projects.find(p => p.id === requested)!;
      if (!dialog.open) returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.innerHTML = `<div class="detail-toolbar"><span class="file-code">ARCHIVE / PROJECT_01</span><button type="button" class="close-project">CERRAR <kbd>ESC</kbd> ×</button></div><p class="file-code">${project.category}</p><h2 id="project-detail-title">${project.title}<span>_</span></h2><p class="detail-lead">${project.description}</p><div class="detail-grid"><div><h3>EL PROYECTO</h3><p>${project.details}</p><h3>IMPLEMENTACIÓN</h3><ul>${project.implementation.map(item => `<li>${item}</li>`).join('')}</ul></div><aside><h3>PARTICIPACIÓN</h3><p>${project.role}</p><h3>TECNOLOGÍAS</h3><ul class="tech-tags">${project.technologies.map(t => `<li>${t}</li>`).join('')}</ul></aside></div><a class="detail-explore" href="#explorar">EXPLORAR EL PROYECTO <span>↗</span></a>`;
      dialog.querySelector('button')!.addEventListener('click', closeProject);
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
      if (view === 'archivo') returnFocus?.focus({ preventScroll: true });
    }
    if (changed) animateEntrance(view);
  }
  async function transitionRoute() {
    const path = location.hash.slice(1).split('/')[0];
    const nextView = path === 'sobre-mi' ? 'sobre-mi' : path === 'archivo' || path === 'proyecto' ? 'archivo' : 'explorar';
    const id = ++transitionId;
    if (!currentView || reducedMotion.matches || (nextView === currentView && !transitionAnimation)) { route(); return; }
    transitionAnimation?.cancel();
    curtain.classList.add('is-transitioning');
    transitionAnimation = curtain.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, fill: 'forwards', easing: 'ease-out' });
    try { await transitionAnimation.finished; } catch { return; }
    if (id !== transitionId) return;
    route();
    transitionAnimation.cancel();
    transitionAnimation = curtain.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, fill: 'forwards', easing: 'ease-out' });
    try { await transitionAnimation.finished; } catch { return; }
    if (id !== transitionId) return;
    transitionAnimation.cancel();
    transitionAnimation = undefined;
    curtain.classList.remove('is-transitioning');
  }
  function closeProject() { location.hash = `archivo/${lastSection}`; }
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const b = dialog.getBoundingClientRect(); if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom) closeProject(); } });
  window.addEventListener('hashchange', () => { void transitionRoute(); });
  reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches) return;
    transitionId++;
    transitionAnimation?.cancel();
    transitionAnimation = undefined;
    curtain.classList.remove('is-transitioning');
    viewAnimations.forEach(animation => animation.cancel());
    route();
  });
  route();
  return { isReading: () => currentView !== 'explorar' };
}
