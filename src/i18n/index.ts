import es from './es';
import en from './en';
import './language.css';

export type Language = 'es' | 'en';
type Key = keyof typeof es;
const dictionaries = { es, en };
let language: Language = 'en';
try { if (localStorage.getItem('hugo-language') === 'es') language = 'es'; } catch { /* Optional preference storage. */ }
export const getLanguage = () => language;
export function t(key: Key, values: Record<string, string | number> = {}): string {
  return dictionaries[language][key].replace(/\{(\w+)\}/g, (_, name: string) => String(values[name] ?? `{${name}}`));
}

// Resolve existing narrative markup in either language without recreating its DOM,
// focus, animations, dialogs or gameplay state. All copy lives in the two catalogs.
const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();
const lookup = new Map<string, Key>();
const uppercaseLookup = new Map<string, Key>();
for (const dictionary of [es, en]) for (const [key, value] of Object.entries(dictionary)) {
  if (!value.includes('{')) lookup.set(normalize(value), key as Key);
}
// Technical chapter codes retain their spelling; old scene copy resolves to the same catalog.
const aliases: Record<string, Key> = {
  'PERSONAL PORTFOLIO / INITIALIZING': 'initializing', 'LOCAL SESSION': 'localSession',
  'SYSTEM STABLE / CORE DESBLOQUEADO · Reanuda el sistema al final del bus.': 'allRecovered',
  'IDENTITY': 'identity', 'PROJECTS': 'projects', 'MEMORY': 'memory',
  'IDENTIDAD': 'identity', 'PROYECTOS': 'projects', 'EXPERIENCIA': 'experience',
  'EDUCACION': 'education', 'PREMIOS': 'awards', 'APTITUDES': 'skills',
};
for (const [source, key] of Object.entries(aliases)) lookup.set(source, key);
for (const [source, key] of lookup) uppercaseLookup.set(source.toLocaleUpperCase(), key);
const escapeRegex = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const patterns = [es, en].flatMap(dictionary => Object.entries(dictionary).filter(([, text]) => text.includes('{')).map(([key, text]) => {
  const names: string[] = [];
  const expression = text.split(/(\{\w+\})/).map(part => {
    if (/^\{\w+\}$/.test(part)) {
      const name = part.slice(1, -1);
      names.push(name);
      return /^(count|total|distance|number)$/.test(name) ? '(\\d+)' : '(.+?)';
    }
    return escapeRegex(part);
  }).join('');
  return { key: key as Key, names, regex: new RegExp(`^${expression}$`, 'i') };
})).sort((a, b) => es[b.key].replace(/\{\w+\}/g, '').length - es[a.key].replace(/\{\w+\}/g, '').length);
const cache = new Map<string, string>();
export function translateText(source: string): string {
  if (!source.trim()) return source;
  const cached = cache.get(source);
  if (cached !== undefined) return cached;
  const core = normalize(source);
  let result = core;
  const key = lookup.get(core);
  if (key) result = t(key);
  else {
    const caseKey = uppercaseLookup.get(core.toLocaleUpperCase());
    if (caseKey) {
      result = t(caseKey);
      if (core === core.toLocaleUpperCase()) result = result.toLocaleUpperCase();
    } else {
      const pattern = patterns.find(item => item.regex.test(core));
      if (pattern) {
        const match = core.match(pattern.regex)!;
        const values = Object.fromEntries(pattern.names.map((name, index) => [name, translateText(match[index + 1])]));
        result = t(pattern.key, values);
      } else if (/^[›!] /.test(core)) result = `${core.slice(0, 2)}${translateText(core.slice(2))}`;
      else if (/^\d{2} \/ /.test(core)) result = `${core.slice(0, 5)}${translateText(core.slice(5))}`;
      else if (/^(ID|PRJ|EXP|EDU|AWD|SKL) \/ /.test(core)) {
        const split = core.indexOf(' / ') + 3;
        result = core.slice(0, split) + translateText(core.slice(split));
      } else if (core.endsWith(' ↗')) result = translateText(core.slice(0, -2)) + ' ↗';
      else if (core.includes(' · ') || core.includes(' / ')) {
        result = core.split(/( · | \/ )/).map(part => part === ' · ' || part === ' / ' ? part : translateText(part)).join('');
      }
    }
  }
  // Keep whitespace boundaries around inline elements such as keyboard hints.
  if (core === core.toLocaleUpperCase()) result = result.toLocaleUpperCase();
  result = (source.match(/^\s*/)?.[0] ?? '') + result + (source.match(/\s*$/)?.[0] ?? '');
  if (cache.size > 3000) cache.clear();
  cache.set(source, result);
  return result;
}

