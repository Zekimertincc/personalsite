# zekiinceoglu.com

Personal site: an archive of dev work, SAEs and artwork, with a radio on top.
Astro 7 + React islands + MDX. FR / EN / TR.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # types + content schema
npm run build    # static site in dist/
```

## Where things are

| Path | What |
|---|---|
| `src/content/work/<lang>/<slug>.mdx` | One archive entry (SAE, internship, collage, VJ piece, set). Schema in `src/content.config.ts`. A missing `fr/` or `tr/` file falls back to `en/`. |
| `src/content/notes/<lang>/` | Blog notes. `draft: true` hides them in the build. |
| `src/assets/work/` | Images. Astro optimizes them (webp, sizes). |
| `src/i18n/ui.ts` | Every UI string in the three languages. |
| `src/views/` | Page bodies shared by all languages; `src/pages/` only wires routes to them. |
| `src/views/HomePage.astro` | Home: intro, selected projects (`featured: true` + `kind: dev`), experience, skills, a small link to the artwork. |
| `src/views/ProjectsPage.astro`, `ArtPage.astro` | Dev projects list; artwork grid (the colourful inks live only here). |
| `src/data/cv.ts`, `src/data/skills.ts` | Experience, education, languages, skills shown on Home and About. |
| `src/components/islands/RadioBar.tsx` | The radio player, on the Radio page (linked from Artwork). |
| `src/components/islands/SketchStage.tsx` | Live p5/canvas pieces: still image first, code loads only on ▶. |
| `src/sketches/` | One module per sketch: `(canvas) => { stop, reseed }`. |
| `src/data/radio.ts` | What's on the radio (static for now). |
| `src/styles/global.css` | Tokens (white, ink, one blue accent; the three inks for artwork), type, buttons, cards. |

## Add a piece of work

1. Drop the image in `src/assets/work/`.
2. Create `src/content/work/en/<slug>.mdx` with the frontmatter (see an existing file).
3. Optional: `fr/<slug>.mdx`, `tr/<slug>.mdx` with translated text.
4. For a live sketch: add `src/sketches/<name>.ts`, register it in `SketchStage.tsx` `loaders`, set `sketch: <name>` in the frontmatter.

## TODO

- [ ] Put the CV PDF at `public/cv/zeki-inceoglu-cv.pdf` (update it: the tournament platform uses SQLite now, not PostgreSQL)
- [ ] Climat Fitness: add prototype screens to `src/assets/work/climat/` and the walkthrough video to `public/`
- [ ] Fill the `{/* TODO */}` notes in the MDX files (quiz tool sprints, Chromatic Fragments text)
- [ ] FR and TR versions of the work pages (UI is already translated)
- [ ] Port Chromatic Fragments from Processing to p5.js and replace the stand-in sketch
- [ ] Contact form: Astro Action + Resend (needs an adapter, e.g. `@astrojs/cloudflare`); now it opens the mail app
- [ ] Radio v2: play Strudel with `@strudel/web`, program + listener count from the homelab service (`PUBLIC_RADIO_URL`)
- [ ] Deploy: Cloudflare Pages or Vercel, then set `site` in `astro.config.mjs`
