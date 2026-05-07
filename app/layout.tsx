import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import StickyLineCTA from "@/components/StickyLineCTA";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hajime-shogi.vercel.app"),
  title: {
    default: "はじめ将棋教室 | 横浜・吉野町 鈴木 肇 先生の将棋教室",
    template: "%s | はじめ将棋教室",
  },
  description:
    "横浜市営地下鉄「吉野町駅」徒歩2分、Y.Y.World 囲碁・将棋で毎週木曜開催。元奨励会三段・全日本アマ名人 鈴木 肇 先生による子ども教室・大人教室。初心者から有段者まで歓迎。",
  keywords: [
    "将棋教室",
    "横浜",
    "吉野町",
    "鈴木肇",
    "子ども将棋",
    "大人将棋",
    "Y.Y.World",
    "南区",
  ],
  openGraph: {
    title: "はじめ将棋教室 | 横浜・吉野町",
    description:
      "鈴木 肇 先生の将棋教室。横浜・吉野町駅徒歩2分。子ども教室・大人教室を毎週木曜日に開催。",
    url: "https://hajime-shogi.vercel.app",
    siteName: "はじめ将棋教室",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "はじめ将棋教室 | 横浜・吉野町",
    description: "鈴木 肇 先生の将棋教室。横浜・吉野町駅徒歩2分。",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "はじめ将棋教室",
  url: "https://hajime-shogi.vercel.app",
  description:
    "鈴木 肇 先生の将棋教室。横浜・吉野町駅徒歩2分の Y.Y.World 囲碁・将棋で開催。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "吉野町3-10 シャンテ2階",
    addressLocality: "横浜市南区",
    addressRegion: "神奈川県",
    postalCode: "232-0014",
    addressCountry: "JP",
  },
  telephone: "+81-45-251-4551",
  founder: { "@type": "Person", name: "鈴木 肇" },
  sameAs: [
    "https://x.com/hajjme99",
    "https://www.instagram.com/hajimesensei/",
    "https://www.youtube.com/channel/UC29EGo2JmszXaG6rfuCiOlA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-20 sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <StickyLineCTA />
      </body>
    </html>
  );
}
