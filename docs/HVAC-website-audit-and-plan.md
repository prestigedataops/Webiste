# Prestige DataOps: Website Audit & HVAC Plan

Date: 2026-10-12 · Scope: current site (`index.html` build) → HVAC-first, luxury/premium/professional site for US HVAC companies.

---

## 1. Audit of the current site

Rated: **High** = blocks the HVAC goal or creates trust/legal risk · **Med** = costs conversions or rankings · **Low** = polish.

### 1.1 Positioning & messaging

| # | Finding | Sev |
|---|---|---|
| P1 | The site targets nobody. "AI Automation Partner" and "Scale your business" fit any industry. An HVAC owner can't tell within 5 seconds that this is for them. | High |
| P2 | The name "DataOps" is a data-engineering term (DevOps for data). HVAC owners won't connect it to missed calls or booked jobs, and searches for it return data-engineering content. The name needs to be carried by a clear descriptor, not left to explain itself. | High |
| P3 | All proof is placeholder: logos (Fernside, Brightmoor…), testimonials, and the case studies, which are non-HVAC and carry a visible "Illustrative examples" label. Premium buyers read this as untrustworthy. | High |
| P4 | Numbers are unsubstantiated: "20+ hrs", "3x faster", "<30 days", "62% fewer missed leads". Publishing invented results is a legal and reputational risk, so each one needs a real source or must be removed. | High |
| P5 | Offers are generic (workflow automation, agents, integrations, internal tools). HVAC buyers buy outcomes: more booked calls, fewer lost emergency jobs, renewed maintenance agreements, more reviews. | High |
| P6 | No HVAC vocabulary anywhere: trucks, techs, dispatch, comfort advisors, maintenance agreements, no-cool/no-heat calls, peak season. | Med |

### 1.2 Conversion

| # | Finding | Sev |
|---|---|---|
| C1 | Final CTA is a `mailto:` link. No booking calendar, no form, no phone. Mailto loses leads on webmail/mobile. | High |
| C2 | No way to *experience* the product. For a voice/agent service the strongest sales asset is a demo call or recording, and there is none. | High |
| C3 | No lead qualification (company size, FSM software, call volume). | Med |
| C4 | No about/founder/team. Owner-operators buy from people they can see. | Med |
| C5 | No security/compliance section (data handling, call-recording consent, SMS consent, TCPA). Essential for voice and SMS automation in the US. | Med |
| C6 | No analytics or conversion tracking, so nothing can be measured or optimised. | Med |

### 1.3 SEO

| # | Finding | Sev |
|---|---|---|
| S1 | One page can rank for very few queries. Buyers search specific problems ("AI receptionist for HVAC", "HVAC lead follow-up", "ServiceTitan automation"). Each needs its own page. | High |
| S2 | No HVAC keywords in the title, h1 or headings. Current title targets "AI workflow automation", the most generic and competitive framing. | High |
| S3 | Schema is generic `ProfessionalService`. Needs Organization + per-page `Service`, `FAQPage`, `Article`, `BreadcrumbList`. No fake reviews/ratings. | Med |
| S4 | Sitemap lists one URL; no internal linking structure; no content/blog. | Med |
| S5 | Not yet optimised for AI answer engines (ChatGPT, Perplexity, Google AI Overviews): needs plain-language Q&A, definitions and cited statistics. | Low |

### 1.4 Design & brand

| # | Finding | Sev |
|---|---|---|
| D1 | The look is "AI startup": near-black, neon-blue glow, gradient text, grain, glass pills, mono-caps eyebrows. It reads *tech SaaS*, not *luxury* or *trusted by HVAC owners*. | High |
| D2 | Nothing visual connects to HVAC or the real world: no people, homes, units, or product UI. The abstract node diagrams explain nothing to this audience. | Med |
| D3 | Visual weight is the same everywhere (every card is a glass rectangle). Luxury needs hierarchy, whitespace and restraint. | Med |
| D4 | Four font families (Inter Tight, Geist, Instrument Serif, JetBrains Mono): heavy and inconsistent. Two is enough. | Low |

### 1.5 Technical / performance / accessibility

