export default function About() {
  return (
    <section id="about" className="bg-[#FAF6EE] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#C19A4A]">
          ABOUT
        </h2>
        <h3 className="mb-8 text-3xl font-bold text-[#1B2845] sm:text-4xl">
          教室について
        </h3>
        <p className="mb-6 text-base leading-relaxed text-[#1B2845]/80 sm:text-lg">
          はじめ将棋教室は、横浜市・吉野町駅徒歩2分の
          <br className="hidden sm:block" />
          「Y.Y.World 囲碁・将棋」で毎週木曜日に開催している将棋教室です。
        </p>
        <p className="text-base leading-relaxed text-[#1B2845]/80 sm:text-lg">
          礼儀作法を大切にしながら、一人ひとりの棋力に合わせて
          <br className="hidden sm:block" />
          丁寧に指導します。
          <strong className="font-semibold">
            これから将棋を始めたい方も、
            <br className="hidden sm:block" />
            昔指していた方も、有段者の方も、どなたでもどうぞ。
          </strong>
        </p>
      </div>
    </section>
  );
}
