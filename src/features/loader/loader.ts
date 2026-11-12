import { circuitMarkup } from './circuit';
import { InterfaceAudio } from './audio';
import { bootSteps } from './boot';
import { createParticles } from './particles';
import type { WorldController } from '../world/world';
import { createPortfolio } from '../portfolio/portfolio';
import { getLanguage } from '../../i18n';
import { unlockArchive } from '../portfolio/archive-access';

const wait = (ms: number) => new Promise<void>(resolve => window.setTimeout(resolve, ms));

export function createLoader(root: HTMLElement): void {
  root.innerHTML = `
    <main class="system-shell" data-state="home">
      <div class="ambient" aria-hidden="true"></div>
      ${circuitMarkup()}
      <canvas class="data-particles" aria-hidden="true"></canvas>
      <div class="screen-texture" aria-hidden="true"></div>
      <div class="interference" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <header class="masthead">
        <a class="brand" href="#inicio" aria-label="Volver al inicio"><span class="brand-mark" aria-hidden="true">h<span>_</span></span><span>HUGO <span class="brand-divider">/</span> <span class="brand-sub">DEV</span></span></a>
        <div class="connection"><span class="status-dot"></span><span id="signal-label">CONNECTING</span><span class="connection-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div>
      </header>

      <section class="boot-console" aria-labelledby="boot-title">
        <div class="console-meta"><span id="access-label">SYS / ACCESS_001</span><span class="protocol-version">127.0.0.1</span></div>
        <div class="title-block">
          <p class="eyebrow" id="eyebrow">PERSONAL PORTFOLIO / INITIALIZING</p>
          <h1 id="boot-title"><span class="title-line" id="title-first" data-text="HUGO /">HUGO /</span><span class="title-line" id="title-second" data-text="SOFTWARE DEVELOPER">SOFTWARE DEVELOPER</span><span class="title-cursor" aria-hidden="true">_</span></h1>
        </div>
        <div class="load-module">
          <div class="load-heading"><span class="phase" id="phase-label">LOADING PORTFOLIO DATA…</span><span class="percentage"><span id="progress-number">000</span><span class="percentage-sign">%</span></span></div>
          <div class="progress-track" role="progressbar" aria-label="Secuencia narrativa de conexión" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-fill"></div><div class="progress-grid" aria-hidden="true"></div></div>
        </div>
        <div class="event-log" aria-label="Registro de conexión"></div>
        <div class="action-area"><button class="enter-button terminal-prompt" type="button" disabled><span class="prompt-chevron" aria-hidden="true">&gt;</span><span id="enter-label"><span class="keyboard-prompt">PULSA <kbd>ENTER</kbd> PARA ACCEDER</span><span class="touch-prompt">TOCA PARA ACCEDER</span></span><span class="prompt-cursor" aria-hidden="true">_</span></button></div>
        <p class="sr-only" id="boot-announcement" role="status" aria-live="polite"></p>
      </section>

      <footer class="system-footer"><span class="footer-left"><span class="footer-cross">+</span> LOCAL SESSION <span class="footer-muted">/ 0x7F</span></span><button class="sound-button" type="button" aria-pressed="false" aria-label="Activar sonido"><span class="sound-wave" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span id="sound-label">SOUND OFF</span></button></footer>
      <div class="corner corner--tl" aria-hidden="true"></div><div class="corner corner--tr" aria-hidden="true"></div><div class="corner corner--bl" aria-hidden="true"></div><div class="corner corner--br" aria-hidden="true"></div>
    </main>`;

  const get = <T extends HTMLElement = HTMLElement>(selector: string) => root.querySelector<T>(selector)!;
  const shell = get('.system-shell');
  root.append(...shell.querySelectorAll('.corner'));
  const brand = get<HTMLAnchorElement>('.brand');
  brand.classList.add('global-brand');
  brand.title = 'Volver al inicio';
  root.append(brand);
  const enter = get<HTMLButtonElement>('.enter-button');
  const audio = new InterfaceAudio();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  createParticles(root.querySelector<HTMLCanvasElement>('.data-particles')!, shell);
  let running = false;
  let glitchTimer: number | undefined;
  let glitchEnd: number | undefined;
  let world: WorldController | undefined;
  let worldEntered = false;
  try { worldEntered = sessionStorage.getItem('hugo-world-entered-v1') === 'true'; } catch { /* Optional session save. */ }
  const portfolio = createPortfolio(root, reading => {
    world?.setPaused(reading);
    if (!reading && shell.dataset.state === 'home') queueMicrotask(() => { void boot(); });
  });

  function title(first: string, second: string): void {
    for (const [id, text] of [['#title-first', first], ['#title-second', second]]) {
      get(id).textContent = text;
      get(id).dataset.text = text;
    }
  }

  function glitch(): void {
    if (reducedMotion.matches || document.hidden || portfolio.isReading()) return;
    window.clearTimeout(glitchEnd);
    shell.classList.remove('is-glitching');
    void shell.offsetWidth;
    shell.classList.add('is-glitching');
    glitchEnd = window.setTimeout(() => shell.classList.remove('is-glitching'), 560);
    audio.tick(95);
  }

  function log(message: string, warning = false): void {
    const line = document.createElement('p');
    line.className = `log-line${warning ? ' log-line--warning' : ''}`;
    line.textContent = `${warning ? '!' : '›'} ${message}`;
    const container = get('.event-log');
    container.append(line);
    while (container.children.length > 2) container.firstElementChild?.remove();
  }

  function progress(value: number): void {
    get('#progress-number').textContent = value.toString().padStart(3, '0');
    get('.progress-track').setAttribute('aria-valuenow', String(value));
    shell.style.setProperty('--progress', `${value}%`);
  }

  function startInterference(): void {
    window.clearInterval(glitchTimer);
    glitchTimer = window.setInterval(glitch, 3800);
  }

  async function boot(): Promise<void> {
    if (running) return;
    running = true;
    if (worldEntered) {
      try {
        if (!world) {
          const { prepareWorld } = await import('../world/world');
          world = await prepareWorld(root);
          world.setPaused(portfolio.isReading());
          world.resume();
        }
        shell.dataset.state = 'entered';
        root.dataset.worldEntered = 'true';
        get('.boot-console').hidden = true;
        get('#signal-label').textContent = 'LOCAL SESSION ACTIVE';
        running = false;
        return;
      } catch { worldEntered = false; }
    }
    window.clearInterval(glitchTimer);
    shell.dataset.state = 'booting';
    get('.boot-console').hidden = false;
    enter.disabled = true;
    enter.dataset.action = 'enter';
    get('#enter-label').innerHTML = '<span class="keyboard-prompt">PULSA <kbd>ENTER</kbd> PARA ACCEDER</span><span class="touch-prompt">TOCA PARA ACCEDER</span>';
    get('#signal-label').textContent = 'CONNECTING';
    get('#access-label').textContent = 'SYS / ACCESS_001';
    get('#eyebrow').textContent = 'PERSONAL PORTFOLIO / INITIALIZING';
    get('#phase-label').textContent = 'LOADING PORTFOLIO DATA…';
    get('#boot-announcement').textContent = '';
    get('.event-log').replaceChildren();
    title('HUGO /', 'SOFTWARE DEVELOPER');
    progress(0);
    log('Opening local channel');
    try {
      // Prepare the heavy scene during the fictional handshake, never on entry.
      for (const step of bootSteps(root)) await step.run();
      let preparationError: unknown;
      const preparation = (async () => {
        if (world) return;
        const { prepareWorld } = await import('../world/world');
        world = await prepareWorld(root);
        world.setPaused(portfolio.isReading());
        shell.dataset.worldReady = 'true';
      })().catch(error => { preparationError = error; });
      for (let value = 1; value <= 87; value++) {
        await wait(reducedMotion.matches ? 8 : value < 65 ? 54 : 145);
        progress(value);
        if (value === 38) log('Handshake acknowledged');
        if (value === 65) {
          shell.dataset.state = 'unstable';
          get('#signal-label').textContent = 'SIGNAL UNSTABLE';
          get('#phase-label').textContent = 'PACKET LOSS DETECTED';
          log('Unknown process detected', true);
          glitch();
        }
        if ([72, 78, 82, 86].includes(value)) {
          glitch();
          if (!reducedMotion.matches) {
            title('HUG0 /', getLanguage() === 'es' ? 'DES_RR0LLAD0R S0FTW_RE' : 'S0FTW_RE DEV//OPER');
            await wait(140);
            title('HUGO /', 'SOFTWARE DEVELOPER');
          }
        }
      }
      shell.dataset.state = 'interrupted';
      get('#signal-label').textContent = 'SIGNAL LOST';
      get('#phase-label').textContent = 'CONNECTION TERMINATED';
      log('Remote integrity check failed', true);
      title('CONNECTION', 'LOST.');
      glitch();
      await wait(reducedMotion.matches ? 120 : 900);
      shell.dataset.state = 'blackout';
      await wait(reducedMotion.matches ? 80 : 650);
      // Slow devices keep the blackout until GPU uploads and warm-up are complete.
      await preparation;
      if (preparationError) throw preparationError;
      shell.dataset.state = 'compromised';
      title('SYSTEM', 'COMPROMISED');
      get('#eyebrow').textContent = 'CONNECTION LOST / ACCESS FOUND';
      get('#signal-label').textContent = 'SYSTEM BREACHED';
      get('#access-label').textContent = 'SYS / OVERRIDE_087';
      get('#phase-label').textContent = 'INTEGRITY FAILURE';
      get('.event-log').replaceChildren();
      log('Security boundary bypassed', true);
      log('Recovery process ready for deployment');
      get('#boot-announcement').textContent = 'La conexión ficticia se ha interrumpido al 87 %. Sistema comprometido. Ya puedes acceder.';
      enter.disabled = false;
      glitch();
      startInterference();
    } catch {
      unlockArchive();
      shell.dataset.state = 'error';
      title('INITIALIZATION', 'FAILED.');
      get('#phase-label').textContent = 'NO SE PUDO PREPARAR LA INTERFAZ';
      get('#signal-label').textContent = 'RETRY REQUIRED';
      get('#enter-label').textContent = 'REINTENTAR CONEXIÓN';
      get('#boot-announcement').textContent = 'Error de preparación. Puedes reintentar.';
      enter.dataset.action = 'retry';
      enter.disabled = false;
    } finally {
      running = false;
    }
  }

  enter.addEventListener('click', async () => {
    if (enter.dataset.action === 'retry') { void boot(); return; }
    if (shell.dataset.state !== 'compromised') return;
    window.clearInterval(glitchTimer);
    shell.dataset.state = 'entering';
    enter.disabled = true;
    audio.tick(680);
    glitch();
    const source = get('.progress-track').getBoundingClientRect();
    const packet = document.createElement('div');
    packet.className = 'packet-transfer';
    packet.style.setProperty('--packet-x', `${source.x + source.width * .435}px`);
    packet.style.setProperty('--packet-y', `${source.y + source.height / 2}px`);
    root.append(packet);
    await wait(reducedMotion.matches ? 0 : 600);
    get('.boot-console').hidden = true;
    shell.dataset.state = 'entered';
    root.dataset.worldEntered = 'true';
    worldEntered = true;
    try { sessionStorage.setItem('hugo-world-entered-v1', 'true'); } catch { /* Optional session save. */ }
    get('#signal-label').textContent = 'RECOVERY PROCESS DEPLOYED';
    const journey = world!.enter(source);
    world!.setPaused(portfolio.isReading());
    window.setTimeout(() => packet.remove(), reducedMotion.matches ? 0 : 500);
    await journey;
    get('#signal-label').textContent = 'LOCAL SESSION ACTIVE';
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Enter' || event.repeat || event.isComposing || event.altKey || event.ctrlKey || event.metaKey) return;
    if (portfolio.isReading()) return;
    // Native controls retain their own keyboard behaviour (sound, links, replay).
    const target = event.target;
    if (target instanceof Element && target.closest('button, a, input, textarea, select, [contenteditable="true"]')) return;
    if (enter.disabled || !['compromised', 'error'].includes(shell.dataset.state || '')) return;
    event.preventDefault();
    enter.click();
  });
  get('.sound-button').addEventListener('click', async () => {
    try {
      const enabled = await audio.toggle();
      get('.sound-button').setAttribute('aria-pressed', String(enabled));
      get('.sound-button').setAttribute('aria-label', enabled ? 'Desactivar sonido' : 'Activar sonido');
      get('#sound-label').textContent = enabled ? 'SOUND ON' : 'SOUND OFF';
    } catch { get('#sound-label').textContent = 'AUDIO UNAVAILABLE'; }
  });
  document.addEventListener('visibilitychange', () => {
    window.clearInterval(glitchTimer);
    if (!document.hidden && shell.dataset.state === 'compromised') startInterference();
  });
  get('.boot-console').hidden = true;
  if (!portfolio.isReading()) void boot();
}
