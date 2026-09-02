> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming
> Status: 🟠 GATED — Cloudflare Monetization Gateway is waitlist. Worker + Solana x402 rail are LIVE. Stripe card SKUs are LIVE.

# Cloudflare charging — money rail

Cloudflare now lets any zone they proxy **charge** via x402 (HTTP 402) and settle in stablecoins. That is the same protocol we already run on **Solana** at [x402.unykorn.org](https://x402.unykorn.org/). This doc is the operator plan to collect money at the edge without giving Cloudflare merchant-of-record control over institutional flow.

## Two products, one protocol

| Product | Status | What it charges | Settlement | Who is merchant |
| --- | --- | --- | --- | --- |
| Pay per crawl | Private beta / available on CF | AI crawlers hitting content | CF merchant of record (card/bank for crawlers) or x402 deferred | Cloudflare |
| Monetization Gateway | Waitlist opened 2026-07-01 | Any page, API, dataset, MCP tool | Stablecoins (USDC / Open USD) over x402, P2P to seller wallet | Seller wallet (us) |
| UnyKorn Solana x402 Worker | 🟢 LIVE | Paid resources on x402.unykorn.org | USDC on Solana | UnyKorn / BitGo receive |
| Genesis X402 (drunks.app) | 🟢 demo + live Polygon receipts | Agentic commerce demo | USDC on Polygon 137 | Genesis contracts |
| Stripe Payment Links | 🟢 LIVE | Human software/ops SKUs | Card via Stripe acct blockchainfraud.org | UnyKorn LLC |

Do not wait on the Gateway waitlist to charge agents. The Solana Worker already speaks 402. Gateway is distribution + edge enforcement across the 300+ domain portfolio.

## Honesty flags

- Public x402 rail is **Solana**, not Apostle 7332, not Unykorn L1 7331.
- BitGo holds keys. `PAY_TO` must be a BitGo-controlled receive address (or a Paxos convert wallet). Never a hot key in wrangler vars committed to git.
- Cloudflare Gateway is **not** GA as of 2026-09-02. AWS CloudFront x402 is already GA. Speed matters.
- Facilitator default `https://x402.org/facilitator` is Coinbase-operated. Institutional flow should verify receipts ourselves and settle into BitGo.
- Software/ops SKUs only. Not brokerage.

## Money split (how cash actually shows up)

1. **Humans** buy playbooks / onboarding → Stripe Payment Links (already live).
2. **Agents** hit paid APIs / MCP tools / intel → x402 402 → USDC to BitGo receive.
3. **Crawlers** on content zones → Pay per crawl (charge) once enabled in CF dashboard.
4. **White-label tenants** → setup + monthly retainer (see FTHTrading/whitelabel COMMERCIAL_PACKAGES) + optional bps on x402 volume.

## Surfaces to gate first

| Priority | Host | What to charge | Price seed | Rail |
| --- | --- | --- | --- | --- |
| 1 | genesis-docs-mcp.kevanbtc.workers.dev | Paid MCP tools beyond catalog | $0.05–$0.50 / tool | Solana x402 |
| 2 | x402.unykorn.org | Premium routes already on the Worker | existing | Solana x402 |
| 3 | xxxiii.io / GMIIE | Rings / Oracle / daemon pulls | $0.10 snapshot, $1.00 ring pack | Solana or Polygon |
| 4 | mint.unykorn.org | Order-intake + IPFS doc pack | $5.00 intake, $25 proof pack | Solana x402 + Stripe for humans |
| 5 | Content / portfolio zones on CF | Pay per crawl | $0.01–$0.05 / page | CF crawl + x402 |
| 6 | drunks.app | Keep demo free; charge production agent SKUs | catalog | Polygon USDC |

## Operator actions (this week)

1. Submit Monetization Gateway waitlist — answers in `money/WAITLIST.md`.
2. Enable Pay per crawl = Charge on content zones that are already orange-clouded.
3. Drop BitGo Polygon + Solana USDC receive addresses into wrangler secrets (never commit).
4. Deploy `money/` Worker as `unykorn-x402-catalog` and point a hostname (suggested: `pay.unykorn.org` or `pay.genesis402.com`).
5. Dual-price every existing Stripe SKU so an agent can buy the same product over x402.
6. Log inbound USDC vs CF spend in `money/x402-revenue-ledger.xlsx`.

## Feature requests to send Cloudflare

- Polygon + Solana settlement destinations (not Base-only).
- Pay-to address = BitGo / Paxos custody wallets.
- Receipt export (tx hash, payer, resource, amount) for institutional audit packs.
- Multi-tenant / white-label pricing rules.
- Variable / `upto` pricing for compute-heavy MCP tools.

## Sources

- https://blog.cloudflare.com/monetization-gateway/
- https://blog.cloudflare.com/introducing-pay-per-crawl/
- https://developers.cloudflare.com/agents/agentic-payments/x402/
- https://docs.google.com/forms/d/e/1FAIpQLSfq6yaIgp57FCGFg7riXlSWTeD8d8Adur2c8tWaKY4SuzweiQ/viewform
