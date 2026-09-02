# Next actions after 2026-09-02 cutover

## Done in Cloudflare API this session

- `pay.unykorn.org` and `pay.genesis402.com` on `unykorn-x402-edge` (Solana mainnet).
- Crawler protection ENABLED + managed robots.txt on content zones:
  unykorn.org, genesis402.com, xxxiii.io, drunks.app, donkai.org, unykorn.ai,
  blockchainfraud.org, digitalgiant.xyz, legacychain.app, mensofgod.com, flashrouter.io.
- AI bot *block* left DISABLED on purpose so crawlers can still reach 402 / future Charge.

## Cannot finish via this API token

1. **Pay Per Crawl Charge** — private beta, account Settings → Pay Per Crawl → Visibility=Visible → Payments tab → Enable + price. No public API.
2. **Monetization Gateway waitlist** — Google Form. Paste `money/WAITLIST.md`.
3. **HELIUS_API_KEY** still `plain_text` on `unykorn-x402-edge`. Settings PATCH requires multipart worker upload; do not smash the live script. Rotate in dashboard: delete plain binding, add secret.

## Dashboard clicks (5 minutes)

1. https://dash.cloudflare.com → Manage Account → Settings → Pay Per Crawl → make content zones Visible.
2. Each content zone → AI Crawl Control → Payments → Enable → $0.02 default → Charge training crawlers.
3. Submit https://docs.google.com/forms/d/e/1FAIpQLSfq6yaIgp57FCGFg7riXlSWTeD8d8Adur2c8tWaKY4SuzweiQ/viewform

## Live collect URLs

- https://pay.unykorn.org/health
- https://pay.unykorn.org/v1/catalog  (HTTP 402 Solana)
- https://x402.unykorn.org/health
- https://unykorn-x402-edge.kevanbtc.workers.dev/health
