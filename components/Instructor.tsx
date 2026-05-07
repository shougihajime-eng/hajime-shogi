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

        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
          <div className="mx-auto flex size-48 items-center justify-center rounded-full bg-gradient-to-br from-[#E8D9B5] to-[#C19A4A] shadow-xl shadow-[#C19A4A]/30 sm:size-56 md:size-64">
            <span className="text-7xl font-black text-white drop-shadow sm:text-8xl">
              肇
            </span>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium tracking-wider text-[#9A7A38]">
              講師
            </p>
            <h4 className="mb-4 text-3xl font-bold text-[#1B2845]">
              鈴木 肇 先生
            </h4>
            <ul className="mb-5 space-y-1.5 text-base text-[#1B2845]/80">
              <li>・元 奨励会三段</li>
              <li>・第32期 全国アマチュア王将</li>
              <li>・第72回 全日本アマチュア将棋名人</li>
              <li>・横浜市出身</li>
            </ul>
            <p className="text-sm leading-relaxed text-[#1B2845]/70">
              「礼に始まり礼に終わる」を大切にしながら、楽しんで強くなる指導を心がけています。
              YouTube「はじめ先生の将棋連勝チャンネル」でも将棋の楽しさを発信中。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
