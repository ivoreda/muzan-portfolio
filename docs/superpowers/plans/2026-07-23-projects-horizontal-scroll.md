# Projects Horizontal Scroll Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Selected Work cards move horizontally as the user scrolls vertically (GSAP pin + scrub runway), with a vertical stack fallback for reduced motion.

**Architecture:** Keep project card markup; wrap the stage label + track in a pin target below the intro. `initProjectsHorizontalScroll` pins that stage and scrubs `x` on the track from `0` to `-(overflow)`. CSS switches the wrap to `overflow: hidden` for scrub mode and stacks cards under `.reduced-motion`.

**Tech Stack:** React 19, Vite, GSAP 3 ScrollTrigger, existing `Portfolio.css` tokens

**Spec:** `docs/superpowers/specs/2026-07-23-projects-horizontal-scroll-design.md`

---

## File map

| File | Responsibility |
|------|----------------|
| `src/components/ProjectsScrollStack.jsx` | Wrap stage (label + track) in `.projects-pin-stage`; intro stays outside |
| `src/Portfolio.css` | Scrub overflow styles; remove snap/scrollbar reliance; reduced-motion vertical stack; mobile pin-stage padding |
| `src/lib/animations.js` | Add `initProjectsHorizontalScroll`; export it |
| `src/Portfolio.jsx` | Import and call `initProjectsHorizontalScroll` inside `gsap.context` |

No new dependencies. No test runner in this repo — verify with `npm run lint`, `npm run build`, and a browser checklist.

---

### Task 1: Stage markup wrap

**Files:**
- Modify: `src/components/ProjectsScrollStack.jsx`

- [ ] **Step 1: Wrap the scrub stage**

Replace the stage label `Container` + horizontal wrap so both sit inside `.projects-pin-stage`. Leave the intro (`projects-section-head`) outside.

```jsx
import Container from "./Container";
import RetroIcon from "./RetroIcon";
import SectionHeader from "./SectionHeader";

const ProjectsScrollStack = ({ projects }) => (
  <section className="projects-scroll-section" id="projects">
    <Container>
      <div className="projects-section-head">
        <SectionHeader eyebrow="Projects" title="Backend case files, stacked for review." />
        <p data-reveal>
          A compact view of systems I have led, optimized, and scaled across
          microservices, healthcare, fintech, real estate, and blockchain.
        </p>
      </div>
    </Container>

    <div className="projects-pin-stage">
      <Container>
        <div className="project-stage-label" aria-hidden="true">
          <span>Selected work</span>
          <span>{projects.length} systems</span>
        </div>
      </Container>

      <div className="projects-horizontal-wrap" aria-label="Project cards">
        <div className="projects-horizontal-track">
          {projects.map((project, index) => (
            <article className="project-horizontal-card" key={project.title}>
              <div className="project-topline">
                <div>
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-type">Backend system</span>
                </div>
                <div className="project-folder-tab">
                  <RetroIcon name="folder" />
                </div>
              </div>

              <div className="project-card-body">
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-side">
                  <h4>Highlights</h4>
                  <ul className="project-highlight-list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsScrollStack;
```

- [ ] **Step 2: Confirm section id unchanged**

`id="projects"` stays on `<section>` so nav jump lands on the intro, not mid-scrub.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectsScrollStack.jsx
git commit -m "Wrap Selected Work stage for scroll-linked pin target."
```

---

### Task 2: Scrub + reduced-motion CSS

**Files:**
- Modify: `src/Portfolio.css` (projects block ~529–610 and reduced-motion / mobile sections)

- [ ] **Step 1: Update horizontal wrap for scrub mode**

Replace `.projects-horizontal-wrap` and remove scrollbar / snap rules that fight transform scrubbing:

```css
.projects-pin-stage {
  position: relative;
}

.projects-horizontal-wrap {
  width: 100%;
  overflow: hidden;
  padding: 0 max(24px, calc((100vw - 1180px) / 2)) 22px;
}

.projects-horizontal-track {
  display: flex;
  gap: clamp(22px, 3vw, 34px);
  width: max-content;
  will-change: transform;
}

.project-horizontal-card {
  flex: 0 0 min(820px, calc(100vw - 64px));
  min-height: 540px;
  overflow: hidden;
  border: 2px solid var(--dark);
  border-radius: 40px;
  padding: clamp(30px, 4vw, 48px);
  background: var(--surface);
  box-shadow: 0 16px 0 var(--dark);
  transform-origin: center bottom;
  display: flex;
  flex-direction: column;
}
```

Delete these rules entirely (no longer used):

- `.projects-horizontal-wrap::-webkit-scrollbar`
- `.projects-horizontal-wrap::-webkit-scrollbar-track`
- `.projects-horizontal-wrap::-webkit-scrollbar-thumb`
- `scroll-snap-type` / `scroll-padding-inline` on the wrap
- `scroll-snap-align` on `.project-horizontal-card`

Keep all card color / topline / body / tech styles unchanged.

- [ ] **Step 2: Reduced-motion vertical stack**

Append after the existing `.reduced-motion *` block (~1005):

```css
.reduced-motion .projects-horizontal-wrap {
  overflow: visible;
  padding-inline: max(24px, calc((100vw - 1180px) / 2));
}

.reduced-motion .projects-horizontal-track {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 1180px;
  margin-inline: auto;
  transform: none !important;
}

