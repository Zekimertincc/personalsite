/** A sketch takes a canvas, starts drawing, and returns how to stop or reseed it. */
export type Sketch = (canvas: HTMLCanvasElement) => { stop(): void; reseed(): void };
