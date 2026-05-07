import Link from "next/link";
import { logout } from "./login/actions";

export const metadata = {
  title: "管理画面",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAF6EE] pb-20">
      <header className="sticky top-0 z-30 border-b border-[#C19A4A]/30 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/admin"
            className="text-base font-bold text-[#1B2845] sm:text-lg"
          >
            はじめ将棋教室 管理画面
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="hidden rounded-full border border-[#1B2845]/20 px-3 py-1.5 text-xs font-medium text-[#1B2845] hover:bg-[#1B2845]/5 sm:inline-flex"
            >
              サイトを見る ↗
            </Link>
            <form action={logout}>
              <button
                type="submit"
                className="rounded-full border border-[#1B2845]/20 px-3 py-1.5 text-xs font-medium text-[#1B2845] hover:bg-[#1B2845]/5"
              >
                ログアウト
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        {children}
      </main>
    </div>
  );
}
