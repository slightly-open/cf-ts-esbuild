export {}; // prevents leaking types

/**
 * All CF specific things are added to global, including
 * - vars (https://developers.cloudflare.com/workers/cli-wrangler/configuration#vars)
 * - KV namespaces (https://developers.cloudflare.com/workers/cli-wrangler/configuration#kv_namespaces)
 * - secrets (https://developers.cloudflare.com/workers/cli-wrangler/commands#secret)
 */
declare global {
  // environment variables
  const DEFAULT_GREETING: string;

  // secrets
  // const GOOGLE_CLIENT_SECRET: string;

  // KV namespaces
  // const ACCOUNTS: KVNamespace;
}
