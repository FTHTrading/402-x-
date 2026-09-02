# UnyKorn x402 money pack

Brand: **UnyKorn LLC** only. Software/ops services. Not brokerage.

This folder is the collection layer on top of rails that are already live:

| Rail | URL | Status |
| --- | --- | --- |
| Solana x402 Worker | https://x402.unykorn.org | LIVE |
| Genesis Polygon demo | https://drunks.app | LIVE receipts / demo UI |
| Stripe humans | https://dev.genesis402.com/commerce/stripe/ | LIVE Payment Links |
| MCP | https://genesis-docs-mcp.kevanbtc.workers.dev/mcp | LIVE |
| Cloudflare Monetization Gateway | waitlist | GATED |
| Pay per crawl | CF dashboard | enable Charge this week |

## Files

- `WAITLIST.md` — paste into the Cloudflare form today
- `SKU_CATALOG.json` — dual-rail prices (card + 402)
- `src/index.ts` + `wrangler.jsonc` — catalog Worker that returns HTTP 402
- `DEPLOY.md` — wrangler + DNS
- `x402-revenue-ledger.xlsx` — keep local / artifacts; do not commit secrets

## Hard gate

Do not advertise mainnet settle until BitGo Solana + Polygon USDC receive addresses replace the `REPLACE_WITH_BITGO_*` placeholders. Keys stay at BitGo.
