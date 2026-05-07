import Image from "next/image";

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

        <div className="mb-12 grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <div className="relative mx-auto size-48 overflow-hidden rounded-full bg-white ring-4 ring-[#C19A4A]/30 shadow-xl shadow-[#C19A4A]/30 sm:size-56 md:size-60">
            <Image
              src="/instructor.jpg"
              alt="鈴木 肇 先生"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, 240px"
            />
          </div>

          <div>
            <p className="mb-1 text-sm font-medium tracking-wider text-[#9A7A38]">
              講師
            </p>
            <h4 className="mb-6 text-3xl font-bold text-[#1B2845]">
              鈴木 肇 先生
            </h4>

            <div className="mb-5">
              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#9A7A38]">
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
              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#9A7A38]">
                指導実績
              </p>
              <ul className="space-y-1.5 text-base leading-relaxed text-[#1B2845]/85">
                <li>・全国大会で優勝した子どもを多数育成</li>
                <li>・現在 奨励会で活躍する教え子も輩出</li>
              </ul>
            </div>

            <p className="rounded-2xl bg-[#F5EBD9]/60 p-5 text-sm leading-relaxed text-[#1B2845]/80">
              強くなることはもちろん大事。でも、それ以上に
              <strong className="font-bold text-[#1B2845]">
                「将棋って楽しい!」
              </strong>
              を一番大切にしています。
              <br />
              実績はあるけれど、教室はとってもアットホーム。気構えず、ふらっと遊びに来る感覚で大丈夫です。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1B2845]/10 bg-white p-3 shadow-md">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/youtube-banner.jpg"
              alt="YouTube『棋士中村太地将棋はじめch』 — 中村太地 八段とのコラボチャンネル"
              width={2120}
              height={596}
              className="aspect-[2120/596] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
          <p className="px-2 pt-3 pb-1 text-center text-xs text-[#1B2845]/70 sm:text-sm">
            YouTube{" "}
            <a
              href="https://www.youtube.com/channel/UCC0Q1NBgGJRzFFPe1IPYtwg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1B2845] underline-offset-2 hover:underline"
            >
              「棋士中村太地将棋はじめch」
            </a>
            <span className="text-[#1B2845]/55">
              {" "}
              — 中村太地 八段(元 王座)とコラボ発信中
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
