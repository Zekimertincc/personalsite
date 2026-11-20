import { useEffect, useState } from 'react';

type Labels = { onair: string; offline: string; here: string; tune: string; stop: string };
type Props = { title: string; code: string; labels: Labels };

/**
 * The bar on top of every page. It is rendered with transition:persist,
 * so it keeps playing while the visitor moves between pages.
 *
 * TODO (v2):
 * - play the Strudel code with @strudel/web on "tune in" (browsers need a click before sound)
 * - connect to PUBLIC_RADIO_URL (Socket.IO on the homelab) for the program and the listener count
 */
export default function RadioBar({ title, code, labels }: Props) {
  const [playing, setPlaying] = useState(false);
  const [listeners, setListeners] = useState<number | null>(null);
  const radioUrl = import.meta.env.PUBLIC_RADIO_URL as string | undefined;

  useEffect(() => {
    if (!radioUrl) return;
    // Placeholder: replace with socket.io-client once the service exists.
    setListeners(null);
  }, [radioUrl]);

  const oneLine = code.replace(/\s+/g, ' ');

  return (
    <div className="radio-bar" role="region" aria-label="Radio">
      <span className="radio-bar__live">
        <span aria-hidden="true" className="radio-bar__dot" data-on={playing} />
        {labels.onair}
      </span>
      <span className="radio-bar__now">
        now =&gt; "{title}" =&gt; {oneLine}
      </span>
      <span>{listeners === null ? labels.offline : `${listeners} ${labels.here}`}</span>
      <button type="button" className="radio-bar__btn" onClick={() => setPlaying((p) => !p)} aria-pressed={playing}>
        {playing ? labels.stop : labels.tune}
      </button>
    </div>
  );
}
