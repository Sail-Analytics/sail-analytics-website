import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

// Lazy on purpose: importing this module must not crash the app before
// VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY are set in .env.local.
// Callers should catch and handle the thrown error (see calculator gate).
export function getSupabase(): SupabaseClient {
  if (client) return client;
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Missing VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY. Set them in .env.local for local dev.",
    );
  }
  client = createClient(supabaseUrl, supabaseKey);
  return client;
}