| # | Finding | Sev |
|---|---|---|
| T1 | Google Fonts with four families is render-blocking and adds a third-party hit. Self-host 2 subsetted fonts. | Med |
| T2 | Full-screen fixed grain overlay + large blurred layers + `backdrop-filter` cost paint time on mid-range phones (many owners browse on phones). | Med |
| T3 | Root-relative asset paths and hand-duplicated markup (5 FAQs, 3 plans, nav twice) don't scale to 15+ pages. A templating/static-site step is needed. | Med |
| T4 | Newsletter form is a stub. | Low |
| T5 | Good already: semantic structure, one h1, skip link, focus states, reduced-motion support, content visible without JS, AA contrast. Keep these. | n/a |

---

## 2. Who we are selling to

**Buyer:** owner or GM of a US HVAC company, roughly 3–50 trucks. Mostly 40–60, practical, phone-first, burned by marketing agencies, short on time. Often the same person answers calls at night.

**Their real problems (what the site must speak to):**
1. Calls missed after hours, at peak season, and while techs are on jobs, each one a lost job (industry sources claim roughly 20–40% of calls go unanswered at peak; see §8 caveat).
2. Slow follow-up on web leads, Google Local Services leads and unbooked quotes.
3. Lapsing maintenance agreements and a dormant customer list.
4. Too few Google reviews, which drive the map pack.
5. Office staff buried in data entry between the phone, the field-service software and QuickBooks.

**Buyer's mental model:** "Will this book more jobs without me babysitting it, and will it make me look bad to my customers?" Premium design earns trust; specific outcomes and proof earn the call.

---

## 3. Positioning

**One sentence:** *Prestige DataOps is the AI front office for HVAC companies: every call answered, every lead followed up, every customer brought back.*

- Primary promise: **never lose a service call to a missed call.**
- Hero H1 (candidate): **"Every call answered. Every job booked."** with sub-head naming HVAC explicitly.
- Descriptor under the logo everywhere: *"AI automation for HVAC companies"*, which resolves the "DataOps" ambiguity (P2) without a rename.
- Tone: calm, precise, owner-to-owner. Plain words: *booked jobs, calls, trucks, techs*. No "synergy", "leverage", "transform".
- **Expansion-safe:** keep brand copy vertical-neutral, and put all HVAC content under `/hvac/`. New verticals become sibling folders later.

### Offers (replace the 4 generic services)

| Offer | Outcome statement |
|---|---|
| **AI Call Answering & Booking** | 24/7 answering, emergency triage (no heat / no cool / gas smell escalated to a human), books into your schedule. |
| **Lead & Quote Follow-up** | Instant reply to web, LSA and marketplace leads; automatic nudges on unsigned quotes. |
| **Maintenance Agreement Automation** | Renewals, seasonal tune-up campaigns, reactivation of past customers. |
| **Reviews & Reputation** | Request, route and respond, automatically after completed jobs. |
| **Back-Office Automation** | Job data synced between phone, field-service software and accounting; fewer admin hours. |

Only list integrations (ServiceTitan, Housecall Pro, Jobber, FieldEdge, Service Fusion, QuickBooks…) that we have actually built or will commit to.

---

## 4. Design direction: luxury, premium, professional

**Principle:** quiet confidence. Fewer effects, better materials, more space. Think private bank / architecture firm, not crypto startup.

### Palette (replaces electric-blue-on-black)
| Role | Value | Notes |
|---|---|---|
| Ink | `#0B1220` | Deep navy-black for hero/footer, warmer than pure black |
| Ivory | `#F6F2EA` | Main light background, warm, premium |
| Paper | `#FFFFFF` | Cards on ivory |
| Brass / champagne | `#B89B5E` | Single accent: rules, small marks, key links (check AA on each background; use darker `#8F7438` for text on ivory) |
| Frost | `#DCE6EE` | Cool secondary tint, a subtle nod to HVAC/climate |
| Slate text | `#4A5568` / `#E7E4DC` on dark | Body copy |

Alternating dark and ivory sections create rhythm and a premium editorial feel. A single accent colour, used sparingly.

