# What the live systems can charge — 2026-09-02

Traffic window from the kevanbtc@gmail.com dashboard: **4.72M requests**, **740.93k Worker invocations**, **23.96k errors**.

## Rails that can take money TODAY

| Surface | Status | What it charges |
| --- | --- | --- |
| pay.unykorn.org / x402.unykorn.org | LIVE Solana mainnet, 80,821 invocations, 0 errors | HTTP 402 on /v1/catalog and paid paths. PRICE_SOL=0.001 |
| genesis-docs-mcp Stripe links | LIVE cards | $99 / $249 / $750 / $1,500 / $2,500 human SKUs |
| gold.unykorn.org/api/spot | LIVE 200 | Quote rail — desk SKUs not metered yet |
| drunks.app | LIVE demo | Polygon x402 genesis demo, not BitGo cash |
| paid.unykorn.org | LIVE 402 | Apostle 7332 stub — do not book |

## Rails that need a click before they print

| Surface | Blocker | Upside on THIS traffic |
| --- | --- | --- |
| Pay-per-crawl Charge | $38.94 open CF invoice + Workers Paid $5 + dashboard Charge | 1–5% of 4.72M × $0.02 = **$944–$4,720 / window** |
| KV receipt log | Free tier 1,000 writes/day already blown | Without this, x402 402s fire but receipts drop |
| White-label Edge Pack | Sales | **$7,500 + $750/mo** per tenant |

## Error burn that is NOT the money path

doc-api 8,835 throws (api.doc.unykorn.org has no universal SSL — multi-level host). donkai-remembrance-museum 5,596. heliosdigital-xyz-portal 2,771. troptions exceededMemory 1,075. xxxiii-gmiie resource limits 328.

Money workers (x402-edge, x402-proxy, paid-api, genesis-docs-mcp, gold-*) are clean.
