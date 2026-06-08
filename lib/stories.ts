export interface Story {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  synopsis: string;
  excerpt: string;
  keywords: string[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    void: string;
  };
  closingQuote: string;
}

export const stories: Story[] = [
  {
    id: "tanpen1",
    slug: "tanpen1",
    title: "光についての覚え書き",
    subtitle: "意識の覚醒",
    author: "岡研プロジェクト",
    synopsis:
      "目を閉じると色が見える——それは単なる残像ではなく、意識そのものの発光だった。主人公は日常のなかで「見ること」の本質に迫り、光と色彩が織りなす内的宇宙を旅する。やがて意識は既知の輪郭を失い、すべてが溶け合う領域へと踏み込んでいく。知覚の根源に触れようとする、静謐で眩い覚え書き。",
    excerpt:
      "目を閉じると色が見える。赤、青、緑——いや、そんな名前のついた色ではない。名前をつけた瞬間に失われてしまう、あの色だ。\n\n瞼の裏に広がる暗闇は、決して無ではない。そこには光の記憶が住んでいる。網膜が最後に捉えた光の残響が、神経回路のなかでゆっくりと変容していく。",
    keywords: ["光", "色", "意識", "溶解", "知覚"],
    theme: {
      primary: "#f5e6c8",
      secondary: "#e8d5f0",
      accent: "#faf3e0",
      void: "#0d0b14",
    },
    closingQuote: "意識は光の中に溶け、光は意識のなかに灯る。",
  },
  {
    id: "tanpen2",
    slug: "tanpen2",
    title: "八月のカウンターに座る殺し屋が考えていること",
    subtitle: "臨床的観察者",
    author: "岡研プロジェクト",
    synopsis:
      "八月の昼下がり、カフェのカウンターに座る男。彼は殺し屋だ——しかしこの物語に銃声は響かない。男が観察するのは、カップの水滴、隣の客の仕草、窓の向こうの日常。殺すことと生きることの間にある薄い膜を、冷たく正確な視線で見つめ続ける。暴力の不在によって浮かび上がる、存在の異様な軽さ。",
    excerpt:
      "カウンターの上に水滴が落ちた。グラスの外側を伝い、木目に沿って楕円形にゆっくり広がっていく。その水滴を、男は精密機械のような目で追っていた。\n\n八月の午後二時。エアコンの効いたカフェの中は、外の灼熱とは別の国のように静かだった。",
    keywords: ["観察", "殺し屋", "日常", "距離", "不在"],
    theme: {
      primary: "#c4c0b8",
      secondary: "#8b1a1a",
      accent: "#2a2d35",
      void: "#0c0c0e",
    },
    closingQuote: "観察する者は、決して観察される側には戻れない。",
  },
  {
    id: "tanpen4",
    slug: "tanpen4",
    title: "Creator/Replicator",
    subtitle: "電子マニフェスト",
    author: "岡研プロジェクト",
    synopsis:
      "創造者と複製者——その境界はどこにあるのか。テクノロジーが芸術を飲み込み、コピーがオリジナルを凌駕する時代に、一人の創作者が自らの存在意義を問い直す。グリッドのように整然とした世界に亀裂を入れ、境界そのものを作品として提示する電子的マニフェスト。",
    excerpt:
      "境界について話をしよう。\n\n創る者と複製する者のあいだに引かれた線は、いつから、誰が引いたのだろう。少なくとも私が生まれたときには、すでにそこにあった——あるいは、そこにあると教えられた。",
    keywords: ["境界", "創造", "複製", "マニフェスト", "グリッド"],
    theme: {
      primary: "#d4e0d0",
      secondary: "#00ff88",
      accent: "#1a2a1a",
      void: "#0a0c0a",
    },
    closingQuote: "境界を壊すことは、新しい境界を創ることに他ならない。",
  },
  {
    id: "tanpen6",
    slug: "tanpen6",
    title: "テクスチャルな変身",
    subtitle: "生きるページ",
    author: "岡研プロジェクト",
    synopsis:
      "ページの上の文字が動き始めた日、世界は変わった。テキストが物質となり、言葉が肉体を持ち、物語そのものが自律的に呼吸を始める。書くこと・読むことの暴力性と創造性を同時に描く、テクストと生命の境界を問う実験的変身譚。フランス語の断片が差し込まれ、テクストは多層的に変容していく。",
    excerpt:
      "最初の異変は些細なものだった。原稿用紙の上で、一つの文字が——ほんのわずかに——震えたのだ。\n\n私はペンを止めて、その文字を見つめた。「蝶」という字。虫偏の右側、あの複雑な筆画が、まるで羽化を試みるように微かに揺れている。",
    keywords: ["テクスト", "変身", "文字", "物質化", "蝶"],
    theme: {
      primary: "#d9cfc0",
      secondary: "#4a3f2f",
      accent: "#3a6b8c",
      void: "#0f0d0a",
    },
    closingQuote: "Notre nouvelle forme de vie",
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getAdjacentStories(slug: string) {
  const idx = stories.findIndex((s) => s.slug === slug);
  return {
    prev: idx > 0 ? stories[idx - 1] : null,
    next: idx < stories.length - 1 ? stories[idx + 1] : null,
  };
}
