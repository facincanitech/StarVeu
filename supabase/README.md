# NEOs (NASA NeoWs) → Supabase → StarVeu

Sincroniza asteroides próximos da Terra (NASA NeoWs) numa tabela do Supabase; o site lê essa
tabela pra listar os NEOs sem precisar chamar a NASA direto do navegador (sem expor a chave da
NASA, sem limite de taxa por visitante).

Projeto: `nkzpwztuvrgcqvstqreg` (https://nkzpwztuvrgcqvstqreg.supabase.co)

## Deploy (rodar uma vez)

```bash
npm install -g supabase          # ou use "npx supabase <comando>" em vez de instalar global
supabase login
supabase link --project-ref nkzpwztuvrgcqvstqreg

supabase db push                 # cria a tabela public.neo_feed (migrations/0001_neo_feed.sql)

supabase secrets set NASA_API_KEY=SEU_TOKEN_DA_NASA_AQUI
supabase functions deploy sync-neo
```

## Testar manualmente

```bash
curl -X POST https://nkzpwztuvrgcqvstqreg.supabase.co/functions/v1/sync-neo \
  -H "Authorization: Bearer SUA_SERVICE_ROLE_KEY_AQUI"
```

Deve responder algo como `{"ok":true,"count":42}`. Depois disso já dá pra ver as linhas em
Table Editor → `neo_feed` no painel do Supabase.

## Agendar (rodar sozinha todo dia)

No painel do Supabase: **Database → Extensions**, habilite `pg_cron` e `pg_net`. Depois, no
**SQL Editor**, rode (trocando a service role key):

```sql
select cron.schedule(
  'sync-neo-daily',
  '0 6 * * *',  -- todo dia às 06:00 UTC
  $$
  select net.http_post(
    url := 'https://nkzpwztuvrgcqvstqreg.supabase.co/functions/v1/sync-neo',
    headers := jsonb_build_object('Authorization', 'Bearer SUA_SERVICE_ROLE_KEY_AQUI')
  );
  $$
);
```

## Segurança

- A chave da NASA (`NASA_API_KEY`) e a `service_role` key **nunca** vão pro `index.html` nem pro
  git — só existem como secret do Supabase / variável de ambiente da Edge Function.
- Quem lê do frontend usa a chave **publishable** (a que começa com `sb_publishable_...`) — essa é
  segura de expor no cliente, é protegida pela RLS da tabela (só permite `select`, nunca escrita).
- Se algum dia essas chaves vazarem de verdade (ex.: commitadas por engano), gere novas no painel
  do Supabase/NASA — não custa nada, é só regenerar.
