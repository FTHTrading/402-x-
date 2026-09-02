> Part of [402-x](../README.md) · UnyKorn LLC · Wyoming

# Agents MCP

Live worker: [https://genesis-docs-mcp.kevanbtc.workers.dev](https://genesis-docs-mcp.kevanbtc.workers.dev/health)

MCP endpoint: `https://genesis-docs-mcp.kevanbtc.workers.dev/mcp`

HTTP: `POST /api/checkout` and `POST /api/webhook` (Stripe GATED until secrets).

## Connect in Cursor

Add a Streamable HTTP MCP server:

```json
{
  "mcpServers": {
    "genesis-docs-os": {
      "url": "https://genesis-docs-mcp.kevanbtc.workers.dev/mcp"
    }
  }
}
```

Local override: `cd apps/mcp && wrangler dev` then `http://127.0.0.1:8787/mcp`.

## Tools

- docs.search
- stack.map
- rwa.families
- dao.checklist
- custody.playbook
- funder.match
- commerce.catalog
- commerce.checkout
- agent.setup

## Value loop

Operator asks, tools return honesty-flagged JSON, operator acts on LIVE rails only, receipts stay source of truth.

## Test

`curl -sS https://genesis-docs-mcp.kevanbtc.workers.dev/health`
