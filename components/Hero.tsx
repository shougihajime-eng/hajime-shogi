const LINE_URL = "https://line.me/ti/g/wM-e6uHMHv";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF6EE] via-[#F5EBD9] to-[#E8D9B5] py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-[#9A7A38] sm:text-sm">
          YOKOHAMA · YOSHINOCHO
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1B2845] sm:text-6xl">
          はじめ将棋教室
        </h1>
        <p className="mb-3 text-lg font-medium text-[#1B2845]/80 sm:text-xl">
          一手一手、丁寧に。
        </p>
        <p className="mb-10 text-base text-[#1B2845]/70 sm:text-lg">
          元奨励会三段・全日本アマ名人{" "}
          <span className="font-semibold">鈴木 肇</span> 先生の将棋教室。
          <br className="hidden sm:block" />
          子どもから大人まで、初心者大歓迎。
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 min-w-[260px] items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 text-lg font-bold text-white shadow-lg shadow-[#06C755]/30 transition hover:bg-[#05B248] hover:shadow-xl"
          >
            LINEグループに参加
          </a>
          <a
            href="#schedule"
            className="inline-flex h-14 min-w-[200px] items-center justify-center rounded-full border-2 border-[#1B2845] px-8 text-base font-semibold text-[#1B2845] transition hover:bg-[#1B2845] hover:text-white"
          >
            時間割と料金を見る
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-80 rotate-12 rounded-3xl bg-[#C19A4A]/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 bottom-8 size-44 -rotate-6 rounded-2xl bg-[#1B2845]/5"
      />
    </section>
  );
}
