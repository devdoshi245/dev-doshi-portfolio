# Dev Doshi — Portfolio

Personal site of Dev Doshi, AI Automation & Agentic Systems Engineer.
Live at [dev-doshi-portfolio.vercel.app](https://dev-doshi-portfolio.vercel.app/).

## Design

Editorial paper-and-ink theme with one hot accent. Fraunces display
type, Inter UI, JetBrains Mono details. Scroll-driven moments built
with GSAP ScrollTrigger:

- Pinned flagship case study (panels swap while the page holds)
- Pinned Himalayan photo stack (images rise and fan into a pile)
- Lenis smooth scrolling, reduced-motion safe

## Structure

```
index.html      single page
css/style.css   all styles
js/site.js      data + interactions + scroll effects
assets/         headshot, resume, trek photos
```

No build step. Push to `main` → Vercel deploys.
