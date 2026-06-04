# Website Overhaul Plan — Draft for Discussion

> Status: **draft v0.1** · Owner: Jovan · Drafted with Claude · Last updated: 2026-06-04
>
> This is a living brainstorming doc, not a committed roadmap. Nothing here is
> executed until we agree on it. Add comments inline, strike things you hate.

## 1. Why we're doing this

The site started as a fork of the **Academicpages / Minimal Mistakes** theme, then
grew a large custom "liquid glass / Ion Landscape" design layer on top. That layer
is great visually but, as Jovan put it, the underlying system is a bit of a
*Frankenstein*. The recent `/device-controllers/` page showed how clean, modern,
and maintainable a **scoped, token-driven component** can be — and we want the
whole site to feel (and be built) like that.

**Goal:** keep all current content and the look we like, but make the codebase
coherent, fast, and easy to extend — so future changes are 10 minutes, not a
specificity fight.

## 2. Current state — honest assessment

### What's good ✅
- A real **design-token system** already exists (`--ion-*` CSS variables for
  colour, surface, border, shadow, radius) with light/dark values.
- The `_sass/` partials from the base theme are present and organised.
- The **device-controllers page** is a model citizen: scoped `.dc-*` classes,
  token-driven, **zero `!important`**, self-contained, light/dark "just works."
- Nice touches already exist: glass cards, dark-mode toggle with anti-FOUC
  script, a staggered mobile-menu animation.

### What's debt 🧱
1. **`_includes/head_custom.html` is a ~1750-line inline `<style>` block** living
   in `<head>` on every page. This is:
   - **Render-blocking** (hurts first paint / Lighthouse).
   - The single biggest source of style with **heavy `!important` usage**, because
     it's fighting the compiled theme CSS instead of replacing it.
   - Hard to navigate — buttons, nav, cards, dark-mode, and animations are all in
     one file with no module boundaries. (`SITE_AUDIT.md` already flagged this.)
2. **Two competing CSS systems**: the compiled `_sass → assets/css/main.css`
   theme **and** the inline `head_custom.html` overrides. They collide; the inline
   layer wins by being later + `!important`. That's why small tweaks feel risky.
3. **Tokens are defined *inside* `head_custom.html`**, not in a single source of
   truth that both the SCSS and the inline layer can read.
4. **Dead / forked weight**: leftover theme machinery (e.g. Susy grid, unused MM
   partials/JS) that no longer drives anything but still ships. (Per `SITE_AUDIT.md`.)
5. **Inconsistent components**: e.g. two button systems (`.btn` from the theme vs
   `.home-btn` custom), several near-duplicate "card" treatments (`archive__item`,
   `home-glass-card`, `project-card`, `resource-card`, `dc-card`).
6. **Asset hygiene**: raster teaser PNGs where SVG/WebP would be sharper + smaller.

## 3. Design principles for the overhaul

- **One source of truth for tokens.** All colour/space/shadow/motion values live in
  one place; everything else references them.
- **Components, not pages.** A button is a button everywhere. Define once, reuse.
- **Cascade by order, not by force.** Eliminate `!important` by loading our layer
  *after* the theme and scoping correctly.
- **Ship compiled CSS, not inline.** Move the big `<style>` into SCSS partials so
  it's cached, minified, and not render-blocking. Keep only the tiny theme-init
  script inline (anti-FOUC).
- **Motion is a feature, accessibility is a requirement.** Every animation honours
  `prefers-reduced-motion`; every interactive element has a visible focus state.

## 4. Phased plan

Each phase is independently shippable and reversible. Rough effort/risk noted.

### Phase 0 — Interaction polish ("Shine Kit v1") — ✅ DONE (2026-06-04)
Global buttons/cards/nav hover + staggered page-load reveal, matched to the
device page. Lives in a labelled block at the end of `head_custom.html`.
*Effort: S · Risk: low.* (This is the change that prompted this doc.)

