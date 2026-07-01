# AGENTS.md

Project-level instructions and durable memory for Codex agents working in this repository.

## Project Memory

- Add stable, project-specific facts here when they would materially help future agents work safely or faster.
- Prefer concise, verified facts over narrative notes.
- Do not record secrets, transient command output, speculative conclusions, or information already obvious from nearby source files.

## Commands

- `npm run dev` starts the Next.js development server.
- `npm run build` builds the production site.

## Architecture Notes

- This repository is the standalone official website for the Memory Trails ecosystem.
- The initial site was migrated from sibling repository `Chrome-Plguin/Where-Was-I`, where it previously lived at `apps/site`.
- Product and ecosystem metadata lives in `src/lib/products.ts` so the site does not depend on product repositories.
- The homepage is an English-first ecosystem landing page that highlights `How Did I Get Here?` as the newest product and `Where Was I?` as the companion reading-continuity tool.
- `How Did I Get Here?` homepage assets are copied into `public/product/how-did-i-get-here/`; do not reference the sibling product repository directly from site code.
- `Where Was I?` has a Chrome Web Store listing at `https://chromewebstore.google.com/detail/where-was-i/ajmchpcbddhiocgkpflniinmemfplhjj`.

## Conventions

- Keep product repositories independent from this site; add product-facing website data to `src/lib/products.ts` instead of importing from sibling repos.
- Current ecosystem positioning has no paid content, subscription, Pro plan, or checkout flow.

## Open Questions

- Confirm the final public domain and replace legacy `where-was-i-site.vercel.app` references when ready.
