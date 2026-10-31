/** Decorative board. Deterministic geometry keeps reloads and resizing stable. */
export function circuitMarkup(): string {
  const paths = Array.from({ length: 22 }, (_, index) => {
    const y = 80 + index * 38;
    const bend = 130 + (index % 6) * 48;
    const end = 300 + (index % 5) * 37;
    return `<path class="trace ${index % 7 === 0 ? 'trace--corrupt' : ''}" d="M-20 ${y} H${bend} l80 ${index % 2 ? -80 : 80} H${end + 80} l55 ${index % 2 ? -55 : 55} H${end + 200}"/><circle cx="${end + 200}" cy="${y + (index % 2 ? -135 : 135)}" r="3"/>`;
  }).join('');
  // The mirrored board surrounds a deliberately calm, readable centre.
  return `<svg class="circuit-board" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><radialGradient id="board-mask"><stop offset="0" stop-color="white" stop-opacity="0"/><stop offset=".6" stop-color="white" stop-opacity=".25"/><stop offset="1" stop-color="white"/></radialGradient><mask id="board-vignette"><rect width="1600" height="1000" fill="url(#board-mask)"/></mask></defs><g mask="url(#board-vignette)"><g>${paths}</g><g transform="translate(1600 1000) rotate(180)">${paths}</g><g class="board-chips"><rect x="86" y="418" width="112" height="152" rx="5"/><rect x="1400" y="340" width="130" height="100" rx="5"/><rect x="290" y="790" width="96" height="70" rx="3"/><rect x="1260" y="110" width="94" height="94" rx="3"/></g></g></svg>`;
}
