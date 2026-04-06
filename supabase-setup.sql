create table if not exists public.lab_tracker_state (
  workspace text primary key,
  labs jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default timezone('utc', now())
);

grant usage on schema public to anon, authenticated;
grant select, insert, update on public.lab_tracker_state to anon, authenticated;

alter table public.lab_tracker_state enable row level security;

drop policy if exists "lab tracker public read" on public.lab_tracker_state;
create policy "lab tracker public read"
on public.lab_tracker_state
for select
to anon, authenticated
using (true);

drop policy if exists "lab tracker public write" on public.lab_tracker_state;
create policy "lab tracker public write"
on public.lab_tracker_state
for insert
to anon, authenticated
with check (true);

drop policy if exists "lab tracker public update" on public.lab_tracker_state;
create policy "lab tracker public update"
on public.lab_tracker_state
for update
to anon, authenticated
using (true)
with check (true);
