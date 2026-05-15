# Neuron AI Framework Website

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


## Code Standards

- Strict types: `declare(strict_types=1)`
- PSR-12 formatting
- PHPStan level 5
- 100% type coverage (params, returns, properties)
- PHP 8.1+ features (enums, constructor promotion)
- Use **protected** visibility for non-public properties and methods (never private)

## Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.