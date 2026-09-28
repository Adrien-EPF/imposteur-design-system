# Imposteur design-sync notes

## Origin: this was a spec-only repo, not a built package

At first sync, this repo had **no component source code** — only `tokens.json`, `colors_and_type.css`, and 4 static HTML mockups (`components/*.html`, vanilla JS, already using the `@dsCard` preview convention). The actual game repo (`Adrien-EPF/Impostor_Game`, referenced in `tokens.json`) has no UI code either.

Per user decision, real React/TypeScript components were **authored from the spec** (not ported from existing code):

- `src/Button.tsx`, `src/SecretCard.tsx`, `src/RoleReveal.tsx`, `src/icons.tsx`, `src/index.ts`
- `src/styles.css` — tokens (`@import`s the original `colors_and_type.css`) + BEM-scoped component classes (`.btn`, `.secret-card__*`, `.role-tile__*`) derived 1:1 from the original mockups' inline `<style>` blocks
- Built with `tsup` (`npm run build` → `dist/index.js` + `dist/index.d.ts` + `dist/styles.css`)

## `cover.html` was intentionally excluded

`components/cover.html` is static brand/marketing artwork (a fixed hero illustration + "Imposteur" wordmark), not a parametrized, reusable UI component — reusing that exact SVG (hardcoded 20-dot player grid) elsewhere would misrepresent it as a general pattern. It was left out of the importable bundle. If a future need arises for a reusable "hero banner" component, that would be new API design, not a sync of this asset.

## Render check / grading: skipped by explicit user choice

User declined the Playwright/Chromium install (~200MB) for the automated render check. Instead:
- `package-validate.mjs` ran with `--no-render-check` (exits clean; `[RENDER_SKIPPED]` warning only).
- `package-capture.mjs`/grading never ran (needs Playwright too).
- Human review was done instead via the served `.review.html` — user confirmed "C'est parfait" for all 3 components across their authored preview cells (Button: Variants, Disabled; SecretCard: Playing, Revealed, MrWhite, LongWord; RoleReveal: Civil, Imposteur, MrWhite).
- Grade files in `.design-sync/.cache/review/*.grade.json` were written by hand reflecting that human review, not machine capture.

**Re-sync risk**: since there's no machine-verified render baseline, a future re-sync's driver will report `capture` stage failure again unless Playwright is installed at that point. If the user wants machine verification restored, install Playwright in `.ds-sync/` (`npm i playwright` then `npx playwright install chromium`) and re-run the driver with `--render-sample 0` to force a full pass.

## Groups

`docsMap` frontmatter (`category: Actions` / `category: Jeu`) was added to the original French `.md` docs to preserve the grouping from the original mockups' `@dsCard group="..."` attributes. Groups render lowercased as folder names (`actions/`, `jeu/`) — this is expected, cosmetic only.

## Re-sync risks

- The component API (props, behavior) was designed by Claude from the French spec, not copied from working code — if the actual game app (`Adrien-EPF/Impostor_Game`) later ships real UI code, that becomes the new source of truth and this package should be reconciled against it, not blindly re-synced.
- `SecretCard`'s "revealed" preview state is produced by an `AutoReveal` wrapper in `.design-sync/previews/SecretCard.tsx` that auto-clicks the toggle button on mount (there's no scripted-interaction support in the capture pipeline, and no controlled "initial open" prop on the component itself). If `SecretCard`'s internal DOM structure changes (e.g. the button moves), this wrapper's `querySelector('button')` may need updating.
- Fonts ("Baloo 2", "Nunito") are loaded via a remote Google Fonts `@import` in `styles.css`, not shipped locally — `[FONT_REMOTE]`, informational, no local `fonts/` needed.
- This repo is **not a git repository** — there is no commit/PR step to offer for `.design-sync/` durable files (config.json, NOTES.md, conventions.md, previews/). If the user initializes git later, commit `.design-sync/` (config, NOTES, conventions.md, previews/) and `src/`, `package.json`, `tsconfig.json`, `tsup.config.ts` — everything needed to reproduce `dist/` and re-run the sync.
