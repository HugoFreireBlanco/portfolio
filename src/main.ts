import './styles/base.css';
import './styles/loader.css';
import { createLoader } from './features/loader/loader';

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  const curtain = document.createElement('div');
  curtain.className = 'initial-reveal';
  curtain.setAttribute('aria-hidden', 'true');
  document.body.append(curtain);
  curtain.addEventListener('animationend', () => curtain.remove(), { once: true });
  createLoader(app);
}
