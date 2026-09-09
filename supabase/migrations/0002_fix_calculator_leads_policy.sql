-- Re-creates the insert policy in case it wasn't applied by the first
-- migration. Safe to run any number of times.
drop policy if exists "Anyone can submit a calculator lead" on public.calculator_leads;

create policy "Anyone can submit a calculator lead"
  on public.calculator_leads
  for insert
  to anon, authenticated
  with check (true);
