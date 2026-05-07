export default function About() {
  return (
    <section id="about" className="bg-[#FAF6EE] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#C19A4A]">
          ABOUT
        </h2>
        <h3 className="mb-10 text-3xl font-bold text-[#1B2845] sm:text-4xl">
          こんな教室です
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              emoji: "♟",
              title: "初めてでも大丈夫",
              body: "駒の動かし方からゆっくり丁寧に。「全くの初心者です」という方こそ、ぜひ来てください。",
            },
            {
              title: "楽しみながら強く",
              emoji: "✦",
              body: "「礼に始まり礼に終わる」を大切に。でも堅苦しくなく、笑い声も飛び交うアットホームな雰囲気です。",
            },
            {
              emoji: "♛",
              title: "子どもも大人も",
              body: "1部は子ども、2部は大人。お子さんが将棋を始めたい家庭にも、もう一度指したい大人の方にも。",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#C19A4A]/25 bg-white p-6 text-center shadow-sm"
            >
              <p className="mb-2 text-3xl text-[#C19A4A]" aria-hidden>
                {card.emoji}
              </p>
              <h4 className="mb-2 text-base font-bold text-[#1B2845]">
                {card.title}
              </h4>
              <p className="text-sm leading-relaxed text-[#1B2845]/75">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-base leading-relaxed text-[#1B2845]/80 sm:text-lg">
          まずは1局、指してみてください。
          <br className="hidden sm:block" />
          きっと「将棋って、こんなに楽しいんだ!」と感じてもらえるはずです。
        </p>
      </div>
    </section>
  );
}
