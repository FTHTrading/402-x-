> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# Commerce — Stripe

## Clear copy

These SKUs are **software and ops services**.  
**Brokerage is licensed broker-dealer activity** and is not sold here.

Live catalog is on Stripe account **blockchainfraud.org** (live mode). Checkout uses Payment Links (card). `POST /api/checkout` returns `{ url }` for the matching SKU. Software/ops only — not brokerage.

## Catalog

| SKU | Name | Amount | Pay |
| --- | --- | --- | --- |
| `operator_docs` | Operator Docs | $99 | [Pay](https://buy.stripe.com/14AfZi1uN44y6wA9PkfIs00) |
| `deal_playbook` | Deal Playbook pack | $249 | [Pay](https://buy.stripe.com/aFafZi4GZ9oSbQU9PkfIs01) |
| `rwa_family_setup` | RWA family setup | $1,500 | [Pay](https://buy.stripe.com/7sY7sM5L358C6wA5z4fIs02) |
| `dao_concierge` | DAO deploy concierge | $750 | [Pay](https://buy.stripe.com/bJe3cw4GZgRkaMQ8LgfIs04) |
| `bitgo_onboarding` | BitGo deal-ops onboarding | $2,500 | [Pay](https://buy.stripe.com/aFa5kE5L38kO8EI0eKfIs03) |

## API

### `POST /api/checkout`

Body:

```json
{ "sku": "operator_docs" }
```

**When configured:** creates a Stripe Checkout Session and returns `{ id, url, sku }`.  
**When not configured:** HTTP 503 JSON, for example:

```json
{
  "error": "Stripe not configured",
  "status": 503,
  "setup": {
    "steps": [
      "Create products/prices in Stripe Dashboard",
      "wrangler secret put STRIPE_SECRET_KEY",
      "Set worker var PRICE_OPERATOR_DOCS to the Price ID (price_...)",
      "Optional: STRIPE_WEBHOOK_SECRET for /api/webhook",
      "Set CHECKOUT_SUCCESS_URL and CHECKOUT_CANCEL_URL"
    ]
  }
}
```

### Success / cancel pages

| Page | Default URL |
| --- | --- |
| Success | https://dev.genesis402.com/commerce/success/ |
| Cancel | https://dev.genesis402.com/commerce/cancel/ |

Override with `CHECKOUT_SUCCESS_URL` / `CHECKOUT_CANCEL_URL`.

### Webhook stub

`POST /api/webhook` — on `checkout.session.completed`, stores a stub record in KV when `STRIPE_WEBHOOK_SECRET` and `CHECKOUT_KV` are bound. Without the secret, returns 503 setup JSON.

## Env vars

See root `.env.example`. Never commit secrets. This portal does not call Stripe live during docs builds.
