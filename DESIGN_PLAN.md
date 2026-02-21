# Ion Landscape Design Port — Implementation Plan

## 1. Summary of Current Jekyll Theme Structure
The `JovanMarkov96.github.io` site uses Academic Pages, which is a fork of the Minimal Mistakes Jekyll theme. 
- **SCSS Pipeline:** The main entry point is `assets/css/main.scss`, which imports various components from the `_sass/` directory (e.g., `_variables.scss`, `_masthead.scss`, `_archive.scss`).
- **Layouts & Includes:** The HTML structure is driven by files in `_layouts/` (like `single.html`) and `_includes/` (like `masthead.html`, `archive-single.html`). 
- **Content:** Markdown with YAML front matter residing in `_pages`, `_publications`, `_talks`, etc., and navigation defined in `_data/navigation.yml`.

## 2. Global CSS Overrides Strategy
To avoid forking the entire theme and creating a maintenance burden, we will inject a targeted design system layer:
- **Location:** We will create a `_sass/_ionlandscape.scss` partial and import it at the very bottom of `assets/css/main.scss`. This guarantees our styles robustly override the Minimal Mistakes defaults.
- **Dark Mode Context:** We will adapt the liquid glass backgrounds dynamically (via `@media (prefers-color-scheme: dark)` or existing theme selectors if present) so that the glass maintains proper contrast.

## 3. Ion Landscape CSS Patterns to Port
From `ionlandscape/website/src/css/custom.css`, we will extract and adapt the following:
- **Design Tokens (Variables):** Google Font (`Inter`), colors (`--ion-surface`, `--ion-accent`), formatting (`--ion-radius: 12px`), and shadows.
- **Liquid Glass Navbar:** Transforms the current `.masthead` into a floating, translucent header (`backdrop-filter: blur(20px) saturate(180%)`, soft borders, rounded corners, spaced from the viewport edges).
- **Glass Cards (Panels):** Enhances `.archive__item` (which wraps individual talks, publications, etc.) to look like the floating panels in Ion Landscape (`background: rgba(...)`, border radius, and transitions on hover).

## 4. File-by-File Implementation Checklist

### [NEW] `_sass/_ionlandscape.scss`
- Define CSS variables (colors, shadows, radius) at the `:root` pseudo-class.
- Override `.masthead` (the header) to replicate the `ionlandscape` `.navbar`.
- Override `.archive__item` wrapping class to replicate `.ion-landscape-panel` or cards.
- Dark mode overrides.

### [MODIFY] `assets/css/main.scss`
- Import Google Fonts (`Inter`).
- Import `@import "ionlandscape";` at the very end.

### [MODIFY] `_includes/masthead.html`
- Minor structure tweaks if necessary to cleanly separate the inner navigation wrapper and achieve the centered floating header look.

### [MODIFY] `_pages/about.md` & `_layouts/single.html`
- Update the structure to build a modern "Hero" layout (Name + positioned text) and embed a grid/cards for quick links or featured sections natively rather than raw markdown text.

## Verification Plan
### Automated Tests
- Run `bundle exec jekyll serve` to verify that SCSS builds successfully and no liquid syntax errors exist.
### Manual Verification
- Visual inspection on desktop and mobile viewports to ensure the floating navbar and glass cards render beautifully up to the high aesthetics bar (no visual regressions).
- Compare the exact styling against `jovanmarkov96.github.io/ionlandscape`.
- Click through the navigation (`_data/navigation.yml`) to ensure no links are broken.
