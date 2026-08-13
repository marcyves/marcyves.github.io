# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are self-directed learners — students, career-changers, and working professionals — who arrive to choose an online course and leave to buy it.

Companies seeking digital-transformation consulting or in-company training are a secondary audience. They are acknowledged, but this site’s conversion job is the catalog, not inbound consulting.

## Product Purpose

This site is Marc Augier’s public catalog of his formations. It exists so a visitor can understand who teaches, browse courses grouped into parcours, and buy on Udemy or Tuto.

Success is a learner finding a relevant course and completing the purchase on the hosting platform. The site does not enroll, host video, take payment, or deliver the course.

## Positioning

The offer is Marc himself: a practitioner (web developer since 1994, formateur, professeur de management) who teaches by building with the learner, not by lecturing. Courses live on Udemy and Tuto; this site is the map, not the school.

Altitude is a label on the site, not the primary identity. A neighboring trainer could copy a course list; they could not truthfully be Marc Augier with this catalog and this practice history.

## Operating Context

- French-language SPA at https://marcyves.github.io/, deployed to GitHub Pages (`gh-pages` from Vite `dist`). Hash routing is a GitHub Pages constraint, not a product preference.
- Catalog is static JSON: three parcours (`src/data/parcours.json`), two platforms (`src/data/plateformes.json`: Udemy, Tuto), twenty-six courses (`src/data/cours.json`) with outbound referral links.
- Typical path: home → formations → parcours or platform → course detail → Udemy/Tuto. Purchase and certificates happen off-site.
- Contact is email and social profiles; there is no form, booking, or chat.
- Marc maintains the catalog by editing JSON. Google Analytics is present (`G-P5VHJVD4D0`).

## Capabilities and Constraints

Confirmed surfaces: home, formations index, parcours (`/formation/:id`), platform (`/plateforme/:id`), course detail (`/cours/:id`), about, contact, 404.

The site is French-only. There is no search, account, checkout, CMS, or LMS. Course images and page photography are referenced from `/assets/images/` and fonts from `/fonts/`; those files are not in the tracked repository.

Contact addresses in the codebase: `marc.augier@xdm-consulting.fr` (footer mailto) and `m.augier@me.com` (schema). Social profiles: X `@marcyves`, Facebook `marc.augier`, LinkedIn `marcaugier`, GitHub `marcyves`. Instagram `xdm_consulting` is referenced in metadata only.

Undecided (do not invent later): whether consulting should ever get a dedicated conversion path; whether Udemy and Tuto should be presented as equals; current public pricing.

## Brand Commitments

- Person and voice: Marc Augier, first person, French, trainer-practitioner. Trust comes from the person, not an agency.
- Site label: “Altitude” / “Altitude Formation” appears in the header and document title. It is a label, not the brand to lead with.
- Mountain / sherpa metaphor (cordée, refuge, sommet) is optional copy, not a binding identity.
- XDM Consulting is not the company this site should represent; it appears only as an email domain and an Instagram handle.
- Do not expand mixed “nous / équipe” language in existing copy into a fictional team.

## Evidence on Hand

Real and reusable:

- Course catalog with titles, descriptions, tags, parcours/platform membership, and Udemy or Tuto links: `src/data/cours.json` (26 courses).
- Parcours: Développeur Web, Python et Data Science, Outils du manager (`src/data/parcours.json`).
- Confirmed biography in about copy: developer since 1994; formateur and management professor; founder of the Altitude label.
- Photographs referenced in code (`altitude_marc.jpg`, `altitude_people.jpg`, course thumbnails, mountain images) — paths only; files are not in git.

Must not fabricate: awards or prizes; “thousands of students”; a team; testimonials; current prices (copy mentions 9,99€); certificates as something this site issues (Udemy/Tuto issue them). Home and about currently contain some of these claims; they are unverified marketing copy, not product proof.

## Product Principles

1. The catalog is the product — every surface should help a learner pick a course and leave to buy it.
2. Marc is the face — voice, proof, and trust come from the person, not a brand fiction.
3. Platforms own fulfillment — this site maps and routes; it does not teach or transact.
4. Learners first — companies and consulting are secondary; do not optimize this site as a consulting funnel.
5. Only real proof — courses, links, and confirmed biography; no invented social proof.
