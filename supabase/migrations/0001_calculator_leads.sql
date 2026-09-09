-- Engagement calculator lead capture.
-- Visitors write their email here to unlock the calculator; nothing is readable
-- from the client (RLS: insert-only for anon), so leads are only visible via
-- the Supabase dashboard / an authenticated internal view.

create table if not exists public.calculator_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'calculator_gate',
  role_selected text,
  calculator_inputs jsonb,
  consent boolean not null default true,
  user_agent text,
  referrer text,
  created_at timestamptz not null default now(),
  constraint calculator_leads_email_format check (email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$')
);

alter table public.calculator_leads enable row level security;

create policy "Anyone can submit a calculator lead"
  on public.calculator_leads
  for insert
  to anon, authenticated
  with check (true);

-- No select/update/delete policy is created for anon/authenticated on purpose:
-- leads are write-only from the client. Read them via the Supabase dashboard
-- or the service_role key from a trusted server context only.
