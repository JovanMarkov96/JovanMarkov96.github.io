# Talks & Conferences: vertical timeline

**Size:** small change. **Date:** 2026-11-23.

## Why
`/talks/` and `/conferences/` are stacks of tall, full-width boxes, each about 230 px tall. Each box has a grey date line, a grey venue line, a glossy 3D type badge and a three-line excerpt. The glossy badges also clash with the flat chips on the new Publications list. The owner wants both pages "a lot more stylish" and picked a vertical timeline.

## Goals
- Both pages share one timeline look: a vertical line on the left, one year marker per year, and one card per entry hanging off a dot on the line.
- Each entry reads at a glance: title, venue and location, date, a type chip, and link buttons.
- The page is compact: about 90–100 px per entry.
- Light and dark mode both work, and it works at phone width.

## Non-goals
- No content edits. Titles stay as written, even where they repeat the venue. The 2023 APS DAMOP talk stays on both pages.
- No change to the individual talk and conference pages, the talk map link, or other lists.

## Approaches
- **A. Compact rows with a date tile.** Matches Publications. Not chosen.
- **B. Vertical timeline by year (chosen).** More of a statement piece. It is a little taller than A because of the year markers, and it looks different from Publications on purpose.

## Design
- **Timeline line:** a thin vertical line in a muted accent tint, 1.5rem from the left edge of the list.
- **Year marker:** a small accent pill on the line ("2026") wherever the year changes. Entries are newest first.
- **Entry:** a dot on the line, coloured by type, and to its right a light card using the site's border, radius and surface. The card has:
  1. the title, linked to the entry's page;
  2. a muted line: venue · location;
  3. one line with the date ("Nov 4"), a flat type chip, and link buttons.
- **Type colours** (used for both the dot and the chip): Talk blue, Workshop amber, Poster green, Tutorial pink, anything else (for example "Conference proceedings talk") purple. The chip has a tinted background with coloured text, the same style as the Publications venue chip.
- **Links:** conferences have `conference_link` (Website), `paper_link` (Paper / Abstract) and `pdfurl` (PDF). Talks use `link` and `slides` if present. All use the existing `cv-pill cv-pill-neutral` buttons.
- **Removed from the list:** the excerpt. It stays on each entry's page.
- **Hover:** the card lifts slightly, as the Publications rows do.
- **Phone:** the line moves closer to the edge, the cards take the full remaining width, and there's no horizontal scroll.

## Implementation notes (builder's calls)
- One new include, `_includes/archive-single-timeline.html`. It reads `venue` or `conference` for the venue, and `type`, `talk_type` or `category` for the type. It is used by `_pages/talks.html` and `_pages/conferences.md`, and the year marker is emitted from the page loop.
- Leave `archive-single-talk.html` and `archive-single-conference.html` untouched.
- The CSS goes in `_includes/head_custom.html` after the `.pub-row` block and uses only the `--ion-*` tokens.
- Before pushing, check with a local build and screenshots at 1440 px and a true 390 px (inside an iframe), in light and dark mode.
