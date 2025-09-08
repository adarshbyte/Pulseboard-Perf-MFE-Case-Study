# Pulseboard – Frontend Performance Case Study

## Before (Baseline)
- **Hero/LCP**: Main visual (hero) loaded without preload or priority; LCP high on mobile.
- **Images**: 4K sources used everywhere; no `srcset/sizes`; many offscreen images fetched early.
- **Lazy Loading**: Only hint-based lazy (`loading="lazy"`) — browser still prefetched near-viewport images.
- **Layout Stability (CLS)**: No reserved space for images; content shifted during decode/paint.
- **Scrolling FPS**: Long list rendered fully → many DOM nodes, frequent reflow/paint → jank.
- **Indicative measurements** (replace with your numbers):
  - LCP: **~X.XXs**
  - CLS: **High** (visible shifts)
  - FPS on scroll: **~20–30**
  - Total transfer: **~XX MB**
  - Lighthouse Performance: **~57**

## After (Optimized)
- **LCP**: Hero uses `<link rel="preload" as="image">`, `fetchPriority="high"`, and responsive `srcset/sizes` → faster largest paint.
- **Strict Lazy Loading**: `IntersectionObserver` sets `src` only when in/near viewport (no `src=""`), with small `rootMargin` → offscreen requests deferred.
- **CLS Eliminated**: Wrapper reserves space via `width/height` or `aspect-ratio`; blur placeholder fades on `onLoad` → no jumps.
- **Higher FPS**: Long lists virtualized with `react-window` (`FixedSizeList`) + optional `content-visibility: auto` → fewer DOM nodes and less main‑thread work.
- **Responsive Images**: Each item provides `srcset` (480–1920w) and `sizes` so small screens download smaller assets.
- **Indicative results** (replace with your numbers):
  - LCP: **X.XXs → X.XXs**
  - CLS: **High → ~0**
  - FPS on scroll: **20–30 → 55–60**
  - Total transfer: **XX MB → XX MB**
  - Lighthouse Performance: **57 → 54**

