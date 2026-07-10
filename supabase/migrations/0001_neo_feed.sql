-- Tabela que guarda o resultado da NeoWs (NASA Near Earth Object Web Service), sincronizada
-- periodicamente pela Edge Function `sync-neo`. Só a function (service role) escreve; o site
-- (chave publishable/anon) só lê.
create table if not exists public.neo_feed (
  id text primary key,                          -- id do objeto na NASA (NeoWs)
  name text not null,
  nasa_jpl_url text,
  absolute_magnitude numeric,
  estimated_diameter_min_m numeric,
  estimated_diameter_max_m numeric,
  is_potentially_hazardous boolean default false,
  close_approach_date date,
  close_approach_datetime_utc text,
  relative_velocity_kph numeric,
  miss_distance_km numeric,
  orbiting_body text,
  raw jsonb,                                     -- resposta crua da NASA, pra não perder nada
  fetched_at timestamptz not null default now()
);

alter table public.neo_feed enable row level security;

drop policy if exists "neo_feed public read" on public.neo_feed;
create policy "neo_feed public read"
  on public.neo_feed for select
  using (true);

-- sem policy de insert/update/delete: só o service role (usado dentro da Edge Function) escreve.
