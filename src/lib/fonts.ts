/* @font-face {
  font-family: "AkiraExpanded";
  src: url("/fonts/Akira-Expanded.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Lato";
  src: url("/fonts/Lato-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Lato";
  src: url("/fonts/Lato-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
} */

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
