> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# System map

Genesis Docs OS is the single operator documentation location for the Unykorn capital stack. Surfaces below are tagged so agents and humans never confuse a live console with a stub.

## Status legend

| Flag | Meaning |
| --- | --- |
| **LIVE** | Public endpoint or product surface is reachable and intended for operators |
| **STUB** | Local or placeholder implementation; not a production public rail |
| **TBD** | Address, RPC, or deploy artifact not yet published |
| **UNAUDITED** | Contracts compile and ship shape; no external security audit |
| **MISSING** | Public GitHub path 404; product exists as local/operator console |
| **GATED** | Requires env keys or operator onboarding before live use |

## Stack

| System | Status | URL / note |
| --- | --- | --- |
| Genesis402 console | LIVE | https://genesis402.com — operator console |
| x402 Solana Worker rail | LIVE | https://x402.unykorn.org — Solana HTTP 402 |
| Genesis Docs OS (this portal) | LIVE | https://dev.genesis402.com — Cloudflare Pages `dev-portal-unykorn` (also `dev-portal-unykorn.pages.dev`, `dev.donkai.org`) |
| Smart Contract Builder docs | LIVE | https://smartcontract.unykorn.ai — **GitHub Pages** from `smart-contract-builder/docs` (workflow `pages.yml` on main); also `fthtrading.github.io/smart-contract-builder`. Not Cloudflare Pages. |
| Broker-Dealer UI | LIVE | https://brokerdealer.unykorn.org and https://broker.unykorn.ai |
| System mint console | LIVE | https://mint.unykorn.org |
| TROPTIONS Exchange OS | LIVE | https://troptions.unykorn.org/exchange-os |
| Apostle chain 7332 | STUB | https://apostle.unykorn.org — LOCAL_STUB (local Node stub) |
| Unykorn L1 chain 7331 | TBD | Public RPC not restored |
| DAO contract addresses | TBD | GovToken / Timelock / DAO — deploy via Remix or Foundry |
| Unykorn Studio | MISSING | Local/operator Next.js console on :3200. Public `github.com/FTHTrading/unykorn-studio` is **404**. Do not invent a repo. Studio drives contracts; keys via BitGo `sign_external`. |
| RWA Solidity library | UNAUDITED | https://github.com/FTHTrading/smart-contract-builder — 0.8.24 / paris / optimizer 200 / MIT |
| Stripe commerce API | GATED | `POST /api/checkout` returns actionable 503 JSON until `STRIPE_SECRET_KEY` + `PRICE_*` set |

## Merged sources

| Source | Hosting | Role |
| --- | --- | --- |
| https://dev.genesis402.com | Cloudflare Pages project `dev-portal-unykorn` | Technical reference / DAO / mint catalog (source tree not on disk — catalog rebuilt here) |
| https://smartcontract.unykorn.ai | GitHub Pages (`FTHTrading/smart-contract-builder`) | RWA contract library documentation |

## Adjacent operator surfaces (reference)

These are not vendored into this repo; operators may already run them locally:

| Surface | Role |
| --- | --- |
| mint console | Solana system mint (Vercel-shaped deploy path) |
| capital stack | capital.unykorn.ai |
| broker UI | Broker-dealer front end |
| BitGo webhook | Custody event ingress |
| MCP hub | Adjacent agent tooling; this portal ships its own Worker MCP |

## Entity

**UnyKorn LLC · Wyoming.** Public operator docs — no INTERNAL badge without auth.
