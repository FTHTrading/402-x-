/**
 * UnyKorn LLC x402 catalog + 402 gate.
 * Free: /, /health, /v1/catalog
 * Paid SKUs return HTTP 402 with machine-readable payment requirements.
 * Settlement addresses MUST come from BitGo — never commit live keys.
 * Software/ops only. Not brokerage.
 */
import catalog from "../SKU_CATALOG.json";

type Env = {
  OPERATOR: string;
  NETWORK_SOLANA: string;
  NETWORK_POLYGON: string;
  FACILITATOR_URL: string;
  CATALOG_URL: string;
  PAY_TO_SOLANA: string;
  PAY_TO_POLYGON: string;
  USDC_SOLANA: string;
  USDC_POLYGON: string;
};

type Sku = {
  sku: string;
  name: string;
  human_usd: number;
  agent_usd: number;
  stripe: string | null;
  x402_path: string;
  rail: string;
};

const SKUS = catalog.skus as Sku[];

function json(data: unknown, status = 200, extra: HeadersInit = {}): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
      ...extra,
    },
  });
}

function configured(env: Env): boolean {
  return !env.PAY_TO_SOLANA.startsWith("REPLACE_") && env.PAY_TO_SOLANA.length > 20;
}

function requirements(env: Env, sku: Sku) {
  const amount = sku.agent_usd > 0 ? sku.agent_usd : sku.human_usd;
  return {
    x402Version: 1,
    error: "PAYMENT_REQUIRED",
    accepts: [
      {
        scheme: "exact",
        network: env.NETWORK_SOLANA,
        maxAmountRequired: String(Math.round(amount * 1_000_000)),
        asset: env.USDC_SOLANA,
        payTo: env.PAY_TO_SOLANA,
        resource: sku.x402_path,
        description: sku.name,
        mimeType: "application/json",
      },
      {
        scheme: "exact",
        network: env.NETWORK_POLYGON,
        maxAmountRequired: String(Math.round(amount * 1_000_000)),
        asset: env.USDC_POLYGON,
        payTo: env.PAY_TO_POLYGON,
        resource: sku.x402_path,
        description: sku.name,
        mimeType: "application/json",
      },
    ],
    facilitator: env.FACILITATOR_URL,
    humanFallback: sku.stripe,
    operator: env.OPERATOR,
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-headers": "content-type, payment-signature, x-payment, payment-required",
          "access-control-allow-methods": "GET, POST, OPTIONS",
        },
      });
    }

    if (path === "/" || path === "/health") {
      return json({
        operator: env.OPERATOR,
        service: "unykorn-x402-catalog",
        status: configured(env) ? "ready" : "awaiting_pay_to",
        liveRails: {
          solanaWorker: "https://x402.unykorn.org",
          genesisPolygon: "https://drunks.app",
          stripeCatalog: "https://dev.genesis402.com/commerce/stripe/",
          mcp: "https://genesis-docs-mcp.kevanbtc.workers.dev/mcp",
        },
        cloudflareGateway: "waitlist",
        catalog: "/v1/catalog",
      });
    }

    if (path === "/v1/catalog") {
      return json({
        operator: catalog.operator,
        disclaimer: catalog.disclaimer,
        settlement: catalog.settlement,
        readyToSettle: configured(env),
        skus: SKUS,
      });
    }

    const sku = SKUS.find((s) => s.x402_path === path || path === `/v1/sku/${s.sku}`);
    if (!sku) {
      return json({ error: "not_found", catalog: "/v1/catalog" }, 404);
    }

    if (sku.agent_usd === 0 && sku.human_usd === 0) {
      return json({ sku: sku.sku, name: sku.name, status: "free" });
    }

    const paid = request.headers.get("PAYMENT-SIGNATURE") || request.headers.get("X-PAYMENT");
    if (!paid) {
      return json(requirements(env, sku), 402, { "PAYMENT-REQUIRED": "true" });
    }

    return json({
      sku: sku.sku,
      name: sku.name,
      status: "payment_header_present",
      next: "Forward proof to https://x402.unykorn.org for live Solana settlement until this worker binds a facilitator.",
      facilitator: env.FACILITATOR_URL,
    });
  },
};
