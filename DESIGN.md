# Girls Girl WTTB — Design System

Brand contract for UI in this repository. Pair with `CursorPK.md` for product scope.

---

## 1. Visual Theme & Atmosphere

**Persona:** An independent luxury urbanwear house — confident, feminine, editorial, never mall-brand or fast-fashion.

**Mood:** Midnight gallery meets couture streetwear. Deep black voids, restrained pink glow, oversized type, breathing room, model-forward imagery.

**Voice:** Support women. Stay loyal. Keep shining. WTTB — *What They Talkin Bout*.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `gg-black` | `#050505` | Primary background — near-black, not flat #000 |
| `gg-ink` | `#0c0c0c` | Elevated panels |
| `gg-surface` | `#121212` | Cards, inputs |
| `gg-surface-elevated` | `#1a1a1a` | Nested surfaces |
| `gg-border` | `rgba(255,255,255,0.08)` | Hairline dividers |
| `gg-border-strong` | `rgba(255,255,255,0.14)` | Focus rings |
| `gg-pink` | `#e91e8c` | **Single accent** — CTAs, price, active nav (max 2× per screen) |
| `gg-pink-glow` | `rgba(233,30,140,0.35)` | Subtle halo on hero/logo |
| `gg-champagne` | `#d4af8c` | Rare tertiary — club badges, exclusivity |
| `gg-white` | `#fafafa` | Primary text |
| `gg-muted` | `#8a8a8a` | Secondary copy |
| `gg-cream` | `#f5f0e8` | Product neutrals reference |

**Rule:** Pink is precious. Use for one primary action and prices — not every link.

---

## 3. Typography Rules

| Role | Font | Treatment |
|------|------|-----------|
| **Display / editorial** | Cormorant Garamond | Headlines, hero titles — italic or semibold, tight leading |
| **UI / body** | Inter | Labels, body, nav — clean geometric |
| **Logo script** | Cormorant Garamond italic | “Girls Girl” wordmark |
| **Eyebrows** | Inter | `10–11px`, uppercase, `tracking-[0.35em]`, pink or white/50 |
| **Section titles** | Inter | `11–12px`, uppercase, `tracking-[0.25em]`, white |
| **Hero headline** | Display | `uppercase` optional; prefer mixed case editorial for luxury |

---

## 4. Component Stylings

- **Buttons primary:** `gg-btn-primary` — pink fill, white text, uppercase, wide tracking, soft shadow glow
- **Buttons ghost:** `gg-btn-ghost` — white/10 border, hover white/20
- **Cards:** `gg-card` — surface bg, hairline border, `rounded-2xl`, no heavy shadows
- **Product image:** 3:4 aspect, slow zoom on hover (1.03), vignette overlay
- **Badges:** Outline champagne or thin pink border — avoid solid pink blocks except “New”
- **Inputs:** Rounded-full or rounded-xl, inset surface, focus ring pink/30

---

## 5. Layout Principles

- Max content width `7xl`; generous vertical rhythm (`mt-10`–`mt-16` between sections)
- Editorial asymmetry on hero — copy left, model right, gradient fade
- Mobile-first; desktop adds horizontal nav and multi-column grids
- `data-od-id` on major sections for design review

---

## 6. Depth & Elevation

- Prefer ** borders over shadows**
- Subtle `backdrop-blur` on header/nav only
- Optional body `gg-grain` noise at 3% opacity
- Pink glow only on primary CTA and logo — never on every card

---

## 7. Do's and Don'ts

**Do:** Feel like Vogue meets athletic luxury. Let photography dominate. Use silence (empty space).

**Don't:** Neon gradients on every banner. Emoji crowns. Generic e-commerce blue. Scale-hover on entire pages. Stock-photo energy without crop discipline.

---

## 8. Responsive Behavior

- **Mobile:** Bottom tab bar, full-bleed hero image, horizontal scroll for featured
- **Desktop:** Top nav under header, 4-column product grid, hero min-height 480px
- Touch targets ≥ 44px; tap highlights off

---

## 9. Agent Prompt Guide

When styling this project:

1. Read `DESIGN.md` + `CursorPK.md` §0.
2. Map tokens from `src/app/globals.css` — do not invent new hex values ad hoc.
3. Use `font-display` for hero/headlines, `font-sans` for UI.
4. One pink CTA per viewport section.
5. Maintain independent fashion-house tone in all copy placeholders.
