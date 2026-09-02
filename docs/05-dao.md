> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# DAO governance

Source specification: [evm_dao_governance.md](https://dev.genesis402.com/docs/evm_dao_governance.md) on the live technical reference.

## Overview

| Field | Value |
| --- | --- |
| DAO name | Unykorn Sovereign DAO |
| Framework | OpenZeppelin Governor **5.6.0** |
| Token | **UNYG** — Unykorn Governance, ERC20Votes |
| Supply | 100,000,000 UNYG · 18 decimals |
| Primary chain | Polygon PoS |
| Timelock | 24 hours (86,400 seconds) |
| Addresses | **TBD** — no fake addresses in this portal |

Governs mint authorization, treasury allocation, DEX listing approvals, protocol parameters, and system onboarding. Execution is on-chain via TimelockController.

## Parameters

| Parameter | Value | Notes |
| --- | --- | --- |
| Voting delay | 7,200 blocks | ≈ 4 hours on Polygon (~2s blocks) |
| Voting period | 50,400 blocks | ≈ 28 hours |
| Quorum | 4% | Of total UNYG supply at snapshot |
| Proposal threshold | 0 UNYG | Anyone can propose (raise after launch) |
| Timelock delay | 86,400 s | 24h execution delay |

## Deploy order

1. **GovToken** — `UnykornGovToken(deployer)`
2. **Timelock** — `TimelockController(86400, [temp_proposer], [0x0], deployer)`
3. **DAO** — `UnykornDAO(token, timelock)`
4. **Roles** — grant `PROPOSER_ROLE` to DAO; grant `EXECUTOR_ROLE` to `0x0`; renounce timelock admin
5. **transferOwnership** — token ownership → timelock

CTAs:

| Action | URL |
| --- | --- |
| Remix | https://remix.ethereum.org |
| Mint system tokens | https://mint.unykorn.org |
| TROPTIONS Exchange OS | https://troptions.unykorn.org/exchange-os |
| Register on Tally | https://www.tally.xyz/add-a-dao |

## Contract addresses

| Contract | Chain | Address |
| --- | --- | --- |
| UnykornGovToken (UNYG) | Polygon | TBD |
| TimelockController | Polygon | TBD |
| UnykornDAO | Polygon | TBD |
| UnykornGovToken (UNYG) | Base | TBD |
| UnykornDAO | Base | TBD |

Update this table only after a real Remix or Foundry deploy. **No fake proposal table.**

## Governance flow (summary)

1. Hold UNYG and **delegate** (self-delegate common) to activate votes.
2. `propose` / `proposeMint` / `proposeDexListing`.
3. After voting delay, `castVote` (0 against / 1 for / 2 abstain).
4. On success: `queue` → wait 24h → `execute`.

## DIGAU note

DAO proposal templates reference **DIGAU** as voting over the DIGAU Broker-Dealer protocol surface at brokerdealer.unykorn.org. That is a governance template relationship — not an invented license claim.

## Recommended UNYG distribution (from spec)

| Bucket | Amount | Notes |
| --- | --- | --- |
| DAO Treasury (Timelock) | 60M (60%) | Controlled by governance |
| Team / Founders | 15M (15%) | 2-year vesting |
| Community / Airdrop | 15M (15%) | Ecosystem participants |
| Advisors / Partners | 5M (5%) | 1-year cliff + 1-year vest |
| Reserve | 5M (5%) | Protocol reserve |
