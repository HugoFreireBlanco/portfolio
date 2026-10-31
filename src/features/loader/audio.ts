/** Optional, locally synthesized interface sounds. No audio requests or autoplay. */
export class InterfaceAudio {
  private context?: AudioContext;
  enabled = false;

  async toggle(): Promise<boolean> {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.context ??= new AudioContext();
      await this.context.resume();
      this.tick(620);
    }
    return this.enabled;
  }

  tick(frequency = 320): void {
    if (!this.enabled || !this.context) return;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    const time = this.context.currentTime;
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, time);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * .55, time + .09);
    gain.gain.setValueAtTime(.025, time);
    gain.gain.exponentialRampToValueAtTime(.001, time + .12);
    oscillator.connect(gain).connect(this.context.destination);
    oscillator.start();
    oscillator.stop(time + .13);
  }
}
