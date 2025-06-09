import type { Translations } from "@/types/translations";

export const ja: Translations = {
  // メタデータ
  pageTitle: "ポートフォリオ | 丸茂 達則",
  pageDescription: "丸茂達則のポートフォリオサイト",

  // ヘッダー・プロフィール
  portfolio: "ポートフォリオ",
  portfolioDescription:
    "私のプロジェクト一覧です。タグを選択してフィルタリングできます。",
  name: "丸茂 達則",
  jobTitle: "ソフトウェアエンジニア・AI愛好家",
  bio: "インテリジェントなアプリケーション開発に情熱を持つソフトウェアエンジニアです。React、FastAPI、MongoDBを使用したフルスタック開発を専門とし、AI、機械学習、データセキュリティに強い関心を持っています。現在BCITでコンピュータシステム技術を学んでおり、WebテクノロジーとAIを橋渡しする効率的でユーザーフレンドリーなソリューションの作成を楽しんでいます。常に学び、常に進化しています。",

  // フィルター
  filterByTags: "タグでフィルター",
  filterModeTitle: "フィルターモード",
  filterModeAnd: "AND（すべてのタグに一致）",
  filterModeOr: "OR（いずれかのタグに一致）",
  filterClear: "フィルターをクリア",
  filterShow: "フィルターを表示",
  filterHide: "フィルターを隠す",

  // プロジェクト
  projectsFoundMessage: "{count}件のプロジェクトが見つかりました",
  projectsNotFoundMessage: "選択されたタグに一致するプロジェクトがありません。",
  projectSiteButton: "サイトを閲覧",
  projectDemoButton: "デモを視聴",
  projectDocumentationButton: "ドキュメント",
  projectGithubRepo: "GitHubリポジトリ",

  // 日付フォーマット
  january: "1月",
  february: "2月",
  march: "3月",
  april: "4月",
  may: "5月",
  june: "6月",
  july: "7月",
  august: "8月",
  september: "9月",
  october: "10月",
  november: "11月",
  december: "12月",

  // プロジェクトデータ
  numberedTetrisTitle: "数字テトリス",
  numberedTetrisDescription:
    "数字とテトリスを組み合わせたゲームを開発し、縦または横に並んだ数字の合計が10になるとブロックが消える仕組みを実装。オブジェクト指向の考え方を活かしてクラス設計を行い、GUIや音声の実装、ゲームループの構築を担当。企画からテストまで、すべての工程に関わり、プロジェクトの中心として取り組んだ。",
  myBodyBuddyTitle: "マイボディバディ",
  myBodyBuddyDescription:
    "AIを活用して、初心者向けにパーソナライズされたワークアウトと食事プランを提案する健康・フィットネスアプリをチームで開発。主にデータベース設計、プロフィールページと食事メニューページの実装、目標達成に必要な一日の摂取カロリーと消費カロリーを算出するアルゴリズムを担当。",

  rateVanRentTitle: "Rate Van Rent",
  rateVanRentDescription:
    "バンクーバーで部屋探しをしている人が、他の入居者の体験談やレビューをもとに、より良い住まいを見つけられるようにするWebアプリをチームで作成。自分にとっては初めてのWeb開発プロジェクトで、物件情報の投稿機能を担当。エラーハンドリングやフォームバリデーションの実装も行った。",

  blissTitle: "Bliss",
  blissDescription:
    "Apple Watchから取得したHealthデータをもとに現在のストレスレベルを検出し、それに応じてストレス軽減が期待できる音楽を、ユーザーのSpotifyの再生履歴から選んで3曲推薦するアプリを開発。主に、Apple HealthKitからHealthデータを取得し、FastAPIを用いたバックエンドで分析・推薦された楽曲を表示するiOSアプリの開発を担当。過去14日分のHealthデータと現在のデータを照合してストレスレベルを推定するアルゴリズムの実装や、音楽データと健康データを統合して活用するシステム設計も手がけた。",

  myDogAppTitle: "My Dog App",
  myDogAppDescription:
    "無料のDog APIを使用して犬種のリストと画像データを取得し、画像から犬種名を取得したり、検索された犬種のランダムな写真を表示できる、シンプルなAndroidアプリを作成。",

  skylineZiplineTitle: "Skyline Zipline",
  skylineZiplineDescription:
    "実習で、ジップライン企業の、点検作業をデジタル化するプロジェクトに取り組んだ。主に、テーブルコンポーネントの実装、Middlewareを用いたAuthenticationとAuthorizationの実装、セキュリティ面の強化を担当。",
};
