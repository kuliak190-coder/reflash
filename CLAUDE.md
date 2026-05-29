# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **Yarn** (Berry, see `.yarnrc.yml`), not npm.

```bash
yarn install   # install dependencies
yarn dev       # Vite dev server
yarn build     # tsc -b (typecheck) then vite build → dist/
yarn preview   # serve the production build
yarn lint      # ESLint over the whole project
```

There is no test suite. `yarn build` typechecks the whole project (`tsc -b`) before bundling, so it's the closest thing to a CI gate — run it to catch type/import errors.

## What this is

A single-page, scroll-through **event landing page** (in Russian) for "ПЕРЕПРОШИВКА", a Matrix-themed invite-only event. It's static — no backend, router, or data fetching. All copy and event data live in the source.

## Architecture

- **Page composition** — [src/App.tsx](src/App.tsx) renders the background layers once (`<MatrixRain>` canvas, `.bg-veil`, `.scanlines`) then stacks the content sections in fixed order inside `<main>`: Hero → About → Countdown → Program → Guests → Invite. Section order is literally JSX order here. In-page nav uses anchor links (`href="#about"`, etc.) targeting each section's `id`.

- **Two-layer styling system:**
  - **Global design system** in [src/index.css](src/index.css): CSS custom properties (`--neon-green`, `--mono`/`--sans` fonts, glow shadows) plus shared global classes used across sections — `.container`, `.panel` (glass card), `.section-title`, `.section-eyebrow`, `.btn` / `.btn--ghost`, `.neon-list`, `.highlight`, `.glitch`. The fixed background stack (`.matrix-canvas` z-index -2, `.bg-veil` -1, content z 1, `.scanlines` 50) is also defined here. Reuse these classes rather than re-styling.
  - **Per-component CSS Modules** (`*.module.css`, imported as `styles`/`s`/`c`/etc.) for layout/styling specific to one section.
  - A section's JSX typically mixes both: global classes via plain `className="panel"` strings, module classes via the imported object. `sections.module.css` holds shared section-level helpers (`.block`, `.lead`, `.text`).

- **Animation** — uses the `motion` package (Framer Motion), imported as `motion/react`. The reusable [src/components/Section.tsx](src/components/Section.tsx) wraps content in a `motion.section` that fades/slides up on scroll-into-view (`whileInView`, `once: true`). Most sections wrap their `.container` in `<Section>`; Hero and Guests animate elements individually instead.

- **Background canvas** — [src/components/MatrixRain.tsx](src/components/MatrixRain.tsx) is a self-contained `requestAnimationFrame` canvas loop (throttled ~30fps) drawing falling glyphs; it manages its own resize listener and cleanup.

- **Countdown** — [src/hooks/useCountdown.ts](src/hooks/useCountdown.ts) ticks every second toward a **hardcoded target of June 14, 12:00 of the current year**. If the event date changes, edit it here (and the display strings in Hero/Countdown/Invite, which are also hardcoded).

- **Content data** — [src/data/guests.ts](src/data/guests.ts) is the only structured data file (guest cards, currently placeholder names). Program items and all other copy are inline arrays/JSX within their section components.

- **Assets** — images live in `public/` and are referenced by absolute path (`/main.png`, `/IMG_1651.JPEG`). `dist/` is committed build output; don't hand-edit it.

## Conventions

- React **19** + TypeScript with strict bundler settings. `verbatimModuleSyntax` is on, so **type-only imports must use `import type { ... }`** (see Section.tsx). `noUnusedLocals`/`noUnusedParameters` are enforced — unused symbols fail the build.
- Default-export one component per file; sections live in [src/sections/](src/sections/), shared pieces in [src/components/](src/components/).
- UI copy is Russian and intentionally styled as terminal/system output (`// ОШИБКА РЕАЛЬНОСТИ`, `> СИСТЕМА РАСПОЗНАЛА ТЕБЯ_`); match that voice when editing text.
- A `prefers-reduced-motion` media query disables glitch/scroll animations in CSS — keep heavy motion either opt-out-able or behind that query.
