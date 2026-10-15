# Scaling the site beyond HVAC

The site is **HVAC-first today** and built so another trade can be added without redesign or SEO rework.

## Principles
1. **Brand stays vertical-neutral.** "Prestige DataOps" and the visual system do not mention HVAC. The *content* does.
2. **Vertical content lives behind a vertical.** Everything HVAC-specific is tagged `data-vertical="hvac"` (on `<html>`) and, when pages are added, lives under `/hvac/`.
3. **One design system, per-vertical accents.** Colours for a vertical are CSS variables in `assets/css/vertical.css` (HVAC = cool blue + warm amber). A new trade overrides only those variables.
4. **Shared vs vertical split** (what to copy vs reuse):

| Shared (do not fork) | Vertical-specific (copy and rewrite) |
|---|---|
| `tokens.css`, `base.css`, `layout.css`, `components.css`, `header.css` | Hero copy, pains, offers, playbooks |
| JS (`header`, `reveal`, `faq`, `motion`, `audit-form`) | Call example and playbooks |
| Footer, legal pages, form component | FAQ, compliance notes, schema `audience`/`serviceType` |

## URL architecture
```
/                    Generic AI-automation homepage (live)
/services/           Industry hub with a box per industry (live)
/services/hvac/      HVAC services (live); a new trade adds /services/<trade>/ and a box on the hub
/pricing/ /contact/  Generic pages (live)
/hvac/               HVAC vertical page: ARCHIVED in _archive-hvac/ (restore when ready)
/hvac/services/      HVAC services in detail: ARCHIVED
/hvac/<offer>/       One page per offer (ai-call-answering, lead-follow-up, ...)
/plumbing/           Next trade, same structure
```
Reason for `/hvac/` prefix: a trade can be added as a sibling folder with no URL migration.

## Adding a new trade: checklist
1. Research (copy `docs/RESEARCH-HVAC.md` as a template): pains, vocabulary, software stack, seasonality, compliance, competitors.
2. Add `[data-vertical="<trade>"]` accent variables to `assets/css/vertical.css`.
3. Copy the vertical homepage sections into `/<trade>/index.html`; rewrite hero, pains, offers, playbooks, FAQ, calculator defaults.
4. Update JSON-LD: `serviceType`, `audience`, FAQ; keep Organization/WebSite shared.
5. Add the pages to `sitemap.xml`; add a link in the footer "Industries" column and a card in the homepage "Industries" section (`#industries`), add the trade to the contact form's Industry list; link both ways between hub and vertical.
6. Compliance review for that trade (call recording, SMS, any regulated data).
7. Only publish proof (logos, results, testimonials) that is real and permissioned.

## Rules for any vertical
- No invented statistics, logos or reviews. Prefer the visitor-driven calculator over quoted benchmarks.
- One primary conversion (free audit). Same form, with trade-specific fields.
- Keep the first-viewport promise specific to the trade ("Every call answered. Every job booked." for HVAC).
