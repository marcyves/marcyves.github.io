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
    padding: "12px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.snow}"
  button-link:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.snow}"
    rounded: "{rounded.sm}"
    padding: "8px"
  button-link-hover:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.sm}"
    padding: "8px"
  platform-chip:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.snow}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    typography: "{typography.title}"
  platform-chip-hover:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.lesson-card}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.lg}"
  course-detail-media:
    rounded: "{rounded.lg}"
    width: "22rem"
  nav-link:
    textColor: "{colors.snow}"
    padding: "12px"
    typography: "{typography.label}"
---

# Design System: Altitude

## Overview

**Creative North Star: "The Trainer’s Clear Sky"**

This is a personal teaching catalog seen in daylight. Marc is the face; the sky is atmosphere, not a mountaineering story. Pages feel generous and handmade: large Inter, lots of air, photography in the first viewport, centered columns that breathe rather than pack. The blue field is a classroom window — calm, open, a little weathered — not a brand illustration of peaks and rope.

Density is low on purpose. A visitor should feel they can pick a course the way they pick a book off a sunlit table: tiles sit up off the wash, catch a slow orbit ring, scale when hovered, and send them out to Udemy or Tuto. Course detail is the quiet desk after that pick: a 40rem reading column beside a sticky photo and filled buy buttons. The wordmark is a Knewave lockup in white on Classroom Sky; everything else is Inter. Do not drift toward SaaS dashboards, dense admin grids, or corporate navy/orange kits.

**Key Characteristics:**

- Photography leads; Classroom Sky is atmosphere behind it, not a motif to decorate.
- Inter ExtraBold is the type system; Knewave exists only as the Altitude wordmark.
- Generous padding, centered measure, short intros — personal, not editorial-magazine. Course detail is the exception: a left-aligned 40rem reading column.
- Catalog cards lift with real shadows, a Classroom Sky orbit ring, and a 1.05 hover scale (parcours and home-trois).
- Two chromatic roles only: Ink Navy for voice and action, Classroom Sky for fields. Dark mode: Ink Navy is the room, Lesson Card is the light bluish voice.

## Colors

A single blue family at two jobs: navy for reading and doing, sky for the room the catalog sits in.

### Primary
- **Ink Navy** (`ink-navy`): Body text, text-shadow under white type on photos, and every filled control (primary CTA, course links, platform chips). This is Marc’s voice on the page — the thing you read and the thing you press.

### Secondary
- **Classroom Sky** (`classroom-sky`): Header, footer, page-wash start, and the bright stop on catalog orbit rings. The air the catalog lives in. Same hue family as Ink Navy, much lighter; it is not a second accent.

### Neutral
- **Paper Frost** (`paper-frost`): Gradient end of the page wash; the pale landing of the sky.
- **Lesson Card** (`lesson-card`): Catalog tile fill and the mid stop of `--card-gradient` (Paper Frost → Lesson Card → sky-tinted frost). Cooler and milkier than the sky so cards read as objects on the field.
- **Neutral Rule** (`neutral-rule`): Hairline borders only (`--card-border-color`). Not a text color.
- **Snow** (`snow`): Type and icons on sky, filled-control text, inverted-hover fills.
- **Error Blush** (`error-blush`): 404 panel fill only. Not an accent.

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
- **Display** (800, 96px / 64px below 768px): Hero line over photography (`#hero h2`). White, left-aligned on desktop, with a 1px text-shadow in Ink Navy.
- **Headline** (800, 48px): Inner-page titles (`.mini-hero`) and side-media headings. White when it sits on sky or frost overlays; Ink Navy on pale cards.
- **Title** (600, 24px): Course and parcours card titles, course-detail `h3`, platform-chip type. Global `h2` is 2rem on the page wash.
- **Body** (400, 1.2rem, line-height 1.5): Home, about, and course-detail reading. Measure is a `40rem` column. Home leads are centered; course-detail copy is left-aligned.
- **Label** (800, 1.125rem): Header nav, primary CTA, and strong UI labels. White on Classroom Sky. Active route stays ExtraBold and is underlined (`text-underline-offset: 4px`).

### Named Rules
**The Knewave Lockup Rule.** Knewave appears only on the Altitude wordmark in the header. Do not set headings, buttons, or body in Knewave.

**The Inter Is the System Rule.** `:root` is Inter (variable, weights 100–900). Knewave is the wordmark only. Do not introduce a third family.

## Layout

No 12-column grid. The spatial model is a full-bleed photographic hero, then a centered catalog group. Course detail is a separate split: reading column plus a sticky buy rail.

Spacing scale: **6 / 12 / 24 / 48px**, with `6rem` reserved for rare section breaks. `#root` is a full-width column (`min-height: 100vh`); `main` fills the remaining height. Header is `width: 100%` with 24px inline padding — never `100vw`. Interactive controls keep a 44px minimum hit area.

