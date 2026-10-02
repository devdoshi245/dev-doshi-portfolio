# Dev Doshi — Portfolio

Personal site of Dev Doshi, AI Automation & Agentic Systems Engineer.
Live at [dev-doshi-portfolio.vercel.app](https://dev-doshi-portfolio.vercel.app/).

## Design

Editorial paper-and-ink theme with one hot accent. Fraunces display
type, Inter UI, JetBrains Mono details. Scroll-driven moments built
with GSAP ScrollTrigger:

- Sticky Himalayan photo gallery (the page holds while photos cycle,
  then native scroll resumes)
- Native browser scrolling everywhere, reduced-motion safe

## Structure

```
index.html      single page
css/style.css   all styles
js/site.js      data + interactions + scroll effects
assets/         headshot, resume, trek photos
```

No build step. Push to `main` → Vercel deploys.
