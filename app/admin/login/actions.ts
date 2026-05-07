"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { makeToken } from "@/lib/auth";

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login?error=1");
  }

  const token = await makeToken();
  const c = await cookies();
  c.set("admin", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
  redirect("/admin");
}

export async function logout() {
  const c = await cookies();
  c.delete("admin");
  redirect("/admin/login");
}