.reduced-motion .project-horizontal-card {
  flex: none;
  width: 100%;
  min-height: 0;
}
```

Note: `.reduced-motion * { transform: none !important; }` already kills scrub transforms; the stack rules above make the layout readable without horizontal overflow.

- [ ] **Step 3: Mobile padding for pin stage**

In the `@media (max-width: 768px)` block, update the projects wrap rules (label can stay `display: none` as today):

```css
  .projects-horizontal-wrap {
    padding-inline: 16px;
  }

  .reduced-motion .projects-horizontal-wrap {
    padding-inline: 16px;
  }
```

Remove `scroll-padding-inline` from the mobile wrap rule if it is still present.

- [ ] **Step 4: Commit**

```bash
git add src/Portfolio.css
git commit -m "Style projects track for pin-scrub and reduced-motion stack."
```

---

### Task 3: GSAP ScrollTrigger scrub

**Files:**
- Modify: `src/lib/animations.js`

- [ ] **Step 1: Add `initProjectsHorizontalScroll`**

Insert before `disableMotion`:

```js
export const initProjectsHorizontalScroll = () => {
  const stage = document.querySelector(".projects-pin-stage");
  const wrap = document.querySelector(".projects-horizontal-wrap");
  const track = document.querySelector(".projects-horizontal-track");

  if (!stage || !wrap || !track) {
    return;
  }

  const getTravel = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

  if (getTravel() === 0) {
    return;
  }

  const cardCount = track.querySelectorAll(".project-horizontal-card").length;

  gsap.to(track, {
    x: () => -getTravel(),
    ease: "none",
    scrollTrigger: {
      trigger: stage,
      start: "top top",
      end: () => `+=${Math.max((cardCount - 1) * window.innerHeight * 0.9, getTravel())}`,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
};
```

Pace rule: vertical runway ≈ `(cards - 1) * 0.9 * viewport height`, while `x` still maps fully across overflow. Adjust the `0.9` multiplier only if scrub feels too fast/slow during verification.

- [ ] **Step 2: Ensure export surface**

`initProjectsHorizontalScroll` is already an `export const`. Keep `export { gsap, ScrollTrigger };` at the bottom unchanged. Do not call this from `disableMotion` path.

- [ ] **Step 3: Commit**

```bash
git add src/lib/animations.js
git commit -m "Add ScrollTrigger pin-scrub for projects horizontal track."
```

---

### Task 4: Wire animation into Portfolio

**Files:**
- Modify: `src/Portfolio.jsx`

- [ ] **Step 1: Import**

Update the animations import:

```js
import {
  disableMotion,
  initExperienceReveals,
  initFloatingIcons,
  initHeroAnimations,
  initProjectsHorizontalScroll,
  initScrollReveals,
  initSkillStack,
  initStackRibbon,
  initTextReveals,
  gsap,
} from "./lib/animations";
```

- [ ] **Step 2: Call inside `gsap.context`**

Inside the existing `useEffect` motion branch:

```js
    const context = gsap.context(() => {
      initHeroAnimations();
      initScrollReveals();
      initTextReveals();
      initSkillStack();
      initStackRibbon();
      initFloatingIcons();
      initExperienceReveals();
      initProjectsHorizontalScroll();
    }, rootRef.current);
```

Leave the `reduceMotion` early return as-is so scrub never initializes when reduced motion is on (CSS stack handles layout).

- [ ] **Step 3: Commit**

```bash
git add src/Portfolio.jsx
git commit -m "Enable projects horizontal scrub in portfolio motion setup."
```

---

### Task 5: Verify

**Files:** none (commands + browser)

- [ ] **Step 1: Lint**

Run: `npm run lint`  
Expected: exit 0 (no new errors in touched files)

- [ ] **Step 2: Build**

Run: `npm run build`  
Expected: Vite production build succeeds

- [ ] **Step 3: Browser checklist**

Run: `npm run dev` and open the site.

Verify:

1. Intro (“Projects” / copy) scrolls away before cards pin.
2. Further downward scroll moves cards left until the last card is fully visible.
3. Page unlocks and continues into Experience.
4. Resize window mid-section → cards still reach the end after refresh (ScrollTrigger invalidate).
5. Narrow viewport (~390px): same vertical→horizontal scrub (no need to swipe sideways).
6. DevTools → Rendering → emulate `prefers-reduced-motion: reduce` → reload → cards stack vertically, no pin scrub.
7. Nav “Projects” jumps to section top (intro visible), not a mid-scrub offset.

- [ ] **Step 4: Commit only if verification prompted CSS/JS tweaks**

If pace or pin offset needed small fixes, commit those separately:

```bash
git add src/lib/animations.js src/Portfolio.css
git commit -m "Tune projects scrub distance and pin-stage spacing."
```

If no tweaks, skip this commit.

---

## Spec coverage check

| Spec requirement | Task |
|------------------|------|
| Vertical scroll drives horizontal cards | 3, 4 |
| Long scroll runway / progress mapping | 3 (`end` + scrub `x`) |
| GSAP ScrollTrigger pin + scrub | 3 |
| Same on mobile | 3 (no desktop-only guard), 5 |
| Intro scrolls away first | 1 (intro outside pin), 5 |
| Reduced-motion vertical stack | 2, 4 early return, 5 |
| CSS overflow hidden / no native sideways scroll | 2 |
| Resize refresh | 3 `invalidateOnRefresh` |
| `#projects` lands on intro | 1 |
| No-op if no overflow | 3 `getTravel() === 0` |
| Cards visually unchanged | 2 (interaction CSS only) |

## Placeholder / consistency check

- Function name is `initProjectsHorizontalScroll` in Tasks 3–4.
- Pin class is `.projects-pin-stage` in Tasks 1–3.
- No TBD/TODO left in steps.
