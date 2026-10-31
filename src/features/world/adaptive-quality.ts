/** Active-frame timing only: pauses/loading do not influence the quality budget. */
export class AdaptiveQuality {
  level: number;
  private duration = 0;
  private slowDuration = 0;
  private fastDuration = 0;
  private samples = 0;
  private stableWindows = 0;

  constructor(private mobile: boolean, constrained = false) {
    this.level = constrained ? 2 : mobile ? 1 : 0;
  }

  reset() {
    this.duration = this.slowDuration = this.fastDuration = this.samples = 0;
    this.stableWindows = 0;
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
    this.duration = this.slowDuration = this.fastDuration = this.samples = 0;
    if (slow > .3 && this.level < 3) {
      this.level++;
      this.stableWindows = 0;
      return true;
    }
    // Require ~18s of headroom; never enable desktop effects on mobile.
    this.stableWindows = fast > .9 ? this.stableWindows + 1 : 0;
    if (this.stableWindows >= 10 && this.level > (this.mobile ? 1 : 0)) {
      this.level--;
      this.stableWindows = 0;
      return true;
    }
    return false;
  }
}