**Home reading order:** hero (photo + title + CTA as one left cluster) → catalog group (heading + one line + three tiles + a quiet “see all”). **Inner catalog pages:** page lead (title + intro) → content. **Course detail:** page lead → `.course-detail` (copy | sticky media). Related items share a group with 12–24px inside; groups separate by 48px.

Galleries are wrapping flex rows, `justify-content: center`. Course gallery `gap: 24px`; parcours gallery `gap: 48px`. Tiles flex `1 1 16rem` up to `22rem`. Cards have `min-width: 0` so they shrink on phones. Platform chips sit in one centered row (`nav.platform-pair`, `gap: 12px`). Home/about two-column blocks (`.home-deux`) use `gap: 48px`, `padding: 48px 24px`, `max-width: 72rem`. Page leads and home copy use a centered `40rem` measure.

**Course detail** is `display: flex`, `max-width: 72rem`, `gap: 48px`, `padding: 48px 24px`. Copy is `max-width: 40rem`, left-aligned. Media is `flex: 0 1 22rem`, `position: sticky`, `top: 24px`, with 24px stack gap (photo, full-width buy buttons, one quiet line). Lists use `list-style: circle` and 24px left padding.

The only breakpoint is **768px**. Below it: sticky wordmark, bottom thumb nav (Formations is a filled 6px chip), hero cluster centers, galleries stack full-width, two-column rows become columns and drop decorative backgrounds, course detail stacks `column-reverse` (media first) and the rail is no longer sticky.

### Named Rules
**The Course Detail Split Rule.** Course pages are a 40rem reading column and a sticky 22rem photo/buy rail. Do not use Col2 / `.home-deux` on that surface.

## Elevation & Depth

This is a lifted catalog. The page wash (Classroom Sky → Paper Frost) is atmosphere, not a layer. Catalog tiles sit above it with a shared drop shadow and `--card-gradient` fill. Depth is structural: if it is pickable, it casts a shadow and, on hover, an orbit ring.

Photography and 1–2px Ink Navy text-shadows hold white type on images. Parcours wraps and home-trois articles add lift (`scale3d(1.05, 1.05, 1.05)`). Course tiles orbit without scaling. Primary CTAs lift (`translateY(-4px)`) with the same 8px 16px shadow. Home-trois articles stagger in with AOS `flip-up`, `1000ms`, `ease-in-out`, delay `index * 150`.

### Shadow Vocabulary
- **Tile wrap** (`box-shadow: 0 8px 16px color-mix(in srgb, var(--shadow-color) 25%, transparent)`): Course, parcours, and home-trois tiles at rest. Course-detail photos use the same value.
- **Image rest** (`box-shadow: 0 4px 4px color-mix(in srgb, var(--shadow-color) 25%, transparent)`): Photo top of a catalog card.
- **CTA / tile hover** (`box-shadow: 0 8px 16px color-mix(in srgb, var(--shadow-color) 25%, transparent)` plus `translateY(-4px)` or `scale3d(1.05, 1.05, 1.05)`): Primary button hover; parcours and home-trois hover lift.
- **Dialog** (`box-shadow: 0 8px 16px color-mix(in srgb, var(--shadow-color) 40%, transparent)`): Home-trois modal only.

### Named Rules
**The Lifted Catalog Rule.** Surfaces that can be chosen (parcours, course, CTA-adjacent tiles) use the shadow vocabulary above. Do not add neumorphic inner highlights. Do not go fully flat.

**The Orbit Ring Rule.** Course tiles, parcours tiles, and home-trois articles show a conic Classroom Sky → Lesson Card ring (`::after`, 3s linear) on hover and focus-visible. Honor `prefers-reduced-motion`: no ring, no scale.

## Shapes

Corners are quietly rounded, never sharp chrome and never squircles.

- **6px** (`rounded.sm`): In-flow articles, course links, card image top-corners, theme toggle, mobile Formations chip.
- **8px** (`rounded.md`): Platform chips, side-media panels.
- **12px** (`rounded.lg`): Catalog tiles (course and parcours), error panel, home-trois articles and modal, course-detail photos.
- **Full circle** (`rounded.full`): Portrait and motif photographs (200×200 on home-trois; `min(400px, 100%)` on about) on a Snow disc.

The filled primary CTA is the exception: **0px radius**, a blunt Ink Navy rectangle. Course links and platform chips are the rounded filled controls. Course-detail photos are 16/9, 12px on all corners.

Borders are scarce: 1px matching the fill on course links and platform chips (so invert can reveal a stroke), 1px Snow on the theme toggle and footer `hr`, 1px Neutral Rule where a card edge is drawn, 1px Snow on the mobile thumb-nav top.

## Components

Tactile catalog tiles: if a visitor can pick it, it should shadow, orbit, or invert on hover.

