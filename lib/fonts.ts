import { Inter } from "next/font/google";
import { Shippori_Mincho, Zen_Old_Mincho, Cormorant_Garamond } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-shippori",
  display: "swap",
});

export const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-zen",
  display: "swap",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
