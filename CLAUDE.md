# はじめ将棋教室 公式サイト

横浜・吉野町の Y.Y.World 囲碁・将棋で開催している鈴木 肇 先生の将棋教室の宣伝用 WEB サイト。

## 進捗(いまここ)

- ✅ 直近で済んだこと: トップページに **FAQ(よくあるご質問)** セクションを追加(2026-05-18)。女性ひとり参加・初心者の子ども・久しぶりの大人・親子参加・棋力差・持ち物の 6 つに鈴木先生の言葉でお答え
- 🟡 進行中: なし
- 🔜 次の一歩: 数日〜2週間後に Search Console で「カバレッジ」を確認してインデックス登録状況をチェック。並行して「教室の様子の写真」追加や独自ドメイン取得を検討

## 本番URL・リポジトリ

- 公開サイト: **https://hajime-shogi.vercel.app**
- GitHub repo: https://github.com/shougihajime-eng/hajime-shogi
- Vercel ダッシュボード: https://vercel.com/shougihajime-3368s-projects/hajime-shogi
- 既存サイト(参考のみ・触らない): https://blog.goo.ne.jp/hajimekyoshitsu

## 技術構成

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- フォント: Noto Sans JP (Google Fonts)
- アイコン: lucide-react + 自作 X ロゴ
- デプロイ: Vercel (GitHub `main` ブランチ自動デプロイ)
- データベース: 共有 Supabase の `hajime_shogi` スキーマ → `site_settings` テーブル(key-value)
- 認証: 合言葉 1 つ + HMAC 署名 Cookie (`jose` ライブラリ、30日)

## 管理画面(/admin)

- URL: https://hajime-shogi.vercel.app/admin/login
- 合言葉: ローカル `.env.local` の `ADMIN_PASSWORD` と Vercel 環境変数の両方に保存(GitHub には絶対上げない)
- 編集できるもの: 次回開催 / お知らせ / 月謝・料金 / 講師紹介
- 編集後 30 秒以内にトップページに反映(revalidatePath で再生成)

### 管理画面の構造

| ファイル | 役割 |
|---|---|
| `proxy.ts` | `/admin/*` を合言葉認証で守る(Next.js 16 の middleware → proxy 規約) |
| `lib/auth.ts` | jose で JWT 署名・検証 |
| `lib/supabase.ts` | service_role での Supabase クライアント |
| `lib/settings.ts` | site_settings テーブルの読み書き(型付き、デフォルト値あり) |
| `app/admin/login/page.tsx` | 合言葉入力フォーム |
| `app/admin/login/actions.ts` | login / logout の Server Action |
| `app/admin/layout.tsx` | 管理画面のヘッダー(ログアウト・サイトを見る) |
| `app/admin/page.tsx` | 4 セクションの編集フォーム |
| `app/admin/actions.ts` | 各セクション保存の Server Action |
| `components/NextSessionBanner.tsx` | トップ最上部の「次回開催」バナー |
| `components/NewsBanner.tsx` | お知らせ表示(visible=true のときのみ) |

### 環境変数(Vercel + .env.local)

| 名前 | 用途 |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | 共有 Supabase の URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 公開用 anon キー(現在は SSR 経由で読むため未使用だが将来用) |
| `SUPABASE_SERVICE_ROLE_KEY` | 管理画面の書き込み・公開ページの読み込みに使用(サーバ専用) |
| `ADMIN_PASSWORD` | 管理画面の合言葉 |
| `ADMIN_SECRET` | Cookie 署名用のランダム文字列 |
| `GOOGLE_SITE_VERIFICATION` | (任意)Google Search Console の所有権確認用コード。設定すると `<meta name="google-site-verification">` が自動で出る |
| `BING_SITE_VERIFICATION` | (任意)Bing Webmaster Tools の所有権確認用コード。設定すると `<meta name="msvalidate.01">` が自動で出る |

## 主要ファイル

| ファイル | 役割 |
|---|---|
| `app/layout.tsx` | 共通レイアウト・SEO メタデータ・JSON-LD(EducationalOrganization + LocalBusiness)・StickyCTA配置 |
| `app/page.tsx` | トップページ(全セクションを並べる) |
| `app/sitemap.ts` | `sitemap.xml` を自動生成(Next.js が `/sitemap.xml` で配信) |
| `app/robots.ts` | `robots.txt` を自動生成(`/admin` を Disallow、sitemap を指示) |
| `app/globals.css` | Tailwind import + テーマ変数 |
| `components/Hero.tsx` | ヒーロー(教室名 + LINE CTA) |
| `components/About.tsx` | 教室について |
| `components/Schedule.tsx` | 時間割と料金 |
| `components/Instructor.tsx` | 講師紹介(鈴木先生) |
| `components/Access.tsx` | アクセス・地図 |
| `components/Apply.tsx` | お申込みの流れ |
| `components/SocialLinks.tsx` | SNS リンク |
| `components/Footer.tsx` | フッター |
| `components/StickyLineCTA.tsx` | スマホ画面下部の常時 LINE CTA |
| `components/NextSessionBanner.tsx` | 次回開催バナー(管理画面で操作) |
| `components/NewsBanner.tsx` | お知らせバナー(管理画面で操作) |

