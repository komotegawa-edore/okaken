import type { TextSection } from "./types";

export const fullText: TextSection[] = [
  { type: "heading", content: "文字の非誠実性" },

  {
    type: "paragraph",
    content: "文字は嘘をつく。",
  },
  {
    type: "paragraph",
    content:
      "これは比喩ではない。文字通りの意味で、文字は嘘をつく。あなたが今読んでいるこの文字列は、私の思考を正確に再現しているだろうか。答えは否だ。私の頭の中にあった思考と、この紙の上に定着した文字列の間には、必然的な隔たりがある。",
  },
  {
    type: "paragraph",
    content:
      "書くという行為は、翻訳に似ている。思考という原文を、文字という別の言語に翻訳する。どんなに忠実な翻訳でも、原文そのものにはなれない。書かれた言葉は、常に思考の複製品——レプリカである。",
  },

  { type: "break", content: "" },

  {
    type: "paragraph",
    content: "では、創造者とは誰か。",
  },
  {
    type: "paragraph",
    content:
      "私がこの文章を書いている。だが「書く」とは何をしていることなのか。頭の中に浮かんだ思考を、文字に変換しているのか。それとも、文字を並べることによって、はじめて思考が生まれているのか。",
  },
  {
    type: "paragraph",
    content: "鶏と卵。創造と複製。オリジナルとコピー。",
  },

  { type: "break", content: "" },

  {
    type: "paragraph",
    content: "境界について話をしよう。",
  },
  {
    type: "paragraph",
    content:
      "創る者と複製する者のあいだに引かれた線は、いつから、誰が引いたのだろう。少なくとも私が生まれたときには、すでにそこにあった——あるいは、そこにあると教えられた。",
  },

  {
    type: "quote",
    content:
      "L\u2019\u00e9criture est la destruction de toute voix, de toute origine.",
    label: "（書くことは、あらゆる声、あらゆる起源の破壊である。）——ロラン・バルト",
  },

  {
    type: "paragraph",
    content:
      "書く者は、書く瞬間に死ぬ。テクストが生まれた瞬間、作者は不要になる。これがバルトの「作者の死」だ。だとすれば、創造者はつねに自らの創造行為によって消去される。",
  },
  {
    type: "paragraph",
    content:
      "ここに逆説がある。創造者は、創造することによって、自らの創造者としての地位を失う。創造物は創造者を必要としない。子供がいつか親を必要としなくなるように。",
  },

  { type: "break", content: "" },

  {
    type: "paragraph",
    content:
      "ヴァルター・ベンヤミンは、技術的複製可能性の時代における芸術作品について書いた。複製技術が発達した時代には、芸術作品の「アウラ」——一回性と現前性に基づく独特の雰囲気——が失われると。",
  },
  {
    type: "paragraph",
    content:
      "だが私は問いたい。そもそも「アウラ」は、最初から幻想ではなかったか。",
  },
  {
    type: "paragraph",
    content:
      "一枚の絵画の前に立つ。これは世界に一つしかない、唯一のオリジナルだ——と人は言う。しかし、その絵画を構成する顔料は工場で製造されたものだ。キャンバスは織機で織られたものだ。筆さえも、同じ型の何百本のうちの一本に過ぎない。",
  },
  {
    type: "paragraph",
    content:
      "オリジナリティとは、素材の唯一性ではなく、組み合わせの唯一性だ。だが「組み合わせ」は、定義上、既存の要素の再配置である。つまり——",
  },
  {
    type: "paragraph",
    content: "創造とは、つねにすでに、複製の変奏に過ぎない。",
  },

  { type: "break", content: "" },

  {
    type: "quote",
    content: "f(creation) = \u03a3 replication(i) + noise",
  },

  {
    type: "paragraph",
    content:
      "ここで noise は、誤差であり、偶然であり、創造者の「手」が加える微小な歪みだ。その歪みこそが、唯一性の正体だ。",
  },

  { type: "break", content: "" },

  {
    type: "heading",
    content: "デジタル時代",
  },

  {
    type: "paragraph",
    content:
      "コピーは完全になった。0と1の列をそのまま複製すれば、オリジナルとビット単位で同一のコピーが作られる。劣化のない複製。これは人類史上初めてのことだ。",
  },
  {
    type: "paragraph",
    content:
      "完全なコピーが可能になった時、オリジナルの意味は消滅する——はずだった。しかし現実には、オリジナルへの執着はむしろ強まっている。NFT、真正性証明、デジタル署名。人々は、複製不可能な何かを必死に作り出そうとしている。",
  },

  {
    type: "quote",
    content: "Il n\u2019y a pas de hors-texte.",
    label:
      "（テクストの外部は存在しない。）——ジャック・デリダ",
  },

  {
    type: "paragraph",
    content:
      "テクストの外部は存在しない。すべてはテクストであり、すべてはコピーであり、すべては引用である。私がここに書いているこの文章もまた、私が過去に読んだすべてのテクストの——意識的であれ無意識的であれ——引用の集積に他ならない。",
  },
  {
    type: "paragraph",
    content: "では、私は創造者なのか、複製者なのか。",
  },
  {
    type: "paragraph",
    content:
      "その問いそのものが、すでに無意味かもしれない。創造と複製の境界線は、引かれた瞬間から、すでに溶解し始めている。",
  },

  { type: "break", content: "" },

  {
    type: "heading",
    content: "マニフェスト",
  },

  {
    type: "paragraph",
    content: "以下を宣言する。",
  },
  {
    type: "paragraph",
    content:
      "一、すべての創造は複製を含み、すべての複製は創造を含む。\n二、オリジナルとコピーの区別は、権力の産物である。\n三、境界を引くことは、境界を消すことの第一歩である。\n四、文字は嘘をつく。しかし、嘘の中にこそ真実がある。\n五、この宣言自体が、無数の先行テクストの複製であることを認める。",
  },

  {
    type: "quote",
    content: "Tout est dit, et l\u2019on vient trop tard.",
    label:
      "（すべては語られてしまった。我々の登場は遅すぎた。）——ラ・ブリュイエール",
  },

  {
    type: "paragraph",
    content:
      "すべてが語られてしまった後で、なお語ること。すべてが作られてしまった後で、なお作ること。それは愚行だろうか。それとも——",
  },

  { type: "break", content: "" },

  {
    type: "paragraph",
    content:
      "境界を壊すことは、新しい境界を創ることに他ならない。",
  },

  { type: "break", content: "" },

  {
    type: "paragraph",
    content:
      "この文章を書いている私の手は、もう止まりそうだ。なぜなら、書けば書くほど、文字の非誠実性が——つまり、書かれたものと思考されたものの乖離が——広がっていくのを感じるからだ。",
  },
  {
    type: "paragraph",
    content: "だが、それでも書く。",
  },
  {
    type: "paragraph",
    content:
      "書くことは、裏切りの行為であると知りながら。\n文字が嘘つきであると知りながら。\n創造が複製に過ぎないと知りながら。",
  },
  {
    type: "paragraph",
    content: "それでも。",
  },
  {
    type: "paragraph",
    content:
      "なぜなら、この裏切りの中にこそ——この嘘の中にこそ——この複製の中にこそ——何か新しいものが宿る可能性があるからだ。",
  },
  {
    type: "paragraph",
    content: "あるいは、その「可能性」すらも、幻想かもしれないが。",
  },

  { type: "break", content: "" },

  {
    type: "quote",
    content:
      "f(hope) = lim(n\u2192\u221e) [replication(n) + noise(n)]",
  },

  {
    type: "paragraph",
    content:
      "noise が accumulate する時、複製は——やがて——まったく新しい何かに変容する。",
  },
  {
    type: "paragraph",
    content: "それを人は、創造と呼ぶ。",
  },
];
