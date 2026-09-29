# FreshDash implementation plan

## Goal
Build a polished, mobile-first smart grocery storefront at `/` with mock data, locally persisted shopping state, and deterministic mock AI behavior. No backend, authentication, or live payment integration will be added.

## Phase 1 — Shopping foundation
- Create the FreshDash design system in Tailwind with semantic green, yellow, neutral, danger, typography, shadows, radii, focus states, and reduced-motion behavior.
- Add reusable app state for cart, address, budget mode, and theme persistence in the browser.
- Seed at least 60 grocery products across 10 categories, plus recipes, coupons, addresses, promotions, and reorder history in dedicated data modules.
- Build the responsive sticky header, address menu, delivery badge, search, animated cart summary, rotating/swipeable promo area, FreshDash AI prompt, category rail, product rails, product cards, and responsive cart drawer.
- Add skeletons, image fallbacks, snap scrolling, keyboard controls, product quantity transitions, and cart feedback.

## Phase 2 — Browse and purchase flows
- Add a dedicated category/search results page with desktop filters, mobile filter sheet, sorting, responsive product grid, and load-more behavior.
- Add an accessible product details dialog with gallery, variants, nutrition, similar items, and healthier-swap panel.
- Add checkout with address form, delivery timing, mock payment choices, order summary, coupon handling, and an animated success state.
- Add the shared footer and ensure every page has unique metadata.

## Phase 3 — Mock AI and tracking
- Create one AI service module with 600–1200 ms fake latency and deterministic results for natural-language search, recipe ingredients, substitutions, budget suggestions, predictive reorder, healthier swaps, and chat.
- Build structured AI search results, recipe-to-cart servings, stock substitutions, budget mode, and the running-low prompt.
- Build one browser-persisted AI conversation using AI chat primitives, typing and streaming-style feedback, suggestion chips, and inline product cards.
- Add an order tracking page with animated milestones, a mock map, rider movement, and ETA countdown.

## Validation
- Verify the complete flow at desktop and 360 px mobile widths: browse, add and adjust products, inspect details, search/filter, use AI results, review cart, apply coupon, complete checkout, and open tracking.
- Check keyboard navigation, accessible names, dialog/drawer focus behavior, contrast, reduced motion, image dimensions, lazy loading, and layout stability.
- Run lint and rely on the preview build checks; resolve current build, runtime, and console errors before completion.

## Technical details
- TanStack Start routes and React hooks/context; no heavy state library.
- Tailwind CSS v4 semantic tokens defined centrally; Plus Jakarta Sans loaded through the document head.
- Radix/shadcn primitives for menus, dialogs, sheets, sliders, selects, and other controls.
- Product and recipe data remain static modules; browser storage is the only persistence layer.
- The AI service boundary stays UI-compatible with a future real model, but no server or credentials are introduced now.
