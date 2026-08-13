---
name: Altitude
description: Marc Augier’s course catalog — a trainer’s clear sky, not a mountaineering brand.
colors:
  ink-navy: "rgb(15, 65, 105)"
  classroom-sky: "rgb(108, 161, 205)"
  paper-frost: "#edf7fa"
  lesson-card: "rgb(180, 227, 240)"
  neutral-rule: "#898b97"
  snow: "#ffffff"
  error-blush: "rgb(255, 193, 193)"
typography:
  display:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: "96px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1.2
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "50%"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.snow}"
    rounded: "0px"
    padding: "12px"
    typography: "{typography.label}"
  button-link:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.classroom-sky}"
    rounded: "{rounded.sm}"
    padding: "8px"
  button-link-hover:
    backgroundColor: "{colors.classroom-sky}"
    textColor: "{colors.snow}"
    rounded: "{rounded.sm}"
    padding: "8px"
  platform-chip:
    backgroundColor: "rgba(255, 255, 255, 0.45)"
    textColor: "{colors.snow}"
    rounded: "{rounded.md}"
    padding: "1rem 2rem"
  card:
    backgroundColor: "{colors.lesson-card}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.lg}"
  nav-link:
    textColor: "{colors.snow}"
    padding: "12px"
    typography: "{typography.label}"
---

# Design System: Altitude

## Overview

**Creative North Star: "The Trainer’s Clear Sky"**

This is a personal teaching catalog seen in daylight. Marc is the face; the sky is atmosphere, not a mountaineering story. Pages feel generous and handmade: large Inter, lots of air, photography in the first viewport, centered columns that breathe rather than pack. The blue field is a classroom window — calm, open, a little weathered — not a brand illustration of peaks and rope.

Density is low on purpose. A visitor should feel they can pick a course the way they pick a book off a sunlit table: tiles sit up off the wash, scale when hovered, and send them out to Udemy or Tuto. The wordmark is a Knewave lockup in white on Classroom Sky; everything else is Inter. Do not drift toward SaaS dashboards, dense admin grids, or corporate navy/orange kits.

**Key Characteristics:**

- Photography leads; Classroom Sky is atmosphere behind it, not a motif to decorate.
- Inter ExtraBold is the type system; Knewave exists only as the Altitude wordmark.
- Generous padding, centered measure, short intros — personal, not editorial-magazine.
- Catalog cards lift with real shadows and scale on hover; they must feel pickable.
- Two chromatic roles only: Ink Navy for voice and action, Classroom Sky for fields. Dark mode: Ink Navy is the room, Lesson Card is the light bluish voice.

## Colors

A single blue family at two jobs: navy for reading and doing, sky for the room the catalog sits in.

### Primary
- **Ink Navy** (`ink-navy`): Body text, text-shadow under white type on photos, and the filled primary CTA. This is Marc’s voice on the page — the thing you read and the thing you press.

### Secondary
- **Classroom Sky** (`classroom-sky`): Header, footer, page-wash start, and outlined course links. The air the catalog lives in. Same hue family as Ink Navy, much lighter; it is not a second accent.

### Neutral
- **Paper Frost** (`paper-frost`): Gradient end of the page wash; the pale landing of the sky.
- **Lesson Card** (`lesson-card`): Catalog tile fill. Cooler and milkier than the sky so cards read as objects on the field.
- **Neutral Rule** (`neutral-rule`): Hairline borders only (`--card-border-color`). Not a text color.
- **Snow** (`snow`): Type and icons on sky, filled-button text, outlined-button fill.

### Named Rules
**The Two Blues Rule.** Ink Navy speaks and acts. Classroom Sky is the room. Do not introduce a third chromatic accent (orange, teal, gold, “CTA red”).

**The Atmosphere Not Alpine Rule.** These blues are daylight in a classroom, not glacier branding. Mountain photographs may appear as photography; they do not authorize ice palettes, rope motifs, or sherpa illustration.

**The Night Classroom Rule.** Dark mode inverts the two jobs, not the palette: Ink Navy becomes the room, Lesson Card (light bluish) becomes the reading voice and the thing you press. No extra navies, no white-on-navy, no charcoal.

## Typography

