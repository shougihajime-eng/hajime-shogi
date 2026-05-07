import { getSettings } from "@/lib/settings";

function formatPrice(value: string): string {
  const n = Number(value);
  if (Number.isFinite(n) && n > 0) return n.toLocaleString("ja-JP");
  return value;
}

export default async function Schedule() {
  const s = await getSettings();
  const kids = formatPrice(s["price.kids"]);
  const adults = formatPrice(s["price.adults"]);
  const both = formatPrice(s["price.both"]);
  const trial = s["price.trial"];

  return (
    <section id="schedule" className="bg-[#F5EBD9]/50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#C19A4A]">
            SCHEDULE & FEE
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-[#1B2845] sm:text-4xl">
            時間割と料金
          </h3>
          <p className="mb-10 text-base text-[#1B2845]/75">
            毎週<strong className="font-bold text-[#1B2845]">木曜日</strong>(不定期)に開催。
            <br className="sm:hidden" />
            開催日は LINE グループでお知らせします。
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[#C19A4A]/30 bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-xs font-bold tracking-wider text-[#C19A4A]">
                第1部
              </p>
              <h4 className="mb-1 text-xl font-bold text-[#1B2845]">
                子ども教室
              </h4>
              <p className="text-sm text-[#1B2845]/70">17:00 - 19:00</p>
            </div>
            <p className="mt-3 text-2xl font-bold text-[#1B2845] sm:mt-0">
              {kids}
              <span className="text-base font-medium">円</span>
            </p>
          </div>

          <div className="rounded-2xl border border-[#C19A4A]/30 bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-xs font-bold tracking-wider text-[#C19A4A]">
                第2部
              </p>
              <h4 className="mb-1 text-xl font-bold text-[#1B2845]">
                大人教室
              </h4>
              <p className="text-sm text-[#1B2845]/70">19:00 - 21:00</p>
            </div>
            <p className="mt-3 text-2xl font-bold text-[#1B2845] sm:mt-0">
              {adults}
              <span className="text-base font-medium">円</span>
            </p>
          </div>

          <div className="relative rounded-2xl border-2 border-[#C19A4A] bg-gradient-to-br from-[#FAF6EE] to-[#F5EBD9] p-6 shadow-md sm:flex sm:items-center sm:justify-between">
            <span className="absolute -top-3 left-6 rounded-full bg-[#E76F51] px-3 py-1 text-xs font-bold text-white shadow">
              お得!
            </span>
            <div>
              <p className="mb-1 text-xs font-bold tracking-wider text-[#9A7A38]">
                1部 + 2部
              </p>
              <h4 className="mb-1 text-xl font-bold text-[#1B2845]">
                通し参加
              </h4>
              <p className="text-sm text-[#1B2845]/70">17:00 - 21:00</p>
            </div>
            <p className="mt-3 text-2xl font-bold text-[#1B2845] sm:mt-0">
              {both}
              <span className="text-base font-medium">円</span>
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-[#1B2845]/30 bg-white/70 p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-xs font-bold tracking-wider text-[#1B2845]/60">
                初めての方は こちらから
              </p>
              <h4 className="mb-1 text-xl font-bold text-[#1B2845]">
                体験参加 OK
              </h4>
              <p className="text-sm text-[#1B2845]/70">
                まずは雰囲気だけでも見にきてね
              </p>
            </div>
            <p className="mt-3 text-xl font-bold text-[#1B2845] sm:mt-0">
              {trial}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-[#1B2845]/60">
          ※ 会場使用料(席料)は別途必要となる場合があります。
          <br className="sm:hidden" />
          詳細は LINE グループでご確認ください。
        </p>
      </div>
    </section>
  );
}
