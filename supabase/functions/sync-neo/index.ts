// Edge Function: busca a NeoWs (NASA) e grava/atualiza em public.neo_feed.
// Rodar sob demanda (curl/dashboard) ou agendada via pg_cron — ver supabase/README.md.
// Precisa dos secrets: NASA_API_KEY (definido por você) — SUPABASE_URL e
// SUPABASE_SERVICE_ROLE_KEY já existem automaticamente no ambiente de toda Edge Function.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const NASA_API_KEY = Deno.env.get('NASA_API_KEY')!;
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

function fmt(d: Date) {
  return d.toISOString().slice(0, 10);
}

Deno.serve(async (_req) => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const start = new Date();
  const end = new Date(start.getTime() + 6 * 86400000); // NeoWs limita a no máximo 7 dias por chamada
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fmt(start)}&end_date=${fmt(end)}&api_key=${NASA_API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    return new Response(`NASA NeoWs falhou: ${res.status} ${await res.text()}`, { status: 502 });
  }
  const data = await res.json();

  const rows: Record<string, unknown>[] = [];
  for (const dateKey of Object.keys(data.near_earth_objects ?? {})) {
    for (const neo of data.near_earth_objects[dateKey]) {
      const approach = neo.close_approach_data?.[0];
      rows.push({
        id: neo.id,
        name: neo.name,
        nasa_jpl_url: neo.nasa_jpl_url,
        absolute_magnitude: neo.absolute_magnitude_h,
        estimated_diameter_min_m: neo.estimated_diameter?.meters?.estimated_diameter_min,
        estimated_diameter_max_m: neo.estimated_diameter?.meters?.estimated_diameter_max,
        is_potentially_hazardous: neo.is_potentially_hazardous_asteroid,
        close_approach_date: approach?.close_approach_date ?? dateKey,
        close_approach_datetime_utc: approach?.close_approach_date_full,
        relative_velocity_kph: approach ? Number(approach.relative_velocity.kilometers_per_hour) : null,
        miss_distance_km: approach ? Number(approach.miss_distance.kilometers) : null,
        orbiting_body: approach?.orbiting_body,
        raw: neo,
        fetched_at: new Date().toISOString(),
      });
    }
  }

  if (rows.length) {
    const { error } = await supabase.from('neo_feed').upsert(rows, { onConflict: 'id' });
    if (error) return new Response(`Upsert falhou: ${error.message}`, { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true, count: rows.length }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
