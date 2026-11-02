import './styles/base.css';
import './styles/loader.css';
import { createLoader } from './features/loader/loader';
import { initializeLanguages } from './i18n';
import './styles/home.css';

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  const curtain = document.createElement('div');
  curtain.className = 'initial-reveal';
  curtain.setAttribute('aria-hidden', 'true');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.append(curtain);
    curtain.addEventListener('animationend', () => curtain.remove(), { once: true });
  }
  createLoader(app);
  initializeLanguages();
}
