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

## 後で確認する項目

- 席料が 3,000 円に含まれるか別払いか → サイトには「※会場使用料は別途必要な場合があります」と注記
- 入会金の有無 → 現在は記載なし(なし前提)
- 鈴木先生本人による文言・写真の最終チェック
- 教室の様子の写真(あれば Instructor の下や About に追加可能)

## 立ち上げ計画書

`~/.claude/plans/clever-cooking-blossom.md` (Claude Code のローカル領域に保存)
