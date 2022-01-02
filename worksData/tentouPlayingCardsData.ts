import { PlayingCard } from "../types/PlayingCard.type"

const tentouPlayingCardsData: PlayingCard[] = [
  {
    number: "A",
    mark: "spade",
    name: "ナミテントウ",
    scientificNameItalic: "Harmonia axyridis",
    scientificNameUpright: "(Pallas, 1773)",
    rarity: 1,
    description: "都市部で最もよく見られるテントウムシです。翅の模様は非常に多様で、中にはレアパターンもあります。イラストの星１つの模様は、モデルになった１個体しか見たことがありません。"
  },
  {
    number: "2",
    mark: "spade",
    name: "フタホシテントウ",
    scientificNameItalic: "Hyperaspis sinensis",
    scientificNameUpright: "(Crotch, 1874)",
    rarity: 3,
    description: "青緑色の眼が美しい小型のテントウムシです。２つ星のテントウはたくさんいますが、フタホシという名前と、比較的出会うことが多い種のため選びました。"
  },
  {
    number: "3",
    mark: "spade",
    name: "ミスジキイロテントウ",
    scientificNameItalic: "Brumoides ohtai",
    scientificNameUpright: "Miyatake, 1970",
    rarity: 4,
    description: "芝生に生息する外来種で、その細長い体からハムシと間違えられがちです。頭と胸の赤い部分は独特の透明感があります。3つ星のテントウは日本にいないため、本種を採用しました。"
  },
  {
    number: "4",
    mark: "spade",
    name: "ヨツモンヒメテントウ",
    scientificNameItalic: "Nephus (Nephus) yotsumon",
    scientificNameUpright: "(H. Kamiya, 1961)",
    rarity: 3,
    description: "ヒメテントウ類（ヒメテントウ族）というグループの一種です。この仲間は体長2ｍｍ前後と小さく、背面に毛が生えているのが特徴です。本種はケヤキの樹皮下で越冬しますが、活動期の観察例は聞いたことがありません。"
  },
  {
    number: "5",
    mark: "spade",
    name: "イツホシヒメテントウ",
    scientificNameItalic: "Sasajiscymnus quinquepunctatus",
    scientificNameUpright: "(Weise, 1923)",
    rarity: 3,
    description: "奄美大島から西表島に分布していて、島によって模様に変異があります。地色が明るいヒメテントウはあまりいません。"
  },
  {
    number: "6",
    mark: "spade",
    name: "ムツキボシテントウ",
    scientificNameItalic: "Oenopia scalaris",
    scientificNameUpright: "(Timberlake, 1943)",
    rarity: 3,
    description: "マツに付くアブラムシを食べるテントウムシです。秋から春にかけての寒い時期はトランプのイラストのような色ですが、春～秋の個体は全ての紋が黄色くなります。ウスキホシテントウというよく似た種がいます。"
  },
  {
    number: "7",
    mark: "spade",
    name: "ナナホシテントウ",
    scientificNameItalic: "Coccinella (Coccinella) septempunctata",
    scientificNameUpright: "Linnaeus, 1758",
    rarity: 1,
    description: "世界に広く分布し、日本でも北海道から沖縄まで生息しています。テントウムシというと、まず本種を思い浮かべる方が多いでしょう。キャラクターやグッズのデザインにもよく使われています。"
  },
  {
    number: "8",
    mark: "spade",
    name: "ヤホシテントウ",
    scientificNameItalic: "Harmonia octomaculata",
    scientificNameUpright: "(Fabricius, 1781)",
    rarity: 4,
    description: "南方系のテントウムシで、水辺にしかいないやや珍しい種です。模様の変異は非常に幅広く、8\u2660のようなものから、8\u2663のような無地のものまでいます。トランプの背景には中間的な模様のイラストが描かれています。"
  },
  {
    number: "9",
    mark: "spade",
    name: "ココノホシテントウ",
    scientificNameItalic: "Coccinella (Coccinella) explanata",
    scientificNameUpright: "Miyatake, 1963",
    rarity: 4,
    description: "北海道の水辺や、関東の山地の水辺といった、限られた場所にしか分布していません。一見ナナホシテントウにそっくりですが、紋の数以外にも違いはあります。ナナホシに比べ、体長がひと回り小さく、縦の長さに比べてやや横幅が広く、翅のへりの平らな部分が広いです。"
  },
  {
    number: "10",
    mark: "spade",
    name: "",
    scientificNameItalic: "Caria dilatata",
    scientificNameUpright: "(Fabricius, 1775)",
    rarity: 5,
    description: "東南アジアや台湾に分布する種ですが、沖縄県の西表島から1頭だけ採集された記録があります。体長12～13mmで体高も高い、非常に大型のテントウです。和名はありません。属はMegalocariaとされる事もあり、分類学的な整理が必要とされています。"
  },
  {
    number: "J",
    mark: "spade",
    name: "アイヌテントウ",
    scientificNameItalic: "Coccinella (Coccinella) ainu",
    scientificNameUpright: "Lewis, 1896",
    rarity: 3,
    description: "ナナホシテントウに星を4つ足したようなテントウです。サイズはココノホシより更にひと回り小さく、シルエットはナナホシ寄りです。名前にアイヌと付きますが、北海道限定ではなく、本州まで分布しています。河川敷などで見られます。"
  },
  {
    number: "Q",
    mark: "spade",
    name: "ナミテントウ",
    scientificNameItalic: "Harmonia axyridis",
    scientificNameUpright: "(Pallas, 1773)",
    rarity: 1,
    description: "翅の模様には遺伝的多型がみられ、4つの基本型があります。ナミテントウはこの4型の複雑な掛け合わせによって、様々なパターンの変異が出現します。イラストは「斑型」で、基本型の内ではやや数が少ないです。"
  },
  {
    number: "K",
    mark: "spade",
    name: "オオテントウ",
    scientificNameItalic: "Synonycha grandis",
    scientificNameUpright: "(Thunberg, 1781)",
    rarity: 4,
    description: "日本三大テントウムシ（初出不明）の一角で、1cmを超える種です。生態も特殊で、竹に付くアブラムシを食べるため、竹林に行かなければ出会えません。関西以西に分布します。ちなみに三大テンの残りはカメノコテントウ（\u2605\u2605）とハラグロオオテントウ（\u2605\u2605\u2605）です。"
  },
  {
    number: "A",
    mark: "heart",
    name: "キイロメツブテントウ",
    scientificNameItalic: "Nesolotis azumai",
    scientificNameUpright: "(Sasaji, 1967)",
    rarity: 5,
    description: "体長1.5mm程度と小さく、長らく採集例の少ない珍しい種でした。日本には安定して1つ星模様のあるテントウムシはいません。本種は昔の図鑑では無紋とされていましたが、近年の報告で紋が出る変異が確認されました。"
  },
  {
    number: "2",
    mark: "heart",
    name: "フタイロチビテントウ",
    scientificNameItalic: "Scymnomorphus bicolor",
    scientificNameUpright: "(H. Kamiya, 1965)",
    rarity: 5,
    description: "体長1mm程度と非常に小さい、長い毛を持つ種です。イラストのように翅に1対の弧状の紋が出るパターンと、翅が真っ黒になるパターンがあるようですが、詳しい情報はあまりありません。"
  },
  {
    number: "3",
    mark: "heart",
    name: "アミダテントウ",
    scientificNameItalic: "Amida tricolor",
    scientificNameUpright: "(Harold, 1878)",
    rarity: 3,
    description: "3色の模様が美しい、非常に人気の高いテントウムシです。阿弥陀如来に由来する名前が印象的なことも人気の理由でしょう。学名のtricolorは「3色の」という意味です。アオバハゴロモという虫を食べるという報告がありますが、詳細な食性はわかっていません。"
  },
  {
    number: "4",
    mark: "heart",
    name: "メダマテントウ",
    scientificNameItalic: "Medamatento ocularis",
    scientificNameUpright: "(Sasaji, 1988)",
    rarity: 5,
    description: "沖縄本島にのみ分布する、体長1mmちょっとの非常に小さい種です。名前の通りの大きな眼と、テントウムシらしからぬ楕円形で平たい体形が特徴です。前側の2対の紋は見えづらくなることも多く、2\u2663のミヤタケメダマテントウとの区別が難しいこともあります。"
  },
  {
    number: "5",
    mark: "heart",
    name: "ダイモンテントウ",
    scientificNameItalic: "Coccinella (Coccinella) hasegawai",
    scientificNameUpright: "Miyatake, 1963",
    rarity: 5,
    description: "本州の高山帯にのみ生息します。ハイマツという背の低いマツに付くアブラムシを食べます。頭を下に見た時、翅の赤い部分が大の字に見えることから、ダイモンというセンスのある和名が付けられたと思われます。"
  },
  {
    number: "6",
    mark: "heart",
    name: "ムツボシテントウ",
    scientificNameItalic: "Sticholotis punctata",
    scientificNameUpright: "Crotch, 1874",
    rarity: 2,
    description: "メツブテントウ族という作者の好きなグループの中で、最も普通に見られる種です。主に夜行性と考えられ、冬場の数℃の中でも活動が観察されています。更に、本種は雄が1匹も見つかっておらず、単為生殖（雌が自分のクローンを生む）すると考えられています。"
  },
  {
    number: "7",
    mark: "heart",
    name: "ナナホシメツブテントウ",
    scientificNameItalic: "Nesolotis amabilis",
    scientificNameUpright: "(H. Kamiya, 1965)",
    rarity: 5,
    description: "キイロメツブテントウに近い仲間で、体長や地の色など、紋以外はほとんど同じ外見です。沖縄本島にいるキイロメツブに対し、本種は石垣島と西表島に分布します。紋の大きさには多少変異があり、7\u2665はやや大きい個体をモデルにしています。"
  },
  {
    number: "8",
    mark: "heart",
    name: "ナミテントウ",
    scientificNameItalic: "Harmonia axyridis",
    scientificNameUpright: "(Pallas, 1773)",
    rarity: 1,
    description: "Q\u2660に書いた基本4型の内の「紅型」にあたります。紅型は紋が19個出ますが、それぞれが融合して翅のほとんどが黒くなったり、全ての紋が消失したりと、幅広い変異があります。イラストは、ある程度紋が消えて8個になった状態です。"
  },
  {
    number: "9",
    mark: "heart",
    name: "ココノホシテントウ",
    scientificNameItalic: "Coccinella (Coccinella) explanata",
    scientificNameUpright: "Miyatake, 1963",
    rarity: 4,
    description: ""
  },
  {
    number: "10",
    mark: "heart",
    name: "トホシテントウ",
    scientificNameItalic: "Diekeana admirabilis",
    scientificNameUpright: "(Crotch, 1874)",
    rarity: 2,
    description: "植物食のグループで、カラスウリの葉を食べます。中央前方の紋は\u2665型になることがあります。関東ではよく見られますが、関西では珍しいようです。テントウムシはほとんど成虫で越冬しますが、本種は幼虫で越冬することが知られています。"
  },
  {
    number: "J",
    mark: "heart",
    name: "アイヌテントウ",
    scientificNameItalic: "Coccinella (Coccinella) ainu",
    scientificNameUpright: "Lewis, 1896",
    rarity: 3,
    description: ""
  },
  {
    number: "Q",
    mark: "heart",
    name: "シロジュウシホシテントウ",
    scientificNameItalic: "Calvia quatuordecimguttata",
    scientificNameUpright: "(Linnaeus, 1758)",
    rarity: 3,
    description: "名前に14星とありますが、誤植ではありません。本種は3型の変異があり、残りの2つはちゃんと14星です。赤地に黒紋の「紅型」だけが12星で、昔はジュウニホシテントウという別種とされていました。紅型はなぜか関西以西でしか出ません。"
  },
  {
    number: "K",
    mark: "heart",
    name: "ジュウサンホシテントウ",
    scientificNameItalic: "Hippodamia (Hemisphaerica) tredecimpunctata",
    scientificNameUpright: "(Linnaeus, 1758)",
    rarity: 3,
    description: "その名の通り13個の紋がありますが、たまに消失する紋もあります。テントウムシにしてはかなり細長く、その特徴的な見た目から人気の高い種です。水辺に生息しています。"
  },
  {
    number: "A",
    mark: "club",
    name: "ヒメカメノコテントウ",
    scientificNameItalic: "Propylea japonica",
    scientificNameUpright: "(Thunberg, 1781)",
    rarity: 1,
    description: "ナミテントウより少し小型で、全国的によく見られる種です。多様な斑紋多型があり、イラストは「せすじ型」と呼ばれるものです。1に使える種類が少なかったので、やや無理やりですが採用しました。"
  },
  {
    number: "2",
    mark: "club",
    name: "ミヤタケメダマテントウ",
    scientificNameItalic: "Sasajiella amamiana",
    scientificNameUpright: "Miyatake, 1994",
    rarity: 5,
    description: "4\u2665のメダマテントウと近縁で、こちらは奄美大島にのみ分布します。紋の数以外では、触角の節数、前胸背板（胸部）の形状で見分けることができます。長らく採集記録がありませんでしたが、最近になって採集方法がわかってきました。"
  },
  {
    number: "3",
    mark: "club",
    name: "クロスジチャイロテントウ",
    scientificNameItalic: "Micraspis kiotoensis",
    scientificNameUpright: "(Nakane & M. Araki, 1960)",
    rarity: 4,
    description: "本州と九州の限られた湿地帯に分布します。翅に3本の黒い線があることが特徴ですが、左右の2本は薄くなることや完全に消えることがあり、近縁のムナグロチャイロテントウと外見での区別が難しい場合があります。"
  },
  {
    number: "4",
    mark: "club",
    name: "モリモトメツブテントウ",
    scientificNameItalic: "Sticholotis morimotoi",
    scientificNameUpright: "H. Kamiya, 1965",
    rarity: 4,
    description: "南西諸島に分布する2mm以下の小さなテントウムシです。木の幹を歩き、カイガラムシの仲間を食べます。半球状で艶があり、作者が特に好きなテントウムシの1つです。学名のmorimotoiは、森本博士にちなんで付けられた（献名）ものです。"
  },
  {
    number: "5",
    mark: "club",
    name: "イツホシヒメテントウ",
    scientificNameItalic: "Sasajiscymnus quinquepunctatus",
    scientificNameUpright: "(Weise, 1923)",
    rarity: 3,
    description: ""
  },
  {
    number: "6",
    mark: "club",
    name: "ギョウトクテントウ",
    scientificNameItalic: "Hyperaspis gyotokui",
    scientificNameUpright: "H. Kamiya, 1963",
    rarity: 3,
    description: "九州に分布する珍しい種です。フタホシテントウと近い仲間で、同じように青緑色の眼をしています。一番後ろの紋は勾玉のような特徴的な形をしています。"
  },
  {
    number: "7",
    mark: "club",
    name: "ナナホシテントウ",
    scientificNameItalic: "Coccinella (Coccinella) septempunctata",
    scientificNameUpright: "Linnaeus, 1758",
    rarity: 1,
    description: "下草のある場所に生息するので、住宅街ではなかなか見かけません。沖縄の個体はイラストのように紋が小さく、昔はコモンナナホシテントウという別種と考えられていました。ヨーロッパの個体も同じように小さな紋で、沖縄の個体は大陸由来の可能性もあります。"
  },
  {
    number: "8",
    mark: "club",
    name: "ヤホシテントウ",
    scientificNameItalic: "Harmonia octomaculata",
    scientificNameUpright: "(Fabricius, 1781)",
    rarity: 4,
    description: "なぜ模様の変異があるのにヤホシという名前なのかというと、学名のoctomaculataが八つの紋という意味だからだと考えられます。なぜ学名が八つの紋かなのかはわかりません。"
  },
  {
    number: "9",
    mark: "club",
    name: "ココノホシテントウ",
    scientificNameItalic: "Coccinella (Coccinella) explanata",
    scientificNameUpright: "Miyatake, 1963",
    rarity: 4,
    description: ""
  },
  {
    number: "10",
    mark: "club",
    name: "シロトホシテントウ",
    scientificNameItalic: "Calvia decemguttata",
    scientificNameUpright: "(Linnaeus, 1767)",
    rarity: 2,
    description: "山地性のテントウムシで、薄いオレンジの地にクリーム色の10個の紋があります。紋が全く無くなり、翅すべてがクリーム色になることも多いです。"
  },
  {
    number: "J",
    mark: "club",
    name: "アイヌテントウ",
    scientificNameItalic: "Coccinella (Coccinella) ainu",
    scientificNameUpright: "Lewis, 1896",
    rarity: 3,
    description: ""
  },
  {
    number: "Q",
    mark: "club",
    name: "ジュウニマダラテントウ",
    scientificNameItalic: "Henosepilachna boisduvali",
    scientificNameUpright: "(Mulsant, 1850)",
    rarity: 2,
    description: "南西諸島に分布する種で、体長7~8mmと大型です。植物食のグループで、ウリ科やナス科の葉を食べます。ミナミマダラテントウという種類と外見が酷似していて、解剖しないと同定は難しい種です。"
  },
  {
    number: "K",
    mark: "club",
    name: "オオテントウ",
    scientificNameItalic: "Synonycha grandis",
    scientificNameUpright: "(Thunberg, 1781)",
    rarity: 4,
    description: ""
  },
  {
    number: "A",
    mark: "diamond",
    name: "チャイロテントウ",
    scientificNameItalic: "Micraspis discolor",
    scientificNameUpright: "(Fabricius, 1798)",
    rarity: 2,
    description: "水辺にいる南方系の種です。光に集まる性質が強く、自動販売機の明かりに来ることもあります。トマトのように鮮やかな個体もあり、茶色という名前はあまり似つかわしくないようにも感じます。背中に１本の線が入るため、Aに採用しました。"
  },
  {
    number: "2",
    mark: "diamond",
    name: "ヒメアカホシテントウ",
    scientificNameItalic: "Chilocorus renipustulatus",
    scientificNameUpright: "(Scriba, 1791)",
    rarity: 2,
    description: "身近な所から自然豊富な所まで、幅広い環境にいる種です。翅がヘルメットのような形状で、脚を完全に翅の下に隠すことができます。頭の付き方も特徴的で、前に飛び出さず、顔面が垂直になっています。"
  },
  {
    number: "3",
    mark: "diamond",
    name: "アミダテントウ",
    scientificNameItalic: "Amida tricolor",
    scientificNameUpright: "(Harold, 1878)",
    rarity: 3,
    description: "基本的には3\u2665のような模様ですが、ごく稀にイラストのような変異が出るようです。この変異は今までに2例のみ報告されています。"
  },
  {
    number: "4",
    mark: "diamond",
    name: "ヨツボシテントウ",
    scientificNameItalic: "Phymatosternus lewisii",
    scientificNameUpright: "(Crotch, 1874)",
    rarity: 3,
    description: "丸みの強い小型の可愛らしいテントウムシです。成虫も幼虫もコナラやクヌギのアブラムシを食べます。幼虫は平べったい変わった体型で、なぜかアリに攻撃されることがありません。九州の個体は黄色い色が強く出ます。"
  },
  {
    number: "5",
    mark: "diamond",
    name: "ダイモンテントウ",
    scientificNameItalic: "Coccinella (Coccinella) hasegawai",
    scientificNameUpright: "Miyatake, 1963",
    rarity: 5,
    description: ""
  },
  {
    number: "6",
    mark: "diamond",
    name: "タラメツブテントウ（仮称）",
    scientificNameItalic: "Sticholotis sp.",
    scientificNameUpright: "（未記載）",
    rarity: 5,
    description: "本種は新種記載されておらず、学名未決定の種です。長崎県と佐賀県の県境にある多良岳という山で発見されたため、仮称タラメツブテントウと呼ばれています。実はそれなりに個体数は多く、狙って探すと見つけることができます。"
  },
  {
    number: "7",
    mark: "diamond",
    name: "ナナホシメツブテントウ",
    scientificNameItalic: "Nesolotis amabilis",
    scientificNameUpright: "(H. Kamiya, 1965)",
    rarity: 5,
    description: ""
  },
  {
    number: "8",
    mark: "diamond",
    name: "ナミテントウ",
    scientificNameItalic: "Harmonia axyridis",
    scientificNameUpright: "(Pallas, 1773)",
    rarity: 1,
    description: "「斑型」がベースと思われる、珍しい模様です。他にもナミテントウは、文章では表現しにくい複雑な模様になることや、横一線の赤帯が出るケースなどもあります。"
  },
  {
    number: "9",
    mark: "diamond",
    name: "ココノホシテントウ",
    scientificNameItalic: "Coccinella (Coccinella) explanata",
    scientificNameUpright: "Miyatake, 1963",
    rarity: 4,
    description: ""
  },
  {
    number: "10",
    mark: "diamond",
    name: "ツシママダラテントウ",
    scientificNameItalic: "Afissa chinensis",
    scientificNameUpright: "(Weise, 1912)",
    rarity: 4,
    description: "葉を食べるグループです。日本では元々対馬でしか見つかっていませんでしたが、貨物などに付いて移動したためか、九州北部と山口県でも発見されました。"
  },
  {
    number: "J",
    mark: "diamond",
    name: "アイヌテントウ",
    scientificNameItalic: "Coccinella (Coccinella) ainu",
    scientificNameUpright: "Lewis, 1896",
    rarity: 3,
    description: ""
  },
  {
    number: "Q",
    mark: "diamond",
    name: "クロジュウニホシテントウ",
    scientificNameItalic: "Plotina versicolor",
    scientificNameUpright: "Lewis, 1896",
    rarity: 4,
    description: "3色で透明感のある、非常に美しい種です。胸部の2つ？の紋も含めて12と数えられたための和名と思われますが、もっと良い名前が付けられたのではないかと個人的には思っています。シイカシ類の幹を歩いてカイガラムシを捕食します。また、昼夜両方で活発な活動が観察されています。"
  },
  {
    number: "K",
    mark: "diamond",
    name: "ジュウサンホシテントウ",
    scientificNameItalic: "Hippodamia (Hemisphaerica) tredecimpunctata",
    scientificNameUpright: "(Linnaeus, 1758)",
    rarity: 3,
    description: "その名の通り13個の紋がありますが、たまに消失する紋もあります。テントウムシにしてはかなり細長く、その特徴的な見た目から人気の高い種です。水辺に生息しています。"
  },
  {
    number: "JOKER",
    mark: "",
    name: "ババホシナシテントウ",
    scientificNameItalic: "Hyperaspis amurensis",
    scientificNameUpright: "Weise, 1887",
    rarity: 5,
    description: "関東の一部の山地でしか記録が無い珍しい種です。真っ黒で艶があり、目は青緑色です。無紋なのをあえて「星無し」というのもセンスが感じられます。名実ともにジョーカーに相応しいテントウムシだと思います。"
  },
  {
    number: "JOKER",
    mark: "",
    name: "ババヒメテントウ",
    scientificNameItalic: "Scymnus (Neopullus) babai",
    scientificNameUpright: "Sasaji, 1971",
    rarity: 2,
    description: "馬場さんに献名されたヒメテントウです。水辺に生息し、やや細長い体形が特徴的です。ヒメテントウは、イラストに描かれたような毛が生えていて、この毛並みも種を見分ける手掛かりになることがあります。ですが、多くのヒメテントウは地味で似た種が多く、外見での同定は基本的におすすめできません。"
  },
  {
    number: "裏面",
    mark: "",
    name: "",
    scientificNameItalic: "",
    scientificNameUpright: "",
    rarity: 0,
    description: "てんとうやのロゴを中心に、周囲に唐草模様をあしらっています。この唐草模様は、実は隠しデザインになっています！"
  }
]

export { tentouPlayingCardsData }