import { MapPin, Phone, Train } from "lucide-react";

export default function Access() {
  return (
    <section id="access" className="bg-[#F5EBD9]/50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#C19A4A]">
            ACCESS
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-[#1B2845] sm:text-4xl">
            アクセス
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9A7A38]">
                <MapPin className="size-4" /> 会場
              </p>
              <p className="text-xl font-bold text-[#1B2845]">
                Y.Y.World 囲碁・将棋
              </p>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9A7A38]">
                <MapPin className="size-4" /> 住所
              </p>
              <p className="text-base leading-relaxed text-[#1B2845]/80">
                〒232-0014
                <br />
                神奈川県横浜市南区吉野町3-10
                <br />
                シャンテ 2階
              </p>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9A7A38]">
                <Train className="size-4" /> 最寄駅
              </p>
              <p className="text-base leading-relaxed text-[#1B2845]/80">
                横浜市営地下鉄ブルーライン
                <br />
                <strong className="font-semibold">「吉野町駅」</strong> 徒歩2分
                <br />
                <span className="text-sm text-[#1B2845]/60">
                  (横浜駅から約11分)
                </span>
              </p>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9A7A38]">
                <Phone className="size-4" /> 会場 電話
              </p>
              <a
                href="tel:0452514551"
                className="text-base font-medium text-[#1B2845] underline-offset-2 hover:underline"
              >
                045-251-4551
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#C19A4A]/30 shadow-md">
            <iframe
              title="Y.Y.World 囲碁・将棋 地図"
              src="https://www.google.com/maps?q=神奈川県横浜市南区吉野町3-10&output=embed"
              className="aspect-square w-full md:aspect-[4/5]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
