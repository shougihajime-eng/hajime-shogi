import { login } from "./actions";

export const metadata = {
  title: "ログイン",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF6EE] p-6">
      <form
        action={login}
        className="w-full max-w-sm space-y-5 rounded-2xl bg-white p-8 shadow-lg"
      >
        <div className="text-center">
          <h1 className="mb-1 text-2xl font-bold text-[#1B2845]">管理画面</h1>
          <p className="text-sm text-[#1B2845]/65">
            合言葉を入れてください
          </p>
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">
            合言葉が違います
          </p>
        )}

        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="off"
          placeholder="合言葉"
          className="h-14 w-full rounded-xl border-2 border-[#1B2845]/15 px-4 text-lg focus:border-[#C19A4A] focus:outline-none"
        />

        <button
          type="submit"
          className="h-14 w-full rounded-xl bg-[#C19A4A] text-lg font-bold text-white shadow-md transition hover:bg-[#9A7A38] active:scale-95"
        >
          ログイン
        </button>

        <p className="text-center text-xs text-[#1B2845]/50">
          ※ ログインは30日間有効です
        </p>
      </form>
    </div>
  );
}
