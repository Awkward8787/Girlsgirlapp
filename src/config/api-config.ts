/**
 * Central API configuration — load endpoints from environment here.
 * See `.env.example` → copy to `.env.local` and fill in your values.
 */

export type ApiMode = "mock" | "live";

export interface ApiConfig {
  mode: ApiMode;
  gateway: {
    baseUrl: string;
  };
  appwrite: {
    endpoint: string;
    projectId: string;
  };
}

function readEnv(key: string, fallback = ""): string {
  return process.env[key]?.trim() ?? fallback;
}

function resolveApiMode(): ApiMode {
  const mode = readEnv("NEXT_PUBLIC_API_MODE", "mock");
  return mode === "live" ? "live" : "mock";
}

/** Single source of truth for all API base URLs in the web app. */
export const apiConfig: ApiConfig = {
  mode: resolveApiMode(),
  gateway: {
    baseUrl: readEnv("NEXT_PUBLIC_GATEWAY_URL", "https://api.girlsgirlwttb.com"),
  },
  appwrite: {
    endpoint: readEnv(
      "NEXT_PUBLIC_APPWRITE_ENDPOINT",
      "https://backend.girlsgirlwttb.com/v1"
    ),
    projectId: readEnv("NEXT_PUBLIC_APPWRITE_PROJECT_ID"),
  },
};

export function isLiveApiEnabled(): boolean {
  return apiConfig.mode === "live" && apiConfig.gateway.baseUrl.length > 0;
}
