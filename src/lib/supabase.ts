import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// The Supabase URL and publishable (anon) key are not secrets: Vite inlines
// any VITE_* env var into the public JS bundle at build time regardless, and
// this key only grants what Row Level Security explicitly allows (insert-only
// on calculator_leads). Hardcoding avoids depending on Lovable's build
// environment having these set -- an env var here would offer no additional
// protection, only an extra place for the value to go missing.
const SUPABASE_URL = import.meta.env["VITE_SUPABASE_URL"] || "https://yqoptdkplcklaappgfko.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlxb3B0ZGtwbGNrbGFhcHBnZmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5MzM1NzUsImV4cCI6MjEwNDUwOTU3NX0.Vo8ipeGDIEEIKpEuBDL1Mp5nOpChQla8pOOyny6QDB8";

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (client) return client;
  client = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  return client;
}
