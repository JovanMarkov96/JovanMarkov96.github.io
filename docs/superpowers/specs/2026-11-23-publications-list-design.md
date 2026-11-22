# Publications list view: compact rows

**Size:** small change. **Date:** 2026-11-23.

## Why
The list view on `/publications/` (behind the list toggle) is too big and too wide: each paper is a full-width box about 280 px tall, the date appears twice ("March 29, 2026" plus "Published in …, 2026"), and a two-line excerpt in small print stretches across about 1,200 px. The owner wants it compact, modern and "cute": everything button-like and close together, with better formatting. The grid (tile) view stays as it is for now and will be revisited separately.

## Goals
- All four papers fit on one desktop screen (about 100 px per paper instead of 280).
- Each paper reads at a glance: title, authors, venue and year, links.
- Links look like small buttons; venue and year form one chip.
- Works in light and dark mode and at phone width.

## Non-goals
- No change to the grid view, the toggle, or other pages (Talks, Blog Posts, Teaching, archives) that share `_includes/archive-single.html`.
- No new front-matter fields; no year headers (four papers don't need them).

## Approaches
- **A. Rows with a small illustration (chosen).** Small rounded thumbnail on the left, text on the right. Keeps the custom illustrations, so the page doesn't look like the CV.
- **B. Text-only rows.** Densest (about 75 px per paper), but looks like the CV page and drops the illustrations.
- Year-grouped list: dropped, because with four papers the headers cost more space than they save.

The owner picked A.

## Design
Each row has two parts:
- **Left:** the paper's illustration, about 120 × 80 px, with rounded corners. It uses `thumbnail_light`/`thumbnail_dark` with the existing `pc-img--light`/`pc-img--dark` classes, so it switches with the theme. It falls back to `thumbnail`, then to the file icon the grid already uses.
- **Right:**
  1. The title, linked to the paper's page.
  2. The authors, from the `authors` field, which already puts the owner's name in bold and marks co-first authors with *.
  3. One line holding the venue · year chip (accent tint) and the arXiv / Journal / PDF / Slides buttons, using the existing `cv-pill` style.

Each row is a light card with the site's border and radius, close spacing between rows, and a gentle lift on hover. On a phone, the thumbnail shrinks or moves above the text. There's no horizontal scroll.

The excerpt and the separate date line are removed from the list. The excerpt is still on each paper's own page and in the grid.

## Implementation notes (builder's calls)
- A new include, `_includes/archive-single-publication.html`, is used only by the list loop in `_pages/publications.md`. `archive-single.html` stays untouched.
- The styles go next to the existing publication styles and use the `--ion-*` colour tokens.
- Add `docs` to `exclude:` in `_config.yml`, so this spec isn't published on the site.
- Before pushing, check with a local build and screenshots at 1440 px and 390 px, in light and dark mode.
