import type * as THREE from 'three';

/** Opt-in diagnostics. GPU results are polled asynchronously, never waited for. */
export function createRenderMetrics(renderer: THREE.WebGLRenderer, layer: HTMLElement) {
  const enabled = new URLSearchParams(location.search).has('perf');
  if (!enabled) return { begin() {}, end(_frame: number, _cpu: number) {} };
  const panel = document.createElement('output');
  panel.className = 'render-metrics';
  panel.dataset.noTranslate = '';
  layer.append(panel);
  const gl = renderer.getContext() as WebGL2RenderingContext;
  const ext = gl.getExtension('EXT_disjoint_timer_query_webgl2');
  const pending: WebGLQuery[] = [];
  let current: WebGLQuery | null = null;
  let gpu = 0;
  let reported = performance.now();
  const frames: number[] = [];
  let cpuTotal = 0;
  renderer.info.autoReset = false;
  return {
    begin() {
      renderer.info.reset();
      if (!ext) return;
      const query = pending[0];
      if (query && gl.getQueryParameter(query, gl.QUERY_RESULT_AVAILABLE)) {
        if (!gl.getParameter(ext.GPU_DISJOINT_EXT)) gpu = gl.getQueryParameter(query, gl.QUERY_RESULT) / 1e6;
        gl.deleteQuery(query); pending.shift();
      }
      if (pending.length < 4) {
        current = gl.createQuery();
        if (current) gl.beginQuery(ext.TIME_ELAPSED_EXT, current);
      }
    },
    end(frame: number, cpu: number) {
      if (current && ext) {
        gl.endQuery(ext.TIME_ELAPSED_EXT); pending.push(current); current = null;
      }
      frames.push(frame * 1000); cpuTotal += cpu;
      if (performance.now() - reported < 1000) return;
      frames.sort((a, b) => a - b);
      const p95 = frames[Math.floor(frames.length * .95)];
      const cpuMs = cpuTotal / frames.length;
      layer.dataset.frameP95 = p95.toFixed(1);
      layer.dataset.cpuMs = cpuMs.toFixed(1);
      layer.dataset.gpuMs = gpu.toFixed(1);
      panel.textContent = `${layer.dataset.quality} · DPR ${layer.dataset.renderRatio}\nFrame p95 ${p95.toFixed(1)} ms · CPU ${cpuMs.toFixed(1)} ms · GPU ${gpu ? gpu.toFixed(1) : 'n/a'} ms\n${renderer.info.render.calls} draws · ${Math.round(renderer.info.render.triangles / 1000)}k triangles (all passes)`;
      frames.length = 0; cpuTotal = 0; reported = performance.now();
    },
  };
}
