import { useEffect, useRef, useState } from 'react';
import type { Sketch } from '../../sketches/types';

type Labels = {
  run: string; loading: string; pause: string; reseed: string; full: string;
  still: string; runAnyway: string;
};
type Props = { sketch: string; poster: string; alt: string; labels: Labels };

const loaders: Record<string, () => Promise<{ default: Sketch }>> = {
  'chromatic-fragments': () => import('../../sketches/chromatic-fragments'),
};

type State = 'poster' | 'loading' | 'running' | 'still';

/**
 * A live piece on a work page. Nothing heavy loads until the visitor presses run:
 * the sketch module is imported on demand. Reduced motion shows the still with a way out.
 */
export default function SketchStage({ sketch, poster, alt, labels }: Props) {
  const [state, setState] = useState<State>('poster');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const handle = useRef<ReturnType<Sketch> | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setState('still');
    return () => handle.current?.stop();
  }, []);

  async function run() {
    const load = loaders[sketch];
    if (!load || !canvasRef.current) return;
    setState('loading');
    const mod = await load();
    handle.current = mod.default(canvasRef.current);
    setState('running');
  }

  function pause() {
    handle.current?.stop();
    handle.current = null;
    setState('poster');
  }

  return (
    <div ref={stageRef} className="stage" data-state={state}>
      <img src={poster} alt={alt} className="stage__poster" hidden={state === 'running'} />
      <canvas ref={canvasRef} className="stage__canvas" hidden={state !== 'running'} aria-label={alt} />

      {state === 'poster' && (
        <div className="stage__overlay">
          <button type="button" className="stage__run" onClick={run}>{labels.run}</button>
        </div>
      )}
      {state === 'loading' && <div className="stage__overlay mono">{labels.loading}</div>}
      {state === 'running' && (
        <div className="stage__controls">
          <button type="button" onClick={pause}>{labels.pause}</button>
          <button type="button" onClick={() => handle.current?.reseed()}>{labels.reseed}</button>
          <button type="button" onClick={() => stageRef.current?.requestFullscreen?.()}>{labels.full}</button>
        </div>
      )}
      {state === 'still' && (
        <p className="stage__note">
          {labels.still}{' '}
          <button type="button" className="linklike" onClick={run}>{labels.runAnyway}</button>
        </p>
      )}
    </div>
  );
}
