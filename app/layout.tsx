import type { Metadata } from "next";
import { inter, shipporiMincho, zenOldMincho, cormorantGaramond } from "@/lib/fonts";
import Navigation from "@/components/layout/Navigation";
import LenisProvider from "@/components/layout/LenisProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "okaken - 短編小説プロジェクト",
  description: "四つの短編小説が織りなす、意識と言葉の実験的冒険。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${shipporiMincho.variable} ${zenOldMincho.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        <LenisProvider>
          <Navigation />
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
