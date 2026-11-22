# Publications List Compact Rows Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the publications list view's tall full-width boxes with compact rows: a thumbnail, then the title, authors, venue · year chip and link buttons.

**Architecture:** A new Liquid include renders one row and is used only by the list loop in `_pages/publications.md`. The CSS goes in `_includes/head_custom.html`, next to the existing "Publications Grid/List Toggle" block.

**Tech Stack:** Jekyll (AcademicPages fork), Liquid, plain CSS with `--ion-*` tokens.

**Spec:** `docs/superpowers/specs/2026-11-23-publications-list-design.md`

## Global Constraints
- Do not modify `_includes/archive-single.html`, the grid markup, or the toggle script.
- No new front-matter fields. Use the existing `title`, `url`, `authors`, `venue`, `date`, `arxivurl`, `paperurl`, `pdfurl`, `slidesurl`, `thumbnail`, `thumbnail_light` and `thumbnail_dark`.
- Thumbnail box: 128 × 80 px (the SVGs are 640 × 400, so it's 16:10 with no crop), rounded corners. Use `pc-img--light` / `pc-img--dark` to switch with the theme.
- Colours come only from `--ion-*` variables. Dark mode is `html.dark-mode`.

## Review Focus
- A paper with no thumbnail fields shows the `fa-file-alt` placeholder box, not a broken image.
- A paper with no `authors` shows no empty line.
- `slidesurl: #'…'` (commented out) is empty, so no Slides button appears.
- At 390 px width the page has no horizontal scroll, and the long Armenteros-Podolanski title wraps.
- In dark mode, only the dark thumbnail shows and the chip text stays readable.

---

### Task 1: Compact publication rows

**Files:**
- Create: `_includes/archive-single-publication.html`
- Modify: `_pages/publications.md` (list loop only)
- Modify: `_includes/head_custom.html` (new `.pub-list` / `.pub-row` block after `.pub-venue i`)

**Interfaces:**
- Consumes: the `post` variable from the `{% for post in site.publications reversed %}` loop.
- Produces: the markup `.pub-list > article.pub-row > .pub-row__thumb + .pub-row__body > (.pub-row__title, .pub-row__authors, .pub-row__meta > .pub-chip + a.cv-pill.cv-pill-neutral…)`

- [ ] **Step 1:** Write the include. The title links to `post.url`. Output authors raw so `<strong>` survives. The chip reads `{{ venue }} · {{ date | date: "%Y" }}`. Link buttons reuse the `cv-pill cv-pill-neutral` markup from `archive-single.html`, one per non-empty URL field.
- [ ] **Step 2:** In `publications.md`, wrap the list loop in `<div class="pub-list">` and include `archive-single-publication.html`.
- [ ] **Step 3:** Add the CSS:
  - Row: flex with a 1rem gap, 0.75rem padding, `--ion-border` border, `--ion-radius` radius, `--ion-surface` background. On hover, lift with `translateY(-2px)` and `--ion-shadow-md`. Rows are 0.6rem apart.
  - Title: 1rem, weight 650.
  - Authors: 0.85rem, muted.
  - Chip: a pill tinted `rgba(var(--ion-accent-rgb), .12)` with accent text, 0.75rem.
  - Under 600px: thumbnail 96 × 60.
  - Under 420px: thumbnail stacks above the text at full width with aspect-ratio 16/10.
  - Reduced motion disables the lift.
- [ ] **Step 4:** Verify. Run `bundle exec jekyll build`. The built list must contain 4 `pub-row` elements, 4 author lines with `<strong>Jovan Markov</strong>`, and 0 Slides buttons. Take screenshots at 1440 and 390 px, light and dark, and check them against the Review Focus list.
- [ ] **Step 5:** Commit, then push after the owner sees the screenshots.
