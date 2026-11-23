# Talks & Conferences Timeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render `/talks/` and `/conferences/` as a vertical timeline grouped by year, with type-coloured dots and compact cards.

**Architecture:** A shared include renders one entry. Each page loop emits a year marker whenever the year changes. The CSS sits in `head_custom.html` after the `.pub-row` block.

**Tech Stack:** Jekyll, Liquid, plain CSS with `--ion-*` tokens.

**Spec:** `docs/superpowers/specs/2026-11-23-talks-conferences-timeline-design.md`

## Global Constraints
- Leave `archive-single-talk.html`, `archive-single-conference.html`, the entry pages, and the talk map link unchanged.
- No content or front-matter edits.
- Type colours, light / dark (RGB): talk 37,99,235 / 96,165,250; workshop 180,83,9 / 251,191,36; poster 4,120,87 / 52,211,153; tutorial 190,24,93 / 244,114,182; other 124,58,237 / 167,139,250.
- Card text goes in `<div>`, not `<p>`, because the theme forces `html.dark-mode p { color:#fff !important }`.

## Review Focus
- "Conference proceedings talk" must map to *other* (purple), not *talk*. Check the proceedings branch before the talk branch.
- Two entries in the same year get one year marker. Talks 2023 has two entries, as do Conferences 2023 and 2025.
- An entry with no links (most talks) shows no empty button row.
- `end_date` (SQuInT, Oct 26–28) shows as a range.
- At a true 390 px width there's no horizontal scroll, and long titles wrap.

---

### Task 1: Timeline include, page loops, CSS

**Files:**
- Create: `_includes/archive-single-timeline.html`
- Modify: `_pages/talks.html` and `_pages/conferences.md` (loops only)
- Modify: `_includes/head_custom.html` (new `.tl` block after the `.pub-row` media queries)

**Interfaces:**
- Consumes: `post` from `site.talks` / `site.conferences`, read in reverse order. Venue: `venue` or `conference`. Type: `type`, then `talk_type`, then `category`. Links: `conference_link`, `paper_link`, `pdfurl`, `link`, `slides`. Dates: `date`, `end_date`.
- Produces: the markup `.tl > (.tl__year > span) + article.tl-item.tl--{talk|workshop|poster|tutorial|other} > .tl-item__title + .tl-item__venue + .tl-item__meta > (.tl-item__date, .tl-chip, a.cv-pill.cv-pill-neutral…)`

- [ ] **Step 1:** Write the include and both loops (year marker when `post.date | date: "%Y"` changes).
- [ ] **Step 2:** Add the CSS. Geometry comes from the variables `--tl-pad`, `--tl-x` and `--tl-dot` (2.25rem, .75rem, 12px; under 600px: 1.6rem, .5rem, 10px). The dot and a short connector are `::before` / `::after` of the item. Hover changes only the shadow and border (no transform, so the dot stays on the line).
- [ ] **Step 3:** Verify with `bundle exec jekyll build`. Expected counts: talks 5 items and 4 year markers; conferences 4 items and 2 year markers. The DAMOP talk gets class `tl--other`, the SQuInT date reads "Oct 26–28", and no `<p>` appears inside `.tl-item`. Take screenshots at 1440 and a true 390 (iframe), light and dark.
- [ ] **Step 4:** Commit and push, then confirm the live pages show `tl-item`.
