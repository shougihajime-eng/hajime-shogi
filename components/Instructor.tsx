import Image from "next/image";
import { getSettings } from "@/lib/settings";

function lines(value: string): string[] {
  return value
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

export default async function Instructor() {
  const s = await getSettings();
  const career = lines(s["instructor.career"]);
  const teaching = lines(s["instructor.teaching"]);
  const message = s["instructor.message"];

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

            {career.length > 0 && (
              <div className="mb-5">
                <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#9A7A38]">
                  主な経歴
                </p>
                <ul className="space-y-1.5 text-base leading-relaxed text-[#1B2845]/85">
                  {career.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {teaching.length > 0 && (
              <div className="mb-5">
                <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#9A7A38]">
                  指導実績
                </p>
                <ul className="space-y-1.5 text-base leading-relaxed text-[#1B2845]/85">
                  {teaching.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {message.trim() && (
              <p className="whitespace-pre-wrap rounded-2xl bg-[#F5EBD9]/60 p-5 text-sm leading-relaxed text-[#1B2845]/80">
                {message}
              </p>
            )}
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
