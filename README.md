# Fiordes sem Carro 🇳🇴

Guia interativo em português (pt-BR) para uma viagem de família pelos fiordes da Noruega usando **apenas transporte público** — trem, barco e ônibus. Feito para julho (sol da meia-noite!).

## O que tem dentro

- **5 roteiros completos** com dia a dia, baseados nas rotas oficiais do [Visit Norway](https://www.visitnorway.com/plan-your-trip/round-trips/fjord-norway/): Norway in a Nutshell, Sognefjord, Rota Norte (Geiranger/Trondheim), Rota Sul (Preikestolen) e um Grand Tour de 14 dias
- **Preços reais por trecho** (adulto e criança), distâncias, durações e operadores — pesquisados em julho de 2026
- **Mapa estilizado interativo** com todas as rotas
- **Calculadora de orçamento** para a família (hospedagem, comida, atividades), com conversão NOK ⇄ BRL
- **12 dicas práticas** (Minipris, descontos de criança, clima, seguro Schengen…)
- Galeria com 20 fotos (Wikimedia Commons, créditos no rodapé)

## Rodar localmente

É um site 100% estático — não precisa de build nem dependências:

```bash
python3 -m http.server 4173
# abra http://localhost:4173
```

## Publicar na Vercel

**Opção 1 — arrastar e soltar:** entre em [vercel.com/new](https://vercel.com/new), escolha "Deploy without Git" e arraste esta pasta inteira.

**Opção 2 — CLI:**

```bash
npm i -g vercel
vercel          # primeira vez (aceite os padrões; framework: Other)
vercel --prod   # publicar em produção
```

Não há passo de build: a Vercel serve `index.html`, `styles.css`, `app.js` e `img/` direto.

## Ajustes rápidos

- **Câmbio:** a constante `RATE_BRL` no topo de [app.js](app.js) (1 NOK = R$ 0,53 em jul/2026)
- **Preços/roteiros:** tudo está nos objetos `ROUTES` e `PRICE_ROWS` em [app.js](app.js)
- Confirme horários e valores no [Entur](https://entur.no/en) antes de comprar — tarifas de trem são dinâmicas