const attributes = ['aria-label', 'aria-description', 'title', 'alt', 'placeholder', 'data-text', 'data-label'];
function localize(node: Node) {
  if (node instanceof Text) {
    if (node.parentElement?.closest('script, style, [data-no-translate], .is-scrambling')) return;
    if (node.parentElement?.closest('kbd') && node.data.trim() === 'ENTER') return;
    const translated = translateText(node.data);
    if (node.data !== translated) node.data = translated;
  } else if (node instanceof Element) {
    if (node.matches('script, style, [data-no-translate]')) return;
    for (const name of attributes) {
      const source = node.getAttribute(name);
      if (source !== null) {
        const translated = translateText(source);
        if (source !== translated) node.setAttribute(name, translated);
      }
    }
    if (node.matches('meta[name="description"]')) {
      const value = t('description');
      if (node.getAttribute('content') !== value) node.setAttribute('content', value);
    }
    for (const child of node.childNodes) localize(child);
  }
}
function refreshSwitches() {
  document.querySelectorAll<HTMLElement>('.language-switcher').forEach(group => {
    group.setAttribute('aria-label', t('language'));
    const button = group.querySelector<HTMLButtonElement>('button')!;
    button.textContent = language.toUpperCase();
    button.lang = language;
    button.dataset.language = language;
    button.setAttribute('aria-label', t('switchLanguage'));
  });
}
export function setLanguage(next: Language) {
  if (language === next) return;
  language = next;
  cache.clear();
  try { localStorage.setItem('hugo-language', next); } catch { /* Optional preference storage. */ }
  document.documentElement.lang = next;
  localize(document.documentElement);
  refreshSwitches();
  window.dispatchEvent(new Event('languagechange'));
}
function makeSwitch() {
  const group = document.createElement('div');
  group.className = 'language-switcher';
  group.setAttribute('role', 'group');
  group.setAttribute('data-no-translate', '');
  group.innerHTML = '<button type="button"></button>';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let glitchTimer: number | undefined;
  const stopGlitch = () => {
    window.clearInterval(glitchTimer);
    group.classList.remove('is-switching');
    group.querySelector('button')!.textContent = language.toUpperCase();
  };
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) stopGlitch(); });
  group.addEventListener('click', event => {
    const button = (event.target as Element).closest<HTMLButtonElement>('button');
    if (!button) return;
    stopGlitch();
    setLanguage(language === 'es' ? 'en' : 'es');
    if (reducedMotion.matches) return;
    const glyphs = '01_/#<>+';
    let tick = 0;
    group.classList.add('is-switching');
    const scramble = () => {
      const target = language.toUpperCase();
      button.textContent = [...target].map((letter, index) => tick > 3 + index * 3 ? letter : glyphs[Math.floor(Math.random() * glyphs.length)]).join('');
      if (++tick >= 10 || !group.isConnected) stopGlitch();
    };
    scramble();
    glitchTimer = window.setInterval(scramble, 36);
  });
  return group;
}
export function initializeLanguages() {
  document.documentElement.lang = language;
  document.body.append(makeSwitch());
  localize(document.documentElement);
  refreshSwitches();
  const observer = new MutationObserver(mutations => {
    const roots = new Set<Node>();
    for (const mutation of mutations) {
      if (mutation.type === 'childList') mutation.addedNodes.forEach(node => roots.add(node));
      else if (mutation.type === 'attributes') {
        if (attributes.includes(mutation.attributeName ?? '')) roots.add(mutation.target);
      } else roots.add(mutation.target);
    }
    for (const node of roots) if (node.isConnected) localize(node);
    // Native modal dialogs live in the top layer, so they get an accessible copy.
    let addedSwitch = false;
    document.querySelectorAll<HTMLDialogElement>('dialog[open]').forEach(dialog => {
      if (!dialog.querySelector('.language-switcher')) { dialog.append(makeSwitch()); addedSwitch = true; }
    });
    if (addedSwitch) refreshSwitches();
  });
  observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...attributes, 'open'] });
}
