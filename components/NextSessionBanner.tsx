import { getSettings } from "@/lib/settings";

function formatJPDate(iso: string): string | null {
  if (!iso) return null;
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const [, y, mo, d] = m;
  const date = new Date(`${y}-${mo}-${d}T00:00:00+09:00`);
  if (Number.isNaN(date.getTime())) return null;
  const dows = ["日", "月", "火", "水", "木", "金", "土"];
  const dow = dows[date.getUTCDay()];
  return `${parseInt(mo, 10)}月${parseInt(d, 10)}日(${dow})`;
}

export default async function NextSessionBanner() {
  const s = await getSettings();
  const status = s["next_session.status"];
  const dateText = formatJPDate(s["next_session.date"]);
  const note = s["next_session.note"];

  if (status === "未定" && !dateText && !note) return null;

  const isCancelled = status === "中止";
  const bg = isCancelled ? "bg-red-600" : "bg-[#06C755]";

  return (
    <div className={`${bg} px-4 py-3 text-center text-white`}>
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm sm:text-base">
        <span className="font-bold">
          {isCancelled
            ? "🚫 次回は中止です"
            : status === "開催"
              ? "📅 次回開催"
              : "📅 次回開催予定"}
        </span>
        {dateText && <span className="font-bold">{dateText}</span>}
        {note && <span className="opacity-90">— {note}</span>}
      </div>
    </div>
  );
}
