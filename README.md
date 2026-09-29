# FreshDash AI Grocer

Build "FreshDash", an AI-powered smart grocery delivery web app with a 10-minute quick-commerce feel. Take visual and UX inspiration from Blinkit (dense product grid, yellow/green energy, speed), Swiggy Instamart (clean cards, category rails, bold promos) and Zomato (rounded surfaces, friendly microcopy, strong hierarchy). Do NOT copy their logos, names or assets. Make it original, polished and premium.

## Tech

- Tailwind CSS for all styling. Keep JS logic simple and framework-light (small modules, no heavy state libraries; plain hooks/context or a tiny store is fine).

- Mobile-first, fully responsive (360px to 1440px+). Frontend only, no backend. Use realistic mock data in /data files.

- All "AI" features go through ONE service file (/services/ai.js) exposing async functions with fake latency (600-1200ms) and deterministic mock results, so a real LLM API can replace it later without UI changes.

## Design system

- Primary: vibrant green #0C831F-ish with a warm yellow accent #F8CB46. Neutral surfaces #FFFFFF / #F7F8FA. Text #1C1C1C / #6B7280. Danger #E23744. Define these as Tailwind theme tokens.

- Font: Plus Jakarta Sans (or Inter) via Google Fonts. Large, confident headings; tight, readable body.

- Radius: 16px cards, 999px chips/buttons. Soft layered shadows, no harsh borders.

- Support light theme fully; dark mode is a bonus.

- Emoji or clean SVG icons only. Product images: use Unsplash URLs or gradient placeholders with emoji, with skeleton loaders and graceful fallbacks.

## Layout and pages

1. **Sticky header**: logo, delivery badge ("Delivery in 9 minutes" with a pulsing dot), location selector (dropdown with saved addresses), large search bar (centered on desktop, full width below on mobile), login button, animated cart button with live item count and total.

2. **Hero**: rotating promo carousel (3 slides, auto-play, swipe on mobile, dot indicators) plus a prominent "Ask FreshDash AI" input card beside or below it.

3. **Category rail**: horizontally scrollable circular icons (Fruits and Veg, Dairy, Snacks, Beverages, Bakery, Meat and Fish, Household, Baby, Pet, Personal Care). Active state with an underline slide animation.

4. **Product sections**: "Order again", "Trending near you", "Deals under 99", "Because you like [X]" (AI-flavored). Each is a horizontal scroll rail with snap scrolling and prev/next arrows on desktop.

5. **Product card**: image, delivery-time chip, name, weight/unit, price, strike-through MRP, discount ribbon, and an ADD button that morphs into a "- 1 +" stepper with a small bounce. Out-of-stock cards are greyed with "Notify me".

6. **Category / search results page**: left sidebar filters on desktop (category, price range slider, brand, diet: veg/vegan/gluten-free, rating), bottom-sheet filters on mobile, sort dropdown, responsive grid (2 cols mobile, 4-6 desktop), infinite scroll or "Load more".

7. **Product detail modal**: image gallery, description, nutrition info, unit variants, "Similar items" rail and an AI "Healthier swap" suggestion.

8. **Cart drawer** (slides in from the right, bottom sheet on mobile): item list with steppers, free-delivery progress bar ("Add Rs 40 more for free delivery"), coupon input, bill summary (items, delivery, handling, savings), sticky "Proceed to pay" button, empty state illustration.

9. **Checkout page**: address form, delivery slot (Now / Schedule), payment options (UPI, card, COD as a mock UI), order summary, a success screen with a confetti animation.

10. **Order tracking page**: animated progress stepper (Confirmed, Packing, Out for delivery, Arrived), a fake map panel with a moving rider dot, and ETA countdown.

11. **Footer**: links, app-download badges (placeholder), social icons.

## AI features (mock-powered, but must feel real)

1. **Natural-language search**: "ingredients for paneer butter masala for 4" or "healthy breakfast under 300" returns a structured result: interpreted intent chips, a matched product list, and an "Add all to cart" button.

2. **Recipe to cart**: the user types a dish, the AI shows ingredients with adjustable servings, marks items already in the cart, and offers one-tap add-all.

3. **Smart substitutions**: when an item is out of stock, show "AI suggests" alternatives with a reason ("Same brand, 50g larger, Rs 3 cheaper").

4. **Budget mode**: a toggle with a budget input; the AI suggests cart tweaks to stay under budget and highlights savings.

5. **Predictive reorder**: an "Running low?" banner based on mock purchase history ("You usually buy milk every 3 days").

6. **AI chat assistant**: a floating button opens a chat panel with typing indicator, streaming-style text reveal, suggestion chips ("Plan my week's groceries", "Quick dinner ideas"), and product cards inline in chat messages with ADD buttons.

Label AI outputs subtly with a sparkle icon and show a shimmer/skeleton while "thinking".

## Animations (tasteful, 60fps, respect prefers-reduced-motion)

- Page-load: staggered fade-up for hero and rails.

- Product cards: lift + shadow on hover, image zoom 1.05.

- ADD to stepper morph; cart icon bump and a small "fly to cart" dot animation when adding.

- Cart drawer: spring slide-in with a backdrop blur fade.

- Header shrinks and gains a shadow on scroll.

- Skeleton shimmer loaders on every async section.

- Number counters tick smoothly for totals.

- Promo carousel: smooth crossfade/slide; AI input has a gentle animated gradient border.

- Success screen: confetti; tracking rider dot moves along a path.

- Use transform/opacity only; no layout-thrashing animations.

## State and data

- Cart, address, budget mode and theme persisted to localStorage.

- Product model: id, name, brand, category, unit, price, mrp, rating, tags (veg, vegan, gluten-free), stock, image, nutrition.

- Seed at least 60 products across 10 categories, 6 recipes, 3 coupons (e.g. FIRST50, FREEDEL, SAVE20).

## Quality bar

- Accessible: semantic HTML, focus rings, ARIA on drawer/modal/carousel, keyboard navigable, 4.5:1 contrast.

- Lighthouse-friendly: lazy-load images, explicit image sizes, no layout shift.

- Clean file structure: /components, /pages, /data, /services, /utils. Small, reusable components, no giant files.

- Microcopy should be warm and short ("Fresh in 9 mins", "Your basket is feeling light").

## Build order

First scaffold the design system, header, hero, category rail, product card and cart drawer. Then search results, product modal and checkout. Then the AI features and tracking page. Ask me before adding any backend, auth or payment integration.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bfda8253-9b00-5176-b1e2-d63226a2725a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
