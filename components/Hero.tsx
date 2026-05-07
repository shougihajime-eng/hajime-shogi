import Image from "next/image";

const LINE_URL = "https://line.me/ti/g/wM-e6uHMHv";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/solo-banner.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6EE]/95 via-[#F5EBD9]/90 to-[#E8D9B5]/85" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E76F51] px-4 py-1.5 text-xs font-bold tracking-wider text-white shadow-md sm:text-sm">
          子ども・大人 大歓迎!
        </span>
        <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-[#1B2845] drop-shadow-sm sm:text-6xl">
          はじめ将棋教室
        </h1>
        <p className="mb-3 text-2xl font-bold text-[#C19A4A] sm:text-3xl">
          将棋って、楽しい!
        </p>
        <p className="mb-10 text-base leading-relaxed text-[#1B2845]/80 sm:text-lg">
          アマチュア将棋トップクラスの <span className="font-bold">鈴木 肇</span> 先生と一緒に、
          <br className="hidden sm:block" />
          はじめの一手を踏み出してみませんか?
          <br />
          初めての方も、お子さんも大人も、気楽にどうぞ!
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 min-w-[260px] items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 text-lg font-bold text-white shadow-lg shadow-[#06C755]/30 transition hover:bg-[#05B248] hover:shadow-xl active:scale-95"
          >
            まずは LINE で参加
          </a>
          <a
            href="#schedule"
            className="inline-flex h-14 min-w-[200px] items-center justify-center rounded-full border-2 border-[#1B2845] bg-white/80 px-8 text-base font-semibold text-[#1B2845] backdrop-blur transition hover:bg-[#1B2845] hover:text-white"
          >
            時間と料金を見る
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-16 size-72 rotate-12 rounded-3xl bg-[#C19A4A]/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 bottom-6 size-40 -rotate-6 rounded-2xl bg-[#1B2845]/8"
      />
    </section>
  );
}
