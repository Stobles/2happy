import { env } from "@/config/env";
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const twMergeConf = extendTailwindMerge<"text", "bg">({
  extend: {
    classGroups: {
      text: [
        "text-h1",
        "text-h1Akira",
        "text-h2",
        "text-h2Akira",
        "text-h3",
        "text-h4",
        "text-h5",
        "text-body1",
        "text-body2",
        "text-title",
        "text-description",
        "text-placeholder",
        "text-button-large",
        "text-button-normal",
        "text-button-medium",
        "text-button-small",
        "text-button-xs",
        "text-table-header",
        "text-table-cell",
      ],
      "bg-image": ["bg-radial-gradient", "bg-gradient-4", "bg-footer-texture"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMergeConf(clsx(inputs));
}

export function createURLWithParams(
  initialUrl: string,
  params?: { [key: string]: unknown }
) {
  const url = new URL(initialUrl, env.APP_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value != undefined) url.searchParams.set(key, `${value}`);
    });
  }

  return url.pathname + url.search;
}
