import { translateText } from '../../i18n';

/** Keep complete text fragments for translation; only their presentation is split. */
export function createScrollLight(reading: HTMLElement, reducedMotion: MediaQueryList) {
  const elements = [...reading.querySelectorAll<HTMLElement>(
    '.reading-hero h1, .reading-intro, .archive-section h2, .project-record h3, .about-hero h1, .about-lead, .about-grid>div>p:not(.file-code)',
  )];
  const fragments: { host: HTMLElement; source: string }[] = [];
  for (const element of elements) {
    element.classList.add('scroll-light');
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    for (const node of nodes) {
      if (!node.data.trim()) continue;
      const host = document.createElement('span');
      host.dataset.noTranslate = '';
      fragments.push({ host, source: node.data });
      node.replaceWith(host);
    }
  }
  let groups: { element: HTMLElement; words: HTMLElement[] }[] = [];
  function localize() {
    for (const { host, source } of fragments) {
      host.replaceChildren(...translateText(source).split(/(\s+)/).filter(Boolean).map(text => {
        if (/^\s+$/.test(text)) return document.createTextNode(text);
        const word = document.createElement('span');
        word.className = 'light-word'; word.textContent = text;
        return word;
      }));
    }
    groups = elements.map(element => ({ element, words: [...element.querySelectorAll<HTMLElement>('.light-word')] }));
    update();
  }
  function update() {
    if (reading.hidden) return;
    const height = reading.clientHeight;
    const top = reading.getBoundingClientRect().top;
    const fullyLit = reducedMotion.matches || reading.scrollHeight - height - reading.scrollTop <= 2;
    for (const { element, words } of groups) {
      if (!element.getClientRects().length) continue;
      const rect = element.getBoundingClientRect();
      if (!fullyLit && (rect.bottom < top || rect.top > top + height)) continue;
      // Advance word by word above the lower edge; views without scroll stay lit.
      const progress = fullyLit ? 1 : Math.max(0, Math.min(1, (top + height * .94 - rect.top) / (height * .20 + rect.height * .45)));
      words.forEach((word, index) => {
        const light = Math.max(0, Math.min(1, progress * (words.length + 3) - index));
        word.style.opacity = String(.22 + light * .78);
      });
    }
  }
  window.addEventListener('languagechange', localize);
  reducedMotion.addEventListener('change', update);
  localize();
  return update;
}