### Typography
- **Display:** an elegant serif (Instrument Serif, which we already load, or Fraunces/Newsreader), used for *whole headlines*, not just one italic word.
- **UI/body:** one clean sans (Inter or Geist). Drop the mono family.
- Generous scale (headline 56–88px desktop), tight tracking on display only, 1.6 body line height.
- Self-hosted WOFF2, two families, `font-display: swap`.

### Look & feel changes
- **Remove:** grain overlay, neon glows, gradient text, glass pills, glowing dots, mono-caps eyebrows everywhere.
- **Add:** hairline (1px) rules, 4–8px radii (not 20px+/pills), large whitespace, a strict 12-col grid, small-caps eyebrows in brass.
- **Buttons:** solid ink or brass, rectangular-to-softly-rounded, no glow. One primary CTA style across the site.
- **Motion:** only gentle fade/translate on reveal; no drifting glows.

### Imagery (the biggest upgrade)
1. **Signature product visual:** a refined UI mock of a real call: *"9:42 PM · No cooling · Dallas, TX"* → transcript → *Booked: Tue 8–10 AM → synced to ServiceTitan*. This explains the whole product in one image and looks premium.
2. **Real photography** (technician, home, rooftop unit), consistently colour-graded to ink/ivory tones. Commission or license; avoid generic stock smiles.
3. Real client logos in monochrome once available.

### Components
Sticky header with **phone number + "Book your audit"**; mobile sticky bar (Call / Book); demo-audio player; ROI calculator; case-study cards with real metrics; integration logo grid (real ones only); plan comparison; FAQ accordion; trust/compliance panel.

---

## 5. Information architecture (multi-page)

```
/                                  HVAC-first homepage
/hvac/
  ai-call-answering/               Offer pages (one per offer, each targets one search intent)
  lead-follow-up/
  maintenance-agreements/
  reviews-reputation/
  back-office-automation/
  integrations/                    ServiceTitan, Housecall Pro, … (real only)
  roi-calculator/                  Missed-call revenue calculator
/case-studies/  (+ /case-studies/<slug>/)
/pricing/
/about/
/resources/                        Blog + guides
/book/                             Calendar + short qualifying form
/contact/   /privacy/   /terms/   /security/
```