**Display Font:** Inter (Helvetica, Arial fallback)
**Body Font:** Inter (Helvetica, Arial fallback)
**Wordmark:** Knewave — lockup only, never a text face

**Character:** Heavy, clear, slightly unpolished Inter. Big weights do the personality work. Knewave is a handwritten shop sign over the door, not a headline style to repeat.

### Hierarchy
- **Display** (800, 96px / 64px below 768px): Hero line over photography (`#hero h2`). White, left-aligned on desktop (max-width 40%), with a 1px text-shadow in Ink Navy.
- **Headline** (800, 48px): Inner-page titles and side-media headings. White when it sits on sky or frost overlays; Ink Navy on pale cards.
- **Title** (600, 24px): Course and parcours card titles. Global `h2` is 2rem on the page wash.
- **Body** (400, 1.2rem, line-height 1.5): Home and about reading. Measure is a centered `40rem` column.
- **Label** (800, 1.125rem): Header nav, primary CTA, and strong UI labels. White on Classroom Sky. Active route stays ExtraBold and is underlined.

### Named Rules
**The Knewave Lockup Rule.** Knewave appears only on the Altitude wordmark in the header. Do not set headings, buttons, or body in Knewave.

**The Inter Is the System Rule.** `:root` is Inter (variable, weights 100–900). Knewave is the wordmark only. Do not introduce a third family.

## Layout

No 12-column grid. The spatial model is a full-bleed photographic hero, then a centered catalog group.

Spacing scale: **6 / 12 / 24 / 48px**, with `6rem` reserved for rare section breaks. `#root` is a full-width column (`min-height: 100vh`); `main` fills the remaining height. Header is `width: 100%` with 24px inline padding — never `100vw`.

**Home reading order:** hero (photo + title + CTA as one left cluster) → catalog group (heading + one line + three tiles + a quiet “see all”). **Inner pages:** page lead (title + intro) → content. Related items share a group with 12–24px inside; groups separate by 48px.

Galleries are wrapping flex rows, `justify-content: center`, `gap: 24px`. Tiles flex `1 1 16rem` up to `22rem`. Cards have `min-width: 0` so they shrink on phones. Platform chips sit in one centered row (`nav.platform-pair`, `gap: 12px`). Two-column about/course blocks use `gap: 48px` and `padding: 48px 24px`. Page leads and home copy use a centered `40rem` measure, not nested 80% widths.

The only breakpoint is **768px**. Below it: sticky wordmark, bottom thumb nav, hero cluster centers, galleries stack full-width, two-column rows become columns and drop decorative backgrounds. Do not invent extra breakpoints unless a later pass replaces this layout.

## Elevation & Depth

This is a lifted catalog. The page wash (Classroom Sky → Paper Frost) is atmosphere, not a layer. Catalog tiles sit above it with real drop shadows. Depth is structural: if it is pickable, it casts a shadow.

Photography and 1–2px Ink Navy text-shadows hold white type on images. Hover adds lift (`scale(1.05)` plus a deeper shadow). The neumorphic double-glow on the home three-column articles (`12px 12px 48px #ffffff, -12px -12px 48px #6761bd25`) is a one-off; do not reuse it.

### Shadow Vocabulary
- **Tile rest** (`box-shadow: 0 4px 4px color-mix(in srgb, var(--text-color) 25%, transparent)`): Image top of a card at rest.
- **Tile hover** (`box-shadow: 0 8px 16px color-mix(in srgb, var(--text-color) 25%, transparent)`): Card hover lift.
- **Course gallery** (`box-shadow: 0 4px 10px color-mix(in srgb, var(--text-color) 20%, transparent)`): Soft wrap around a course tile.
- **Parcours tile** (`box-shadow: 0 8px 16px color-mix(in srgb, var(--text-color) 40%, transparent)`): Stronger wrap; learning-path cards sit higher than individual courses.

### Named Rules
**The Lifted Catalog Rule.** Surfaces that can be chosen (parcours, course, CTA-adjacent tiles) use the shadow vocabulary above. Do not add neumorphic inner highlights. Do not go fully flat.

## Shapes

Corners are quietly rounded, never sharp chrome and never squircles.

