import { getSettings } from "@/lib/settings";
import {
  saveInstructor,
  saveNews,
  saveNextSession,
  savePrice,
} from "./actions";

const SAVED_LABELS: Record<string, string> = {
  next_session: "「次回の開催」を保存しました",
  news: "「お知らせ」を保存しました",
  price: "「料金」を保存しました",
  instructor: "「講師紹介」を保存しました",
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const settings = await getSettings();
  const { saved } = await searchParams;
  const savedMessage = saved ? SAVED_LABELS[saved] : null;

  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-xs font-bold tracking-wider text-[#9A7A38]">
          ようこそ
        </p>
        <h1 className="text-2xl font-bold text-[#1B2845] sm:text-3xl">
          編集したいところを選んでください
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#1B2845]/70">
          下の4つのうち、変えたいところを編集して、
          <br className="sm:hidden" />
          各セクションの「保存する」ボタンを押してください。
          <br />
          サイトには30秒以内に反映されます。
        </p>
      </div>

      {savedMessage && (
        <div className="rounded-2xl border-2 border-green-500 bg-green-50 px-5 py-4 text-center text-base font-bold text-green-800 shadow-sm">
          ✓ {savedMessage}
        </div>
      )}

      {/* === Section 1: Next Session === */}
      <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="mb-1 text-xl font-bold text-[#1B2845] sm:text-2xl">
          📅 次回の開催
        </h2>
        <p className="mb-5 text-sm text-[#1B2845]/65">
          次の教室の日付と「やる/中止/未定」を設定。
          <br className="sm:hidden" />
          サイトの一番上に大きく表示されます。
        </p>
        <form action={saveNextSession} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#1B2845]">
              開催日
            </label>
            <input
              type="date"
              name="date"
              defaultValue={settings["next_session.date"]}
              className="h-12 w-full rounded-xl border-2 border-[#1B2845]/15 px-4 text-base focus:border-[#C19A4A] focus:outline-none"
            />
            <p className="mt-1 text-xs text-[#1B2845]/55">
              空っぽにすると「日付未定」と表示されます
            </p>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#1B2845]">
              状態
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["開催", "中止", "未定"] as const).map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-[#1B2845]/15 bg-white py-3 text-sm font-bold text-[#1B2845] transition has-[:checked]:border-[#C19A4A] has-[:checked]:bg-[#FAF6EE]"
                >
                  <input
                    type="radio"
                    name="status"
                    value={opt}
                    defaultChecked={settings["next_session.status"] === opt}
                    className="size-4 accent-[#C19A4A]"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#1B2845]">
              ひとこと(任意)
            </label>
            <textarea
              name="note"
              defaultValue={settings["next_session.note"]}
              rows={2}
              placeholder="例: 初心者大歓迎の回です!"
              className="w-full rounded-xl border-2 border-[#1B2845]/15 p-3 text-base focus:border-[#C19A4A] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-14 w-full rounded-xl bg-[#C19A4A] text-lg font-bold text-white shadow-md transition hover:bg-[#9A7A38] active:scale-95"
          >
            保存する
          </button>
        </form>
      </section>

      {/* === Section 2: News === */}
      <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="mb-1 text-xl font-bold text-[#1B2845] sm:text-2xl">
          📢 お知らせ
        </h2>
        <p className="mb-5 text-sm text-[#1B2845]/65">
          「春の特別企画あります」など自由なメッセージ。
          <br className="sm:hidden" />
          表示するを ON にしないと出ません。
        </p>
        <form action={saveNews} className="space-y-5">
          <div>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-[#FAF6EE] px-4 py-3 text-base font-bold text-[#1B2845]">
              <input
                type="checkbox"
                name="visible"
                defaultChecked={settings["news.visible"] === "true"}
                className="size-5 accent-[#C19A4A]"
              />
              サイトに表示する
            </label>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#1B2845]">
              メッセージ
            </label>
            <textarea
              name="message"
              defaultValue={settings["news.message"]}
              rows={4}
              placeholder="例: 4月から木曜開催に固定します!"
              className="w-full rounded-xl border-2 border-[#1B2845]/15 p-3 text-base leading-relaxed focus:border-[#C19A4A] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-14 w-full rounded-xl bg-[#C19A4A] text-lg font-bold text-white shadow-md transition hover:bg-[#9A7A38] active:scale-95"
          >
            保存する
          </button>
        </form>
      </section>

      {/* === Section 3: Price === */}
      <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="mb-1 text-xl font-bold text-[#1B2845] sm:text-2xl">
          💴 月謝・料金
        </h2>
        <p className="mb-5 text-sm text-[#1B2845]/65">
          1部・2部・通し参加・体験の料金を変えられます。
        </p>
        <form action={savePrice} className="space-y-5">
          <PriceField
            label="第1部 (子ども教室)"
            name="kids"
            defaultValue={settings["price.kids"]}
            yen
          />
          <PriceField
            label="第2部 (大人教室)"
            name="adults"
            defaultValue={settings["price.adults"]}
            yen
          />
          <PriceField
            label="通し参加 (1部+2部)"
            name="both"
            defaultValue={settings["price.both"]}
            yen
          />
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#1B2845]">
              体験参加(自由記述)
            </label>
            <input
              type="text"
              name="trial"
              defaultValue={settings["price.trial"]}
              placeholder="例: 席料 + 1,000円"
              className="h-12 w-full rounded-xl border-2 border-[#1B2845]/15 px-4 text-base focus:border-[#C19A4A] focus:outline-none"
            />
            <p className="mt-1 text-xs text-[#1B2845]/55">
              数字以外の文字も入れられます (例:「席料 + 1,000円」)
            </p>
          </div>
          <button
            type="submit"
            className="h-14 w-full rounded-xl bg-[#C19A4A] text-lg font-bold text-white shadow-md transition hover:bg-[#9A7A38] active:scale-95"
          >
            保存する
          </button>
        </form>
      </section>

      {/* === Section 4: Instructor === */}
      <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="mb-1 text-xl font-bold text-[#1B2845] sm:text-2xl">
          👤 講師紹介
        </h2>
        <p className="mb-5 text-sm text-[#1B2845]/65">
          鈴木先生の経歴・指導実績・メッセージ。
          <br className="sm:hidden" />
          1行ごとに改行(エンター)するとそのまま箇条書きになります。
        </p>
        <form action={saveInstructor} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#1B2845]">
              主な経歴(1行ずつ)
            </label>
            <textarea
              name="career"
              defaultValue={settings["instructor.career"]}
              rows={6}
              placeholder="・元 奨励会三段&#10;・第32期 全国アマチュア王将"
              className="w-full rounded-xl border-2 border-[#1B2845]/15 p-3 text-base leading-relaxed focus:border-[#C19A4A] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#1B2845]">
              指導実績(1行ずつ)
            </label>
            <textarea
              name="teaching"
              defaultValue={settings["instructor.teaching"]}
              rows={4}
              placeholder="・全国大会で優勝した子どもを多数育成"
              className="w-full rounded-xl border-2 border-[#1B2845]/15 p-3 text-base leading-relaxed focus:border-[#C19A4A] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#1B2845]">
              メッセージ(自由文章)
            </label>
            <textarea
              name="message"
              defaultValue={settings["instructor.message"]}
              rows={5}
              className="w-full rounded-xl border-2 border-[#1B2845]/15 p-3 text-base leading-relaxed focus:border-[#C19A4A] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-14 w-full rounded-xl bg-[#C19A4A] text-lg font-bold text-white shadow-md transition hover:bg-[#9A7A38] active:scale-95"
          >
            保存する
          </button>
        </form>
      </section>

      <p className="rounded-xl bg-[#1B2845]/5 px-5 py-4 text-center text-xs leading-relaxed text-[#1B2845]/65">
        困ったら Claude(私)に聞いてください。
        <br />
        合言葉は私が覚えています。忘れたら教えます。
      </p>
    </div>
  );
}

function PriceField({
  label,
  name,
  defaultValue,
  yen,
}: {
  label: string;
  name: string;
  defaultValue: string;
  yen?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold text-[#1B2845]">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          name={name}
          defaultValue={defaultValue}
          inputMode="numeric"
          className="h-12 flex-1 rounded-xl border-2 border-[#1B2845]/15 px-4 text-base focus:border-[#C19A4A] focus:outline-none"
        />
        {yen && (
          <span className="text-base font-medium text-[#1B2845]/70">円</span>
        )}
      </div>
    </div>
  );
}