### Buttons
- **Shape:** Primary is square (0). Course links are gently curved (6px). Platform chips are 8px.
- **Primary** (`.button-action`): Ink Navy fill (`--action-bg`), Snow text (`--action-fg`), 12px 24px padding, weight 800, `font-size: 1.125rem`, 44px min hit. Hover lifts (`translateY(-4px)` plus the CTA shadow). Course-detail buy links (`Acheter sur Udemy` / `Acheter sur Tuto`) are this control, stacked, `width: 100%`.
- **Course link** (`.button-link`): Same Ink Navy / Snow pairing, 8px padding, 6px radius, 0.25s ease. Hover inverts to Snow fill / Ink Navy text. Lives in the course-tile link bar (`gap: 6px`); on phones padding becomes 12px 16px.
- **Platform chip** (`.parcours-platform-link`): Ink Navy fill, Snow text, 8px radius, 12px 24px padding, type at 24px / 600. Hover inverts; type size does not change.

### Chips
Platform chips are the only chip. They are filled action controls, not frosted glass. Theme toggle is a 6px Snow-outlined square on the header, transparent until hover fills `--action-bg`.

### Cards / Containers
- **Corner Style:** 12px on the tile wrap; catalog images use 6px on the top corners only. Course-detail photos use 12px all around.
- **Background:** `--card-color` (Lesson Card) plus `--card-gradient`. Galleries wrap each tile in that fill plus the tile-wrap shadow.
- **Shadow Strategy:** Tile wrap / image rest / hover vocabulary in Elevation. Parcours wrap and home-trois use `scale3d(1.05, 1.05, 1.05)`; course tiles orbit without scaling. Parcours photos go `grayscale(80%)` on `.card` hover.
- **Border:** None on the tile wrap.
- **Internal Padding:** 24px below the image on parcours cards; course text block is `padding: 12px 0 6px` with an 8px-padded link bar.
- **Home-trois:** Same 12px tile, 24px inset, 200px circular motif. Click opens the only dialog (`.home-trois-modal`): 12px, 24px inset, 40rem max, 40% shadow, Lesson Card fill.

### Navigation
Header is a full-width Classroom Sky bar, 24px inline padding, logo left / links right. Wordmark is Knewave, Snow, 2rem. Links are Snow, weight 800, 1.125rem, 12px padding, 1rem gap. Hover: `translateY(-5px)` and weight 600. Active: ExtraBold, underlined, offset 4px. Theme toggle sits in the same list. Below 768px the wordmark is sticky at the top and the nav is a bottom thumb bar; Formations (`.nav-primary`) is a filled 6px action chip. Footer is the same sky, Snow type at weight 800, with a 1px Snow rule.

### Signature: Photographic hero
`#hero` is a 60vh cover photograph (`montblanc.webp`, `montblanc-sp.webp` below 768px) with Classroom Sky as fallback fill. Display Inter in Snow sits on it, left-heavy on desktop, centered on small screens. This is how a page announces itself — a photo and a short line — not a gradient card or an illustration.

### Signature: Course detail media
A sticky 22rem rail: 16/9 photograph at 12px with the tile-wrap shadow, then full-width primary buy buttons (`gap: 12px`), then one body line. It is the purchase desk, not a second Col2 column.

### Signature: Circular portrait
About and motif images are Snow-backed circles (200px or up to 400px). They are the human face of the catalog. Do not square them or turn them into framed polaroids.

### Error
A single blush panel (`.error`): `error-blush` fill, 24px padding and margin, 12px radius. No other alert chrome exists.

## Do's and Don'ts

### Do:
- **Do** lead a surface with photography and a short Inter ExtraBold line, then the catalog.
- **Do** keep pickable tiles on Lesson Card with the lifted-catalog shadows, the orbit ring, and a 1.05 hover scale on parcours and home-trois.
- **Do** use Ink Navy for text and every filled control (CTA, course link, platform chip); Classroom Sky for header/footer/wash.
- **Do** reserve Knewave for the Altitude wordmark.
- **Do** leave air: 6/12/24/48px rhythm, 48px between groups and in the parcours gallery, a `40rem` reading measure.
- **Do** set course detail as a 40rem copy column plus a sticky 22rem photo/buy rail, with Acheter sur Udemy/Tuto as `.button-action`.

### Don't:
- **Don't** design SaaS dashboards, dense data grids, or navy/orange corporate kits.
- **Don't** add a third accent color (including Dribbble-derived dental/golf hues) or revive neumorphic inner glows.
- **Don't** set headings or UI in Knewave, or treat Helvetica as the body face.
- **Don't** turn mountain photographs into sherpa illustration, clipart, or alpine ornament.
- **Don't** invent form fields or extra modal chrome — the catalog has no forms; home-trois is the only dialog.
- **Don't** reuse Col2 / `.home-deux` on course detail.
