> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# Stablecoins — Paxos / USDF / PoR

There is **no local Paxos partnership folder** in this monorepo. This page documents public product shape and how Unykorn contracts compose with PoR patterns.

## Hard honesty

| Claim | Allowed? |
| --- | --- |
| Unykorn issues PAXG | **No** |
| Unykorn is a Paxos partner | **Not claimed here** |
| GoldBackedToken is PAXG-shaped | **Yes** — product-shape compatibility |
| Physical redemption is off-chain | **Yes** |

## PAXG (Paxos — public product facts)

From Paxos public docs:

| Fact | Detail |
| --- | --- |
| Issuer | Paxos (trust / OCC-related public posture for Paxos entities — verify on paxos.com) |
| Backing | Each PAXG represents **one fine troy ounce** of London Good Delivery gold in LBMA-accredited vaults |
| Redeemability | Redeemable through Paxos rails for physical / unallocated gold or USD per their product terms |
| Transparency | Monthly reserve / attestation reporting published by Paxos |

Official: [docs.paxos.com PAXG](https://docs.paxos.com/guides/stablecoin/paxg), [paxos.com/pax-gold](https://www.paxos.com/pax-gold).

## Unykorn GoldBackedToken (PAXG-shape) — SHIPPED / UNAUDITED

| Field | Value |
| --- | --- |
| Contract | GoldBackedToken |
| Peg shape | 1 token = 1 troy oz LBMA-shape gold (4 decimals) |
| Mint gate | ProofOfReserveConsumer circuit breaker |
| Redemption | Burn on-chain; physical shipment fulfilled **off-chain** by reserve manager |
| Source | [smart-contract-builder](https://github.com/FTHTrading/smart-contract-builder) |

This is an Unykorn library shape for commodity RWA workflows. It is **not** PAXG.

## USDP-class USD vs Unykorn USDF

| Asset | Role in this portal |
| --- | --- |
| USDP (Paxos Dollar) | Public USD stablecoin product from Paxos — cash / cash-equivalent reserve model per Paxos disclosures |
| USDF (Unykorn) | Unykorn stack USD-oriented stable / settlement design referenced in protocol docs — **do not equate** USDF with USDP or claim Paxos issuance |

Treat them as **separate** instruments. Compatibility discussions belong in deal memos, not as issuer identity claims.

## Proof of Reserve circuit breaker

| Contract | Role |
| --- | --- |
| ProofOfReserveConsumer | Reads a Chainlink PoR feed; `requireCanMint` reverts with `InsufficientReserves` when over-collateral threshold is breached |
| Composes with | GoldBackedToken, TokenizedTreasury mint paths |

Safety checks include feed staleness, negative-answer rejection, incomplete-round rejection, and configurable over-collateralization bps.

## Operator checklist

1. Decide whether the deal uses **external** PAXG/USDP rails or **Unykorn** GoldBackedToken/USDF-shaped rails.
2. Never market Unykorn tokens as Paxos-issued.
3. Wire PoR feeds before enabling mint in Studio.
4. Keep physical redemption SOPs off-chain with counsel and vault operators.
