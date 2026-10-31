/** Active-frame timing only: pauses/loading do not influence the quality budget. */
export class AdaptiveQuality {
  level: number;
  private duration = 0;
  private slowDuration = 0;
  private fastDuration = 0;
  private samples = 0;
  private upgradeDelay = 10;
  private stableSeconds = 0;
  private trialWindows = 0;

  constructor(private mobile: boolean, constrained = false) {
    this.level = constrained ? 2 : mobile ? 1 : 0;
  }

  reset() {
    this.duration = this.slowDuration = this.fastDuration = this.samples = 0;
    this.stableSeconds = 0;
  }

  sample(seconds: number): boolean {
    // Count genuinely slow 5–20fps frames, ignoring background/debugger stalls.
    if (seconds <= 0 || seconds >= 1) { this.reset(); return false; }
    this.duration += seconds;
    this.samples++;
    if (seconds > (this.mobile ? .038 : .027)) this.slowDuration += seconds;
    if (seconds < .021) this.fastDuration += seconds;
    if (this.duration < 1.8 || this.samples < 12) return false;
    const slow = this.slowDuration / this.duration;
    const fast = this.fastDuration / this.duration;
    const windowDuration = this.duration;
    this.duration = this.slowDuration = this.fastDuration = this.samples = 0;
    if (slow > .3 && this.level < 3) {
      if (this.trialWindows > 0) this.upgradeDelay = Math.min(60, this.upgradeDelay * 2);
      this.trialWindows = 0;
      this.level++;
      this.stableSeconds = 0;
      return true;
    }
    if (this.trialWindows > 0) this.trialWindows--;
    // All devices can reach full quality. Failed upgrades get a longer cooldown.
    this.stableSeconds = fast > .9 ? this.stableSeconds + windowDuration : 0;
    if (this.stableSeconds >= this.upgradeDelay && this.level > 0) {
      this.level--;
      this.trialWindows = 5;
      this.stableSeconds = 0;
      return true;
    }
    return false;
  }
}

/** Leave frame-time headroom instead of selecting a tier barely reaching 30fps. */
export function calibrationFits(samples: readonly number[], mobile: boolean): boolean {
  if (samples.length < 6 || samples.some(value => !Number.isFinite(value) || value <= 0)) return false;
  const sorted = [...samples].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length * .75)] <= (mobile ? 28 : 24);
}
