> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# Markets — Cantor Fitzgerald vs Canton Network

## Never conflate

| Thing | What it is | What it is not |
| --- | --- | --- |
| **Cantor Fitzgerald CRE** | Commercial real estate capital markets / conduit and senior financing relationships | A web form or an on-chain DLT |
| **Canton Network** | Institutional DLT / participant network | Cantor Fitzgerald's CRE desk |

If an agent or memo mixes these names, stop and correct it.

---

## 1. Cantor Fitzgerald CRE (funder rail)

| Field | Operator guidance |
| --- | --- |
| Firm | Cantor Fitzgerald / Cantor Commercial Real Estate lending platforms |
| URL | https://www.cantor.com |
| Shape | Conduit + high-yield **senior** roughly **$15–100M** (deal-dependent; not a guarantee) |
| Access | **Relationship / broker packaging** — not a public web application form |
| Peer set | Starwood, Ladder, Benefit Street (illustrative peer set for CRE senior/conduit conversations) |

### Package checklist

Bring a complete package before any introduction:

| Item | Purpose |
| --- | --- |
| Deal memo | Thesis, sponsor, market, ask |
| Appraisal | Independent valuation support |
| Pro-forma | Cash flows, DSCR, sensitivity |
| G703 | Construction progress / draw schedule (AIA-style) |
| Sponsor track | Prior deals, liquidity, guaranties |
| Custody + atomic-draw pitch | BitGo segregated vault + DrawEscrow waiver-evidence coupling |

### How Unykorn fits

Originate → structure (RWA family + Studio receipts) → **licensed placement when required** → BitGo custody → funder conversation (Cantor or others). Unykorn docs describe packaging; they do not claim a closed Cantor mandate or invent contacts.

---

## 2. Canton Network (institutional DLT)

| Field | Detail |
| --- | --- |
| What | Institutional distributed ledger network for regulated market participants |
| Unykorn reference | Platform constitution concepts such as `CantonParticipantRegistry` / `ParticipantID` (e.g. keccak256("CANTON_BLACKROCK") as an illustrative participant id pattern in constitution materials) |
| Relation to Cantor CRE | **None for funder packaging.** Different noun, different stack. |

When documenting DLT participation, use Canton Network language. When documenting CRE senior/conduit fundraising, use Cantor Fitzgerald CRE language.

## Funder match types (MCP)

The MCP tool `funder.match(dealType)` returns firm-level rails only (no invented emails):

| dealType | Typical firm-level hint |
| --- | --- |
| hotel_construction | Cantor Fitzgerald CRE |
| cmbs_senior | Cantor Fitzgerald CRE |
| bridge | Cantor Fitzgerald CRE |
| crypto_collateral | BitGo Prime (architecture) |
| rwa_pool | Maple-shape / Centrifuge-shape venues |
| warehouse | Family office / private capital (+ alternate venues) |
