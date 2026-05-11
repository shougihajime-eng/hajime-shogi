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
    "横浜 将棋教室",
    "吉野町 将棋",
    "横浜市南区 将棋",
    "子ども 将棋",
    "大人 将棋",
    "鈴木肇",
    "Y.Y.World",
  ],
  applicationName: "はじめ将棋教室",
  authors: [{ name: "はじめ将棋教室" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "はじめ将棋教室 | 横浜・吉野町",
    description:
      "鈴木 肇 先生の将棋教室。横浜・吉野町駅徒歩2分。子ども教室・大人教室を毎週木曜日に開催。",
    url: "https://hajime-shogi.vercel.app",
    siteName: "はじめ将棋教室",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/solo-banner.jpg",
        width: 1200,
        height: 630,
        alt: "はじめ将棋教室 — 横浜・吉野町の鈴木 肇 先生の将棋教室",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "はじめ将棋教室 | 横浜・吉野町",
    description: "鈴木 肇 先生の将棋教室。横浜・吉野町駅徒歩2分。",
    images: ["/solo-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  category: "education",
};

const SITE_URL = "https://hajime-shogi.vercel.app";

const address = {
  "@type": "PostalAddress",
  streetAddress: "吉野町3-10 シャンテ2階",
  addressLocality: "横浜市南区",
  addressRegion: "神奈川県",
  postalCode: "232-0014",
  addressCountry: "JP",
} as const;

const sameAs = [
  "https://x.com/hajjme99",
  "https://www.instagram.com/hajimesensei/",
  "https://www.youtube.com/channel/UC29EGo2JmszXaG6rfuCiOlA",
  "https://www.youtube.com/channel/UCC0Q1NBgGJRzFFPe1IPYtwg",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#org`,
    name: "はじめ将棋教室",
    alternateName: ["はじめ吉野町", "鈴木 肇 将棋教室"],
    url: SITE_URL,
    logo: `${SITE_URL}/instructor.jpg`,
    image: `${SITE_URL}/solo-banner.jpg`,
    description:
      "鈴木 肇 先生の将棋教室。横浜・吉野町駅徒歩2分の Y.Y.World 囲碁・将棋で開催。子ども教室・大人教室。",
    address,
    telephone: "+81-45-251-4551",
    founder: { "@type": "Person", name: "鈴木 肇" },
    sameAs,
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "はじめ将棋教室",
    image: `${SITE_URL}/solo-banner.jpg`,
    url: SITE_URL,
    telephone: "+81-45-251-4551",
    priceRange: "¥3,000 – ¥6,000",
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.4378,
      longitude: 139.6206,
    },
    areaServed: [
      { "@type": "City", name: "横浜市" },
      { "@type": "AdministrativeArea", name: "神奈川県" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "17:00",
        closes: "21:00",
      },
    ],
    sameAs,
  },
];

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
