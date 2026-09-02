# Deploy the money catalog Worker

Windows (PowerShell, Alienware / Cursor) — same commands work in Git Bash.

```powershell
cd money
npm install
npx wrangler login
# After BitGo gives you receive addresses:
npx wrangler secret put PAY_TO_SOLANA
npx wrangler secret put PAY_TO_POLYGON
npx wrangler deploy
```

Then in Cloudflare DNS:

- `pay.unykorn.org` → CNAME to the workers.dev hostname, orange cloud ON
- or `pay.genesis402.com` if that zone is the empire apex you want agents to discover

Verify:

```bash
curl -sS https://<worker>/health
curl -sS https://<worker>/v1/catalog
curl -i https://<worker>/v1/gmiiie/snapshot
# expect HTTP 402 until PAYMENT-SIGNATURE is present
```

Pay-per-crawl (content zones already on Cloudflare):

1. Dashboard → Security / AI crawl control → Pay per crawl
2. Set action **Charge** (not Block) on zones that have indexable content
3. Price $0.01–$0.05 to start
4. Do **not** Charge institutional app origins (mint console, broker UI) — those stay on explicit SKUs

Monetization Gateway:

1. Submit `WAITLIST.md`
2. When invited, attach the same `PROTECTED_PATTERNS` as the SKU paths
3. Pay-to = BitGo wallets, not a personal MetaMask

Do not store `sk_live`, BitGo access tokens, or wrangler secrets in this repo.
