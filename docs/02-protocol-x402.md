> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# Protocol — console & rails

## Genesis402 console — LIVE

| Field | Value |
| --- | --- |
| URL | https://genesis402.com |
| Role | Primary operator console for the Unykorn capital stack |
| Status | LIVE |

## x402 Solana Worker rail — LIVE

| Field | Value |
| --- | --- |
| URL | https://x402.unykorn.org |
| Role | Solana HTTP 402 payment / access rail |
| Status | LIVE |

## Documentation targets — LIVE

| Surface | URL | Hosting |
| --- | --- | --- |
| This portal | https://dev.genesis402.com | Cloudflare Pages `dev-portal-unykorn` |
| Alias | https://dev-portal-unykorn.pages.dev | Same Pages project |
| Alias | https://dev.donkai.org | Custom domain on same project |
| RWA library docs | https://smartcontract.unykorn.ai | GitHub Pages (not Cloudflare) |

## Chains

| Chain | ID | Status | Note |
| --- | --- | --- | --- |
| Unykorn L1 | 7331 | TBD | Public RPC not restored |
| Apostle | 7332 | STUB | LOCAL_STUB — local Node stub at apostle.unykorn.org |

## Mint & TROPTIONS — LIVE

| Surface | URL | Role |
| --- | --- | --- |
| System mint | https://mint.unykorn.org | Mint SPL tokens for Unykorn systems (Phantom / Solflare) |
| TROPTIONS Exchange OS | https://troptions.unykorn.org/exchange-os | XRPL order books + AMM; guided token launch with proof packets |

DAO mint authorization flows from EVM Governor → mint.unykorn.org (Solana) and listing approvals → TROPTIONS.

## Unykorn Studio — MISSING (public repo) / local product

Studio is the console that drives RWA contracts through an approval-per-step executor with **SHA-256 hash-chained receipts** for every state transition.

| Fact | Detail |
| --- | --- |
| Runtime | Local/operator Next.js app (default :3200) |
| Public GitHub | https://github.com/FTHTrading/unykorn-studio → **404** |
| Status flag | MISSING (for the public repo) — product is not "absent"; it is not published on GitHub |
| Keys | Studio uses `sign_external` — **BitGo holds keys; Unykorn never does** |
| Receipts | Operators can verify the hash chain via Studio's receipts API when running locally |

Do **not** invent a public Studio repository URL.

## Capital stack context

DIGAU and related capital-stack protocols appear in DAO proposal templates (voting over BD protocol surfaces). Capital stack product surfaces (e.g. capital.unykorn.ai) are adjacent; this portal documents the operator map and RWA/DAO/custody rails.
