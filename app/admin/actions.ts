"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveSettings } from "@/lib/settings";

function s(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

export async function saveNextSession(formData: FormData) {
  await saveSettings({
    "next_session.date": s(formData, "date"),
    "next_session.status": s(formData, "status") || "未定",
    "next_session.note": s(formData, "note"),
  });
  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin?saved=next_session");
}

export async function saveNews(formData: FormData) {
  await saveSettings({
    "news.visible": formData.get("visible") === "on" ? "true" : "false",
    "news.message": s(formData, "message"),
  });
  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin?saved=news");
}

export async function savePrice(formData: FormData) {
  await saveSettings({
    "price.kids": s(formData, "kids"),
    "price.adults": s(formData, "adults"),
    "price.both": s(formData, "both"),
    "price.trial": s(formData, "trial"),
  });
  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin?saved=price");
}

export async function saveInstructor(formData: FormData) {
  await saveSettings({
    "instructor.career": s(formData, "career"),
    "instructor.teaching": s(formData, "teaching"),
    "instructor.message": s(formData, "message"),
  });
  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin?saved=instructor");
}