- **6px** (`rounded.sm`): In-flow articles, outlined course links, card image top-corners on the older card.
- **8px** (`rounded.md`): Side-media and three-column info panels, frosted platform chips.
- **12px** (`rounded.lg`): Catalog tiles (course and parcours), error panel, home three-column articles.
- **Full circle** (`rounded.full`): Portrait and motif photographs (200×200 and 400×400, `border-radius: 50%`) on a Snow disc.

The filled primary CTA is the exception: **0px radius**, a blunt Ink Navy rectangle. Outlined links are the rounded ones. Platform chips are the only frosted, larger-radius control.

Borders are scarce: 1px Classroom Sky on outlined buttons, 1px Snow on platform-chip hover, 1px Neutral Rule where a card edge is drawn, 1px Snow `hr` in the footer.

## Components

Tactile catalog tiles: if a visitor can pick it, it should scale, shadow, or invert on hover.

### Buttons
- **Shape:** Primary is square (0). Course links are gently curved (6px). Platform chips are 8px.
- **Primary** (`.button-action`): Ink Navy fill, Snow text, 12px 24px padding, weight 800, `font-size: 1.125rem`. Hover lifts (`translateY(-4px)` plus a navy-tinted shadow), same as a tile.
- **Course link** (`.button-link`): Snow fill, Classroom Sky text and 1px border, 8px padding, 0.25s ease. Hover inverts to sky fill / Snow text.
- **Platform chip** (`.parcours-platform-link`): Frosted Snow at 45% opacity, 8px radius, 12px 24px padding, white with Ink Navy text-shadow. Hover: fill goes transparent, 1px Snow border; type size does not change.

### Cards / Containers
- **Corner Style:** 12px on the tile wrap; image uses 6px on the top corners only.
- **Background:** Lesson Card. Galleries wrap each tile in that fill plus a shadow.
- **Shadow Strategy:** Tile rest / gallery / parcours vocabulary in Elevation. Hover scale 1.05 (parcours uses `scale3d(1.05, 1.05, 1.05)`).
- **Border:** None on the tile wrap; image carries the drop shadow.
- **Internal Padding:** 24px below the image on the older card; course text block is a 12em column with an 8px-padded link bar.
- **Photo hover:** Card image goes `grayscale(80%)` on tile hover — the pickable tell on photography.

### Navigation
Header is a full-width Classroom Sky bar, 24px inline padding, logo left / links right. Wordmark is Knewave, Snow, 2rem. Links are Snow, weight 800, 1.125rem, 12px padding, 1rem gap. Hover: `translateY(-5px)` and weight 600. Active: ExtraBold, underlined. Below 768px the wordmark is sticky at the top and Formations sits in a bottom thumb bar. Footer is the same sky, Snow type at weight 800, with a 1px Snow rule.

### Signature: Photographic hero
`#hero` is a 60vh cover photograph (`montblanc.webp`, `montblanc-sp.webp` below 768px) with Classroom Sky as fallback fill. Display Inter in Snow sits on it, left-heavy on desktop, centered on small screens. This is how a page announces itself — a photo and a short line — not a gradient card or an illustration.

### Signature: Circular portrait
About and motif images are Snow-backed circles (200px or 400px). They are the human face of the catalog. Do not square them or turn them into framed polaroids.

### Error
A single blush panel (`.error`): `error-blush` fill, 24px padding and margin, 12px radius. No other alert chrome exists.

## Do's and Don'ts

### Do:
- **Do** lead a surface with photography and a short Inter ExtraBold line, then the catalog.
- **Do** keep pickable tiles on Lesson Card with the lifted-catalog shadows and a scale hover.
- **Do** use Ink Navy for text and the filled CTA, Classroom Sky for header/footer/wash.
- **Do** reserve Knewave for the Altitude wordmark.
- **Do** leave air: 6/12/24/48px rhythm, 48px between groups, a `40rem` reading measure.

### Don't:
- **Don't** design SaaS dashboards, dense data grids, or navy/orange corporate kits.
- **Don't** add a third accent color or reuse the home three-column neumorphic glow.
- **Don't** set headings or UI in Knewave, or treat Helvetica as the body face.
- **Don't** turn mountain photographs into sherpa illustration, clipart, or alpine ornament.
- **Don't** invent input, chip, or modal chrome — the catalog does not have forms.
