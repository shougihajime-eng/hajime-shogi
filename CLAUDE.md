# はじめ将棋教室 公式サイト

横浜・吉野町の Y.Y.World 囲碁・将棋で開催している鈴木 肇 先生の将棋教室の宣伝用 WEB サイト。

## 進捗(いまここ)

- ✅ 直近で済んだこと: Next.js 雛形作成、トップページ実装、Vercel 公開
- 🟡 進行中: なし
- 🔜 次の一歩: 鈴木先生本人による文言・写真の最終チェック → 必要なら修正

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
- データベース: なし(静的ランディングページ)

## 主要ファイル

| ファイル | 役割 |
|---|---|
| `app/layout.tsx` | 共通レイアウト・SEO メタデータ・JSON-LD・StickyCTA配置 |
| `app/page.tsx` | トップページ(全セクションを並べる) |
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

## 教室基本情報

| 項目 | 内容 |
|---|---|
| 教室名 | はじめ将棋教室 |
| 講師 | 鈴木 肇 (元奨励会三段、第32期全国アマ王将、第72回全日本アマ名人) |
| 会場 | Y.Y.World 囲碁・将棋 |
| 住所 | 〒232-0014 神奈川県横浜市南区吉野町3-10 シャンテ2階 |
| 会場電話 | 045-251-4551 |
| 開催日 | 木曜日 (不定期) |
| 1部 子ども教室 | 17:00-19:00 / 3,000円 |
| 2部 大人教室 | 19:00-21:00 / 3,000円 |
| 通し参加 | 17:00-21:00 / 6,000円 |
| 体験参加 | 席料 + 1,000円 |
| LINE 招待 URL | https://line.me/ti/g/wM-e6uHMHv |
| YouTube | https://www.youtube.com/channel/UC29EGo2JmszXaG6rfuCiOlA |
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

## 写真の差し替え方(鈴木先生本人の顔写真を入れる時)

1. 写真ファイル(.jpg または .png)を `public/instructor.jpg` という名前で保存
2. `components/Instructor.tsx` のプレースホルダー部分を以下に書き換え:
   ```tsx
   import Image from "next/image";
   // ...
   <div className="relative mx-auto size-48 overflow-hidden rounded-full shadow-xl shadow-[#C19A4A]/30 sm:size-56 md:size-64">
     <Image
       src="/instructor.jpg"
       alt="鈴木 肇 先生"
       fill
       className="object-cover"
       sizes="(max-width: 768px) 224px, 256px"
       priority
     />
   </div>
   ```
3. `git add . && git commit -m "feat: 講師写真を差し替え" && git push`

## 後で確認する項目(プレースホルダーで進めている)

- 席料が 3,000 円に含まれるか別払いか → サイト下部に「※会場使用料は別途必要な場合があります」と注記
- 入会金の有無 → 現在は記載なし(なし前提)
- 鈴木先生本人による文言チェック
- 教室の様子の写真(あれば Instructor の下や Hero に追加可能)

## 立ち上げ計画書

`~/.claude/plans/clever-cooking-blossom.md` (Claude Code のローカル領域に保存)
