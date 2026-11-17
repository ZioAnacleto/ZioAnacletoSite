---
name: ZioAnacleto
description: Bilingual portfolio of Fabrizio Traversa, Android Technical Leader and percussionist, in the Material 3 Expressive language he ships.
colors:
  primary: '#006b5c'
  on-primary: '#ffffff'
  primary-container: '#9ef2dc'
  on-primary-container: '#00201a'
  primary-fixed-dim: '#82d5c1'
  secondary-container: '#cce8e0'
  on-secondary-container: '#06201b'
  tertiary: '#8b5000'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffdcbe'
  on-tertiary-container: '#2d1600'
  surface: '#f4fbf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f2'
  surface-container: '#e8efec'
  surface-container-high: '#e2e9e6'
  surface-container-highest: '#dde4e1'
  on-surface: '#161d1b'
  on-surface-variant: '#3f4946'
  outline: '#6f7976'
  inverse-surface: '#2b3230'
  inverse-on-surface: '#ecf2ef'
typography:
  display-l:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: 'clamp(3.25rem, 2rem + 6.2vw, 6rem)'
    fontWeight: 820
    lineHeight: 1.05
    letterSpacing: '-0.035em'
  display-m:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: 'clamp(2.5rem, 1.6rem + 4vw, 4.25rem)'
    fontWeight: 780
    lineHeight: 1.05
    letterSpacing: '-0.03em'
  display-s:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: 'clamp(2rem, 1.5rem + 2.4vw, 3rem)'
    fontWeight: 720
    lineHeight: 1.05
    letterSpacing: '-0.025em'
  headline:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: 'clamp(1.5rem, 1.2rem + 1.2vw, 2rem)'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: '-0.01em'
  title-l:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: '1.375rem'
    fontWeight: 380
    lineHeight: 1.6
  title-m:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 520
    lineHeight: 1.6
  body-l:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: '1.0625rem'
    fontWeight: 400
    lineHeight: 1.6
  body-m:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: '0.9375rem'
    fontWeight: 450
    lineHeight: 1.6
  label-l:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 560
    letterSpacing: '0.01em'
  label-m:
    fontFamily: 'Roboto Flex Variable, system-ui, -apple-system, Segoe UI, sans-serif'
    fontSize: '0.8125rem'
    fontWeight: 600
rounded:
  s: '8px'
  m: '12px'
  l: '16px'
  xl: '28px'
  xl-plus: '32px'
  2xl: '48px'
  full: '999px'
spacing:
  '1': '0.25rem'
  '2': '0.5rem'
  '3': '0.75rem'
  '4': '1rem'
  '5': '1.5rem'
  '6': '2rem'
  '7': '3rem'
  '8': '4rem'
  '9': '6rem'
  '10': '9rem'
  gutter: 'clamp(1rem, 0.4rem + 2.6vw, 2.5rem)'
  content-max: '76rem'
components:
  button-filled:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.title-m}'
    rounded: '{rounded.full}'
    padding: '0 24px 0 32px'
    height: '56px'
  button-filled-hover:
    rounded: '{rounded.l}'
  button-filled-active:
    rounded: '{rounded.m}'
  toolbar:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.on-surface-variant}'
    rounded: '{rounded.full}'
    padding: '8px'
  toolbar-item:
    typography: '{typography.label-l}'
    rounded: '{rounded.full}'
    padding: '0 16px'
    height: '44px'
  toolbar-item-active:
    backgroundColor: '{colors.secondary-container}'
    textColor: '{colors.on-secondary-container}'
  segmented-item:
    backgroundColor: '{colors.surface-container-highest}'
    typography: '{typography.label-l}'
    rounded: '{rounded.s}'
    padding: '0 12px'
    height: '44px'
  segmented-item-selected:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.full}'
  chip-skill:
    backgroundColor: '{colors.surface-container-highest}'
    typography: '{typography.body-l}'
    rounded: '{rounded.m}'
    padding: '12px 24px'
  chip-skill-hover:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.full}'
  chip-tag:
    backgroundColor: '{colors.secondary-container}'
    textColor: '{colors.on-secondary-container}'
    typography: '{typography.label-m}'
    rounded: '{rounded.s}'
    padding: '6px 12px'
  card-role:
    backgroundColor: '{colors.surface-container-low}'
    rounded: '{rounded.xl}'
    padding: '32px'
  card-role-current:
    backgroundColor: '{colors.surface-container-high}'
  card-role-hover:
    rounded: '{rounded.2xl}'
  section-field:
    rounded: '{rounded.2xl}'
    padding: '96px 0'
  link-row:
    backgroundColor: '{colors.on-primary}'
    textColor: '{colors.primary}'
    rounded: '{rounded.full}'
    padding: '16px 32px 16px 16px'
    height: '88px'
  link-row-hover:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary-container}'
    rounded: '{rounded.xl}'
