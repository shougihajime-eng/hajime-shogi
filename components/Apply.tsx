const LINE_URL = "https://line.me/ti/g/wM-e6uHMHv";
const EMAIL = "hajime19870909@icloud.com";

const STEPS = [
  {
    num: "1",
    title: "LINEグループに参加",
    desc: "下のボタンから LINE グループに入ってください。それだけ!",
  },
  {
    num: "2",
    title: "出欠を回答",
    desc: "毎回の開催ごとに、グループ内で出欠アンケートが届きます。",
  },
  {
    num: "3",
    title: "当日 会場へ",
    desc: "Y.Y.World 囲碁・将棋にお越しください。お待ちしています!",
  },
];

export default function Apply() {
  return (
    <section id="apply" className="bg-[#1B2845] py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#C19A4A]">
            HOW TO APPLY
          </h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            参加はとっても簡単!
          </h3>
          <p className="mb-12 text-sm text-white/70 sm:text-base">
            むずかしい手続きはありません。LINE で連絡 → 当日来場、それだけです。
          </p>
        </div>

        <ol className="mb-12 grid gap-6 sm:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.num}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <p className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[#C19A4A] font-bold">
                {s.num}
              </p>
              <h4 className="mb-2 text-lg font-bold">{s.title}</h4>
              <p className="text-sm leading-relaxed text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="text-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 min-w-[280px] items-center justify-center gap-2 rounded-full bg-[#06C755] px-10 text-lg font-bold text-white shadow-lg shadow-[#06C755]/30 transition hover:bg-[#05B248] active:scale-95"
          >
            LINEグループに参加する
          </a>
          <p className="mt-4 text-xs text-white/50">
            ※ タップすると LINE アプリが起動します。
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 sm:p-8">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#C19A4A]">
            LINE が使えない方へ
          </p>
          <p className="mb-4 text-sm text-white/75 sm:text-base">
            メールでもお問い合わせいただけます。
            <br />
            お気軽にどうぞ!
          </p>
          <a
            href={`mailto:${EMAIL}?subject=はじめ将棋教室について`}
            className="inline-flex h-12 max-w-full items-center justify-center gap-2 break-all rounded-full border-2 border-white/40 bg-white/0 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1B2845] sm:px-6 sm:text-base"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
