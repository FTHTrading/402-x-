# Cloudflare cutover 2026-09-02

Used the operator Cloudflare API token from `cloudflare_copy.env` (Drive / OneDrive copy). Token verified active. Account: Kevanbtc@gmail.com. Workers subdomain: `kevanbtc`.

## What was already live

| Host | Worker | Rail |
| --- | --- | --- |
| x402.unykorn.org | unykorn-x402-edge v3.0.0 | Solana mainnet — REAL |
| x402-origin.unykorn.org | unykorn-x402-edge | Solana mainnet — REAL |
| paid.unykorn.org | unykorn-x402-proxy + paid-api | Apostle ATP chain 7332 — STUB |
| genesis-docs-mcp.kevanbtc.workers.dev | genesis-docs-mcp | Stripe Payment Links — REAL cards |

`/health` on the Solana edge reports `solana_recipient: configured` and `helius: configured`.

## What this cutover changed

1. Created worker route `pay.unykorn.org/*` → `unykorn-x402-edge`.
2. Deleted the dead DNS-only A record `pay.unykorn.org → 76.230.229.105` (timed out).
3. Created proxied AAAA `pay.unykorn.org → 100::` so traffic hits Cloudflare.
4. Enabled workers.dev on `unykorn-x402-edge` → https://unykorn-x402-edge.kevanbtc.workers.dev/health
5. Repointed `pay.genesis402.com/*` from `unykorn-x402-proxy` (Apostle stub) to `unykorn-x402-edge` (Solana).

## Verify

```bash
curl -sS https://pay.unykorn.org/health
curl -sS https://pay.genesis402.com/health
curl -i https://pay.unykorn.org/v1/catalog   # HTTP 402 Solana
```

## Left alone on purpose

- `paid.unykorn.org` still returns 402 on Apostle 7332 / ATP. That is a stub rail. Do not sell it as settled cash.
- No BitGo / Paxos addresses were written. Edge already has `SOLANA_RECIPIENT_ADDRESS` as a secret.
- Pay-per-crawl Charge is a dashboard control; this token path did not expose a stable crawl-pricing API to flip all content zones.
- Monetization Gateway waitlist still must be submitted from `money/WAITLIST.md`.

## Security note

`HELIUS_API_KEY` is bound as **plain_text** on `unykorn-x402-edge`. Move it to `secret_text` and rotate. Do not commit `cloudflare_copy.env`.