---

# Design System: ZioAnacleto

## Overview

**Creative North Star: "The Expressive Instrument"**

The site speaks the Android design language its owner ships: Material 3 Expressive, built by hand in plain CSS. One teal-seeded tonal palette yields the light and the dark scheme from the same tones; one variable typeface (Roboto Flex) carries every role by moving its weight and width axes; one shape library of polar-sampled forms (circle, cookie, clover, sunny, squircle, flower, burst, gem) morphs between silhouettes on springs. Rhythm is literal: a 112 bpm beat (536ms) drives the hero shape and paces the hero entrance staggers.

Density is generous and editorial. Sections are either open runs on the tinted surface or whole rounded colour fields inset from the viewport edge (12px, 8px on phones), so the page reads as a stack of tonal slabs rather than a grid of boxed cards. Depth comes from tone, not lines: there are no hairline borders anywhere in the build. Interaction is shape change: pills relax into rounded rectangles, circles soften into squircles, rails fill, all on physically derived springs.

The visual rejection is the dev-portfolio default: dark ground with a neon accent, terminal costume, and an equal grid of identical cards.

**Key Characteristics:**

- Tonal teal primary, peach tertiary reserved for the music side, teal-tinted neutral surfaces.
- One variable face, hierarchy by axis: heavy display against thin, wide counterweights.
- Shapes morph; corners respond to hover and press on spatial springs.
- Whole-section colour fields with 48px corners, inset from the page.
- Light and dark from the same tonal palette. Every colour token is a `light-dark(light, dark)` pair resolved by `color-scheme`: the page follows the system until the visitor uses the toolbar theme toggle, which sets `html[data-theme]`, persists the choice in `localStorage` and reveals the new theme as a circle growing from the button (View Transitions, skipped under reduced motion). Never write `@media (prefers-color-scheme)` in components; use `light-dark()` so the toggle wins.

## Colors

A Material 3 tonal system seeded from teal (hue about 170), with a warm peach tertiary and neutrals that carry a trace of the seed. Every value has a dark-scheme counterpart in `src/styles/tokens.css`; the frontmatter records the light scheme.

### Primary

- **Deep Lagoon Teal** (primary): the voice of the system. Filled buttons, the selected language segment, the contact field, the timeline rail fill, the morphing hero shape, organisation names and the thin half of every split lockup. Dark scheme: the bright tone 80 mint.
- **Seafoam Mint** (primary-container): the hero field and the Code study card. Text on it is **Abyss Teal** (on-primary-container).
- **Mallet** (`--mallet`, apricot in light, deep amber in dark): only the head of the monogram's mallet, the one spot of music colour inside the code-teal mark.

### Secondary

- **Pale Celadon** (secondary-container): the toolbar's active indicator pill and role tags, with **Deep Celadon** (on-secondary-container) text. The secondary role itself is never used as a fill.

### Tertiary

- **Burnt Apricot** (tertiary): music pads and the music study mark; in the dark scheme it becomes the music section field itself.
- **Peach Cream** (tertiary-container): the music section field (light) and the Conservatory study card, with **Cocoa** (on-tertiary-container) text.

### Neutral

- **Mist Paper** (surface): page ground.
- **Surface container ladder** (lowest, low, container, high, highest): tonal steps for cards and controls. Low for role cards and the Toolkit field, high for the current role and the floating toolbar, highest for chips, segmented items and the timeline track.
- **Ink** (on-surface) for body text, **Slate Moss** (on-surface-variant) for secondary text and summaries, **Outline** only for the scrollbar thumb.
- **Inverse surface / on-surface**: the skip link only.

### Named Rules

**The Colour Field Rule.** Whole-section fields use the role colour itself in the dark scheme (contact = primary, music = tertiary: bright fields on a dark page); cards inside sections use the dark containers; quiet tonal steps that only group text (Interests panel, footer legal line) are `color-mix` tints of their own field in both schemes.

**The Peach Belongs to Music Rule.** Tertiary appears only on the music side of the story (music section, Conservatory card, Music mark, play-along pads). Engineering content stays teal.

**The Tone Not Line Rule.** Grouping and separation are done with surface tones and `color-mix` tints of the field, never with borders or dividers.

## Typography

