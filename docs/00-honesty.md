> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# Honesty & status legend

This portal prefers an awkward truth over a polished fiction.

## Flags

| Flag | Use when |
| --- | --- |
| LIVE | You can hit the URL and the product intent matches the docs |
| STUB | Implementation is local/placeholder (e.g. Apostle 7332 Node stub) |
| TBD | Deploy addresses or public RPC are not published yet |
| UNAUDITED | Code ships; external audit has not |
| MISSING | Public GitHub is 404 even if a local console exists |
| GATED | Feature needs secrets/onboarding (Stripe keys, BitGo enterprise setup) |

## Hard rules for contributors and agents

1. **Do not invent** enterprise IDs, wallet IDs, tickets, personal names, balances, TVL, or revenue.
2. **Do not claim** Unykorn issues PAXG or is a Paxos partner — document product-shape compatibility only.
3. **Never conflate** Cantor Fitzgerald CRE with Canton Network.
4. **Do not invent licenses** for broker-dealer / MSB / MTL. Licensed BD is deliberate, not default.
5. **Studio**: document as local/operator console. Public GitHub 404 is status MISSING, not "product doesn't exist".
6. **DAO addresses**: leave TBD until real deploy; no fake proposal tables.
7. **Contracts**: link to GitHub; do not vendor all Solidity into this docs repo.

## Agent value loop

Operator asks → MCP tools read this honesty-flagged index → agent cites LIVE vs STUB → operator acts in Studio / BitGo / DAO rails → receipts and these docs remain source of truth.
