> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# Custody — BitGo architecture

> **Architecture documentation, not a live console.**  
> Never invent enterprise IDs, wallet IDs, tickets, personal names, balances, TVL, or revenue.

## Why BitGo appears in the Unykorn stack

BitGo provides institutional digital-asset custody and financing rails that Unykorn deal ops compose with on-chain RWA evidence (e.g. DrawEscrow waiver hashes). Public BitGo posture (as of 2026):

| Topic | Public fact |
| --- | --- |
| Charter | BitGo Bank & Trust, N.A. — federally chartered national trust bank under **OCC** supervision |
| Go Account | Multi-asset regulated custody wallet; entry point to trade, finance, settle, allocate while assets remain in qualified custody |
| Prime financing | On-platform borrowing/lending and portfolio-based financing against eligible Go Account holdings (liquid, locked, staked — subject to product terms) |
| Controls | Multi-signature / policy controls, segregated client accounts, institutional operational framework |
| Lending / CaaS | Documented at architecture level only in this portal — no invented program IDs |

Official references: [bitgo.com](https://www.bitgo.com), Go Accounts resource center, BitGo Trust Center.

## Unykorn integration posture

| Concern | Operator rule |
| --- | --- |
| Keys | **BitGo holds keys.** Unykorn Studio uses `sign_external` and never holds testnet or mainnet keys. |
| Evidence vs custody | DrawEscrow stores waiver/milestone evidence on-chain; BitGo vaults hold the capital. Georgia statutory waiver remains the operative legal form. |
| Reporting | Live custody reporting to funders/sponsors — without inventing balances in docs or agent output |
| This portal | Describes architecture and the 9-step deal-ops playbook. It is **not** a BitGo admin UI. |

## Nine-step deal ops

| Step | Name | Operator detail |
| --- | --- | --- |
| 1 | Intake | Deal memo, asset class, jurisdiction, desired rail (draw escrow, inventory SPV, CMBS waterfall, etc.) |
| 2 | KYB | Entity KYB for SPV / sponsor / funder counterparties along BitGo onboarding path |
| 3 | Deal vault | Segregated Go Account / deal vault under OCC-chartered custody posture |
| 4 | Fund | Funder wires or crypto-funds vault; outbound gated by policies |
| 5 | Milestone + waiver draws | Atomic draw releases coupled to DrawEscrow lien-waiver **evidence** (statutory form remains off-chain operative) |
| 6 | Reporting | Live reporting to funder / sponsor |
| 7 | Waterfall / repay | Distribute NOI / principal via contract waterfall; record repayments |
| 8 | Audit | Hash-chained Studio receipts + custodian statements for counsel |
| 9 | Close | Final distribution, vault wind-down, archive receipts |

## Why funders care

| Benefit | Description |
| --- | --- |
| Segregated custody | Assets held under qualified custodian posture, not mixed with operator hot wallets |
| Atomic draws vs evidence | Capital release can be coupled to on-chain waiver/milestone evidence without pretending the chain replaces the statute |
| Multi-sig / policies | Institutional controls on who can move funds |
| Live reporting | Operational visibility without inventing TVL narratives in marketing docs |

## Counterparties (conceptual)

Deal path typically involves: **sponsor / SPV → Unykorn structuring + Studio receipts → licensed placement when required → BitGo custody → funder (Cantor Fitzgerald CRE or others)**. See [Broker-Dealer](/broker-dealer/posture/) and [Cantor vs Canton](/markets/cantor/).

## Commerce note

"BitGo deal-ops onboarding" in the [Stripe catalog](/commerce/stripe/) is a **technical fee** for architecture onboarding — **not** custody and not a BitGo product sale.
