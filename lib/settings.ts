import "server-only";
import { unstable_noStore as noStore } from "next/cache";
import { supabaseAdmin } from "./supabase";

export type SettingKey =
  | "next_session.date"
  | "next_session.status"
  | "next_session.note"
  | "news.visible"
  | "news.message"
  | "price.kids"
  | "price.adults"
  | "price.both"
  | "price.trial"
  | "instructor.career"
  | "instructor.teaching"
  | "instructor.message";

export type SettingsMap = Record<SettingKey, string>;

export const DEFAULTS: SettingsMap = {
  "next_session.date": "",
  "next_session.status": "未定",
  "next_session.note": "",
  "news.visible": "false",
  "news.message": "",
  "price.kids": "3000",
  "price.adults": "3000",
  "price.both": "6000",
  "price.trial": "席料 + 1,000円",
  "instructor.career":
    "・元 奨励会三段\n・第32期 全国アマチュア王将\n・第72回 全日本アマチュア将棋名人\n・加古川青流戦 アマチュア選抜大会 複数回優勝(プロ棋戦本選出場 計4回)\n・横浜市出身",
  "instructor.teaching":
    "・全国大会で優勝した子どもを多数育成\n・現在 奨励会で活躍する教え子も輩出",
  "instructor.message":
    "強くなることはもちろん大事。でも、それ以上に「将棋って楽しい!」を一番大切にしています。\n実績はあるけれど、教室はとってもアットホーム。気構えず、ふらっと遊びに来る感覚で大丈夫です。",
};

export async function getSettings(): Promise<SettingsMap> {
  noStore();
  const { data, error } = await supabaseAdmin
    .from("site_settings")
    .select("key, value");
  if (error) {
    console.error("getSettings error", error);
    return { ...DEFAULTS };
  }
  const map: SettingsMap = { ...DEFAULTS };
  for (const row of data ?? []) {
    if (row.key in map) {
      map[row.key as SettingKey] = row.value;
    }
  }
  return map;
}

export async function saveSettings(updates: Partial<SettingsMap>): Promise<void> {
  const rows = Object.entries(updates).map(([key, value]) => ({
    key,
    value: value ?? "",
    updated_at: new Date().toISOString(),
  }));
  const { error } = await supabaseAdmin
    .from("site_settings")
    .upsert(rows, { onConflict: "key" });
  if (error) throw error;
}