`/hvac/…` prefix keeps expansion clean: `/plumbing/…`, `/electrical/…` later, with `/` becoming a hub. Because we sell *to* HVAC companies nationally, **we do not need city landing pages** (that advice, common in HVAC SEO guides, is for HVAC companies' own sites). Our SEO is topical, not geographic.

### Homepage section order
1. **Hero:** H1, one-line HVAC sub-head, two CTAs ("Get your free missed-call audit", "Hear a demo call"), the call-booking product visual.
2. **Proof strip:** real logos / pilot results (hidden until real).
3. **The problem:** missed calls, peak season, after-hours; link to calculator.
4. **Five outcomes** (the offers above), each linking to its page.
5. **How it works:** Audit → Pilot in ~2 weeks → Launch → Optimise.
6. **Integrations:** real logos.
7. **Case study** (real, with numbers and a named owner quote).
8. **Security & compliance:** data handling, consent, human escalation.
9. **Engagement/pricing:** clear tiers or "from" pricing.
10. **FAQ (HVAC-specific):** "Will it handle emergency calls?", "Does it work with ServiceTitan?", "What if a caller wants a human?", "Is call recording legal in my state?".
11. **Final CTA:** calendar + phone.

---

## 6. SEO plan

**Keyword clusters (target one per page; validate volume/difficulty with Search Console / a keyword tool before committing):**
- AI receptionist / answering for HVAC · HVAC answering service · missed call text back
- HVAC lead follow-up automation · speed to lead HVAC
- HVAC maintenance agreement automation / renewals
- ServiceTitan / Housecall Pro / Jobber / FieldEdge automation
- HVAC review automation

**On-page:** title ≤60 chars with the HVAC keyword, one h1 per page, descriptive meta descriptions, FAQ per page, internal links between offers ↔ integrations ↔ resources ↔ case studies, `BreadcrumbList`.

**Schema:** Organization (sitewide), `Service` + `FAQPage` per offer page, `Article` for posts, `BreadcrumbList`. Do **not** mark up placeholder reviews. Only add review/rating markup once real, verifiable reviews exist and Google's current guidelines allow it for the entity type.

**Content (first 10 pieces):** "How many calls is your HVAC company missing?" (with the calculator), "AI receptionist for HVAC: what to ask before you buy", "Speed-to-lead benchmarks for home services", "Maintenance agreements: renewal playbook", "Pre-summer checklist for HVAC office ops", one integration guide per FSM tool we support, and each real case study.

**Technical:** LCP < 2.5s, INP < 200ms, CLS < 0.1; self-hosted fonts; images in AVIF/WebP with dimensions; HTTPS; clean URLs; canonical per page; XML sitemap generated at build; llms.txt optional.

**Measurement:** Search Console, GA4 with events for `book_click`, `form_submit`, `demo_play`, `calculator_use`, `phone_click`; call tracking on the sales number.

---

## 7. Technical approach

- Move to a static-site generator (**Astro** recommended): layouts and components (header, footer, FAQ, plan card) written once, Markdown/MDX for blog and case studies, automatic sitemap/canonicals, image optimisation, near-zero JS by default.
- Keep the current design tokens file approach (`tokens.css`); swap the palette/type there first.
- Hosting: Cloudflare Pages or Netlify (static, global CDN).
- Forms/scheduling: Cal.com or Calendly embed plus a form endpoint (serverless function) with spam protection.
- Calculator and demo player: small vanilla JS islands.

---

## 8. Roadmap

| Phase | Work | Output |
|---|---|---|
| **0: Decisions (1–2 days)** | Confirm domain, offers we can truly deliver, real proof available, integrations list, pricing | Locked brief |
| **1: Foundation (wk 1–2)** | Migrate to Astro, new tokens (palette/type), new homepage (HVAC), `/book`, `/pricing`, `/privacy`, `/terms`, analytics | Rebranded, indexable site live |
| **2: Offer pages + tools (wk 3–4)** | 5 offer pages, integrations page, ROI calculator, demo audio, product visual | Conversion engine |
| **3: Proof & content (wk 4–8, ongoing)** | First real case study, about page, security page, 4–6 articles | Trust + organic traffic |
| **4: Expansion readiness** | Hub-ready homepage variant, vertical template, waitlist for next trade | Add plumbing/electrical without rework |

**Success metrics:** booked audits per 1,000 visits, calculator completions, demo plays, organic non-brand clicks to `/hvac/*`, Core Web Vitals pass rate.

---

## 9. Open items I need from you

1. **Proof:** any real client results, pilot customers or testimonials (even one)? If none, we run a "pilot partner" offer and show process, not fake numbers.
2. **What exactly do you deliver today?** (call answering, SMS follow-up, integrations). Pages should only promise what's real.
3. **Which field-service software do your prospects use / do you integrate with?**
4. **Name:** keep "Prestige DataOps" with the HVAC descriptor, or consider a clearer name before more SEO equity is built?
5. **Contact:** a real phone number, booking link and domain.
6. **Legal:** US voice/SMS automation is regulated (TCPA, state call-recording consent, SMS opt-in). Have counsel review the compliance page and any "AI voice" claims.

### Caveat on statistics
Statistics found in research (missed-call rates, "78% won't leave voicemail", "$1,200 per missed call") come from vendor/agency blogs citing call-tracking benchmarks and **are not independently verified**. Don't publish them as fact. Use the interactive calculator (visitor enters their own numbers) and cite primary sources only after tracing them.

### Sources consulted
- https://www.servicemag.org/news/hvac-after-hours-calls-overnight-revenue
- https://www.cetdigit.com/blog/the-refrigerant-leak-in-your-revenue-why-hvac-companies-lose-300000-a-year-at-the-seams-and-how-hubspot-seals-them
- https://www.signpost.com/blog/how-much-revenue-do-home-services-businesses-lose-from-missed-calls
- https://www.smartservice.com/blog/hvac-seo-for-hvac-contractors
- https://hookagency.com/hvac-marketing/seo/schema-markup/
