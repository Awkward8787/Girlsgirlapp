# Girls Girl WTTB — Cursor Project Plan

> **Canonical master plan for this repository.**  
> Cursor project rule `.cursor/rules/cursorpk-master-plan.mdc` requires reading this file before any work here.  
> All Cursor work follows **one-percent task coding**: one task at a time, respect dependencies, touch only files required for the current task.

---

## 0. Current project status (this repo)

**Last reviewed:** aligned with repo as of initial web prototype commit `1f38e55`.

### Where we are

| Area | Status |
|------|--------|
| **Active phase** | Between **Phase 0** (brand/UI direction) and **Phase 1** (infrastructure). Web design prototype is done; no backend or iOS app in this repo yet. |
| **This repository** | [github.com/Awkward8787/Girlsgirlapp](https://github.com/Awkward8787/Girlsgirlapp) — branch `master` |
| **npm package name** | `girls-girl-app` |
| **Public deploy** | Not deployed yet (local: `npm run dev` → `http://localhost:3000`) |
| **Production target** | Native **iOS** (SwiftUI) + Medusa + Appwrite + API gateway — **not started in this repo** |

### What exists in this repo today

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lucide icons.

**Purpose:** Responsive **web design prototype** that mirrors the iOS mockups for stakeholder preview, UX validation, and future SwiftUI reference. It is **not** the App Store submission target and must not be mistaken for production commerce.

```
Girls Girl app/
├── CursorPK.md                 # This plan
├── package.json
├── next.config.ts              # images.unsplash.com allowed
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Header + nav shell, Inter font
│   │   ├── globals.css         # Brand tokens (--color-gg-*)
│   │   ├── page.tsx            # Home
│   │   ├── shop/page.tsx
│   │   ├── product/[slug]/page.tsx
│   │   ├── style/page.tsx
│   │   ├── bag/page.tsx
│   │   ├── profile/page.tsx
│   │   └── not-found.tsx
│   ├── components/             # 14 UI components (see below)
│   ├── models/product.ts       # Canonical TypeScript interfaces
│   └── services/product-service.ts  # Deterministic mock data only
```

**Routes implemented:**

| Route | Screen | Data source |
|-------|--------|-------------|
| `/` | Home | Mock — hero carousel, new drop, featured, trending, community |
| `/shop` | Shop | Mock — client-side search + category filter |
| `/product/[slug]` | Product detail | Mock — 6 static slugs via `generateStaticParams` |
| `/style` | Style feed | Mock — 4 seed posts; Community tab is placeholder |
| `/bag` | My Bag | Mock — 3 hard-coded cart items |
| `/profile` | Profile | Placeholder — Sign In UI only |

**Mock catalog (seed products in `product-service.ts`):**

1. `pink-shine-girl-set`
2. `navy-bad-girl-set`
3. `black-girl-society-set`
4. `cream-things-tee`
5. `cream-things-set`
6. `pink-shine-vibes-set`

Images are **Unsplash placeholders**, not final brand photography or green-screen cutouts.

**Brand tokens (implemented in `globals.css`):**

| Token | Value |
|-------|-------|
| Background | `#000000` (`gg-black`) |
| Primary pink | `#ff3399` (`gg-pink`) |
| Hot pink | `#ff007f` (`gg-pink-hot`) |
| Surface | `#111111` / `#1a1a1a` |
| Muted text | `#888888` |
| Font | Inter (sans); logo uses serif italic in `brand-logo.tsx` |

**Navigation (matches iOS 5-tab plan):** Home · Shop · Style · Bag · Profile — bottom bar on mobile, top bar on `md+`.

### Feature matrix — prototype vs production plan

| Feature | Web prototype | Production (plan) |
|---------|---------------|-------------------|
| Browse / search / filter | ✅ UI + mock data | Medusa Store API via gateway |
| Color / size selection | ✅ UI only | Medusa variants + inventory check |
| Wishlist heart buttons | ✅ UI only (no persistence) | Appwrite `wishlists` |
| Add to bag / cart | ✅ Links to `/bag` | Medusa cart + session |
| Checkout / Apple Pay | ⚠️ Placeholder buttons | Stripe iOS SDK + webhooks |
| Shipping total | ⚠️ Hard-coded `$7.95` in mock service | Server-calculated (remove before prod) |
| Auth / accounts | ⚠️ Profile placeholder | Appwrite |
| Style feed posts | ✅ Mock curated feed | Appwrite + moderation |
| Customer posting | ❌ Disabled (correct for v1.0) | v1.1 after moderation |
| Orders / returns / push | ❌ Not built | Medusa + gateway + APNs |
| Admin dashboard (web) | ❌ Not in repo | `admin.girlsgirlwttb.com` — Medusa Admin + Girls Girl ops UI |
| Promotions / promo codes | ⚠️ Bag UI only (non-functional) | Medusa promotions — created in admin dashboard |
| RBAC (staff + customer roles) | ❌ Not built | Gateway + Appwrite + Medusa Admin roles (see §8A) |
| iOS app | ❌ Not in repo | `GirlsGirlWTTB/` (future) |
| API gateway | ❌ Not in repo | `/srv/girlsgirl/gateway/` on server |
| Medusa / Appwrite | ❌ Not connected | Server deployment |

### What is intentionally out of scope for this repo (for now)

- SwiftUI / Xcode project (`GirlsGirlWTTB/`)
- Medusa, PostgreSQL, Redis, gateway Docker stacks
- Appwrite collections and auth wiring
- Stripe live/test integration
- Real Apple Pay (requires native app + merchant ID)
- Production domains and TLS

### Next tasks for **this Cursor repo** (web prototype track)

These are valid one-percent tasks **before** or **in parallel with** server Phase 1:

1. Deploy web prototype to Vercel (or similar) for shareable preview URL
2. Replace Unsplash placeholders with brand product assets when available
3. Add policy pages (`/privacy`, `/terms`, `/returns`, `/shipping`, `/community-guidelines`) as static content
4. Wire prototype to Medusa Store API once staging `commerce.girlsgirlwttb.com` exists (read-only catalog first)
5. Remove hard-coded shipping from client; fetch from gateway when checkout exists
6. Add accessibility pass (labels, focus, contrast audit) on existing components

### Next tasks for **production track** (server + iOS — separate from this repo)

Follow **§17 Immediate implementation order** — starts with DNS/TLS and Appwrite stabilization on the Ubuntu server, then Medusa staging, then SwiftUI app in a new Xcode project.

---

## 1. Product identity

| Field | Value |
|-------|-------|
| **App & storefront** | Girls Girl WTTB |
| **Master brand** | Girls Girl by Bigg Britt |
| **WTTB** | What They Talkin Bout |
| **Community** | Girls Girl Club |
| **Category** | Sophisticated luxury urbanwear |
| **Primary message** | Support women. Stay loyal. Keep shining. |

**Visual direction:** Black backgrounds, polished pink accents, oversized editorial typography, luxury product photography, confident model imagery. Must feel like an **independent fashion house** — not a generic clothing template or ordinary streetwear store.

### Product objective (iOS v1)

Customers must be able to:

- Browse products **without** creating an account
- Search and filter products
- Select color and size variants
- Save products to a wishlist
- Purchase physical clothing via **Apple Pay** or credit card
- Track orders and request returns
- View curated style inspiration
- Join the Girls Girl community
- Receive new-drop and order-status notifications
- Manage account, privacy, addresses, and preferences

---

## 2. Architecture (system of record)

**Do not** store the same product, price, inventory, or payment status independently in both Medusa and Appwrite. That creates mismatched stock, duplicate orders, and incorrect prices.

| Platform | Primary responsibility |
|----------|------------------------|
| **Medusa v2** | Products, variants, prices, inventory, carts, promotions, orders, returns, fulfillment |
| **Appwrite** | Authentication, user profiles, wishlists, community posts, comments, likes, reports, blocks, notification preferences |
| **Stripe** | Payment authorization, capture, refunds, Apple Pay |
| **iOS app** | Native shopping and community interface |
| **Admin dashboard (web)** | Staff-only browser app at `admin.girlsgirlwttb.com` — orders, fulfillment, inventory, promotions, customers, reporting |
| **API gateway** | Secure bridge between clients, Appwrite, Medusa, and Stripe; **enforces all roles** |

### Architecture diagram (production target)

> **Today:** The Next.js web prototype in this repo calls `src/services/product-service.ts` only — no HTTPS backend, no gateway, no Medusa or Appwrite.

```
Girls Girl WTTB iOS App          Girls Girl Web Storefront (future)
        |                                    |
        | HTTPS                              | HTTPS
        v                                    v
Girls Girl API Gateway  <--------------------+
        |
        |---------------------------|---------------------------|
        |                           |                           |
        v                           v                           v
Appwrite                       Medusa v2              Admin Dashboard (web)
- Authentication               - Products             admin.girlsgirlwttb.com
- Profiles / member tier       - Variants             - Orders & fulfillment
- Wishlists                    - Prices               - Manual shipping
- Style Feed                   - Inventory            - Promotions / promo codes
- Comments                     - Carts                - Customers & reports
- Likes                        - Orders               - Design Studio
- Reports                      - Promotions           - RBAC staff login
- Blocks                       - Returns              (Medusa Admin + custom)
- Push preferences             - Fulfillment
        |                           |
        |                           v
        |                        Stripe
        |                     - Apple Pay / Cards / Refunds
        v
Appwrite Storage — community images, avatars, uploads
```

### API gateway — required

The iOS app must **never** contain: Medusa admin tokens, Appwrite server keys, Stripe secrets, DB credentials, SMTP credentials, or shipping-provider secrets.

**Gateway responsibilities:**

- Verify Appwrite JWTs/sessions
- Map `appwrite_user_id` → `medusa_customer_id`
- Create/recover shopping carts
- Create Stripe PaymentIntents
- Verify inventory before payment
- Order-history and return-request responses
- Sign image-upload requests
- Rate limiting
- Verify Stripe and Medusa webhooks
- Enforce dashboard roles

---

## 3. Server deployment

**Existing server audit (must fix before production):**

- Ubuntu 24.04.4 LTS, Docker active
- Appwrite at `/srv/appwrite` — mostly healthy; **embedding service repeatedly restarting**
- Public DNS/TLS unresolved for at least one prior backend domain
- Commerce cannot launch with unresolved HTTPS, unstable services, or untested backups

### Recommended domains (production)

| Host | Purpose |
|------|---------|
| `api.girlsgirlwttb.com` | Secure gateway (iOS app) |
| `commerce.girlsgirlwttb.com` | Medusa Store API |
| `admin.girlsgirlwttb.com` | Protected management dashboard |
| `backend.girlsgirlwttb.com` | Appwrite endpoint |
| `cdn.girlsgirlwttb.com` | Product and campaign images |

### Docker layout

```
/srv/appwrite                    # Keep existing — separate
/srv/girlsgirl/
    medusa/
    gateway/
    postgres/
    redis/
    media/
    backups/
    monitoring/
```

**Medusa** requires its own PostgreSQL and Redis. Do **not** reuse Appwrite’s MariaDB or Redis.

### Environments

| Environment | Purpose |
|-------------|---------|
| **Development** | Cursor + local Xcode |
| **Staging** | TestFlight, QA, dashboard testing |
| **Production** | App Store, real orders |

Never test new product logic, migrations, or payment changes directly in production.

---

## 4. iOS technology (planned — not in this repo yet)

| Layer | Choice |
|-------|--------|
| UI | SwiftUI |
| Async | Swift Concurrency |
| Navigation | NavigationStack |
| Auth | Appwrite Apple SDK |
| Payments | Stripe iOS SDK (Apple Pay + cards) |
| Secure storage | Keychain |
| API | URLSession or typed client → gateway/Medusa |
| Local persistence | SwiftData or lightweight store (recently viewed, cart recovery) |
| Push | APNs |
| Deep links | Universal Links (products, orders, style posts) |

### iOS project structure (to be created in Xcode)

```
GirlsGirlWTTB/                   # Future — not in Girlsgirlapp repo yet
├── App/
├── Core/
│   ├── Networking/
│   ├── Authentication/
│   ├── Storage/
│   ├── Analytics/
│   └── DesignSystem/
├── Features/
│   ├── Home/
│   ├── Shop/
│   ├── Product/
│   ├── Search/
│   ├── Wishlist/
│   ├── StyleFeed/
│   ├── Cart/
│   ├── Checkout/
│   ├── Orders/
│   ├── Returns/
│   └── Profile/
├── Models/
├── Services/
└── Resources/
```

---

## 5. Main navigation (5 tabs)

| Tab | Purpose | Key features |
|-----|---------|--------------|
| **Home** | Editorial storefront, new-drop discovery | Hero campaigns, Shop Now, New Drop, featured, trending, club promo, community, recently viewed, back-in-stock, recommendations |
| **Shop** | Full catalog | Search, categories (Sets/Tops/Bottoms/New Drop), filters, sort, wishlist, badges (New/Exclusive/Limited), low-stock |
| **Style** | Inspiration + community | Curated looks, product-tagged posts, Shop This Look, likes, comments, shares, report, block |
| **Bag** | Cart + checkout | Qty, promo, shipping/tax estimates, Apple Pay, card, address, delivery, return-policy link |
| **Profile** | Account | Sign in/up, orders, tracking, returns, wishlist, addresses, payments, notifications, community posts, blocks, support, policies, **account deletion**, sign out |

- Verify Stripe and Medusa webhooks
- Enforce **staff and customer roles** on every privileged route (see §8A)

---

## 6. Customer access model

### Guest (no account)

**No login required for:** browse, search, view products, add to bag, guest checkout.

### Customer / Member role (`customer` — standard user)

Every shopper who creates an account or completes a purchase becomes a **Girls Girl Club member** (free in v1.0). The experience must feel like joining a brand — not filling out a generic form.

**Member identity (Appwrite `profiles` + Medusa customer):**

| Field / feature | Purpose |
|-----------------|--------|
| `display_name`, `username`, avatar | Recognizable identity in app and post-purchase emails |
| **Girls Girl Club** badge in Profile | Visual membership — “you’re part of the house” |
| Order history + tracking | Transparent post-purchase journey |
| Wishlist sync | Saved pieces across devices |
| Saved addresses & size preference | Faster repeat checkout |
| Promo code redemption at checkout | Applies Medusa promotion — server validates |
| New-drop & order push (opt-in) | Feels like insider access, not spam |
| Curated Style Feed + Shop This Look | Brand world, not only transactions |
| `#WTTB` / `@biggbritt` in onboarding copy | Reinforces community language |

**Login required for:** wishlist sync, order history across devices, community post/comment (v1.1), address book, account notifications, returns after purchase, saving promo-eligible profile for campaigns.

**Auth at launch:** Email/password, Sign in with Apple, guest checkout. Avoid Facebook/Google unless Apple-equivalent privacy login is provided.

**What members must never do:** Access admin dashboard, view other customers’ orders, create promotions, or change prices/inventory.

---

## 7. Medusa product structure

- Every size × color = separate variant with SKU, price, stock, weight, shipping profile, images, active state
- Custom fashion metadata: `fit_type`, `fabric_composition`, `fabric_weight_gsm`, `stretch_level`, `model_height`, `model_size_worn`, `care_instructions`, `country_of_origin`, `size_chart_id`, `drop_id`, `release_date`, `style_notes`, `product_story`, `limited_quantity`, `restock_allowed`, `preorder_allowed`, `estimated_ship_date`
- Media: flat front/back, model front/back/side, details, fabric, fit video, packaging, size chart (green-screen cutouts for hero/gallery)

---

## 8. Admin dashboard & store operations

**URL (production):** `https://admin.girlsgirlwttb.com`  
**Access:** Staff roles only — MFA required. Never exposed in iOS app or public storefront.  
**Foundation:** Medusa Admin + custom **Girls Girl Operations** sections (same brand system as `DESIGN.md`).

### Why a dedicated dashboard website

Operators need a browser-based control plane to run the store day-to-day without SSH or database access:

- Review and search all orders
- Move orders through fulfillment (pick → pack → ship → deliver)
- **Manual fulfillment** when labels or carriers are handled outside automation
- Adjust inventory after physical counts
- Issue refunds and process returns
- Create and manage **promotional codes and discounts**
- Manage catalog, drops, and homepage modules
- View customer history and support tickets
- Moderate community content (v1.1+)

### Dashboard modules

| Module | Scope |
|--------|-------|
| **Overview** | Sales today/week, orders awaiting action, low stock, pending returns, promo usage, new members |
| **Design Studio** | 9-step product wizard (info → media → design → variants → pricing → inventory → shipping → app placement → publish) |
| **Collections & Drops** | WTTB First Drop, Pink Shine, Bad Girl, etc.; countdowns, early access |
| **Orders** | List, filter, detail view, payment status, customer contact, notes |
| **Fulfillment** | Pick lists, packing slips, shipping labels, **manual ship** workflow, tracking entry |
| **Inventory** | SKU/size/color stock, adjustments, reserved, restock history |
| **Returns** | Reasons, photos, approval, labels, restock, refunds, store credit |
| **Promotions** | Create/edit promo codes, % or fixed discounts, min cart, expiry, usage limits (see below) |
| **Customers** | Search members, order history, club status, support flags (read-only PII masking by role) |
| **Community moderation** | Reports, flagged content, blocks (v1.1+) |
| **Homepage manager** | Reorder app modules without release |
| **Push notifications** | Campaigns — marketing opt-in only |
| **Staff & permissions** | Invite staff, assign roles, audit log |

### Order & manual delivery workflow

For v1.0, support both integrated shipping (Shippo/EasyPost later) and **fully manual** operations:

| Status | Staff action | Customer sees |
|--------|--------------|---------------|
| `paid` | Order appears in **Awaiting fulfillment** queue | Order confirmed email/push |
| `processing` | Staff picks items; inventory reserved | “We’re preparing your order” |
| `packed` | Print packing slip; optional label | — |
| `shipped` | Enter carrier + tracking **or** mark “Manual delivery scheduled” | Tracking link or delivery note |
| `out_for_delivery` | Optional — local/hand delivery | Push update |
| `delivered` | Confirm delivery (manual OK) | Delivered + review prompt later |
| `cancelled` / `refunded` | Admin or Support role | Refund confirmation |

**Manual delivery fields (Medusa fulfillment metadata or custom):**

- `fulfillment_type`: `carrier` | `manual` | `local_delivery`
- `assigned_to`: staff user id
- `delivery_notes`: internal only
- `customer_delivery_message`: e.g. “Your order will be hand-delivered in Atlanta — we’ll text you.”
- `tracking_number`, `carrier` (optional when manual)

Dashboard must allow fulfilling an order **without** a shipping label — e.g. mark shipped with notes only.

### Promotions & promotional codes

**System of record:** Medusa **Promotions** module. Promo codes are **never** validated only on the client.

**Admin dashboard — Promotion manager:**

| Capability | Detail |
|------------|--------|
| Create code | e.g. `WTTB15`, `CLUBSHIP`, `BRITTBDAY` |
| Discount type | Percentage off, fixed amount off, free shipping |
| Scope | Entire cart, specific collections, specific products |
| Rules | Minimum subtotal, max uses total, max uses per customer, start/end date |
| Stackable | Default **no** — one promo per order unless Owner enables |
| Status | Draft → Active → Expired → Disabled |
| Reporting | Redemption count, revenue discounted, orders affected |

**Customer flow:**

1. Customer enters code in Bag / checkout (iOS or web).
2. Gateway validates session → applies promotion to **Medusa cart** server-side.
3. UI shows updated subtotal, discount line, and final total before payment.
4. Invalid/expired codes return clear message — no silent failure.

**Staff permissions for promotions:**

| Role | Create/edit promos | View redemptions |
|------|-------------------|------------------|
| Owner | ✅ | ✅ |
| Store Administrator | ✅ | ✅ |
| Product Manager | ❌ | ✅ |
| Customer Support | Apply existing code to order (override) | ✅ |
| All other staff | ❌ | Read-only if granted |

---

## 8A. Role-based architecture (RBAC)

All applications share one identity model. **Roles are enforced on the API gateway and admin dashboard** — not by hiding buttons in the app alone.

### Role overview

| Role | Actor | Primary surface | Can access admin dashboard |
|------|-------|-----------------|---------------------------|
| **Guest** | Anonymous shopper | iOS / web storefront | ❌ |
| **Customer** (Member) | Registered Girls Girl Club member | iOS Profile, orders, wishlist | ❌ |
| **Fulfillment Staff** | Warehouse / packing | Admin — Orders, Fulfillment, Inventory (read) | ✅ Limited |
| **Customer Support** | Support team | Admin — Orders (read/update notes), Returns, Customers | ✅ Limited |
| **Content Manager** | Marketing / creative | Admin — Homepage, Drops, Style curation | ✅ Limited |
| **Community Moderator** | Trust & safety | Admin — Moderation queue | ✅ Limited |
| **Product Manager** | Catalog owner | Admin — Design Studio, Inventory, Collections | ✅ Limited |
| **Store Administrator** | Operations lead | Admin — most modules except owner-only settings | ✅ |
| **Analyst** | Reporting | Admin — read-only dashboards | ✅ Read-only |
| **Owner** | Bigg Britt / principal | Everything + staff invites, promo policy, refunds over threshold | ✅ Full |

### Permission matrix (summary)

| Permission | Guest | Customer | Fulfillment | Support | Product Mgr | Store Admin | Owner |
|------------|-------|----------|-------------|---------|-------------|-------------|-------|
| Browse catalog | ✅ | ✅ | — | — | — | — | — |
| Checkout / Apple Pay | ✅ | ✅ | — | — | — | — | — |
| Apply promo code | ✅ | ✅ | — | — | — | — | — |
| View own orders | ❌ | ✅ | — | — | — | — | — |
| Admin login | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| View all orders | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Mark packed / shipped | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ |
| Manual delivery / tracking | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |
| Create promo codes | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Edit products / inventory | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Refunds | ❌ | ❌ | ❌ | ✅* | ❌ | ✅ | ✅ |
| Staff management | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

\*Support: partial/refund within policy limit; Owner required above threshold.

### Technical enforcement

| Layer | Responsibility |
|-------|----------------|
| **Appwrite** | Customer auth (email, Sign in with Apple); `profiles.account_status`; optional `staff_users` collection linking to dashboard identity |
| **Medusa Admin** | Native admin users mapped to Girls Girl staff roles |
| **API gateway** | Maps Appwrite JWT → `customer`; rejects admin routes unless staff session + role claim |
| **Admin dashboard** | Separate login (staff SSO or Medusa Admin session); route guards per module |
| **Audit log** | Who changed order status, issued refund, created promo, adjusted inventory |

### Admin dashboard implementation plan

| Phase | Deliverable |
|-------|-------------|
| **2a** | Medusa Admin on `admin.girlsgirlwttb.com`, TLS, MFA, Owner + Store Admin users |
| **2b** | Custom **Orders + Fulfillment** views — manual ship, tracking, packing slip |
| **2c** | **Promotion manager** UI — CRUD promo codes wired to Medusa Promotions API |
| **2d** | Design Studio + Inventory modules |
| **2e** | Role matrix enforced; audit log; Analyst read-only mode |

**Repo note:** Admin dashboard is a **separate web app** (recommended: Next.js admin app or Medusa Admin extensions). It is not part of the current customer-facing prototype in `src/app/` — do not mix staff routes into the public storefront without auth isolation.

### iOS per-user role session & community experience (architecture prompt)

> **Use this block as the canonical Cursor prompt when implementing iOS auth, session state, and community features.**  
> The capability is **not** a single Apple API — it is the combination of three systems working together inside the native app, enforced server-side by the gateway.

#### What we are building

Each user who opens Girls Girl WTTB gets their **own role-bound session** that persists across app launches and shapes the entire in-app experience — what screens they see, what actions they can take, and how they participate in the Girls Girl Club community layer. A Guest browses and checks out without an account. A Customer/Member gets wishlist sync, order history, club badge, and (v1.1+) posting privileges. Staff roles never appear in the consumer iOS app; they use the admin dashboard only.

#### The three architectural pillars

| Pillar | Definition | Girls Girl WTTB application |
|--------|------------|----------------------------|
| **1. Role-Based Access Control (RBAC)** | Security and authorization pattern. Each authenticated session carries a **role claim** (and optional fine-grained permissions). The app and gateway use that claim to decide what data to fetch and what UI/actions to expose. | `guest` → browse, search, bag, guest checkout. `customer` → + wishlist, orders, profile, club badge, notifications. v1.1: `customer` with `can_post` flag after moderation onboarding. Staff roles (`fulfillment`, `support`, `moderator`, etc.) are **admin-dashboard only** — never compiled into consumer app routes. |
| **2. Stateful user session management** | Handles the **active period of use**: issue and refresh tokens, persist login in Keychain, attach role + user id to every API call, recover session on cold start, sign out and revoke. Session state is **per user** — two accounts on one device must not leak cart, wishlist, or community identity. | Appwrite session/JWT stored in **Keychain**; gateway validates JWT on every request and maps `appwrite_user_id` → `medusa_customer_id`. Swift `@Observable` / `@MainActor` session store holds: `authState` (`guest` \| `authenticated`), `userId`, `role`, `displayName`, `avatarUrl`, `clubMemberSince`, `accountStatus`. Refresh token rotation; hard sign-out clears Keychain + local SwiftData cache. |
| **3. Community experience / social graph layer** | Interactive environment where users consume and (v1.1+) create content — curated Style Feed, likes, comments, Shop This Look, report, block — backed by **real-time or near-real-time sync** from Appwrite. | v1.0: read-only curated feed from Appwrite; product tags link to Medusa slugs via gateway. v1.1: authenticated customers post/comment; moderation queue in admin. Social graph edges: `follows` (optional later), `blocks`, `reports`, `likes`. Feed and notifications scoped to **current session user** — blocked users hidden; own posts editable/deletable. |

#### iOS implementation stack (Swift / SwiftUI)

| Concern | Technology | Notes |
|---------|------------|-------|
| UI & navigation | SwiftUI + `NavigationStack` | Tab shell unchanged (Home · Shop · Style · Bag · Profile). Gate tabs/features from session role — e.g. Style “Post” button only when `role == customer && canPost`. |
| Session & auth state | `@Observable` `SessionStore` (or `@MainActor` singleton) | Single source of truth for auth; inject via SwiftUI environment. Never duplicate role in scattered `@AppStorage` flags. |
| Reactive data flow | **Combine** + async/await | Publishers for session changes → refetch wishlist, cart recovery, feed personalization. Prefer structured concurrency over callback chains. |
| Secure persistence | **Keychain** | Appwrite session secret, refresh token. Never UserDefaults for tokens. |
| Local cache | SwiftData or lightweight store | Recently viewed, offline cart draft (guest), cached feed page — keyed by `userId` or `guestSessionId`. |
| Networking | Typed `GatewayClient` | Every request sends `Authorization: Bearer <jwt>` when authenticated. Gateway returns **403** if role insufficient — app shows “Sign in required” or empty state, not crash. |
| Real-time community sync | Appwrite Realtime subscriptions **or** polling | Subscribe to `style_posts`, `comments`, `likes` collections filtered by visibility rules. On v1.0 curated feed, polling every 60s or pull-to-refresh is acceptable. |
| Shared / synchronized group state (optional, v1.2+) | **Group Activities** framework + `GroupSession` | Use only if we add **live shared experiences** (e.g. watch-a-drop countdown together, co-browse a collection). Not required for v1.0 feed. Document as future enhancement. |
| Push & deep links | APNs + Universal Links | Order updates and new-drop pushes tied to `appwrite_user_id`; deep link resolves only after session restore. |

#### Session lifecycle (required behavior)

```
App launch
  → Read Keychain for Appwrite session
  → If valid JWT: refresh if near expiry → fetch profile + role from gateway → SessionStore.authenticated
  → If missing/expired: SessionStore.guest (browse still works)

Sign in (Apple / email)
  → Appwrite creates session → store in Keychain
  → Gateway: ensure Medusa customer exists → return role + club fields
  → SessionStore updates → UI refetches wishlist, orders, personalized feed

Sign out
  → Appwrite delete session → clear Keychain → clear user-scoped SwiftData
  → SessionStore.guest → cart may convert to guest cart via gateway

Account deletion
  → Gateway orchestrates Appwrite + Medusa anonymize/delete → clear local state
```

#### Role → UI capability map (iOS consumer app)

| Capability | Guest | Customer (Member) | Notes |
|------------|-------|-------------------|-------|
| Browse / search / product detail | ✅ | ✅ | No login gate |
| Add to bag / checkout | ✅ | ✅ | Guest checkout supported |
| Apply promo code | ✅ | ✅ | Server validates |
| Wishlist persist across devices | ❌ | ✅ | Prompt sign-in on heart tap |
| Order history / tracking / returns | ❌ | ✅ | Profile tab |
| Girls Girl Club badge | ❌ | ✅ | Profile header |
| Style Feed — view curated posts | ✅ | ✅ | Public read v1.0 |
| Style Feed — like / comment | ❌ | ✅ v1.1 | Requires auth + `account_status == active` |
| Style Feed — create post | ❌ | ✅ v1.1 | After guidelines acceptance |
| Report / block user | ❌ | ✅ v1.1 | Writes to Appwrite `reports` / `blocks` |
| Admin / staff functions | ❌ | ❌ | Dashboard only |

#### Gateway contract (session + role headers)

Every authenticated iOS request:

```http
Authorization: Bearer <appwrite_jwt>
X-Client: ios/1.0
```

Gateway validates JWT, loads `profiles` + optional `staff_users` (staff requests use **separate admin client**, not iOS). Response envelope for session bootstrap:

```json
{
  "userId": "appwrite_user_id",
  "role": "customer",
  "displayName": "Jada B.",
  "username": "jada.b",
  "avatarUrl": "https://cdn.girlsgirlwttb.com/...",
  "clubMemberSince": "2026-01-15T00:00:00Z",
  "accountStatus": "active",
  "medusaCustomerId": "cus_...",
  "permissions": {
    "canPost": false,
    "canComment": false,
    "marketingPushOptIn": true
  }
}
```

Permissions are **server-authoritative**; iOS uses them for UI gates only. Never trust client-side role strings for writes.

#### Cursor implementation prompt (copy when starting iOS auth/community task)

```
Implement Girls Girl WTTB iOS per-user role session with community experience:

1. Create SessionStore (@Observable, @MainActor) as single auth source of truth:
   guest | authenticated(userId, role, profile, permissions).

2. Integrate Appwrite Apple + email auth; persist session in Keychain;
   on launch restore session or default to guest.

3. Add GatewayClient that attaches JWT to all authenticated requests;
   handle 401 → refresh or sign out; handle 403 → role insufficient UI.

4. Bootstrap endpoint GET /v1/me returns role, club fields, permissions.
   Map appwrite_user_id → medusa_customer_id server-side only.

5. Gate Profile, wishlist sync, orders, and v1.1 community actions on
   authenticated customer session. Guest retains full browse + checkout.

6. Style Feed v1.0: read curated posts from gateway/Appwrite; Shop This Look
   deep links to Product. Scope feed with session (hide blocked users v1.1).

7. Use Combine/async-await for reactive refetch on session change.
   Do NOT store Medusa admin tokens or Appwrite server keys in the app.

8. Optional v1.2: evaluate Group Activities / GroupSession only for
   live shared drop experiences — not required for v1.0.

9. Enforce RBAC on gateway for every write; audit log staff actions separately.

Acceptance: two test accounts on one simulator show isolated wishlists/orders;
sign out returns to guest browse; Customer never sees admin routes;
invalid JWT cannot post or view others' private order data.
```

#### Definition of done (iOS session + community)

- [ ] `SessionStore` drives all auth-gated UI; no scattered auth checks
- [ ] Keychain session survives app kill; expired session gracefully becomes guest
- [ ] Gateway `/v1/me` returns role + permissions; iOS never hard-codes staff roles
- [ ] Guest checkout works without account; sign-in merges cart when gateway supports it
- [ ] Customer sees Club badge, orders, wishlist; Guest sees sign-in prompts on those actions
- [ ] Style Feed respects session (v1.0 read-only; v1.1 report/block scoped to user)
- [ ] Sign out and account deletion clear all user-scoped local data
- [ ] No secrets in iOS binary; all community writes go through gateway with JWT

---

## 9. Appwrite data model

Collections: `profiles`, `wishlists`, `style_posts`, `comments`, `likes`, `reports`, `blocks`, `notification_preferences`, `customer_mappings` (server-only: `appwrite_user_id`, `medusa_customer_id`, `stripe_customer_id`).

**Profile fields for member experience:** `display_name`, `username`, `avatar_file_id`, `preferred_size`, `club_member_since`, `account_status` (`active` | `suspended`).

**Staff (server-only):** `staff_users` — `appwrite_or_medusa_user_id`, `role`, `invited_by`, `last_login`, `mfa_enabled`.

## 10. Checkout & payment

**Physical goods → Apple Pay / Stripe cards. Not StoreKit IAP.**

Payment sequence: variant select → availability check → Medusa cart → **optional promo code (server validate)** → address → shipping → tax/total → PaymentIntent → Apple Pay/Sheet → webhook verifies → Medusa order → confirmation + email/push.

**Success screen is not proof of payment.** Only signed Stripe webhook finalizes status.

Never hard-code shipping prices in the **production iOS app** or post-gateway web checkout.

> **Prototype note:** `src/services/product-service.ts` currently uses a mock `$7.95` flat rate and free shipping over `$75` for UI preview only. Remove or replace when the gateway provides real rates.

---

## 11. Style Feed & Apple compliance

**v1.0:** Curated feed only (brand + approved staff). No public customer uploads.

**v1.1:** Customer posting after report, block, moderation dashboard, guidelines, and staff procedures work.

Required UGC controls (before public posting): report post/user, block user, hide post, community guidelines, automated word/media filters, rate limits, audit log.

**Girls Girl Club v1.0:** Free only. No paid digital subscription until Apple payment treatment is reviewed.

---

## 12. Security (summary)

- TLS, firewall, separate credentials, rotating secrets, rate limits, webhook verification, idempotency keys, server-side price/inventory, backups + tested restore
- Dashboard: MFA, RBAC, session expiry, audit log
- iOS: no secret keys, Keychain, no full card/CVV storage

---

## 13. Analytics (event names)

Commerce: `app_opened`, `product_viewed`, `wishlist_added`, `cart_added`, `checkout_started`, `payment_completed`, etc.

Community: `style_feed_viewed`, `post_created`, `post_reported`, `user_blocked`, etc.

---

## 14. Release roadmap

| Phase | Focus | Status |
|-------|-------|--------|
| **0** | Brand, policies, shipping/return rules, inventory source | 🟡 Brand direction reflected in web UI tokens; policies not in repo yet |
| **0.5** | **Web design prototype** (this repo) — responsive 5-tab UI, mock catalog | ✅ Done (`1f38e55`) |
| **1** | DNS/TLS, stabilize Appwrite, Medusa staging, Postgres/Redis, gateway, Stripe test, email, backups | ⬜ Not started |
| **2** | Admin dashboard on `admin.girlsgirlwttb.com` — RBAC, orders, **manual fulfillment**, **promo codes**, Design Studio | ⬜ Not started |
| **3** | iOS shopping (Home → Shop → Product → Wishlist → Bag → checkout → Profile) | ⬜ Not started (web screens exist as reference) |
| **4** | Post-purchase (tracking, push, returns, addresses) | ⬜ Not started |
| **5** | Curated Style Feed + Shop This Look | 🟡 Mock feed in web prototype; production needs Appwrite |
| **6** | Public community (posts, comments, moderation, age controls) | ⬜ v1.1 — correctly disabled in prototype |
| **7** | QA, TestFlight, App Review | ⬜ Not started |

---

## 15. Version 1.0 scope

### Include

Home, Shop, Product, Search/filters, Wishlist, Bag, **promo codes at checkout**, Apple Pay, card checkout, guest checkout, **Customer/Member accounts (Girls Girl Club)**, order history, tracking, returns, push (orders), **curated** Style Feed, Shop This Look, **staff admin dashboard website** (orders, fulfillment, promotions, catalog).

### Delay to v1.1+

Public customer posting, comments, follows, DMs, paid club membership, loyalty, influencer commissions, international shipping, multiple warehouses.

---

## 16. Definition of done (App Store ready)

- [ ] Staff creates complete product from dashboard
- [ ] Staff creates promo code in dashboard; customer redeems at checkout; discount reflected server-side
- [ ] Staff can fulfill order manually (no label) and enter tracking or delivery notes
- [ ] Dashboard roles enforced — Customer cannot access admin; Fulfillment cannot create promos
- [ ] Member sees Girls Girl Club identity in Profile after purchase/sign-up
- [ ] Sizes/colors correct in iOS; unavailable variants unpurchasable
- [ ] Prices cannot be changed from device
- [ ] Apple Pay completes real physical-goods purchase; webhooks finalize orders
- [ ] Orders in Medusa Admin; tracking reaches customer
- [ ] Returns requestable; guest shopping works; account deletion works
- [ ] Privacy disclosures complete; dashboard roles enforced
- [ ] Backups restored successfully in test
- [ ] Report/block work before public posting enabled
- [ ] Accessibility + common iPhone sizes supported
- [ ] App Review account + instructions provided

---

## 17. Immediate implementation order

### Completed in this repo

- [x] **Phase 0.5** — Next.js web prototype with 5-tab navigation and mock catalog (commit `1f38e55`)

### Production track (server + iOS — primary path to App Store)

1. Repair DNS, TLS, unstable Appwrite embedding service
2. Create separate Girls Girl **staging** environment
3. Deploy Medusa v2 + dedicated PostgreSQL + Redis
4. Configure Stripe test mode + Apple Pay
5. Add four initial clothing designs (XS + M variants minimum) in **Medusa**, not mock JSON
6. Deploy **admin dashboard** — Medusa Admin + Orders/Fulfillment + **Promotion manager** + RBAC
7. Create Xcode project `GirlsGirlWTTB/`; connect Shop screen to real Medusa catalog via gateway
8. Build native cart + checkout with **server-side promo validation** (Stripe SDK + webhooks)
9. Add **Customer/Member** account, order history, return functionality (Appwrite + Medusa)
10. Add curated Style Feed (Appwrite; brand-only for v1.0)
11. Complete TestFlight + Apple compliance testing

### Optional parallel track (this repo — web)

- Deploy prototype to Vercel for preview URL
- Add static policy pages
- Connect `/shop` to Medusa Store API when staging is live (step 3–4 above)

---

## 18. Cursor repo conventions (this project)

| Rule | Detail |
|------|--------|
| **Task size** | One-percent tasks only; finish one before starting the next |
| **Dependencies** | If prerequisites missing, stop and build them first |
| **UI** | Match brand tokens in `globals.css`; black + pink, editorial uppercase headings, generous radius |
| **File scope** | Touch only files required for the current task |
| **Models** | Canonical interfaces in `src/models/` only — extend here before services or UI |
| **Mock services** | Seeded deterministic data in `src/services/` only until Medusa/Appwrite connected |
| **Components** | `src/components/` — kebab-case filenames, named exports |
| **Pages** | `src/app/` — App Router; keep client components small (`*-client.tsx` pattern) |
| **No secrets** | Never commit `.env`, API keys, or Stripe/Medusa/Appwrite credentials |
| **Completed task output** | Files changed, what changed, how to verify, acceptance check status |

### Component inventory (web prototype)

| Component | Role |
|-----------|------|
| `app-header.tsx` | Sticky header, logo, notifications, wishlist link |
| `bottom-nav.tsx` | 5-tab nav — mobile bottom / desktop top |
| `brand-logo.tsx` | Girls Girl by Bigg Britt wordmark |
| `hero-carousel.tsx` | Home hero slides (client) |
| `new-drop-banner.tsx` | Pink gradient WTTB promo |
| `product-card.tsx` | Catalog card with swatches |
| `shop-client.tsx` | Search + category filter + grid |
| `product-detail-client.tsx` | Variant pickers, accordions, CTAs |
| `cart-client.tsx` | Bag line items + checkout sidebar |
| `style-client.tsx` | Feed tabs, filters, share input |
| `style-feed-grid.tsx` | Post cards + Shop This Look |
| `trending-looks.tsx` | Circular look links |
| `community-section.tsx` | Home community CTA |
| `section-header.tsx` | Section title + View All |

### Commands

```bash
npm run dev      # Local preview http://localhost:3000
npm run build    # Production build (must pass before deploy)
npm run lint     # ESLint
npm run start    # Serve production build
```

---

## 19. Apple compliance checklist (reference)

- Physical goods → Apple Pay/cards, not IAP
- Full total before payment; official Apple Pay buttons
- Guest browse + guest checkout; in-app account deletion
- Privacy policy, terms, returns, shipping, community guidelines, support URL
- PrivacyInfo.xcprivacy + accurate App Store privacy labels
- Permissions only when feature is used; prefer photo picker over full library
- VoiceOver, Dynamic Type, 44pt targets, contrast, Reduced Motion
- App must exceed “website wrapper” — native Apple Pay, push, wishlist, deep links, offline cart recovery

---

*Last updated: added §8A iOS per-user role session & community architecture prompt (RBAC + stateful sessions + social graph layer) — web prototype on `master`.*