## 教室基本情報

| 項目 | 内容 |
|---|---|
| 教室名 | はじめ将棋教室 |
| 講師 | 鈴木 肇 (元奨励会三段、第32期全国アマ王将、第72回全日本アマ名人、加古川青流戦アマ選抜大会 複数回優勝・本選出場4回) |
| 会場 | Y.Y.World 囲碁・将棋 |
| 住所 | 〒232-0014 神奈川県横浜市南区吉野町3-10 シャンテ2階 |
| 会場電話 | 045-251-4551 |
| 開催日 | 木曜日 (不定期) |
| 1部 子ども教室 | 17:00-19:00 / 3,000円 |
| 2部 大人教室 | 19:00-21:00 / 3,000円 |
| 通し参加 | 17:00-21:00 / 6,000円 |
| 体験参加 | 席料 + 1,000円 |
| LINE 招待 URL | https://line.me/ti/g/wM-e6uHMHv |
| YouTube(本人) | はじめ先生の将棋研究所 https://www.youtube.com/channel/UC29EGo2JmszXaG6rfuCiOlA |
| YouTube(コラボ) | 棋士中村太地将棋はじめch https://www.youtube.com/channel/UCC0Q1NBgGJRzFFPe1IPYtwg |
| X | https://x.com/hajjme99 |
| Instagram | https://www.instagram.com/hajimesensei/ |

## 検証コマンド

```powershell
# 開発サーバ起動
npm run dev
# → http://localhost:3000

# 本番ビルド(エラーがないかの確認)
npm run build

# Lint
npm run lint
```

## 公開フロー

1. ローカルで変更 → `npm run dev` で確認
2. `git add` → `git commit` → `git push origin main`
3. Vercel が自動でビルド → 本番に反映(数十秒〜2分)

## 画像ファイル(public/)

| ファイル | 出典 | 用途 |
|---|---|---|
| `public/instructor.jpg` | YouTube「はじめ先生の将棋研究所」のチャンネルアバター | 講師紹介の丸枠肖像 |
| `public/youtube-banner.jpg` | YouTube「棋士中村太地将棋はじめch」のチャンネルバナー | 講師紹介下のコラボ紹介 |
| `public/solo-banner.jpg` | YouTube「はじめ先生の将棋研究所」のチャンネルバナー(将棋盤) | ヒーロー背景 |

差し替えるときはファイル名そのままで上書きすれば即反映される。新しい写真をもらったら以下のように上書き:
```powershell
# 写真ファイルを public/ に置いてから
git add public/instructor.jpg
git commit -m "feat: 講師写真を差し替え"
git push
```

## 連絡先(サイト掲載済み)

- LINE グループ: https://line.me/ti/g/wM-e6uHMHv
- メール(LINE が使えない方向け): hajime19870909@icloud.com
- 会場電話: 045-251-4551

## SEO・検索エンジン対応

Google / Yahoo / Bing の検索結果に表示させるための仕組み。

### 実装済みの内容

| 項目 | ファイル | 内容 |
|---|---|---|
| サイトマップ | `app/sitemap.ts` | `https://hajime-shogi.vercel.app/sitemap.xml` で配信。トップページを登録 |
| robots.txt | `app/robots.ts` | `https://hajime-shogi.vercel.app/robots.txt` で配信。`/admin` を Disallow、sitemap の場所を指示 |
| canonical | `app/layout.tsx` の `alternates.canonical` | 正規 URL を `/` に指定(重複ページ判定を防ぐ) |
| メタタイトル / description | `app/layout.tsx` の `metadata` | 検索結果に出る文言。`title.template` で各ページ末尾に「\| はじめ将棋教室」 |
| OG 画像(SNSシェア用) | `app/layout.tsx` の `openGraph.images` | `solo-banner.jpg` を 1200×630 として登録 |
| 構造化データ | `app/layout.tsx` の `jsonLd` | `EducationalOrganization` + `LocalBusiness`(住所・電話・営業時間・料金帯・地理座標) |
| Search Console 検証 | 環境変数 `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` | 値を入れると `<head>` に自動でメタタグが出る |
| 管理画面の noindex | `app/admin/layout.tsx` / `app/admin/login/page.tsx` の `metadata.robots` | `/admin` 配下は検索結果に出ない |

