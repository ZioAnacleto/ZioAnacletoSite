---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/it/index.astro"]
---

# Portfolio home (EN `/`, IT `/it/`)

Scope: single-page bilingual portfolio with a section toolbar. Visitor mode: Experience.
Audience: anyone who looks Fabrizio up; job: grasp engineer + musician in a minute, then reach GitHub / LinkedIn / email.
Content: resume facts only (see PRODUCT.md). Portrait and concert photos arrive later: keep shaped slots ready.
Chosen direction: Material Expressive (picked by the user over the dealt Stage Plot; second round, first round re-rolled).

## Direction contract

THESIS: The site speaks the Android design language Fabrizio ships: tonal colour, a shape library that morphs, spring motion. It refuses the dev-portfolio default (dark ground, neon accent, terminal costume, equal card grid).

OWN-WORLD: Tonal palette seeded from the resume teal: deep teal primary, mint/teal containers, a warm peach tertiary for music, tinted neutral surfaces; light and dark schemes from the same tones. Roboto Flex with live weight/width axes. Components are M3 Expressive: shape-morphing containers (circle, cookie, clover, sunny, pill), pill buttons, a floating toolbar, connected button groups, tonal surfaces with no hairline borders. Colour fields rule: whole-section fields (contact = primary, music = tertiary) use the role colour itself in the dark scheme (bright fields on a dark page), while cards inside sections (Studies pair, Play-along kit) use the dark containers; quiet tonal steps that only group text (Interests, footer legal line) are tints of their field in both schemes.

STORY: One person, two disciplines. Visitor meets the name, sees the shape breathe on a beat, reads the three roles newest first, as the resume orders them (automotive now, then tech lead, then developer); the wavy rail fills from the present back to the first job as they scroll. Then the conservatory side, and leaves through the links.

FIRST VIEWPORT: Name lockup at display scale ("Fabrizio" heavy, "Traversa" thin, as in the resume) left; a large morphing shape right holding the portrait slot, cycling shapes on a ~112 bpm beat, tap to advance with a spring. Role and Turin under the name. Floating toolbar: top on desktop, bottom on phones, with language switch.

FORM: Material Expressive, position 1 of my ordered grounded list (offered as the pick; the dealt direction was position 6, Stage Plot). seed:0d5156bb51485088

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
