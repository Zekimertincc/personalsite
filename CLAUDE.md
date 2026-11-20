# Personal site — instructions for Claude Code

Astro 7, React islands, MDX content collections. Static output.

## Commands
- `npm run dev`, `npm run check` (must pass), `npm run build` (must pass) before proposing a commit.

## Rules
- Content lives in `src/content/`; never hard-code a project in a page. Add an MDX entry instead.
- Every UI string goes through `src/i18n/ui.ts` in en, fr and tr. No raw text in views.
- Pages in `src/pages/` stay thin: they pick a language and render a view from `src/views/`.
- Islands only where the browser must do something (radio, sketches). Everything else is plain Astro/HTML.
  Sketches load on demand (dynamic import), never on page load.
- The site is a clean, professional dev portfolio. Colours come from the CSS tokens in `src/styles/global.css`: `--accent` for dev pages; `--yellow`, `--blue`, `--red` only on artwork pages. Don't add new ones without asking.
- Keep it accessible: real buttons and links, alt text on every image, 44px touch targets, works at phone width.
- Facts on the site must be true. Don't invent numbers, roles or dates; leave a `{/* TODO */}` instead.

## Git
- Never commit or push without asking. End a task with `git diff --stat` and a short summary.
