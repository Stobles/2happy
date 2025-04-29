import clsx, { type ClassValue } from "clsx";
import { twMergeConf } from "../lib/twMergeConfig";

export function cn(...inputs: ClassValue[]) {
  return twMergeConf(clsx(inputs));
}
