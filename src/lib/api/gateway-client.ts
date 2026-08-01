import { apiConfig, isLiveApiEnabled } from "@/config/api-config";

export interface GatewayRequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
  authToken?: string;
}

export class GatewayError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: string
  ) {
    super(message);
    this.name = "GatewayError";
  }
}

/**
 * Typed fetch wrapper for the Girls Girl API gateway.
 * Use when NEXT_PUBLIC_API_MODE=live in .env.local
 */
export async function gatewayFetch<T>(
  path: string,
  options: GatewayRequestOptions = {}
): Promise<T> {
  if (!isLiveApiEnabled()) {
    throw new GatewayError(
      "Live API is disabled. Set NEXT_PUBLIC_API_MODE=live in .env.local",
      503,
      "API_MOCK_MODE"
    );
  }

  const { body, authToken, headers, ...rest } = options;
  const url = `${apiConfig.gateway.baseUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

  const response = await fetch(url, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    let message = `Gateway request failed (${response.status})`;
    try {
      const payload = (await response.json()) as { message?: string; code?: string };
      if (payload.message) message = payload.message;
      throw new GatewayError(message, response.status, payload.code);
    } catch (error) {
      if (error instanceof GatewayError) throw error;
      throw new GatewayError(message, response.status);
    }
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}
