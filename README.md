# Dev Doshi — Portfolio

Personal portfolio of **Dev Doshi**, AI Automation & Agentic AI Systems Architect.

A fully static, dependency-free site (vanilla HTML/CSS/JS) with a terminal-inspired
"DOSHI.OS" aesthetic: boot sequence, particle network background, custom cursor,
live ops log, animated stats, 14 filterable project case studies, Himalayan trek
galleries with a lightbox, a command palette (⌘K / Ctrl+K / `/`), and a persistent
dark/light theme.

## Structure

```
index.html        — single page; sections switched client-side (Home / Projects / About / Treks / Contact)
css/styles.css    — all styles + dark/light theme tokens
js/main.js        — all data and interactions (no frameworks, no build step)
assets/           — headshot, favicon
```

## Run locally

No build step. Open `index.html` directly in a browser, or serve the folder:

```
npx serve .
```

## Customizing

- **Headshot** — replace `assets/headshot-duotone.png` (referenced in the hero of `index.html`).
- **Trek photos** — in `js/main.js`, look for the `REPLACE WITH YOUR TREK PHOTOS` comment
  at the top: each trek has a simple array of 6 image URLs (the first one is the card cover).
  Current images are scenic placeholders from picsum.photos.
- **Open Graph URL** — after deploying, update the `og:url` / `og:image` / `twitter:image`
  absolute URLs in `index.html` to your real domain so link previews work.

## Deploy (Vercel)

This is a zero-config static site: import the repo in Vercel, leave framework as
**Other**, no build command, output directory = repo root. See repo history / docs
for details.

---

© 2026 Dev Doshi — AI Automation & Agentic AI Systems
