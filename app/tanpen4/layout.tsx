import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator/Replicator — okaken",
  description:
    "創造者と複製者——その境界はどこにあるのか。境界そのものを作品として提示する電子的マニフェスト。",
  openGraph: {
    title: "Creator/Replicator — okaken",
    description:
      "創造者と複製者——その境界はどこにあるのか。境界そのものを作品として提示する電子的マニフェスト。",
    images: [
      {
        url: "/assets/tanpen4/ogp.png",
        width: 1200,
        height: 630,
        alt: "Creator / Replicator 電子マニフェスト",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator/Replicator — okaken",
    description:
      "創造者と複製者——その境界はどこにあるのか。境界そのものを作品として提示する電子的マニフェスト。",
    images: ["/assets/tanpen4/ogp.png"],
  },
};

export default function Tanpen4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
