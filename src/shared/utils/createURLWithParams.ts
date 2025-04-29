import { env } from "@/config/env";

export function createURLWithParams(
  initialUrl: string,
  params?: { [key: string]: unknown }
) {
  const url = new URL(initialUrl, env.APP_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length === 0) return;
        url.searchParams.set(key, `${value.join(",")}`);
      }

      if (value != undefined) url.searchParams.set(key, `${value}`);
    });
  }

  return url.pathname + url.search;
}
