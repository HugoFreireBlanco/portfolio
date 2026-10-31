interface Particle { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number }

/** Subtle data fragments: pointer impulse, short trails, no replacement cursor. */
export function createParticles(canvas: HTMLCanvasElement, shell: HTMLElement, options: { cursorOnly?: boolean } = {}): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const context = ctx;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = { x: -1000, y: -1000, px: -1000, py: -1000 };
  let width = 0;
  let height = 0;
  let frame = 0;
  let lastTime = 0;
  let spawnTime = 0;
  const particles: Particle[] = [];

  function resize(): void {
    width = shell.clientWidth;
    height = shell.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles.length = 0;
    if (!options.cursorOnly) for (let i = 0; i < (width < 700 ? 22 : 55); i++) spawn(Math.random() * width, Math.random() * height, false);
    if (motion.matches) draw(0);
  }

  function spawn(x: number, y: number, interactive: boolean): void {
    if (particles.length >= 120) {
      if (!interactive) return;
      particles.shift();
    }
    const maxLife = interactive ? 30 + Math.random() * 28 : 180 + Math.random() * 300;
    particles.push({ x, y, vx: (Math.random() - .5) * (interactive ? 1.8 : .25), vy: (Math.random() - .5) * (interactive ? 1.8 : .25), life: maxLife, maxLife, size: interactive ? 1 + Math.random() * 2 : .7 + Math.random() });
  }

  function draw(delta: number): void {
    context.clearRect(0, 0, width, height);
    const corrupt = ['interrupted', 'compromised', 'entering'].includes(shell.dataset.state || '');
    const step = delta / 16.67;
    for (let index = particles.length - 1; index >= 0; index--) {
      const p = particles[index];
      const dx = p.x - pointer.x;
      const dy = p.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 120 && distance > 1 && !motion.matches) {
        p.vx += dx / distance * .025 * step;
        p.vy += dy / distance * .025 * step;
      }
      p.x += p.vx * step;
      p.y += p.vy * step;
      p.life -= step;
      const alpha = Math.min(p.life / 30, (p.maxLife - p.life + 10) / 25, 1) * (p.maxLife < 70 ? .55 : .25);
      context.strokeStyle = context.fillStyle = corrupt && index % 3 !== 0 ? `rgba(180,52,62,${alpha})` : `rgba(91,147,156,${alpha})`;
      context.fillRect(p.x, p.y, p.size * 2.5, p.size);
      if (distance < 110 && index % 3 === 0) {
        context.globalAlpha = .15;
        context.beginPath();
        context.moveTo(p.x, p.y);
        context.lineTo(pointer.x, pointer.y);
        context.stroke();
        context.globalAlpha = 1;
      }
      if (p.life <= 0 || p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20) particles.splice(index, 1);
    }
  }

  function animate(time: number): void {
    if (shell.dataset.state === 'entered' || shell.inert) {
      context.clearRect(0, 0, width, height);
      return;
    }
    const delta = lastTime ? Math.min(time - lastTime, 40) : 16;
    lastTime = time;
    if (!options.cursorOnly && time - spawnTime > 160) {
      spawn(Math.random() * width, Math.random() * height, false);
      spawnTime = time;
    }
    draw(delta);
    frame = requestAnimationFrame(animate);
  }

  function restart(): void {
    cancelAnimationFrame(frame);
    lastTime = 0;
    if (!document.hidden && !motion.matches && !shell.inert && shell.dataset.state !== 'entered') frame = requestAnimationFrame(animate);
    else context.clearRect(0, 0, width, height);
  }

  shell.addEventListener('pointermove', event => {
    if (motion.matches || event.pointerType !== 'mouse' || shell.dataset.state === 'entered') return;
    const rect = shell.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    if (Math.hypot(pointer.x - pointer.px, pointer.y - pointer.py) > 9) {
      spawn(pointer.x, pointer.y, true);
      pointer.px = pointer.x;
      pointer.py = pointer.y;
    }
  }, { passive: true });
  shell.addEventListener('pointerleave', () => { pointer.x = pointer.y = -1000; });
  new ResizeObserver(resize).observe(shell);
  new MutationObserver(restart).observe(shell, { attributes: true, attributeFilter: ['inert', 'data-state'] });
  motion.addEventListener('change', restart);
  document.addEventListener('visibilitychange', restart);
  resize();
  restart();
}
