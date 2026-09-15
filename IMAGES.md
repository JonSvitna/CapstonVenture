# Image Slots

Five photo slots are wired into the site. Drop files at these exact
paths/filenames in `public/images/` and they appear automatically — no
code changes needed. Until then, each slot falls back to a themed
gradient so the layout never looks broken.

Recommended workflow: generate each prompt in ChatGPT at the largest
landscape size available (1792×1024), then crop to the aspect ratio
noted below and export as `.jpg` (or `.webp`) at that filename.

| File | Component | Aspect | Notes |
|---|---|---|---|
| `public/images/hero-bg.jpg` | `Hero.tsx` | 16:9 (wide) | Sits under a dark green gradient — keep the upper-left third less busy for headline text |
| `public/images/work-atlas.jpg` | `FeaturedWork.tsx` (card 1) | 4:3 | Finished/premium — the "hero" project photo |
| `public/images/work-commercial.jpg` | `FeaturedWork.tsx` (card 2) | 4:3 | Active jobsite, commercial |
| `public/images/work-residential.jpg` | `FeaturedWork.tsx` (card 3) | 4:3 | Finished, residential |
| `public/images/about-crew.jpg` | `About.tsx` | ~21:9 (wide band) | Crew mid-task, full-width banner |

Full prompt text for each is in the companion reference doc.
