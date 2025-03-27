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

export function getURLWithParams(
  initialUrl: string,
  params: { [key: string]: unknown }
) {
  let url = initialUrl;
  Object.entries(params).forEach(([key, value]) => {
    if (url.includes(`{${key}}`)) {
      url = url.replace(`{${key}}`, String(value));
    }
  });
  return url;
}
