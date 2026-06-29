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

## Conventions

- Keep product repositories independent from this site; add product-facing website data to `src/lib/products.ts` instead of importing from sibling repos.

## Open Questions

- Confirm the final public domain and replace legacy `where-was-i-site.vercel.app` references when ready.