### Google Search Console への登録手順(はじめさん用)

検索に載るためには **Google Search Console** にサイトを登録するのが最重要。次の順で進める。

1. [Google Search Console](https://search.google.com/search-console) にアクセス(Google アカウントでログイン)
2. 「プロパティを追加」→ **URL プレフィックス** を選択
3. URL に `https://hajime-shogi.vercel.app` を入力 → 「続行」
4. 所有権の確認方法で **HTML タグ** を選ぶ
5. 表示された `<meta name="google-site-verification" content="xxxxxxxxxx" />` の **`xxxxxxxxxx` の部分だけコピー**
6. [Vercel ダッシュボード](https://vercel.com/shougihajime-3368s-projects/hajime-shogi) → Settings → Environment Variables で以下を追加:
   - Name: `GOOGLE_SITE_VERIFICATION`
   - Value: コピーしたコード(`xxxxxxxxxx`)
   - Environment: Production にチェック
7. Vercel ダッシュボードの Deployments タブ → 最新のデプロイの「…」→ Redeploy を押す(数十秒で再デプロイ)
8. Search Console に戻って「確認」ボタンを押す → 緑のチェックが出れば OK
9. 左メニュー「サイトマップ」→ 「新しいサイトマップの追加」に `sitemap.xml` と入力して送信
10. 数日〜2週間で Google が巡回開始 → 検索結果に出るようになる

### Bing Webmaster Tools への登録(Yahoo!検索も Bing 由来なので推奨)

Yahoo! Japan の検索結果は Google エンジン由来だが、Bing にも登録しておくと Edge ブラウザ等の検索にも出やすい。

1. [Bing Webmaster Tools](https://www.bing.com/webmasters/) にアクセス
2. 「Google Search Console からインポート」を選ぶと既に登録した情報を流用できる(楽)
3. または手動登録の場合: `https://hajime-shogi.vercel.app` を追加 → HTML メタタグの値をコピー
4. Vercel の環境変数に `BING_SITE_VERIFICATION` として追加 → Redeploy
5. Bing 側で確認 → サイトマップ `sitemap.xml` を送信

### Yahoo! Japan 検索について

- Yahoo! Japan の検索結果は Google の検索エンジンを使っている
- → **Google Search Console に登録すれば Yahoo! にも自動で反映される**
- 別途 Yahoo! 専用の登録作業は不要

### 動作確認(公開後にやること)

| 確認内容 | 方法 |
|---|---|
| sitemap.xml が出ているか | ブラウザで `https://hajime-shogi.vercel.app/sitemap.xml` を開く → XML が表示されれば OK |
| robots.txt が出ているか | ブラウザで `https://hajime-shogi.vercel.app/robots.txt` を開く → `Disallow: /admin` の行があれば OK |
| 構造化データが正しいか | [Google リッチリザルトテスト](https://search.google.com/test/rich-results) に URL を貼って実行 → エラー 0 が望ましい |
| OG 画像が出るか | [OGP 確認ツール](https://www.opengraph.xyz/) に URL を貼ると LINE / Twitter で見た目を確認できる |
| インデックス状況 | Google で `site:hajime-shogi.vercel.app` と検索 → ヒットすればインデックス済み |
| `/admin` がインデックスから除外されているか | Google で `site:hajime-shogi.vercel.app/admin` と検索 → ヒットしなければ OK |

### 検索順位を上げるためにこれからできること(優先順)

1. **教室の様子の写真を追加** → 画像検索からの流入が増える
2. **「教室の様子」「実績」を別ページとして作成** → 検索キーワードを増やせる
3. **独自ドメイン取得**(例: `hajime-shogi.com`)→ Vercel ダッシュボードで簡単に紐づけ可能。`.vercel.app` より信頼度が上がる
4. **外部リンク獲得** → Y.Y.World 公式や中村太地八段のチャンネル概要欄等からリンクをもらうと評価が上がる

## 後で確認する項目

- 席料が 3,000 円に含まれるか別払いか → サイトには「※会場使用料は別途必要な場合があります」と注記
- 入会金の有無 → 現在は記載なし(なし前提)
- 鈴木先生本人による文言・写真の最終チェック
- 教室の様子の写真(あれば Instructor の下や About に追加可能)

## 立ち上げ計画書

`~/.claude/plans/clever-cooking-blossom.md` (Claude Code のローカル領域に保存)
