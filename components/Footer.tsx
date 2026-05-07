export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1B2845] py-10 text-center text-white/70">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-2 text-sm font-semibold text-white">はじめ将棋教室</p>
        <p className="text-xs">講師: 鈴木 肇</p>
        <p className="mt-1 text-xs leading-relaxed">
          会場: Y.Y.World 囲碁・将棋
          <br className="sm:hidden" />
          (神奈川県横浜市南区吉野町3-10)
        </p>
        <p className="mt-6 text-xs text-white/50">
          © {year} はじめ将棋教室
        </p>
      </div>
    </footer>
  );
}
