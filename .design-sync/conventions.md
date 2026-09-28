# Imposteur — conventions for building with this design system

Imposteur is a party game played on one phone passed around the table. The UI is **pop and festive**: white background, turquoise + pale yellow, sticker-style rounded shapes, one accent color per screen. Light theme only.

## Setup

No provider or wrapper is required — there's no theme/context provider in this DS. Every screen just needs the stylesheet loaded once (`styles.css`, which imports the design tokens and every component's CSS). Components are plain function components; import and use them directly:

```jsx
import { Button, SecretCard, RoleReveal } from 'imposteur-design-system';
```

## Styling idiom: CSS custom properties + scoped classes

There is **no utility-class system** here. Each component ships its own scoped CSS classes (already applied by the component — never pass `className` overrides), and those classes read design tokens as CSS custom properties defined on `:root` in `styles.css`. When laying out your OWN screen glue (page padding, stacking components, grids of tiles), use these tokens directly via `var(--token-name)`, never a hard-coded value:

| Token | Value | Use for |
|---|---|---|
| `--surface` | `#ffffff` | Page background |
| `--surface-tint` | `#e6f8f8` | Panels/tiles on top of surface |
| `--ink` / `--ink-muted` | `#1f2a37` / `#5f6b78` | Primary / secondary text |
| `--turquoise` / `--turquoise-deep` | `#2ec4c6` / `#067a82` | Brand, primary action, focus ring |
| `--lemon` / `--lemon-strong` | `#fff3b0` / `#ffd84a` | Secret card, highlights |
| `--danger` | `#c9304d` | The one irreversible action only |
| `--civil` / `--imposteur` / `--mr-white` | turquoise / `#ff6b81` / `#8f7cff` | Role colors — always paired with the role's icon and name, never color alone |
| `--space-2/4/6/10` | `8/16/24/40px` | Spacing scale |
| `--radius-sm/lg/pill` | `12/24/999px` | Corner radii — buttons and badges are always `radius-pill`; tiles and cards are `radius-lg` |
| `--shadow-sticker` / `--shadow-card` | hard 4px offset / soft blur | Sticker elements (buttons, tiles) / floating elements (secret card) |
| `--font-display` (Baloo 2) / `--font-sans` (Nunito) | | Titles & the secret word / body text & controls |

Typography classes `.title`, `.heading`, `.body`, `.label`, `.caption`, `.secret-word` (defined in `styles.css`) cover the standard text scale for your own layout text.

## Where the truth lives

Read `_ds/styles.css` before styling anything — it has every token and every component's CSS. Read each component's `.prompt.md` for its exact props and behavior; the `.d.ts` is the authoritative prop contract.

## Composing a screen

```jsx
<div style={{ background: 'var(--surface)', padding: 'var(--space-6)' }}>
  <SecretCard playerName="Léa" word="Orangina" />
  <Button variant="primary">Lancer la partie</Button>
</div>
```

Rules that don't show up in any single prop: only **one** `primary` button per screen; `danger` is reserved for the single irreversible "Éliminer" action (no cancel button next to it); role color + icon + name always appear together, never color alone; at most one emoji per screen, never inside a button label or the secret word.
