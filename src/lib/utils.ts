import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const twMergeConf = extendTailwindMerge<"text">({
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
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMergeConf(clsx(inputs));
}
