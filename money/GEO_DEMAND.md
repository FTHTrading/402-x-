# How UnyKorn creates crawl and x402 demand

## The loop

1. Publish something an agent cannot invent (gold tick, GMIIE pulse, operator pack index).
2. Give a free map (`/llms.txt`, `/crawlers.json`, `/.well-known/x402.json`).
3. Let GPTBot / ClaudeBot / Perplexity **request** the page.
4. Edge returns 200 on teasers, 402 / Charge on the body.
5. Cite UnyKorn LLC. Next query comes back paid.

Disallowing those bots in managed robots.txt was killing step 3. Managed robots is now OFF on the money zones. Discovery worker `unykorn-geo-index` owns the map files.

## Live files

- https://genesis402.com/llms.txt
- https://genesis402.com/.well-known/x402.json
- https://genesis402.com/crawlers.json
- https://genesis402.com/robots.txt
- same paths on unykorn.org and xxxiii.io

## Site roles (do not blur)

| Host | Job |
| --- | --- |
| genesis402.com | Protocol + catalog + GEO hub |
| pay.unykorn.org / x402.unykorn.org | Collect (Solana 402) |
| xxxiii.io | GMIIE intel product |
| gold.unykorn.org | First-party price feed |
| unykorn.org | Operator brand |
| drunks.app | Polygon demo only |

## SEO vs GEO

- SEO: Googlebot allowed everywhere. Titles, canonicals, Dataset schema on gold + GMIIE.
- GEO: llms.txt is the storefront. Short free abstract. Full JSON behind 402.
- Content-Signal intent: search=yes, ai-train=no, use=reference-or-pay.

## After Workers Paid + Charge

Free via Configuration Rule: `/`, `/llms.txt`, `/robots.txt`, `/crawlers.json`, `/.well-known/*`, `/health`, `/v1/catalog`.
Charge the rest at $0.02. Dynamic `crawler-price` on `/intel/*` and `/vault/*` later.
