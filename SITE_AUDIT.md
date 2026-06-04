# Site Audit & Improvement Roadmap
**JovanMarkov96.github.io — Personal Academic Portfolio/Blog**

> Generated: 2026-04-06 | Stack: Jekyll + Academicpages (Minimal Mistakes fork) | Theme: Custom Ion Landscape glass design system

---

## Table of Contents

1. [Site Structure Overview](#1-site-structure-overview)
2. [Theme System: Light & Dark Mode](#2-theme-system-light--dark-mode)
3. [Typography](#3-typography)
4. [Figures & Images](#4-figures--images)
5. [Content Types & Entry Structures](#5-content-types--entry-structures)
6. [Navigation Panel](#6-navigation-panel)
7. [Sidebar / Floating Profile Frame](#7-sidebar--floating-profile-frame)
8. [CSS Architecture](#8-css-architecture)
9. [JavaScript](#9-javascript)
10. [Useful Links / Resources Pages](#10-useful-links--resources-pages)
11. [CV Page Interactive Mechanism](#11-cv-page-interactive-mechanism)
12. [Current Issues & Inconsistencies](#12-current-issues--inconsistencies)
13. [Improvement Proposals](#13-improvement-proposals)
    - [13.1 Design Token Consolidation](#131-design-token-consolidation)
    - [13.2 Sidebar / Profile Frame Overhaul](#132-sidebar--profile-frame-overhaul)
    - [13.3 Navigation Panel Modernization](#133-navigation-panel-modernization)
    - [13.4 Resources / Useful Links Redesign](#134-resources--useful-links-redesign)
    - [13.5 Publications & Conferences Cards](#135-publications--conferences-cards)
    - [13.6 CSS Modularization](#136-css-modularization)
    - [13.7 Reusable Component Patterns](#137-reusable-component-patterns)
    - [13.8 Mobile Experience](#138-mobile-experience)
    - [13.9 Performance & Maintainability](#139-performance--maintainability)
14. [Priority Matrix](#14-priority-matrix)

---

## 1. Site Structure Overview

```
JovanMarkov96.github.io/
├── _config.yml                  # Jekyll config, site metadata, collection definitions
├── _data/
│   ├── navigation.yml           # Main menu link list
│   └── authors.yml              # Author profile metadata (name, bio, socials)
├── _includes/                   # Reusable HTML fragments (partials)
│   ├── masthead.html            # Top navigation bar
│   ├── sidebar.html             # Profile sidebar (floating frame)
│   ├── head_custom.html         # CSS vars, font imports, inline styles (~1600 lines)
│   ├── archive-single.html      # Single item in archive listings
│   ├── footer.html              # Page footer
│   └── ...
├── _layouts/                    # Page layout templates
│   ├── default.html             # Base layout (head + masthead + content + footer)
│   ├── single.html              # Single post/page layout (with sidebar)
│   ├── archive.html             # Listing page layout
│   ├── conference.html          # Conference entry layout
│   └── talk.html                # Talk entry layout
├── _sass/                       # SCSS source files
│   ├── _variables.scss          # Color palette, font sizes, breakpoints
│   ├── _base.scss               # Element resets + dark mode image filters
│   ├── _masthead.scss           # Navbar styles
│   ├── _sidebar.scss            # Sidebar styles
│   ├── _archive.scss            # Archive listing styles
│   ├── _page.scss               # Single page/post content styles
│   ├── _buttons.scss            # Button styles
│   ├── _notices.scss            # Callout boxes (.notice)
│   ├── _tables.scss             # Table styles
│   ├── _syntax.scss             # Code block syntax highlighting
│   ├── _projects.scss           # Portfolio card grid
│   └── vendor/                  # Third-party SCSS (Susy grid, Font Awesome, etc.)
├── assets/
│   ├── css/main.scss            # SCSS entry point (imports all partials)
│   └── js/
│       ├── theme-toggle.js      # Light/dark/system mode toggle
│       ├── collapse.js          # Simple slide-toggle utility
│       └── _main.js             # jQuery initialization, sticky sidebar, lightbox
├── _pages/                      # Static pages
│   ├── about.md
│   ├── cv.md                    # Interactive CV with expand/collapse timeline
│   ├── publications.md          # Publications archive (list/grid toggle)
│   ├── conferences.md           # Conferences archive
│   ├── resources.md             # Resources index
│   └── ...
├── _publications/               # Research publication entries (Markdown + YAML)
├── _conferences/                # Conference presentation entries
├── _talks/                      # Seminar/talk entries
├── _teaching/                   # Teaching/course entries
├── _posts/                      # Blog posts
├── _resources/                  # Useful link/guide pages (math, physics, etc.)
├── _portfolio/                  # Portfolio project entries
└── images/                      # Images (profile photo, pub thumbnails, logos)
```

**Key observation:** The site is a heavily customized Academicpages theme. The original theme's Susy grid system and large portions of its SCSS are still present but functionally overridden by the custom Ion Landscape design injected primarily via `_includes/head_custom.html`. This file has grown to ~1600 lines and is the single largest source of style debt.

---

## 2. Theme System: Light & Dark Mode

### How it works

Three-layer system:

| Layer | Location | Mechanism |
|-------|----------|-----------|
| SCSS variables | `_sass/_variables.scss` | Compile-time constants; no runtime theming |
| CSS custom properties | `_includes/head_custom.html` (`:root`, `html.dark-mode`) | Runtime theming via class toggle |
| JavaScript | `assets/js/theme-toggle.js` | Reads/writes `localStorage`, toggles `html.dark-mode` class |

**Anti-FOUC script** in `head_custom.html` runs synchronously before first paint, reads `localStorage.getItem('theme')`, and immediately applies `dark-mode` to `<html>` — preventing the white flash.

### Design tokens (CSS custom properties)

```css
/* Light mode (default on :root) */
--ion-bg            /* page background */
--ion-surface       /* card surface */
--ion-surface-2     /* elevated card surface */
--ion-border        /* border color */
--ion-text          /* primary text */
--ion-muted         /* secondary/muted text */
--ion-accent        /* primary accent (indigo-600) */
--ion-accent-hover  /* accent hover state */
--ion-accent-rgb    /* accent as R,G,B for rgba() usage */
--ion-shadow-sm     /* small box-shadow */
--ion-shadow-md     /* medium box-shadow */
--ion-radius        /* default border radius */
```

### Light mode palette

| Token | Value | Role |
|-------|-------|------|
| `--ion-bg` | `#ffffff` | Page background |
| `--ion-surface` | `rgba(255,255,255,0.7)` | Card/panel surface |
| `--ion-text` | `#1e293b` | Body text |
| `--ion-accent` | `#4f46e5` | Links, highlights (Indigo-600) |
| `--ion-border` | `rgba(0,0,0,0.08)` | Borders |

### Dark mode palette

| Token | Value | Role |
|-------|-------|------|
| `--ion-bg` | `linear-gradient(145deg, #081432, #040a19)` | Page background |
| `--ion-surface` | `rgba(15,25,60,0.6)` | Card/panel surface |
| `--ion-text` | `#f1f5f9` | Body text |
| `--ion-accent` | `#818cf8` | Links, highlights (Indigo-400) |
| `--ion-border` | `rgba(129,140,248,0.15)` | Borders |

### Issues

- Dark mode rules are split across: `head_custom.html` (custom properties), `_base.scss` (SCSS selectors), `_masthead.scss`, `_sidebar.scss`, and inline `<style>` blocks within individual pages.
- The mode cycle is: **System → Light → Dark → System**. There is no keyboard shortcut. The icon updates but there is no visible tooltip on the current mode.
- Giscus comment theme is updated via `postMessage` — this works but is fragile if the Giscus embed URL changes.

---

## 3. Typography

### Font stack

```scss
// Primary (body + headings)
font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

// Code blocks
font-family: Monaco, Consolas, "Lucida Console", monospace;

// Figure captions
font-family: Georgia, Times, serif;
```

Inter is loaded from Google Fonts at weights 400, 500, 600, 700. This is a single `<link>` request and is well-implemented.

### Type scale (from `_variables.scss`)

| Variable | Size | Used for |
|----------|------|----------|
| `$type-size-1` | 2.441em | H1 |
| `$type-size-2` | 1.953em | H2 |
| `$type-size-3` | 1.563em | H3 / section headings |
| `$type-size-4` | 1.25em | H4 / page titles |
| `$type-size-5` | 1em | Body text (base) |
| `$type-size-6` | 0.75em | Captions, meta, small labels |
| `$type-size-7` | 0.6875em | Very small labels |
| `$type-size-8` | 0.625em | Smallest text |

### Issues

- Inline styles throughout the Markdown files and includes use raw values (`font-size: 0.95rem`, `font-size: 0.8em`) instead of the SCSS variables or CSS custom properties.
- The sidebar author name, bio, and social link labels are noticeably smaller than comparable text elsewhere on the page. This creates visual inconsistency with, for example, the CV section headings.
- No `--ion-font-size-*` CSS custom properties exist, so font sizes cannot be adjusted at runtime (e.g., for accessibility).

---

## 4. Figures & Images

### Normal images

- Wrapped in `<figure>` with responsive sizing.
- Dark mode filter applied globally in `_base.scss`:
  ```scss
  html.dark-mode img,
  html.dark-mode svg { filter: brightness(0.85) contrast(1.1); }
  ```
- Lightbox via Magnific Popup jQuery plugin (triggered by image links).

### Avatar / profile photo

- Max-width: 200px; aspect-ratio: 1/1; border-radius: 50% (circle).
- Light mode: `3px solid var(--ion-border)` with subtle shadow.
- Dark mode: `3px solid rgba(var(--ion-accent-rgb), 0.4)` with indigo glow.

### Publication thumbnails

- 16:9 aspect ratio; object-fit: cover.
- Shown in the publications grid view.
- Fallback: centered placeholder icon when no thumbnail exists.

### Issues

- The global `brightness(0.85) contrast(1.1)` filter is a blunt instrument — it applies to the profile photo, publication thumbnails, logos, and decorative SVGs equally. Some images (like logos or charts) may look washed out.
- No `loading="lazy"` attribute on most images — missed performance optimization.
- No `alt` text audit has been performed — accessibility risk.

---

## 5. Content Types & Entry Structures

### 5.1 Publications (`_publications/`)

**Front matter fields:**

```yaml
title:        "..."
collection:   publications
permalink:    /publication/YYYY-MM-DD-slug
excerpt:      "..."
date:         YYYY-MM-DD
venue:        "Journal or Conference name"
authors:      "Author1, Author2, ..."
paperurl:     "https://doi.org/..."
pdfurl:       "http://..."
arxivurl:     "https://arxiv.org/..."
citation:     "APA/BibTeX citation string"
short_title:  "..."
thumbnail:    "/images/pub_thumbnails/..."
```

**Display:** Publications page (`_pages/publications.md`) renders entries in either:
- **List view:** Title, venue, year, short excerpt, icon pill buttons (arXiv, Journal, PDF, Slides).
- **Grid view:** Card with thumbnail, title, venue, year, action buttons.

**Layout:** `single.html` with a custom header that renders authors, venue, date, and link pills.

### 5.2 Conferences (`_conferences/`)

**Front matter fields:**

```yaml
title:              "..."
date:               YYYY-MM-DD
conference:         "Conference Name"
location:           "City, Country"
category:           "Talk" | "Poster"
layout:             conference
presenting_author:  "..."
contributing_authors: ["Author1", "Author2"]
conference_link:    "https://..."
paper_link:         "https://..."
```

**Display:** Individual pages use `conference.html` layout. The conferences archive page lists entries chronologically. No grid/card view — plain archive list only.

### 5.3 Blog Posts (`_posts/`)

Standard Jekyll posts. Front matter: `title`, `date`, `categories`, `tags`, `excerpt`. Layout: `single.html`. Features: read time, comments (Giscus), related posts.

### 5.4 Talks (`_talks/`)

Front matter: `title`, `type` (Tutorial/Seminar/Lecture), `venue`, `date`, `location`. Layout: `talk.html` with metadata + read time + related posts.

### 5.5 Teaching (`_teaching/`)

Similar to talks. Type: course, tutorial, workshop. Layout: `single.html`.

### 5.6 Portfolio (`_portfolio/`)

Cards with image, title, description. Grid layout via `_sass/_projects.scss`. Each entry has a detail page.

### 5.7 Resources (`_resources/`)

Long-form Markdown pages with embedded links. Plain `single.html` layout. No custom front matter beyond standard Jekyll. Four files:
- `math_self_study_resources.md`
- `physics_self_study_resources.md`
- `quantum_resources.md`
- `lab_resources.md`

### 5.8 CV (`_pages/cv.md`)

Single page with inline HTML + CSS + JS implementing an interactive timeline. Expand/collapse via click. See Section 11 for details.

### Issues

- Conferences entries have no grid/card view unlike publications.
- Resources pages are long, unstructured scrolling Markdown with numbered lists and plain links. This is the most visually inconsistent part of the site compared to the polished CV and publications pages.
- There is no standardized `tags` or `category` filter UI on archive pages.
- The `talks` and `teaching` collections look nearly identical in display — it is not clear why they are separate collections rather than categories within one collection.

---

## 6. Navigation Panel

### Current structure

Rendered by `_includes/masthead.html`. Two-row layout:

```
Row 1: [Site Title]
Row 2: [Hamburger] [Nav links...] [Share btn] [Theme toggle]
```

**Desktop styling:**
- Fixed position, `top: 16px`, centered with `transform: translateX(-50%)`.
- Width: 95vw, max-width: 1400px.
- Liquid glass: `backdrop-filter: blur(20px) saturate(180%)`.
- Border-radius: 24px.
- Subtle border: `var(--ion-border)`.
- Transition: box-shadow on hover/scroll.

**Mobile mechanism (below ~1024px):**
- Hamburger button (`#nav-toggle`) toggles `.is-active` on itself (animates lines → X) and `.is-visible` on `#nav-links`.
- When open: `#nav-links` becomes a full-screen overlay (fixed, centered flex column).
- Body scroll is locked: `document.body.style.overflow = 'hidden'`.
- Menu items animate in with staggered delays.
- Closes on link click or Escape key.

### Issues

1. **Two-row layout on desktop.** The site title on its own row above the nav links creates a taller navbar, pushing content lower. Most modern personal sites use a single row: `[Logo/Name] [spacer] [links] [actions]`.

2. **No active-state highlighting.** Nav links do not indicate the current page. There is no `.active` class applied on the current route.

3. **Share button and theme toggle are not visually differentiated from nav links.** All items look like icon buttons in the same glass style, but they serve different purposes (navigation vs. meta-actions).

4. **Mobile overlay is heavy.** A full-screen frosted overlay for 6-7 links is overkill. Common modern patterns use a slide-down drawer or a compact top-anchored panel.

5. **No scroll-aware behavior.** The navbar does not change appearance on scroll (e.g., reduce height, add shadow, become more opaque). This is standard on modern portfolio sites.

6. **Hamburger icon is a bare `<span>` element** styled with CSS pseudo-elements. This is fine but fragile — any change to the CSS cascades unexpectedly. An inline SVG would be more explicit.

7. **Nav links data is static YAML** (`_data/navigation.yml`). There is no way to mark a link as "external" with a different icon style — currently this is handled via a Liquid `contains 'http'` check.

---

## 7. Sidebar / Floating Profile Frame

### Current structure

Rendered by `_includes/sidebar.html`. Present on all pages that use `author_profile: true` in front matter.

**Desktop (≥1024px):**
- Sticky, left column, 280px wide, `top: 110px`.
- Glass card: `background: rgba(255,255,255,0.85)`, `backdrop-filter: blur(25px)`, rounded corners.
- Dark mode: deep blue gradient background + indigo border glow.

**Contents:**
1. Avatar image (circular, 200px max, colored border).
2. Author name (`.author__name`).
3. Pronouns (`.author__pronouns`).
4. Bio (`.author__bio`).
5. Social links (`.author__urls`) — always visible on desktop, toggle on mobile.

**Mobile (<1024px):**
- Full-width card above main content.
- Avatar: 120px.
- Centered layout.
- Social links: always visible (no "Follow" toggle needed on mobile, though the toggle JS still runs).

### Issues

1. **Font sizes are smaller than the rest of the site.** Author name, bio, and social link text use the sidebar's inherited small-font context. Compared to CV section headings (`$type-size-3`) or body text, the sidebar feels low-density and cramped.

2. **Social links list has no visual grouping.** Academic links (Scholar, arXiv, ORCID), developer links (GitHub, GitLab), and social links (LinkedIn, Twitter) are all in one flat list separated only by line-height. There is no section divider or category label.

3. **The sidebar glass card style is defined in `head_custom.html`** using the selector `.sidebar > div[itemscope]`. This is fragile — the style depends on the exact HTML structure of `sidebar.html`, so any refactor of the include will silently break the appearance.

4. **The "Follow" button on mobile** uses jQuery-based show/hide from `_main.js`. This is the only remaining place where mobile vs. desktop behavior is toggled in JS rather than CSS (`display: none` / `display: block` via media queries). It is unnecessary and inconsistent.

5. **No visual hierarchy in the profile card.** Name, role/pronouns, and institution are all presented with similar weight. A stronger typographic hierarchy (large name → muted role → small bio) would be more readable at a glance.

6. **Social link icons use Font Awesome 4.x class names** (e.g., `fa-github`, `fa-linkedin`), which is the Academicpages legacy. Academicons handles academic-specific icons. This mix of icon libraries works but means two separate icon font requests.

7. **No "location" or "institution" display.** The author bio is free-form text. There is no structured field for current position, institution, or city/country — common on academic portfolio sites.

---

## 8. CSS Architecture

### File count and sizes

| File | Purpose | Notes |
|------|---------|-------|
| `_includes/head_custom.html` | Design tokens, layout overrides, component styles | ~1600 lines — too large |
| `_sass/_variables.scss` | SCSS compile-time constants | Well-organized |
| `_sass/_base.scss` | Element defaults + dark mode image filter | Clean |
| `_sass/_masthead.scss` | Navbar | Split with `head_custom.html` |
| `_sass/_sidebar.scss` | Sidebar | Split with `head_custom.html` |
| `_sass/_archive.scss` | Archive listings | Uses old Susy float classes |
| `_sass/_page.scss` | Single page content | Mix of old and new |
| `vendor/susy/` | 12-column float grid | Unused — fully overridden by flex |

### Design token coverage

CSS custom properties (`--ion-*`) cover: colors, shadows, border-radius, transitions. They do **not** cover: font sizes, spacing scale, z-index layers.

### Issues

1. **`head_custom.html` is 1600 lines of CSS in an HTML file.** This makes it unsearchable via `_sass/`, breaks SCSS linting, and is the main barrier to maintainability. It should be extracted into properly named SCSS partials.

2. **Susy grid vendor code is compiled but unused.** Susy was the original Minimal Mistakes layout grid (float-based, 12 columns). It has been fully replaced by flexbox. Its SCSS is still imported and compiled, adding ~50KB unminified to the output.

3. **Breakpoint definitions exist in two places:**
   - `_sass/_variables.scss`: `$small: 600px`, `$medium: 768px`, `$large: 925px`, `$x-large: 1280px`
   - `head_custom.html`: `@media (max-width: 768px)`, `@media (min-width: 1024px)` (different breakpoints!)
   This means the responsive behavior in SCSS and the behavior in `head_custom.html` are not aligned.

4. **Border-radius values are inconsistent:**
   - `4px` — archive items, images
   - `6px` — some buttons
   - `8px` — some cards
   - `12px` — sidebar, modals
   - `24px` — masthead
   Only the masthead uses `var(--ion-radius)`. Everything else is hardcoded.

5. **Z-index values are hardcoded and scattered.** Masthead, mobile menu overlay, share modal, and Magnific Popup all define their own z-index values without a shared layer system. This risks stacking conflicts.

6. **Inline `<style>` blocks exist in `cv.md`, `publications.md`, and individual post files.** Page-specific styles embedded in content files make global refactors harder.

---

## 9. JavaScript

### Files and responsibilities

| File | Lines | Purpose |
|------|-------|---------|
| `assets/js/theme-toggle.js` | ~67 | Light/dark/system mode cycling |
| `assets/js/collapse.js` | ~17 | Slide-toggle utility (headers) |
| `assets/js/_main.js` | ~100 | jQuery: sticky, lightbox, follow toggle, smooth scroll |
| `assets/js/main.min.js` | minified | Combined bundle |
| `_includes/masthead.html` | inline | Hamburger menu toggle |
| `_layouts/default.html` | inline | Share modal open/close, URL copy |
| `_pages/cv.md` | inline | CV expand/collapse |

### Issues

1. **jQuery dependency for `_main.js`.** The site loads the full jQuery library for approximately 100 lines of utility code (sticky footer, FitVids, smooth scroll, follow dropdown). All of these can be rewritten in vanilla JS. jQuery adds ~30KB gzipped.

2. **Inline JS in HTML/Markdown.** The masthead hamburger logic, share modal logic, and CV expand/collapse are all inline. They cannot be unit-tested, linted, or cached separately.

3. **Stickyfill plugin** (`assets/js/plugins/jquery.ba-throttle-debounce.js` and stickyfill) is loaded for IE `position: sticky` support. IE is end-of-life. This can be removed.

4. **Theme toggle does not save the icon state robustly.** On page load, the icon is set by reading `localStorage` in the inline head script, but the SVG icon in the button is only updated after `theme-toggle.js` runs (at end of body). There is a brief window where the icon may not match the active mode.

5. **Smooth scroll offset is hardcoded** at -65px to clear the fixed navbar. If the navbar height ever changes, scroll anchors will be misaligned.

---

## 10. Useful Links / Resources Pages

### Current state

Four long Markdown files in `_resources/`:
- `math_self_study_resources.md` — textbooks, YouTube channels, online courses for math topics
- `physics_self_study_resources.md` — same structure for physics
- `quantum_resources.md` — quantum computing/physics resources
- `lab_resources.md` — lab-specific tools and references

**Format:** Each page is a long `## Heading` → `### Subheading` → `1. **Book title**` → bullet description → `[🛒 Amazon](url)` numbered list. All links are inline text. Navigation between sections is via a `.notice` box of emoji anchor links at the top, plus `toc: true` side TOC.

### Issues

1. **Visually dense, low scanability.** A reader looking for a specific book sees: an emoji, bold title, paragraph description, and a plain link. Everything has the same visual weight. Compared to the CV's card-based expand/collapse design, this feels like 2015-era Markdown.

2. **No filtering or categorization UI.** A user who wants only "free online" resources vs. "paid books" cannot filter. The only navigation is the sticky TOC.

3. **Emoji as section icons** work in body text but are inconsistent with the rest of the site's icon usage (Devicons, Font Awesome, Academicons).

4. **Links are buried in prose.** The pattern "`[🛒 Amazon](url)`" mixes shopping metadata into what should be a reference library. External link destinations (Coursera, arXiv, YouTube, GitHub) are not visually distinguished.

5. **Pages are not cross-linked** to relevant publications or blog posts. A math resource page and a blog post on the same topic could link to each other.

6. **No difficulty level or prerequisite indicators.** For a self-study guide, knowing "this book requires calculus knowledge" is important context that is currently embedded in prose rather than structured metadata.

---

## 11. CV Page Interactive Mechanism

### What works well

The CV page is the most polished part of the site. It implements:

- **Timeline layout** with institution logos, role titles, dates, and expandable detail sections.
- **Expand/collapse animation** using CSS `max-height` + `opacity` transitions triggered by JS class toggle.
- **Chevron indicator** that rotates 90° when a section is open; hidden when collapsed, visible on hover.
- **Skill pills** with 3D keycap styling (gradient background, inset shadow simulating key press, hover lift).
- **Glass card styling** consistent with the rest of the site design.

### Implementation

```javascript
// CV expand/collapse (inline in cv.md)
document.querySelectorAll('.cv-timeline-item').forEach(item => {
  item.addEventListener('click', () => {
    const details = item.querySelector('.cv-details');
    const inner = item.querySelector('.cv-details-inner');
    item.classList.toggle('is-open');
    details.style.maxHeight = item.classList.contains('is-open')
      ? inner.scrollHeight + 'px'
      : '0';
  });
});
```

### Issues

1. **Inline JS and CSS in `cv.md`** — same modularization issue as elsewhere. The CV page has its own `<style>` block (likely several hundred lines) embedded in the content file.

2. **The expand/collapse JS is not reused.** `collapse.js` exists in `assets/js/` for the same purpose but uses a different API. The CV reinvents this.

3. **Pills/badges have 3+ inconsistent implementations:**
   - `.cv-pill` — 3D keycap style (CV page)
   - `.cv-badge` — flat badge (CV page)
   - `.cv-pill-neutral` — liquid glass pill (some archive pages)
   - `.project-card__btn` — publication link button
   All serve the "tag/link" purpose but look different and are defined in different places.

---

## 12. Current Issues & Inconsistencies

### Summary table

| Area | Issue | Severity |
|------|-------|----------|
| `head_custom.html` | 1600-line CSS dump in HTML — not a proper SCSS partial | High |
| Sidebar | Font sizes visually smaller than the rest of the site | High |
| Sidebar | Social links unorganized flat list | Medium |
| Sidebar | Style tied to fragile `div[itemscope]` selector | High |
| Navigation | Two-row layout creates excessive header height | Medium |
| Navigation | No active-state indicator on current page | High |
| Navigation | Full-screen mobile overlay is heavy for 7 links | Medium |
| Navigation | No scroll-aware behavior | Low |
| Resources | Plain Markdown lists — poor scannability vs. CV/Publications quality | High |
| CSS | Susy grid compiled but unused (~50KB) | Medium |
| CSS | Breakpoints inconsistent between SCSS and `head_custom.html` | Medium |
| CSS | Border-radius values hardcoded, inconsistent (4/6/8/12/24px) | Low |
| CSS | Z-index values scattered, no layer system | Medium |
| CSS | Inline `<style>` blocks in content Markdown files | Medium |
| JS | jQuery loaded for ~100 lines of code | Low |
| JS | Stickyfill / IE polyfills loaded | Low |
| JS | Inline JS in HTML/Markdown, not externalized | Medium |
| Badges | 3+ visual styles for the same "tag/link" pattern | Medium |
| Images | No `loading="lazy"` on most images | Low |
| Typography | No CSS custom properties for font sizes | Low |
| Dark mode | Image filter `brightness(0.85)` applies to all images uniformly | Low |

---

## 13. Improvement Proposals

### 13.1 Design Token Consolidation

**Goal:** Single source of truth for all design decisions.

**Proposal:** Create `_sass/_tokens.scss` containing all CSS custom properties for the design system. Import it first in `main.scss`. Remove all duplicated variable definitions from `head_custom.html`.

```scss
// _sass/_tokens.scss

:root {
  // Color palette
  --ion-bg: #ffffff;
  --ion-surface: rgba(255,255,255,0.7);
  --ion-surface-2: rgba(255,255,255,0.85);
  --ion-border: rgba(0,0,0,0.08);
  --ion-text: #1e293b;
  --ion-muted: #64748b;
  --ion-accent: #4f46e5;
  --ion-accent-hover: #4338ca;
  --ion-accent-rgb: 79,70,229;

  // Typography
  --ion-font-xs: 0.75rem;
  --ion-font-sm: 0.875rem;
  --ion-font-base: 1rem;
  --ion-font-lg: 1.125rem;
  --ion-font-xl: 1.25rem;
  --ion-font-2xl: 1.5rem;

  // Spacing scale
  --ion-space-1: 0.25rem;
  --ion-space-2: 0.5rem;
  --ion-space-3: 0.75rem;
  --ion-space-4: 1rem;
  --ion-space-6: 1.5rem;
  --ion-space-8: 2rem;

  // Shape
  --ion-radius-sm: 6px;
  --ion-radius: 12px;
  --ion-radius-lg: 16px;
  --ion-radius-xl: 24px;
  --ion-radius-full: 9999px;

  // Elevation
  --ion-shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --ion-shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --ion-shadow-lg: 0 12px 40px rgba(0,0,0,0.12);

  // Z-index layers
  --ion-z-base: 1;
  --ion-z-dropdown: 100;
  --ion-z-sticky: 200;
  --ion-z-navbar: 300;
  --ion-z-modal: 400;
  --ion-z-toast: 500;
}

html.dark-mode {
  --ion-bg: linear-gradient(145deg, #081432, #040a19);
  --ion-surface: rgba(15,25,60,0.6);
  --ion-surface-2: rgba(20,35,80,0.8);
  --ion-border: rgba(129,140,248,0.15);
  --ion-text: #f1f5f9;
  --ion-muted: #94a3b8;
  --ion-accent: #818cf8;
  --ion-accent-hover: #a5b4fc;
  --ion-accent-rgb: 129,140,248;
  --ion-shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
  --ion-shadow-md: 0 4px 16px rgba(0,0,0,0.4);
  --ion-shadow-lg: 0 12px 40px rgba(0,0,0,0.6);
}
```

**Also:** Create `_sass/_mixins.scss` (or update the existing one) with the glass card mixin since it is used 8+ times:

```scss
@mixin glass-card($blur: 20px) {
  background: var(--ion-surface);
  backdrop-filter: blur($blur) saturate(180%);
  -webkit-backdrop-filter: blur($blur) saturate(180%);
  border: 1px solid var(--ion-border);
  border-radius: var(--ion-radius);
  box-shadow: var(--ion-shadow-sm);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

@mixin glass-card-elevated {
  @include glass-card(25px);
  background: var(--ion-surface-2);
}
```

---

### 13.2 Sidebar / Profile Frame Overhaul

**Goal:** Make the sidebar visually consistent with the rest of the site (same font sizes, spacing, and component style), fix the fragile CSS selector, and improve social link organization.

**Structural changes:**

1. **Move sidebar styles** from `head_custom.html` into `_sass/_sidebar.scss`. Replace `.sidebar > div[itemscope]` with a proper class like `.author-card`.

2. **Add a semantic wrapper** in `_includes/sidebar.html`:
   ```html
   <div class="author-card">
     <div class="author-card__avatar">...</div>
     <div class="author-card__header">
       <span class="author-card__name">{{ site.author.name }}</span>
       <span class="author-card__role">{{ site.author.role }}</span>
       <span class="author-card__institution">{{ site.author.institution }}</span>
     </div>
     <p class="author-card__bio">{{ site.author.bio }}</p>
     <div class="author-card__links">
       <div class="author-card__links-group" data-group="academic">...</div>
       <div class="author-card__links-group" data-group="code">...</div>
       <div class="author-card__links-group" data-group="social">...</div>
     </div>
   </div>
   ```

3. **Typography fix:** Use `var(--ion-font-base)` for the author name (currently too small), `var(--ion-font-sm)` for bio and links.

4. **Group social links** with subtle dividers between academic / developer / social categories. Each group can have a small muted label: `Scholar · arXiv · ORCID`, `GitHub · GitLab`, `LinkedIn · Twitter`.

5. **Avatar improvement:** Add `loading="lazy"` and an `alt` attribute. Consider adding a thin colored ring that matches the accent color more strongly in dark mode.

6. **Add structured metadata fields** to `_config.yml` / `authors.yml`:
   ```yaml
   author:
     name: "Jovan Markov"
     role: "PhD Researcher"
     institution: "Weizmann Institute of Science"
     location: "Rehovot, Israel"
   ```
   Display these above the bio with clear typographic hierarchy.

**Visual proposal:**

```
┌────────────────────────────────┐
│  ●●●  [profile photo]          │
│                                │
│  Jovan Markov          (name)  │
│  PhD Researcher        (role)  │
│  Weizmann Institute    (inst.) │
│                                │
│  [bio text in muted color]     │
│                                │
│  ─── Academic ─────────────    │
│  Scholar  arXiv  ORCID         │
│  ─── Code ─────────────────    │
│  GitHub  GitLab                │
│  ─── Connect ──────────────    │
│  LinkedIn  Twitter             │
└────────────────────────────────┘
```

---

### 13.3 Navigation Panel Modernization

**Goal:** Single-row desktop navbar with active state, cleaner mobile drawer, scroll-aware behavior.

**Desktop changes:**

1. **Collapse to single row:**
   ```
   [Name/Logo]  [Publications] [CV] [Blog] [Resources] ...  [Share] [Theme]
   ```
   Remove the `masthead__row-top` / `masthead__row-bottom` two-row structure. Use flexbox with `justify-content: space-between`.

2. **Active state indicator:** In `masthead.html`, compare `page.url` to `link.url` with Liquid and add `aria-current="page"` + `.is-active` class. Style with an underline or accent dot below the link.

3. **Scroll-aware navbar:** Add a CSS class `.masthead--scrolled` when `window.scrollY > 50`. In CSS: reduce height slightly, increase `backdrop-filter` opacity.
   ```javascript
   window.addEventListener('scroll', () => {
     document.querySelector('.masthead').classList
       .toggle('masthead--scrolled', window.scrollY > 50);
   }, { passive: true });
   ```

4. **Separate action buttons** (share, theme) from nav links visually — a thin `1px` vertical separator between the nav links and the action buttons cluster.

**Mobile changes:**

1. **Replace full-screen overlay** with a slide-down drawer anchored to the navbar:
   - Position: `absolute`, `top: 100%`, `left: 0`, `width: 100%`.
   - Background: `var(--ion-surface-2)` glass.
   - Border-radius: `0 0 var(--ion-radius-lg) var(--ion-radius-lg)`.
   - Max-height: 0 → auto with CSS transition.
   - Links in a clean 2×N grid or a simple vertical stack.
   - This is less disorienting than a full-screen takeover.

2. **Active link gets a filled background pill** in the mobile drawer (not just an underline) to make it obvious.

3. **Close on outside click** (tap on the darkened backdrop), not just on link click or Escape.

**Example HTML structure:**
```html
<div class="masthead" role="banner">
  <div class="masthead__inner">
    <a class="masthead__brand" href="/">Jovan Markov</a>

    <nav class="masthead__nav" id="site-nav" aria-label="Main navigation">
      <ul class="masthead__links" id="nav-links">
        {% for link in site.data.navigation.main %}
        <li>
          <a href="{{ link.url }}"
             {% if page.url == link.url %}aria-current="page" class="is-active"{% endif %}>
            {{ link.title }}
          </a>
        </li>
        {% endfor %}
      </ul>
    </nav>

    <div class="masthead__actions">
      <button id="share-toggle" ...>...</button>
      <button id="ion-theme-toggle" ...>...</button>
      <button class="masthead__hamburger" id="nav-toggle" ...>...</button>
    </div>
  </div>

  <!-- Mobile drawer (positioned below masthead) -->
  <div class="masthead__drawer" id="nav-drawer" aria-hidden="true">
    <ul>...</ul>
  </div>
</div>
```

---

### 13.4 Resources / Useful Links Redesign

**Goal:** Transform the long Markdown lists into a scannable, structured interface — closer in polish to the CV and Publications pages.

**Option A: Categorized Card Grid (recommended)**

Each resource entry becomes a card with:
- Icon or category badge (Book / Video / Course / Tool)
- Title (bold)
- Source label (e.g., "MIT OpenCourseWare", "YouTube: 3Blue1Brown")
- One-line description
- Tag pills: `Free` / `Paid` / `Textbook` / `Video` / `Interactive`
- External link button

Layout: 2–3 column responsive grid (same CSS class as publications grid).

**Implementation:** The resource pages could use a `_data/` YAML file instead of prose Markdown for structured entries, then a `_layouts/resource-list.html` to render the cards. This separates content from presentation:

```yaml
# _data/math_resources.yml
- title: "Linear Algebra Done Right"
  author: "Sheldon Axler"
  type: textbook
  level: undergraduate
  tags: [paid, textbook]
  url: "https://..."
  description: "Focuses on conceptual understanding over computation."
  source: Amazon

- title: "Essence of Linear Algebra"
  author: "3Blue1Brown"
  type: video
  level: beginner
  tags: [free, video]
  url: "https://youtube.com/..."
  description: "Visually intuitive series on vectors and transformations."
  source: YouTube
```

**Option B: Expandable Topic Sections (simpler)**

Keep Markdown but wrap each topic section in the same expand/collapse component used in the CV. The section header (e.g., "📐 General Mathematics") becomes the trigger; books/links inside are revealed on click. This reuses existing JS and CSS without a data refactor.

**Option C: Tabbed Interface**

Top-level tabs for Books / Videos / Courses / Tools. Within each tab, a sorted filterable list. More complex but offers the best UX for large collections.

**Recommendation:** Do Option B now (low effort, immediate visual improvement), then migrate to Option A as a medium-term project to make the data maintainable.

**Quick wins regardless of option:**
- Add external link icon (↗) after each URL to indicate it opens externally.
- Replace emoji section headers with proper icon + heading HTML for consistent sizing.
- Add a "Jump to section" sticky mini-TOC card at the top of each page (beyond the current `.notice` anchor list).

---

### 13.5 Publications & Conferences Cards

**Goal:** Unify the card style across publications, conferences, and talks; give conferences the same grid view option as publications.

**Publications — current issues:**
- Grid vs. list toggle JS is defined inline in `publications.md`. Extract to `assets/js/archive-toggle.js`.
- The list view pill buttons (arXiv, Journal, PDF, Slides) use `.cv-pill-neutral` — this should be a shared `.link-pill` component.
- Missing: sort by year (ascending/descending toggle).

**Conferences — missing features:**
- No grid/card view (only plain archive list).
- Conference category (Talk vs. Poster) is in front matter but not visually emphasized in the list.
- No thumbnail support.

**Unified card proposal (`.entry-card`):**
```html
<div class="entry-card">
  <div class="entry-card__thumb"><!-- optional thumbnail --></div>
  <div class="entry-card__body">
    <span class="entry-card__type"><!-- Talk / Poster / Paper --></span>
    <h3 class="entry-card__title"><a href="...">Title</a></h3>
    <p class="entry-card__meta">
      <span class="entry-card__venue">Venue Name</span>
      <span class="entry-card__date">YYYY</span>
    </p>
    <p class="entry-card__excerpt">...</p>
    <div class="entry-card__links"><!-- link pills --></div>
  </div>
</div>
```

This card structure could be the `_includes/archive-single.html` base, parameterized by the collection type.

---

### 13.6 CSS Modularization

**Goal:** Extract all CSS from `head_custom.html` into properly named SCSS partials; remove dead code.

**Extraction plan:**

| CSS block in `head_custom.html` | Target SCSS file |
|--------------------------------|-----------------|
| `:root` / `html.dark-mode` custom properties | `_sass/_tokens.scss` (new) |
| Masthead overrides | `_sass/_masthead.scss` |
| Sidebar / author card | `_sass/_sidebar.scss` |
| Glass card mixin usage | `_sass/_mixins.scss` |
| Archive / entry card styles | `_sass/_archive.scss` |
| Publication grid + toggle | `_sass/_publications.scss` (new) |
| CV timeline + expand | `_sass/_cv.scss` (new) |
| Share modal | `_sass/_modal.scss` (new) |
| Notice / callout boxes | `_sass/_notices.scss` |
| Responsive utilities | `_sass/_responsive.scss` (new) |
| Anti-FOUC / theme init script | Keep inline in `head_custom.html` (must be synchronous) |

**Dead code to remove:**
- `vendor/susy/` — entirely unused.
- Stickyfill / IE `position: sticky` polyfill.
- FitVids jQuery plugin (CSS-only solution: `aspect-ratio: 16/9` on video containers).

**Estimated size reduction:** ~40–60KB unminified CSS, ~80KB JS.

---

### 13.7 Reusable Component Patterns

**Goal:** Replace the 3+ badge/pill implementations with a single `.pill` component.

**Current implementations:**

| Class | Style | Location |
|-------|-------|----------|
| `.cv-pill` | 3D keycap (gradient + inset shadow) | `cv.md` inline style |
| `.cv-badge` | Flat accent badge | `cv.md` inline style |
| `.cv-pill-neutral` | Liquid glass pill | `head_custom.html` |
| `.project-card__btn` | Outlined button | `_sass/_projects.scss` |

**Proposed unified `.pill` system:**

```scss
// _sass/_pills.scss

.pill {
  display: inline-flex;
  align-items: center;
  gap: var(--ion-space-1);
  padding: var(--ion-space-1) var(--ion-space-3);
  border-radius: var(--ion-radius-full);
  font-size: var(--ion-font-xs);
  font-weight: 500;
  line-height: 1;
  transition: background 0.2s, color 0.2s, transform 0.15s;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
}

.pill--glass {
  background: var(--ion-surface);
  border: 1px solid var(--ion-border);
  color: var(--ion-text);
  &:hover { background: var(--ion-surface-2); transform: translateY(-1px); }
}

.pill--accent {
  background: var(--ion-accent);
  color: #fff;
  border: none;
  &:hover { background: var(--ion-accent-hover); }
}

.pill--key {
  // 3D keycap style (CV skills)
  background: linear-gradient(to bottom, var(--ion-surface-2), var(--ion-surface));
  box-shadow: 0 2px 0 var(--ion-border), inset 0 1px 0 rgba(255,255,255,0.3);
  border: 1px solid var(--ion-border);
  &:active { transform: translateY(1px); box-shadow: 0 1px 0 var(--ion-border); }
}
```

Usage: `<span class="pill pill--glass">arXiv</span>`, `<a class="pill pill--accent" href="...">PDF</a>`.

---

### 13.8 Mobile Experience

**Goal:** A more polished, modern mobile layout.

**Priority changes:**

1. **Navbar:** Replace full-screen overlay with the slide-down drawer described in §13.3.

2. **Sidebar on mobile:** Currently rendered as a full-width card above content. Consider adding an "About" collapse toggle on mobile to hide the sidebar initially, saving vertical space. The CV expand/collapse mechanism already exists.

3. **Reading experience:** Add a progress bar at the top of single post/page views (`position: fixed; top: 0; height: 2px; background: var(--ion-accent)`). Scroll percentage drives width.

4. **Touch targets:** All interactive elements (nav links, buttons, card links) should be at least 44×44px. Currently some pill links and icon buttons are smaller.

5. **Image zoom:** Magnific Popup lightbox works well but is a ~20KB jQuery plugin. Consider replacing with a CSS-only `<dialog>` element approach for the same effect.

---

### 13.9 Performance & Maintainability

**Quick wins (low effort, high impact):**

| Change | Effect |
|--------|--------|
| Add `loading="lazy"` to all non-above-fold `<img>` | Faster initial load |
| Remove Susy SCSS | ~40KB CSS reduction |
| Remove Stickyfill + FitVids JS | ~15KB JS reduction |
| Remove jQuery, rewrite `_main.js` in vanilla JS | ~30KB JS reduction |
| Add `rel="noopener noreferrer"` to all external links | Security improvement |
| Extract inline `<style>` from `cv.md`, `publications.md` | Maintainability |
| Consolidate breakpoints to a single set | Consistency |

**Medium effort:**

| Change | Effect |
|--------|--------|
| Extract `head_custom.html` CSS into SCSS partials | Maintainability, lintability |
| Create `_data/` YAML for resource pages | Content/presentation separation |
| Implement `_sass/_tokens.scss` | Single source of truth for design |
| Add `srcset` to publication thumbnails and avatar | Retina/HiDPI quality |

**Longer term:**

| Change | Effect |
|--------|--------|
| Migrate from Academicpages to a minimal custom Jekyll theme | Remove ~200KB of unused CSS/JS |
| Add a `_sass/_components/` directory for each UI component | Scalable CSS architecture |
| Implement a build step for image optimization | Faster page loads |

---

## 14. Priority Matrix

Ordered by impact × effort ratio (high impact / low effort first):

| # | Change | Impact | Effort | Priority |
|---|--------|--------|--------|----------|
| 1 | Unified `.pill` component replacing 3+ implementations | High | Low | **Now** |
| 2 | CSS custom property consolidation into `_tokens.scss` | High | Medium | **Now** |
| 3 | Sidebar font size + structured metadata fix | High | Low | **Now** |
| 4 | Sidebar social links grouping with dividers | Medium | Low | **Now** |
| 5 | Active state indicator in navbar | High | Low | **Now** |
| 6 | Resources pages: add expand/collapse sections (Option B) | High | Medium | **Soon** |
| 7 | Extract CSS from `head_custom.html` into SCSS partials | High | High | **Soon** |
| 8 | Navbar: collapse to single row on desktop | Medium | Medium | **Soon** |
| 9 | Navbar: replace mobile full-screen overlay with slide-down drawer | Medium | Medium | **Soon** |
| 10 | Add `loading="lazy"` to all images | Medium | Low | **Now** |
| 11 | Remove Susy grid vendor code | Low | Low | **Now** |
| 12 | Remove jQuery, rewrite in vanilla JS | Medium | High | **Later** |
| 13 | Conferences: add grid/card view like publications | Medium | Medium | **Later** |
| 14 | Resources: migrate to `_data/` YAML + card grid (Option A) | High | High | **Later** |
| 15 | Scroll-aware navbar behavior | Low | Low | **Later** |
| 16 | Unified `.entry-card` component for all collections | High | High | **Later** |

---

*End of audit. This document describes the site as of 2026-04-06. Implementation of any proposal should begin with the design token consolidation (#2) as it is a prerequisite for most other changes.*
