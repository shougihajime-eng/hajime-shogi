export default function Instructor() {
  return (
    <section id="instructor" className="bg-[#FAF6EE] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#C19A4A]">
            INSTRUCTOR
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-[#1B2845] sm:text-4xl">
            講師紹介
          </h3>
        </div>

        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <div className="mx-auto flex size-48 items-center justify-center rounded-full bg-gradient-to-br from-[#E8D9B5] to-[#C19A4A] shadow-xl shadow-[#C19A4A]/30 sm:size-56 md:size-60">
            <span className="text-7xl font-black text-white drop-shadow sm:text-8xl">
              肇
            </span>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium tracking-wider text-[#9A7A38]">
              講師
            </p>
            <h4 className="mb-6 text-3xl font-bold text-[#1B2845]">
              鈴木 肇 先生
            </h4>

            <div className="mb-5">
              <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#9A7A38]">
                主な経歴
              </p>
              <ul className="space-y-1.5 text-base leading-relaxed text-[#1B2845]/85">
                <li>・元 奨励会三段</li>
                <li>・第32期 全国アマチュア王将</li>
                <li>・第72回 全日本アマチュア将棋名人</li>
                <li>・加古川青流戦 アマチュア選抜大会 複数回優勝(プロ棋戦本選出場 計4回)</li>
                <li>・横浜市出身</li>
              </ul>
            </div>

            <div className="mb-5">
              <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#9A7A38]">
                指導実績
              </p>
              <ul className="space-y-1.5 text-base leading-relaxed text-[#1B2845]/85">
                <li>・全国大会で優勝した子どもを多数育成</li>
                <li>・現在 奨励会で活躍する教え子も輩出</li>
              </ul>
            </div>

            <p className="text-sm leading-relaxed text-[#1B2845]/70">
              「礼に始まり礼に終わる」を大切にしながら、まずは将棋を心から楽しんでもらう
              ことを一番に。お子さんも大人の方も、初心者の方も、それぞれの棋力に合わせて
              ゆっくり丁寧にお教えします。
              <br />
              <br />
              YouTube では自身のチャンネル「はじめ先生の将棋研究所」と、
              中村太地 八段(元 王座)とのコラボ「棋士中村太地将棋はじめch」でも
              発信中です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