### Phase 1 — Extract & modularise the CSS  ⭐ highest leverage
- Create `_sass/ion/` with focused partials: `_tokens.scss`, `_base.scss`,
  `_buttons.scss`, `_cards.scss`, `_nav.scss`, `_animations.scss`, `_shine.scss`,
  `_dark.scss`.
- Move the contents of `head_custom.html`'s `<style>` into those partials,
  importing them **last** in `assets/css/main.scss` so order (not `!important`)
  wins. Delete `!important`s as they become unnecessary.
- `head_custom.html` shrinks to just the `<link>`s + the anti-FOUC script.
- *Effort: M–L · Risk: medium (visual regressions — mitigate with side-by-side
  screenshots per page before/after).*

### Phase 2 — Componentise the UI
- Canonical components: **Button** (merge `.btn`/`.home-btn`), **Card/Panel**
  (one glass surface with modifiers), **Pill/Tag**, **Section header** (the
  gradient-divider style from the device page), **Hero**.
- Refactor existing pages to use them; delete the near-duplicate styles.
- *Effort: M · Risk: medium.*

### Phase 3 — Delete dead code
- Audit unused theme SCSS/JS (Susy, unused MM includes) and remove.
- Optional: PurgeCSS pass in the build to drop unreferenced selectors.
- *Effort: S–M · Risk: low–medium (test all page types).*

### Phase 4 — Performance
- Render-blocking CSS removed (falls out of Phase 1).
- Self-host / `font-display: swap` for Inter; subset icon fonts (Font Awesome /
  Devicon are heavy — consider only-used-icons or SVG).
- Convert raster teasers to SVG/WebP; add width/height to avoid layout shift.
- Target: green Lighthouse on Performance/Best-Practices/SEO/A11y.
- *Effort: M · Risk: low.*

### Phase 5 — Accessibility & dark-mode QA
- Visible `:focus-visible` everywhere (started in Phase 0), keyboard nav audit,
  colour-contrast check in dark mode, full `prefers-reduced-motion` coverage.
- *Effort: S–M · Risk: low.*

### Phase 6 — Information architecture (optional, content-level)
- Review nav + page templates for consistency. Possible: fold the
  device-controllers page into a unified "Projects" experience; standardise the
  publications/talks/conferences list templates.
- *Effort: varies · Risk: low (content, not styling) — discuss first.*

## 5. Suggested order & rough sizing

| Phase | What | Leverage | Effort | Risk |
|------:|------|----------|:------:|:----:|
| 0 | Shine Kit polish | ✅ done | S | low |
| 1 | Modularise CSS / kill inline `<style>` | 🔥 highest | M–L | med |
| 2 | Componentise buttons/cards | high | M | med |
| 3 | Delete dead code | medium | S–M | low |
| 4 | Performance / assets | high (UX+SEO) | M | low |
| 5 | A11y / dark-mode QA | medium | S–M | low |
| 6 | IA / content | optional | ? | low |

**Recommended path:** 1 → 2 → 3 → 4 → 5, with 6 anytime. Phase 1 unlocks the rest.

## 6. Guardrails (so we don't break the site we like)
- Work on a branch; build + eyeball every page type before merging.
- Before/after screenshots of: home, publications, talks, conferences, CV,
  resources, portfolio, a single talk, the device-controllers page — light **and**
  dark mode.
- Keep `head_custom.html` git history so any extracted rule is traceable.

## 7. Open questions for Jovan
1. Appetite/scope: do the **full** Phase 1 refactor, or stop after Phases 0+2
   (polish + component cleanup) and leave the inline CSS where it is?
2. Are the heavy icon fonts (Font Awesome + Devicon) worth keeping, or move to
   inline SVG for the few icons actually used?
3. Any pages/sections you already know you want to **redesign** (not just polish)
   while we're in here?
4. Is matching the device-page aesthetic the **target style** site-wide, or do you
   want to evolve the look further (e.g. lean fully into the blueprint theme)?
