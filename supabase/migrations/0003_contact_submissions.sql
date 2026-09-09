-- Contact page ("Start a conversation") submissions. Previously this form
-- used a mailto: action, which just opened the visitor's own email client
-- and saved nothing. This replaces that with a real write, same pattern as
-- calculator_leads: insert-only from the client, nothing readable back.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  situation text,
  objective text not null,
  detail text,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now(),
  constraint contact_submissions_email_format check (email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$')
);

alter table public.contact_submissions enable row level security;

drop policy if exists "Anyone can submit a contact form" on public.contact_submissions;
create policy "Anyone can submit a contact form"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);
