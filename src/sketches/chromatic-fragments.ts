import type { Sketch } from './types';

/**
 * Stand-in for Chromatic Fragments: a grey-level grid driven by a few sine functions.
 * TODO: replace with the p5.js port of the original Processing sketch.
 */
const chromaticFragments: Sketch = (canvas) => {
  const ctx = canvas.getContext('2d')!;
  let seed = Math.random() * 1000;
  let raf = 0;
  let visible = true;

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    canvas.width = Math.round(r.width * devicePixelRatio);
    canvas.height = Math.round(r.height * devicePixelRatio);
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  // Pause when scrolled away.
  const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
  io.observe(canvas);

  const draw = (t: number) => {
    raf = requestAnimationFrame(draw);
    if (!visible) return;
    const cols = 24;
    const size = canvas.width / cols;
    const rows = Math.ceil(canvas.height / size);
    const time = t / 1000;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const v = Math.sin(x * 0.7 + seed + time) * Math.cos(y * 0.5 - time * 0.6) + Math.sin((x + y) * 0.3 + seed);
        const g = Math.round(((v + 2) / 4) * 255);
        const q = Math.round(g / 64) * 64;
        ctx.fillStyle = `rgb(${q},${q},${q})`;
        ctx.fillRect(Math.floor(x * size), Math.floor(y * size), Math.ceil(size), Math.ceil(size));
      }
    }
  };
  raf = requestAnimationFrame(draw);

  return {
    stop() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); },
    reseed() { seed = Math.random() * 1000; },
  };
};

export default chromaticFragments;