**Display Font:** Roboto Flex Variable (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Roboto Flex Variable (same stack)

**Character:** A single variable grotesque doing every job. Hierarchy is made with the `wght` and `wdth` axes rather than a second family: titles sit at 720 to 820, body at 400, and the signature move pairs a black, normal-width word with a hairline, wide one.

### Hierarchy

- **Display L** (820, clamp 3.25 to 6rem, 1.05, -0.035em): section titles (Work, Studies, Toolkit, Off the keyboard, Find me elsewhere) and the hero name.
- **Display M** (780, clamp 2.5 to 4.25rem): the About statement.
- **Display S** (720, clamp 2 to 3rem, -0.025em): role titles and study titles; the timeline years at 820 / wdth 90.
- **Headline** (700, clamp 1.5 to 2rem): sub-heads (Code, Music, music acts), contact link labels, the hero role line at 360 with its strong part at 700.
- **Title L** (380, 1.375rem): lead paragraphs; Title M (520 to 600, 1.125rem) for organisation lines and the primary button.
- **Body L** (400, 1.0625rem, 1.6): running text; summaries capped at 68ch, leads at 48ch.
- **Label L / M** (560 to 700, 0.875 / 0.8125rem): toolbar items, chips, tags, periods, the "Key achievements" sub-head. Sentence case, never uppercase.

### Named Rules

**The Split Lockup Rule.** A name or a range is set as heavy plus thin: "Fabrizio" at wght 900 / wdth 100, "Traversa" at wght 120 / wdth 120 in primary; years "2019" at 820 over "2024" at 160 in primary. Use it for identity and time spans, not for ordinary headings.

**The Weight-In Rule.** Section titles enter by gaining weight on the variable axis (from wght 200 / wdth 110 to their final weight), and the hero lockup trades weight between its two words. The resting state is the final state, so no-JS and reduced-motion readers see finished type.

## Layout

Content sits in a centred column (max 76rem) with a fluid gutter (clamp 1 to 2.5rem). Spacing runs on a 4px-based scale from 0.25rem to 9rem; sections breathe at 6rem block padding (4rem on phones), with 9rem above the About statement and the contact field. Colour-field sections are inset 12px from the viewport (8px at 720px and below) and clip their contents.

The hero is a two-column grid (1.15fr name, 1fr shape) that stacks below 860px with the shape first. Experience uses a 12.5rem date rail beside the role cards, collapsing to a single column under 860px and dropping the wavy rail under 480px. Studies is a connected pair that stacks under 860px; Toolkit lays group labels beside chip rows. Breakpoints observed: 1100px (toolbar keeps only the active label), 960px (music stacks), 860px, 720px (toolbar docks to the bottom, fields tighten corners), 480px, 380px. Anchor scroll offsets by 6rem for the floating toolbar.

## Elevation & Depth

Tonal by default. Surfaces separate through the container ladder and field tints; shadows are reserved for the two things that float or invite a press. The shadow colour is a teal-tinted RGB (0 30 25) in light and pure black in dark.

### Shadow Vocabulary

- **Level 1** (`box-shadow: 0 1px 2px rgb(var(--shadow) / 0.12), 0 1px 3px 1px rgb(var(--shadow) / 0.08)`): the filled hero button at rest.
- **Level 2** (`box-shadow: 0 1px 2px rgb(var(--shadow) / 0.14), 0 4px 12px 2px rgb(var(--shadow) / 0.1)`): the filled button on hover.
- **Level 3** (`box-shadow: 0 4px 8px rgb(var(--shadow) / 0.12), 0 12px 32px 4px rgb(var(--shadow) / 0.12)`): the floating toolbar.

### Named Rules

**The Only What Floats Rule.** Cards, fields and chips are flat. Elevation belongs to the floating toolbar and the filled call to action; a new card does not get a shadow.

## Shapes

Two shape systems work together. The **corner scale** (M3 Expressive: 8, 12, 16, 28, 32, 48px and full) is generous: fields at 48px (32px on phones), cards at 28px, chips at 8 to 12px, buttons and toolbar fully round. The **shape library** (`src/lib/shapes.ts`) defines eight polar-radius silhouettes sampled at the same 180 angles so any two morph point by point; they appear as the hero portrait slot, the toolbar home mark, the About and Studies marks, the play-along pads, and a 7% tint shape bleeding off the contact field.

Corners are stateful. Pills square off on hover (full to 16px, press to 12px), small rounded chips go pill on hover, cards and the studies pair relax to 48px, and circles become squircle-cornered icon wells. The Studies pair is a connected group: inner corners 8px, outer corners 48px, rotated when stacked.

**The Shape Answers Rule.** Feedback is a change of form on a spring, not a colour flash alone. Every interactive container either morphs its corner radius or rotates its shape on hover and press.

## Components

**Monogram** (`src/components/Monogram.astro`). F and T drawn as one rounded monoline ligature sharing the top bar; the T's stem is a thin percussion mallet whose round head carries `--mallet`. It is an SVG group in a 0–100 box, stroked in `currentColor`, used in the hero shape (scale 0.82, its mallet strikes on every beat, accented on the downbeat), the toolbar home mark (scale 1.25 on the cookie) and the favicon. Never set it as type.

### Buttons

Tactile and springy.

- **Shape:** full pill (999px), 56px tall.
- **Filled:** primary fill, on-primary text, Title M at wght 600, trailing icon, Level 1 shadow.
- **Hover / Active:** radius springs to 16px then 12px on press (fast spatial spring); shadow rises to Level 2.
- **Icon toggle:** 40px primary circle (beat play/pause) that softens to 12px on hover.

### Chips

- **Skill chip:** surface-container-highest, 12px corners, Body L at 520; on hover turns primary and goes fully round on the fast spatial spring. Rows stagger in at 60ms per chip.
- **Tag:** secondary-container with on-secondary-container text, 8px corners, Label M at 600. Static.
- **Period / place chip:** a 12 to 14% `color-mix` of the field's ink into the field, 8px corners, label size.

### Cards / Containers

- **Corner Style:** 28px (role cards, Interests panel), 48px (sections, play-along kit, studies outer corners).
- **Background:** surface-container-low; the current role steps up to surface-container-high. Studies use primary-container (code) and tertiary-container (music).
- **Shadow Strategy:** none; see Elevation.
- **Border:** none.
- **Internal Padding:** 32px (24px on small screens); studies 48px top.

### Navigation

A floating M3 toolbar: surface-container-high pill with Level 3 shadow, fixed 16px from the top on desktop and docked to the bottom (above the safe area) on phones. A cookie-shaped primary home mark rotates 40deg on hover (hidden on phones). Items are 44px pills with Material Symbols Rounded icons and Label L text; a secondary-container indicator slides and resizes between items on the default spatial spring. Labels collapse to icon-only below 1100px except the active one, and to icon-only entirely on phones. The EN / IT switch is a connected segmented group: outer ends full, inner corners 8px, the current locale a primary pill.

### Link Rows

Full-width pills on the contact field: on-primary ground with primary text, 88px tall (72px on phones), a 56px primary icon well, Headline label over a Body M handle, and an arrow that nudges up-right on hover. Hover swaps to primary-container and relaxes the radius to 28px while the icon well squares off. The email row pairs with an 88px copy button tinted 16% from the field.

### Timeline Rail

A 4px round-capped wavy stroke on a surface-container-highest track, filling with primary from the present back to the oldest role as the visitor scrolls. 32px nodes: ringed (4px primary on surface) for past roles, solid with a 6px 22% primary halo for the current one.

### Morphing Shape

The signature component. A button-wrapped SVG that interpolates between library silhouettes: autoplay on the 112 bpm beat with a pulse on every beat, tap or Enter / Space to advance on the default spatial spring, slow-spatial rotation. Tones: primary (default), tertiary, secondary-container. Under reduced motion it uses the non-overshooting effects spring.

## Do's and Don'ts

### Do:

- **Do** take every colour from the tonal roles in `tokens.css` and derive in-field steps with `color-mix(in oklab, ink N%, field)`.
- **Do** set hierarchy with Roboto Flex axes; reserve the heavy plus thin split for names and date ranges.
- **Do** make interactive containers answer with form: radius morphs and rotations on the `--spring-*` easings and their `-dur` durations.
- **Do** inset whole-section colour fields 12px (8px on phones) with 48px corners (32px on phones).
- **Do** build both schemes from the same tones and follow the Colour Field Rule in dark.
- **Do** keep every animation's resting state readable without JS, and honour `prefers-reduced-motion`.
- **Do** keep touch targets at 44px minimum.

### Don't:

- **Don't** use hairline borders or dividers to group content; use tone.
- **Don't** put shadows on cards, fields or chips; only the floating toolbar and the filled call to action lift.
- **Don't** use the peach tertiary outside the music side of the story.
- **Don't** add a second typeface or set labels in uppercase.
- **Don't** fall back to the dev-portfolio default: dark ground with neon accent, terminal costume, an equal grid of identical cards.
- **Don't** use linear or generic ease curves for spatial motion; colour and opacity may stay linear.
