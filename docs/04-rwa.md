> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# RWA contract families

Source library: [FTHTrading/smart-contract-builder](https://github.com/FTHTrading/smart-contract-builder)  
Live docs: [smartcontract.unykorn.ai](https://smartcontract.unykorn.ai) (GitHub Pages)  
Compiler: **Solidity 0.8.24 · EVM paris · optimizer 200 · MIT · UNAUDITED**

Unykorn Studio (local :3200) is the console that drives these contracts. Public Studio GitHub is 404 — see [Protocol](/protocol/overview/). Do not vendor Solidity into this repo; link the source files on GitHub.

## Status legend (contracts)

| Badge | Meaning |
| --- | --- |
| SHIPPED | Compiles under pinned solc + OZ; deployable via Studio/Anvil |
| DESIGN | Interface + Studio step kind exist; full impl pending external deps |

## Real Estate / Structured Finance

| Family | Status | Description | Contracts (GitHub) |
| --- | --- | --- | --- |
| Draw Escrow (Georgia) | SHIPPED | Milestone-indexed construction draws. Inspector attestation + EIP-712 waiver + retainage. On-chain **evidences** the Georgia statutory-form waiver under **O.C.G.A. § 44-14-366** — it does **not** replace the statutory form. | [DrawEscrow.sol](https://github.com/FTHTrading/smart-contract-builder) · MilestoneRegistry · IWaiverAttestor · LocalTestToken |
| REIT NOI Distribution | SHIPPED | Pull-based per-unit dividends via MasterChef-style accumulator. REIT tax status remains an off-chain determination. | DistributionToken · REITDistributor |
| CMBS 3-Tranche Waterfall | SHIPPED | Senior / mezz / equity waterfall. Defaults: senior 700 bps, mezz 1100 bps, equity residual. REMIC elections off-chain. | CMBSWaterfall |

## Private Credit / Institutional Lending

| Family | Status | Description | Contracts |
| --- | --- | --- | --- |
| Pool Delegate Pool (Maple-shape) | SHIPPED | Institutional pool with Pool Delegate first-loss, whitelist deposits, cooldown redemptions. | PoolDelegatePool |
| Invoice Factoring (Centrifuge-shape) | SHIPPED | Short-tenor receivables. Originator advances 80–90% of face; payer settlement funds LP yield. | InvoiceFactoringPool |
| Bridge Loan Tranche Pool | SHIPPED | Two-tranche rolling book. Senior fixed APY (whitelist); junior originator first-loss. Senior shape composable with Sky/USDS. | BridgeLoanTranchePool |
| Inventory Financing SPV | SHIPPED | Single-asset warehouse inventory loan. UCC-1 filing hash is evidentiary; state filing remains the operative lien. **Playbook:** $2M EV chargers — 80% advance ($1.6M senior @ 900 bps) + 20% junior ($320K) + 18-month amortizing. | InventoryFinancingSPV |

## Tokenized Funds

| Family | Status | Description | Contracts |
| --- | --- | --- | --- |
| Tokenized Treasury (BUIDL-shape) | SHIPPED | On-chain wrapper for tokenized Treasury funds. Permissioned gate + PoR mint breaker + NAV T+N queue. | TokenizedTreasury |
| Cash Management Vault ERC-4626 | SHIPPED | Stablecoin vault; allocator rebalances into yield RWA shares with minimum reserve for instant redemptions. | CashManagementVault |
| Async Vault ERC-7540+8161 | SHIPPED | Async request vault with transferable pending requests (ERC-8161) and permissioned settlement. | AsyncVault7540 · ERC7540Transferable · IERC7540Transferable |

## Real Estate (Debt + Equity)

| Family | Status | Description | Contracts |
| --- | --- | --- | --- |
| Tokenized Mortgage / HELOC (Figure-shape) | SHIPPED | Fungible claim on mortgage/HELOC cash flows. Servicer records P+I; physical note remains operative. | RealEstateDebtToken |
| Fractional Property Equity (RealT-shape) | SHIPPED | SPV fractional equity with rental accumulator and sale-proceeds redeem. | FractionalPropertyToken |

## Securities / Compliance

| Family | Status | Description | Contracts |
| --- | --- | --- | --- |
| Permissioned Security Token (ERC-3643-inspired) | SHIPPED | IdentityRegistry + ClaimTopicsRegistry + PermissionedToken. Freeze / forceTransfer / pause. | IdentityRegistry · ClaimTopicsRegistry · PermissionedToken |

## ESG / Climate / Sovereignty

| Family | Status | Description | Contracts |
| --- | --- | --- | --- |
| SREC Token | SHIPPED | ERC-1155 one-MWh SREC with EIP-712 meter attestation. Settlement layer — not a state-registry replacement. | SRECToken |
| GoldBackedToken (PAXG-shape) | SHIPPED | 1 token = 1 troy oz LBMA-shape gold (4 decimals). Mint gated by ProofOfReserveConsumer. Physical redemption off-chain. **Product-shape compatibility with Paxos PAXG — Unykorn does not issue PAXG and is not claiming a Paxos partnership.** | GoldBackedToken |
| On-chain carbon retirement (Toucan) | DESIGN | Retire Toucan-bridged Verra VCU or Puro ERC-3643 credit. Studio step `retire_credit_onchain` — IRREVERSIBLE gate. | (design) |

## Oracles / Cross-chain

| Family | Status | Description | Contracts |
| --- | --- | --- | --- |
| ProofOfReserveConsumer | SHIPPED | Chainlink PoR circuit breaker over minting when reserves breach over-collateral threshold. | ProofOfReserveConsumer |
| CCIPBridgedToken | SHIPPED | Burn-and-mint ERC-20 across Chainlink CCIP with peer whitelist. | CCIPBridgedToken |
| RWAOracle | SHIPPED | AggregatorV3 wrapper with staleness/heartbeat safety for fund-moving reads. | RWAOracle |
| XRPL + Stellar adapters | DESIGN | XRPL Hooks and Stellar SEP adapters via subprocess bridges. Studio steps `deploy_xrpl_hook` / `deploy_stellar_asset` planned. | (design) |

## Audit posture — UNAUDITED

Before any deployment holding real funds: external audit, Slither/Mythril/Foundry fuzz, deploy via Studio `sign_external` (BitGo), verify on explorers, consider a bug bounty. Designed-to-be-audit-friendly ≠ audited.
