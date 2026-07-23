# Selected Work: Vertical-Driven Horizontal Scroll

**Date:** 2026-07-23  
**Status:** Approved for planning  
**Approach:** GSAP ScrollTrigger pin + scrub (long scroll runway)

## Goal

On the Selected Work / projects gallery, visitors keep scrolling vertically while the project cards move horizontally. They should not need to change scroll orientation (trackpad sideways, shift+wheel, or dragging a horizontal scrollbar) to see all cards.

## Current state

- Component: `src/components/ProjectsScrollStack.jsx`
- Styles: `.projects-horizontal-wrap` uses native `overflow-x: auto`, scroll-snap, and a visible scrollbar (`src/Portfolio.css`)
- Motion: GSAP + ScrollTrigger already wired in `src/lib/animations.js` and initialized from `src/Portfolio.jsx`

## Decisions

| Topic | Choice |
|-------|--------|
| Interaction model | Long scroll runway: vertical scroll progress maps to horizontal card position |
| Implementation | GSAP ScrollTrigger pin + scrub |
| Mobile | Same vertical→horizontal scrub (no fallback stack or touch-only row) |
| Section intro | “Projects” header / copy scrolls away first; then the stage pins and scrubs |
| Card visuals | Unchanged — interaction only |
| Reduced motion | No pin/scrub; fall back to a normal vertical stack of cards |

## Behavior

1. User scrolls through the projects intro normally; it leaves the viewport.
2. The Selected Work stage (label + card track) pins in view.
3. Continued downward scroll scrubs the horizontal track left until the last card is fully visible.
4. The section unlocks and the page continues scrolling normally.
5. Same behavior on phone and desktop breakpoints.
6. If `prefers-reduced-motion: reduce` is active, skip pin/scrub and show a normal vertical stack of cards.

## Architecture

### Markup

- Keep existing card markup in `ProjectsScrollStack`.
- Wrap the scrub stage (stage label + horizontal wrap/track) in a clear pin target so the intro above remains outside the pinned region.

### Animation (`src/lib/animations.js`)

- Add `initProjectsHorizontalScroll`.
- Pin the stage; scrub `x` on `.projects-horizontal-track` from `0` to `-(trackWidth - visibleWidth)`.
- Derive end/scroll distance from track overflow so progress feels tied to content width (tune so roughly one viewport of vertical scroll ≈ one card feels natural).
- Use `invalidateOnRefresh` (or equivalent) so travel distance recalculates on resize; call `ScrollTrigger.refresh` as needed after layout.

### CSS (`src/Portfolio.css`)

- For scrub mode: `overflow: hidden` on the wrap (remove reliance on native `overflow-x: auto`, scroll-snap, and the custom horizontal scrollbar).
- Preserve card look (borders, shadows, colors, typography).
- Reduced-motion fallback styles as needed for the vertical/static layout.

### Wiring (`src/Portfolio.jsx`)

- Call `initProjectsHorizontalScroll` inside the existing `gsap.context` alongside other init helpers.
- Respect the existing reduced-motion early path (`disableMotion`).

## Edge cases

- **Resize:** Recalculate max translate and refresh ScrollTrigger.
- **Keyboard:** Tab order through cards remains; no arrow-key gallery control in v1.
- **Nav jump:** “Projects” / `#projects` lands at section start (intro), not mid-scrub progress.
- **Empty/short track:** If content does not overflow the viewport, do not pin/scrub (or no-op the animation).

## Out of scope

- Redesigning project cards or section copy
- Arrow-key or drag-handle gallery controls
- Smooth-scroll libraries (Lenis, etc.) beyond current GSAP setup
- Changing other sections’ scroll behavior

## Success criteria

- Scrolling down through Selected Work reveals all project cards horizontally without requiring horizontal input.
- Intro scrolls away before the runway begins.
- Works on mobile with the same scrub model.
- Reduced motion disables the effect.
- Cards look the same as today aside from scroll interaction.
