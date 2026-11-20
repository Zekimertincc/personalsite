/**
 * The radio program. For now it's static; later the homelab service
 * (PUBLIC_RADIO_URL) says what's on and since when, so everyone hears the same moment.
 */
export type Show =
  | { kind: 'strudel'; title: string; code: string }
  | { kind: 'track'; title: string; src: string };

export const now: Show = {
  kind: 'strudel',
  title: 'coldwave 105',
  code: `setcpm(105/4)
stack(
  note("a1").s("sawtooth").lpf(sine.range(200,900).slow(8)),
  s("white*8").gain(.2),
  s("bd ~ sd ~").bank("RolandTR909")
)`,
};

/** Add titles here when there are more sets or tracks. */
export const next: string[] = [];
