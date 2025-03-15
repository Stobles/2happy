import { Lato } from "next/font/google";
import localFont from "next/font/local";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lato",
});

export const akira = localFont({
  src: "./fonts/Akira-Expanded.otf",
  variable: "--font-akira",
  display: "swap",
});
