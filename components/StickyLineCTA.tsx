const LINE_URL = "https://line.me/ti/g/wM-e6uHMHv";

export default function StickyLineCTA() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto flex h-14 max-w-md items-center justify-center gap-2 rounded-full bg-[#06C755] px-6 text-base font-bold text-white shadow-2xl shadow-black/30 transition hover:bg-[#05B248] sm:hidden"
    >
      LINEグループに参加
    </a>
  );
}
