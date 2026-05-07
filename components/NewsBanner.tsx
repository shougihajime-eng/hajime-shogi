import { getSettings } from "@/lib/settings";

export default async function NewsBanner() {
  const s = await getSettings();
  if (s["news.visible"] !== "true") return null;
  const message = s["news.message"].trim();
  if (!message) return null;

  return (
    <section id="news" className="bg-[#FAF6EE] py-10">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border-2 border-[#C19A4A] bg-white p-6 shadow-md sm:p-8">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#C19A4A]">
            📢 お知らせ
          </p>
          <p className="whitespace-pre-wrap text-base leading-relaxed text-[#1B2845]">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}
