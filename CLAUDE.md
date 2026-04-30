# Neuron AI Framework Landing Page

This project contains a static website being generated with Astro - The web framework for content-driven websites.

## Design Tokens - ALWAYS use predefined variables

Never use custom/hardcoded values for spacing, radius, borders, colors, z-index, or layout.
Always use the predefined CSS custom properties from `src/styles/variables/`.

### Spacing (`src/styles/variables/spacing.scss`)
Use `--s-{value}` variables: `--s-2`, `--s-4`, `--s-6`, `--s-8`, `--s-10`, `--s-12`, `--s-16`, `--s-20`, `--s-24`, `--s-28`, `--s-32`, `--s-36`, `--s-40`, `--s-46`, `--s-56`, `--s-64`, `--s-100`.

```scss
// GOOD
padding: var(--s-16);
gap: var(--s-24);

// BAD - never hardcode spacing
padding: 1.6rem;
gap: 24px;
```

### Border Radius (`src/styles/variables/radius.scss`)
Use `--r-{value}` variables: `--r-4`, `--r-6`, `--r-8`, `--r-12`, `--r-16`, `--r-24`, `--r-max`.

### Colors & Borders (`src/styles/variables/palette.scss`)
Use semantic color tokens: `--bg-*`, `--text-*`, `--border-*`.
Never use raw hex/rgb values. Primitive colors (`src/styles/variables/primitives/colors.scss`) are only used inside palette definitions.

### Z-Index (`src/styles/variables/z-index.scss`)
Use `--z-index-*` variables: `low`, `medium`, `high`, `snackbar`, `very-high`.

### Layout (`src/styles/variables/layout.scss`)
Use `--max-width` and `--section-gap`.

## Breakpoints - use SCSS mixins

Never write raw `@media` queries. Always use the mixins from `src/styles/mixins/_media.scss`.
This requires `<style lang="scss">` and importing the mixin.

```scss
<style lang="scss">
  @use '~styles/mixins/media' as *;

  .element {
    // mobile-first styles
    padding: var(--s-16);

    @include media-min('sm') {
      padding: var(--s-24);
    }

    @include media-min('lg') {
      padding: var(--s-32);
    }
  }
</style>
```

Available breakpoints: `xs` (480px), `sm` (768px), `md` (992px), `lg` (1200px), `xl` (1400px).
Prefer `media-min` (mobile-first). Use `media-max` only when absolutely necessary.

## CSS Class Naming
Use camelCase for CSS class names, not kebab-case.

```scss
// GOOD
.cardBody { }
.buttonWrapper { }

// BAD
.card-body { }
.button-wrapper { }
```

## Tech Stack
- Astro with TypeScript
- SCSS for styling (scoped `<style lang="scss">`)
- Mobile-first responsive approach
