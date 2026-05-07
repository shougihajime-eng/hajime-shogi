import "server-only";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  throw new Error(
    "Supabase env vars not set: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required"
  );
}

export const supabaseAdmin = createClient(url, serviceKey, {
  db: { schema: "hajime_shogi" },
  auth: { persistSession: false, autoRefreshToken: false },
});
