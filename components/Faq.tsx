const FAQS = [
  {
    q: "女性ひとりで参加しても大丈夫ですか?",
    a: "大丈夫ですよ。最近は女性おひとりで来てくださる方も増えています。気軽にいらしてください。",
  },
  {
    q: "子どもがまだ駒の動かし方を知らないのですが、ついていけますか?",
    a: "駒の動かし方が全くわからないと、最初はちょっと戸惑ってしまうかもしれません。ただ、基本的にはプリントなどを使いながら一緒に少しずつ覚えていけますので、安心してきてくださいね。",
  },
  {
    q: "何十年ぶりに指します。ルールもあやふやですが、大丈夫でしょうか?",
    a: "大丈夫、大丈夫。まずは楽しくやりましょう。指しているうちに、きっと身体が思い出してきますよ。",
  },
  {
    q: "親子で一緒に参加できますか?",
    a: "できますよ。19:00 〜 21:00 の第2部でしたら、親子でご一緒に参加していただけます。",
  },
  {
    q: "強い人ばかりで浮いてしまわないか心配です…。",
    a: "ちょっと強い方もいらっしゃいますが、私が一人ひとりに対面で指導いたしますので、強さの差はそれほど気にされなくて大丈夫ですよ。",
  },
  {
    q: "持ち物は必要ですか?",
    a: "何もいりません。手ぶらでお越しください。駒や盤は会場にありますよ。",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-[#FAF6EE] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#C19A4A]">
            FAQ
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-[#1B2845] sm:text-4xl">
            よくあるご質問
          </h3>
          <p className="mb-12 text-base text-[#1B2845]/75">
            はじめての方からよくいただく質問に、鈴木先生がお答えします。
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-[#C19A4A]/25 bg-white p-6 shadow-sm"
            >
              <p className="mb-3 flex items-start gap-3 text-base font-bold text-[#1B2845] sm:text-lg">
                <span
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C19A4A] text-sm font-bold text-white"
                  aria-hidden
                >
                  Q
                </span>
                <span>{item.q}</span>
              </p>
              <p className="flex items-start gap-3 text-sm leading-relaxed text-[#1B2845]/80 sm:text-base">
                <span
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1B2845] text-sm font-bold text-white"
                  aria-hidden
                >
                  A
                </span>
                <span>{item.a}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
