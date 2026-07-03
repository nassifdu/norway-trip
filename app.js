/* ============================================================
   FIORDES SEM CARRO — dados + interações
   Preços em NOK (julho/2026, alta temporada) · 1 NOK ≈ R$ 0,53
   ============================================================ */

const RATE_BRL = 0.53;
let currency = "NOK";

const fmtNOK = n => "kr " + Math.round(n).toLocaleString("pt-BR");
const fmtBRL = n => "R$ " + Math.round(n * RATE_BRL).toLocaleString("pt-BR");
const money = n => (currency === "NOK" ? fmtNOK(n) : fmtBRL(n));
const priceSpan = (n, cls = "price") => `<span class="${cls}" data-nok="${n}">${money(n)}</span>`;
const rangeSpan = (a, b) => `<span class="price" data-nok-range="${a}|${b}">${money(a)}–${money(b)}</span>`;

/* ---------------- ROTEIROS ---------------- */
const ROUTES = [
  {
    id: "nutshell",
    tag: "O clássico",
    nome: "Norway in a Nutshell por conta própria",
    foto: "img/naeroyfjord.jpg",
    fotoHero: "img/flam-railway.jpg",
    dias: 5, km: 510,
    transporteAdulto: 1990, transporteCrianca: 995,
    atividadesPP: 500,
    resumo: "A rota mais famosa do país — Oslo → montanha → fiorde → Bergen — feita no ritmo de vocês, comprando cada trecho separado (e economizando ~30% sobre o pacote pronto). Perfeita como primeira viagem de fiordes.",
    mapa: { cor: "#e79a3c", pontos: ["oslo", "finse", "myrdal", "flam", "gudvangen", "voss", "bergen"] },
    diasDetalhe: [
      {
        titulo: "Oslo, a capital à beira d'água",
        rota: "Chegada em Oslo",
        desc: "Dia para vencer o jet lag caminhando: telhado da Ópera (grátis, e você literalmente sobe pelo telhado), Parque Vigeland com suas 212 esculturas, e a orla de Aker Brygge. Se sobrar energia, o Museu Fram (navios polares) é o favorito de qualquer irmão de 12 anos.",
        legs: [],
        highlights: [["Telhado da Ópera de Oslo", false], ["Parque Vigeland", false], ["Museu Fram", true]]
      },
      {
        titulo: "Bergensbanen: o trem que escala a Noruega",
        rota: "Oslo → Myrdal → Flåm",
        desc: "Um dos trens mais bonitos do mundo: em ~5h ele sobe do nível do mar ao platô de Hardangervidda (1.222 m em Finse — neve até em julho!). Em Myrdal, baldeação para a lendária Flåmsbana, que despenca 863 m em 20 km até o vilarejo de Flåm, parando na cachoeira Kjosfossen. Noite em Flåm.",
        legs: [
          { modo: "trem", de: "Oslo", para: "Myrdal", dur: "4h50", dist: "336 km", pa: 680, pc: 340, op: "Vy · Bergensbanen", tip: "Minipris desde kr 399 comprando ~60 dias antes. Sente do lado esquerdo!" },
          { modo: "trem", de: "Myrdal", para: "Flåm", dur: "55 min", dist: "20 km", pa: 570, pc: 285, op: "Flåmsbana", tip: "Criança 6–17 paga meia; menores de 6, grátis." }
        ],
        highlights: [["Platô de Hardangervidda", false], ["Cachoeira Kjosfossen", false], ["Vilarejo de Flåm", false]]
      },
      {
        titulo: "O fiorde mais estreito do mundo",
        rota: "Flåm → Gudvangen → Voss → Bergen",
        desc: "Cruzeiro elétrico e silencioso de 2h pelo Aurlandsfjord e o Nærøyfjord (UNESCO) — paredões de 1.400 m, cachoeiras e focas com sorte. Em Gudvangen, visita à vila viking Njardarheimr antes do ônibus a Voss e trem final a Bergen. Noite em Bergen.",
        legs: [
          { modo: "barco", de: "Flåm", para: "Gudvangen", dur: "2h", dist: "32 km", pa: 550, pc: 275, op: "Norway's Best · elétrico", tip: "Família (2 ad + 2 cri) por kr 1.365 — peçam a tarifa família!" },
          { modo: "onibus", de: "Gudvangen", para: "Voss", dur: "45 min", dist: "47 km", pa: 135, pc: 68, op: "Skyss linha 950" },
          { modo: "trem", de: "Voss", para: "Bergen", dur: "1h15", dist: "107 km", pa: 252, pc: 126, op: "Vy regional" }
        ],
        highlights: [["Nærøyfjord (UNESCO)", false], ["Vila viking Njardarheimr", true]]
      },
      {
        titulo: "Bergen, a porta dos fiordes",
        rota: "Dia inteiro em Bergen",
        desc: "O cais hanseático de Bryggen (UNESCO) com suas casinhas de madeira coloridas, o mercado de peixe, e o funicular Fløibanen até o monte Fløyen — lá em cima tem trilhas fáceis, cabras e um lago com canoas grátis. Levem capa de chuva: Bergen tem 230 dias de chuva por ano.",
        legs: [
          { modo: "bondinho", de: "Centro", para: "Monte Fløyen", dur: "8 min", dist: "850 m", pa: 175, pc: 88, op: "Fløibanen", tip: "Ida de funicular, volta a pé pela trilha (45 min) — de graça e linda." }
        ],
        highlights: [["Bryggen (UNESCO)", false], ["Mercado de peixe", false], ["Monte Fløyen", true]]
      },
      {
        titulo: "Dia livre + volta",
        rota: "Bergen → Oslo (trem ou avião)",
        desc: "Manhã livre em Bergen (aquário ou museu KODE) e retorno: ou o Bergensbanen inteiro de volta (6h30 de cenário de novo, desta vez do outro lado do vagão), ou voo doméstico de 55 min (Norwegian/SAS, desde ~kr 500 se comprado cedo).",
        legs: [
          { modo: "trem", de: "Bergen", para: "Oslo", dur: "6h30", dist: "496 km", pa: 680, pc: 340, op: "Vy · Bergensbanen", tip: "Alternativa: voo BGO→OSL desde ~kr 500." }
        ],
        highlights: [["Aquário de Bergen", true], ["KODE museus", true]]
      }
    ]
  },
  {
    id: "sognefjord",
    tag: "Mais profundo",
    nome: "Sognefjord: o Rei dos Fiordes",
    foto: "img/balestrand.jpg",
    fotoHero: "img/stegastein.jpg",
    dias: 7, km: 640,
    transporteAdulto: 2860, transporteCrianca: 1430,
    atividadesPP: 900,
    resumo: "A rota oficial \"Bergen & the Sognefjord\" do Visit Norway: barcos-expresso pelo maior fiorde da Noruega (204 km), igreja de madeira viking de Borgund, mirante Stegastein e geleiras do Jostedalsbreen. Para quem quer ficar, não só passar.",
    mapa: { cor: "#2aa198", pontos: ["bergen", "voss", "flam", "aurland", "laerdal", "sogndal", "balestrand", "bergen"] },
    diasDetalhe: [
      {
        titulo: "Bergen para aclimatar",
        rota: "Chegada em Bergen",
        desc: "Chegada (voo OSL→BGO ou Bergensbanen), Bryggen ao entardecer — em julho a luz dourada dura até depois das 22h — e jantar no mercado de peixe.",
        legs: [],
        highlights: [["Bryggen", false], ["Mercado de peixe", false]]
      },
      {
        titulo: "Trem até o coração do fiorde",
        rota: "Bergen → Voss → Flåm",
        desc: "Trem a Voss (com tempo para ver o centro e, para os corajosos, o paraglider tandem), ônibus panorâmico descendo os 13 ziguezagues de Stalheimskleiva e chegada a Flåm. Tarde na cervejaria Ægir (eles têm suco artesanal também) e museu da Flåmsbana (grátis). 2 noites em Flåm/Aurland.",
        legs: [
          { modo: "trem", de: "Bergen", para: "Voss", dur: "1h15", dist: "107 km", pa: 252, pc: 126, op: "Vy" },
          { modo: "onibus", de: "Voss", para: "Flåm", dur: "1h10", dist: "66 km", pa: 160, pc: 80, op: "Skyss 950" }
        ],
        highlights: [["Stalheimskleiva", false], ["Museu Flåmsbana (grátis)", false]]
      },
      {
        titulo: "Stegastein e o fiorde visto de cima",
        rota: "Flåm ⇄ Stegastein",
        desc: "Ônibus panorâmico até a plataforma Stegastein, que flutua 650 m acima do Aurlandsfjord — a foto da viagem. Tarde de caiaque no fiorde (guiado, a partir de 12 anos: perfeito para vocês dois).",
        legs: [
          { modo: "onibus", de: "Flåm", para: "Stegastein (ida e volta)", dur: "1h30 total", dist: "32 km", pa: 400, pc: 200, op: "Norway's Best sightseeing" }
        ],
        highlights: [["Mirante Stegastein", true], ["Caiaque no Aurlandsfjord", true]]
      },
      {
        titulo: "A igreja dos vikings",
        rota: "Flåm → Lærdal → Sogndal",
        desc: "Ônibus pelo túnel de Lærdal (24,5 km — o rodoviário mais longo do mundo, com cavernas iluminadas de azul) até a igreja de madeira de Borgund (1180 d.C.), a stavkirke mais bem preservada da Noruega, com cabeças de dragão no telhado. Seguimos até Sogndal. Noite em Sogndal.",
        legs: [
          { modo: "onibus", de: "Flåm", para: "Borgund", dur: "50 min", dist: "45 km", pa: 150, pc: 75, op: "Vy/Skyss 23-970", tip: "Confirme horários no Entur — poucas partidas por dia." },
          { modo: "onibus", de: "Borgund", para: "Sogndal", dur: "1h20", dist: "75 km", pa: 220, pc: 110, op: "Vy express" }
        ],
        highlights: [["Igreja de Borgund (1180)", true], ["Túnel de Lærdal", false]]
      },
      {
        titulo: "Gelo azul de verdade",
        rota: "Sogndal ⇄ Nigardsbreen",
        desc: "Ônibus de verão até o braço de geleira Nigardsbreen (Jostedalsbreen, a maior geleira da Europa continental). Caminhada guiada no gelo azul com grampos — idade mínima 6 anos, então a família toda vai. Volta a Sogndal.",
        legs: [
          { modo: "onibus", de: "Sogndal", para: "Nigardsbreen (ida e volta)", dur: "3h total", dist: "140 km", pa: 320, pc: 160, op: "Jostedalen Breførarlag bus", tip: "Roda apenas no verão; reserve a caminhada no gelo junto." }
        ],
        highlights: [["Caminhada na geleira", true], ["Lago glacial com barco", true]]
      },
      {
        titulo: "Balestrand, a vila dos artistas",
        rota: "Sogndal → Balestrand",
        desc: "Barco-expresso a Balestrand: vilarejo de casas vitorianas ao pé do fiorde, famoso por sidras artesanais (suco de maçã premiado para o seu irmão) e pela igreja de São Olavo. Tarde lenta — aluguem bikes ou nadem no fiorde (sim, dá: ~16 °C em julho, coragem!). Noite em Balestrand.",
        legs: [
          { modo: "barco", de: "Sogndal", para: "Balestrand", dur: "50 min", dist: "40 km", pa: 275, pc: 138, op: "Norled expresso" }
        ],
        highlights: [["Vila de Balestrand", false], ["Sidra & suco de Balholm", true], ["Banho de fiorde", false]]
      },
      {
        titulo: "O expresso do Sognefjord",
        rota: "Balestrand → Bergen",
        desc: "Gran finale: 4h de barco-expresso costurando o Sognefjord inteiro até Bergen, passando por vilarejos sem estrada. Chegada no centro de Bergen no meio da tarde.",
        legs: [
          { modo: "barco", de: "Balestrand", para: "Bergen", dur: "4h", dist: "175 km", pa: 885, pc: 443, op: "Norled Sognefjordekspressen", tip: "Compre com antecedência no verão — lota." }
        ],
        highlights: [["Sognefjord completo por água", false]]
      }
    ]
  },
  {
    id: "norte",
    tag: "Épico",
    nome: "Rota Norte: Ålesund, Geiranger & Trondheim",
    foto: "img/seven-sisters.jpg",
    fotoHero: "img/alesund.jpg",
    dias: 8, km: 1230,
    transporteAdulto: 3720, transporteCrianca: 1860,
    atividadesPP: 800,
    resumo: "A rota \"Ålesund – The Northwest – Trondheim\" do Visit Norway: o fiorde UNESCO de Geiranger, a estrada Trollstigen de ônibus, a ferrovia de Rauma (a mais bela da Europa segundo a Lonely Planet) e a cidade art nouveau de Ålesund.",
    mapa: { cor: "#b8402d", pontos: ["bergen", "alesund", "geiranger", "andalsnes", "dombas", "trondheim", "oslo"] },
    diasDetalhe: [
      {
        titulo: "Subindo a costa",
        rota: "Bergen → Ålesund",
        desc: "Duas opções: o navio costeiro Havila/Hurtigruten saindo 20h30 de Bergen e chegando 9h15 em Ålesund (cabine família — dormir num navio pelo litoral norueguês já é um capítulo da viagem), ou ônibus expresso diurno. Noite a bordo ou em Ålesund.",
        legs: [
          { modo: "barco", de: "Bergen", para: "Ålesund", dur: "12h45 (noturno)", dist: "380 km", pa: 1400, pc: 700, op: "Havila/Hurtigruten port-to-port", tip: "Preço por pessoa em cabine; crianças costumam ter desconto. Alternativa: ônibus ~kr 800." }
        ],
        highlights: [["Navio costeiro clássico", true]]
      },
      {
        titulo: "Ålesund art nouveau",
        rota: "Dia em Ålesund",
        desc: "A cidade queimou em 1904 e renasceu inteira em art nouveau — parece cenário de filme. Subam os 418 degraus do mirante Aksla (grátis) para A vista de cartão-postal do arquipélago. Aquário Atlanterhavsparken na tarde.",
        legs: [],
        highlights: [["Mirante Aksla (418 degraus)", false], ["Atlanterhavsparken", true], ["Centro art nouveau", false]]
      },
      {
        titulo: "O fiorde dos cruzeiros silenciosos",
        rota: "Ålesund → Geiranger",
        desc: "3h15 de catamarã elétrico por Hjørundfjord e Geirangerfjord (UNESCO), passando pelas cachoeiras das Sete Irmãs. Tarde em Geiranger: mirante Ørnesvingen e sorvete de morango da fazenda Westerås. Noite em Geiranger.",
        legs: [
          { modo: "barco", de: "Ålesund", para: "Geiranger", dur: "3h15", dist: "110 km", pa: 895, pc: 450, op: "The Fjords / Geiranger Fjordservice", tip: "Só de maio a setembro. Convés externo = melhores fotos das Sete Irmãs." }
        ],
        highlights: [["Sete Irmãs", false], ["Geirangerfjord UNESCO", false]]
      },
      {
        titulo: "Trollstigen de ônibus",
        rota: "Geiranger → Åndalsnes",
        desc: "O ônibus de verão da Rota Dourada sobe a Estrada das Águias (11 curvas), cruza o platô e desce os 11 grampos da Trollstigen, com parada no mirante suspenso sobre a cachoeira Stigfossen. Chegando em Åndalsnes, gôndola Romsdalen até Nesaksla. Noite em Åndalsnes.",
        legs: [
          { modo: "onibus", de: "Geiranger", para: "Åndalsnes", dur: "3h", dist: "104 km", pa: 429, pc: 215, op: "FRAM/Vy rota de verão", tip: "Opera ~15/jun–meados de ago — é ESTE mês! Reserve lugar." },
          { modo: "bondinho", de: "Åndalsnes", para: "Nesaksla", dur: "7 min", dist: "1,7 km", pa: 395, pc: 198, op: "Romsdalsgondolen" }
        ],
        highlights: [["Trollstigen (11 curvas)", false], ["Mirante Rampestreken", false]]
      },
      {
        titulo: "Raumabanen, a ferrovia-cinema",
        rota: "Åndalsnes → Dombås → Trondheim",
        desc: "A Rauma Railway (cenário de Harry Potter e Missão Impossível) margeia a parede de Trollveggen — o paredão vertical mais alto da Europa (1.000 m) — e cruza a ponte de Kylling. Em Dombås, conexão com a Dovrebanen até Trondheim, cruzando o parque nacional de Dovrefjell (procurem bois-almiscarados pela janela!). Noite em Trondheim.",
        legs: [
          { modo: "trem", de: "Åndalsnes", para: "Dombås", dur: "1h40", dist: "114 km", pa: 329, pc: 165, op: "SJ Nord · Raumabanen" },
          { modo: "trem", de: "Dombås", para: "Trondheim", dur: "2h40", dist: "213 km", pa: 430, pc: 215, op: "SJ Nord · Dovrebanen" }
        ],
        highlights: [["Trollveggen", false], ["Ponte de Kylling", false], ["Dovrefjell", false]]
      },
      {
        titulo: "Trondheim, a capital viking",
        rota: "Dia em Trondheim",
        desc: "Catedral de Nidaros (a maior igreja medieval da Escandinávia, destino de peregrinação há 1.000 anos), o bairro de casinhas coloridas de Bakklandet, e a ponte da felicidade Gamle Bybro. Alugar bike e usar o único elevador de bicicletas do mundo (Trampe) é diversão garantida.",
        legs: [],
        highlights: [["Catedral de Nidaros", true], ["Bakklandet", false], ["Elevador de bikes Trampe", false]]
      },
      {
        titulo: "De volta pelo alto do país",
        rota: "Trondheim → Oslo",
        desc: "Dovrebanen inteira até Oslo (6h40) — ou trem noturno com cabines para economizar uma diária. Chegada na capital para o último dia.",
        legs: [
          { modo: "trem", de: "Trondheim", para: "Oslo", dur: "6h40", dist: "553 km", pa: 700, pc: 350, op: "SJ Nord", tip: "Minipris desde kr 399; cabine noturna +kr 1.150 (dorme 2)." }
        ],
        highlights: [["Trem noturno (opcional)", true]]
      },
      {
        titulo: "Oslo de despedida",
        rota: "Dia em Oslo",
        desc: "Museu dos navios vikings fechado? Sem drama: o novo Museu Munch, banho de sauna flutuante no fiorde de Oslo (a partir de 12 anos!) e a fortaleza de Akershus fecham a viagem.",
        legs: [],
        highlights: [["Sauna flutuante", true], ["Museu Munch", true]]
      }
    ]
  },
  {
    id: "sul",
    tag: "Aventura",
    nome: "Rota Sul: Stavanger, Preikestolen & Lysefjord",
    foto: "img/preikestolen.jpg",
    fotoHero: "img/stavanger.jpg",
    dias: 5, km: 480,
    transporteAdulto: 2150, transporteCrianca: 1075,
    atividadesPP: 600,
    resumo: "Para famílias que querem UMA grande trilha: o púlpito de pedra Preikestolen, 604 m acima do Lysefjord — 8 km ida e volta, totalmente viável aos 12 anos. Combina com a rota costeira oficial Bergen–Stavanger do Visit Norway.",
    mapa: { cor: "#8bb7e0", pontos: ["bergen", "haugesund", "stavanger", "preikestolen"] },
    diasDetalhe: [
      {
        titulo: "A costa de ônibus e balsa",
        rota: "Bergen → Haugesund → Stavanger",
        desc: "O Kystbussen desce a costa com duas travessias de balsa incluídas no bilhete (vocês descem do ônibus e sobem no convés — golfinhos aparecem às vezes). Chegada em Stavanger à tarde: Gamle Stavanger, 170 casinhas brancas de madeira do séc. XVIII. Noite em Stavanger (3 noites).",
        legs: [
          { modo: "onibus", de: "Bergen", para: "Stavanger", dur: "4h30", dist: "210 km", pa: 549, pc: 275, op: "Kystbussen / NOR-WAY", tip: "Bilhetes promocionais desde kr 199 no site — compre cedo." }
        ],
        highlights: [["Balsas com vista", false], ["Gamle Stavanger", false]]
      },
      {
        titulo: "Stavanger com calma",
        rota: "Dia em Stavanger",
        desc: "Museu do Petróleo (muito mais divertido do que soa — tem plataforma para escalar), rua colorida Øvre Holmegate, e o Sverd i fjell (três espadas viking gigantes fincadas na praia de Hafrsfjord).",
        legs: [],
        highlights: [["Museu do Petróleo", true], ["Øvre Holmegate", false], ["Espadas de Hafrsfjord", false]]
      },
      {
        titulo: "O dia do Púlpito",
        rota: "Stavanger ⇄ Preikestolen",
        desc: "Ônibus direto ao Preikestolen Basecamp e trilha: 8 km ida e volta, 500 m de subida, 4–5h no total com pausas. O final — uma laje perfeitamente plana de 25×25 m pairando 604 m sobre o Lysefjord — é indescritível. Saiam antes das 8h para evitar multidão. Levem lanche e água.",
        legs: [
          { modo: "onibus", de: "Stavanger", para: "Preikestolen (ida e volta)", dur: "50 min cada", dist: "40 km", pa: 395, pc: 198, op: "Pulpit Rock Express / Boreal", tip: "Passa pelo túnel submarino Ryfylke (o mais profundo do mundo: −292 m)." },
          { modo: "trilha", de: "Basecamp", para: "Preikestolen", dur: "4–5h", dist: "8 km", pa: 0, pc: 0, op: "Trilha sinalizada · grátis" }
        ],
        highlights: [["Preikestolen 604 m", false], ["Lysefjord visto de cima", false]]
      },
      {
        titulo: "O fiorde visto de baixo",
        rota: "Cruzeiro no Lysefjord",
        desc: "Barco de 3h pelo Lysefjord passando embaixo do Preikestolen (que vocês pisaram ontem!), pela caverna do Vagabundo e pela cachoeira Hengjanefossen, com paradinha para cabras montesas. Tarde livre: banho na praia urbana de Sjøbadet ou chocolate quente no café Sting.",
        legs: [
          { modo: "barco", de: "Stavanger", para: "Lysefjord (circuito)", dur: "3h", dist: "80 km", pa: 890, pc: 445, op: "Rødne Fjord Cruise", tip: "Tarifa família (2+2) ~kr 2.225 — pergunte no balcão." }
        ],
        highlights: [["Lysefjord por água", false], ["Cabras montesas", false]]
      },
      {
        titulo: "Retorno flexível",
        rota: "Stavanger → Oslo ou Bergen",
        desc: "Três saídas: trem Sørlandsbanen a Oslo (~8h pelo interior, Minipris desde kr 499), voo de 55 min, ou Kystbussen de volta a Bergen para conectar com outro roteiro deste guia.",
        legs: [
          { modo: "trem", de: "Stavanger", para: "Oslo", dur: "8h", dist: "545 km", pa: 780, pc: 390, op: "Go-Ahead · Sørlandsbanen", tip: "O noturno economiza uma diária de hotel." }
        ],
        highlights: [["Sørlandsbanen", false]]
      }
    ]
  },
  {
    id: "grand",
    tag: "14 dias",
    nome: "Grand Tour: a Noruega inteira de uma vez",
    foto: "img/trollstigen.jpg",
    fotoHero: "img/hardanger.jpg",
    dias: 14, km: 2100,
    transporteAdulto: 6100, transporteCrianca: 3050,
    atividadesPP: 1500,
    resumo: "Para quem tem duas semanas e quer voltar sem NENHUMA pendência: costura o Nutshell, o Sognefjord, Geiranger e Trondheim num círculo perfeito Oslo → Bergen → norte → Oslo. É a viagem da vida.",
    mapa: { cor: "#d8c9a3", pontos: ["oslo", "myrdal", "flam", "gudvangen", "voss", "bergen", "alesund", "geiranger", "andalsnes", "dombas", "trondheim", "oslo"] },
    diasDetalhe: [
      {
        titulo: "Semana 1 — Oslo, montanha e fiordes do sul",
        rota: "Oslo → Flåm → Bergen (dias 1–6)",
        desc: "Dias 1–2: Oslo. Dia 3: Bergensbanen + Flåmsbana até Flåm (2 noites — com Stegastein e caiaque). Dia 5: cruzeiro Nærøyfjord + Voss + Bergen. Dia 6: Bergen inteira (Bryggen, Fløyen, mercado).",
        legs: [
          { modo: "trem", de: "Oslo", para: "Flåm", dur: "~6h", dist: "356 km", pa: 1250, pc: 625, op: "Vy + Flåmsbana" },
          { modo: "barco", de: "Flåm", para: "Gudvangen", dur: "2h", dist: "32 km", pa: 550, pc: 275, op: "Norway's Best" },
          { modo: "onibus", de: "Gudvangen", para: "Bergen (via Voss)", dur: "2h30", dist: "154 km", pa: 387, pc: 194, op: "Skyss + Vy" }
        ],
        highlights: [["Tudo do roteiro Nutshell", false], ["2 noites em Flåm", false]]
      },
      {
        titulo: "Semana 2 — costa, Geiranger e o caminho de volta",
        rota: "Bergen → Ålesund → Geiranger → Trondheim → Oslo (dias 7–14)",
        desc: "Dia 7: navio costeiro noturno a Ålesund. Dia 8: Ålesund. Dia 9: catamarã a Geiranger. Dia 10: Trollstigen de ônibus até Åndalsnes + gôndola. Dia 11: Raumabanen + Dovrebanen até Trondheim. Dia 12: Trondheim. Dia 13: trem a Oslo (ou noturno). Dia 14: Oslo de despedida — e aeroporto.",
        legs: [
          { modo: "barco", de: "Bergen", para: "Ålesund", dur: "12h45", dist: "380 km", pa: 1400, pc: 700, op: "Havila/Hurtigruten" },
          { modo: "barco", de: "Ålesund", para: "Geiranger", dur: "3h15", dist: "110 km", pa: 895, pc: 450, op: "The Fjords" },
          { modo: "onibus", de: "Geiranger", para: "Åndalsnes", dur: "3h", dist: "104 km", pa: 429, pc: 215, op: "FRAM verão" },
          { modo: "trem", de: "Åndalsnes", para: "Trondheim", dur: "4h30", dist: "327 km", pa: 700, pc: 350, op: "SJ Nord" },
          { modo: "trem", de: "Trondheim", para: "Oslo", dur: "6h40", dist: "553 km", pa: 700, pc: 350, op: "SJ Nord" }
        ],
        highlights: [["Geirangerfjord + Trollstigen", false], ["Raumabanen", false], ["Trondheim", false]]
      }
    ]
  }
];

/* ---------------- TABELA DE PREÇOS ---------------- */
const PRICE_ROWS = [
  { t: "Oslo → Bergen (Bergensbanen)", m: "trem", d: "6h30", km: "496 km", a: [399, 1099], c: "50%" },
  { t: "Myrdal → Flåm (Flåmsbana)", m: "trem", d: "55 min", km: "20 km", a: [570, 570], c: "kr 285 (6–17)" },
  { t: "Flåm → Gudvangen (Nærøyfjord, elétrico)", m: "barco", d: "2h", km: "32 km", a: [550, 550], c: "kr 275 · família 2+2: kr 1.365" },
  { t: "Gudvangen → Voss", m: "onibus", d: "45 min", km: "47 km", a: [135, 135], c: "50%" },
  { t: "Voss → Bergen", m: "trem", d: "1h15", km: "107 km", a: [149, 297], c: "50%" },
  { t: "Bergen → Stavanger (Kystbussen, 2 balsas)", m: "onibus", d: "4h30", km: "210 km", a: [199, 899], c: "50%" },
  { t: "Stavanger ⇄ Preikestolen (expresso)", m: "onibus", d: "50 min", km: "40 km", a: [395, 395], c: "kr 198" },
  { t: "Lysefjord — cruzeiro com Preikestolen", m: "barco", d: "3h", km: "80 km", a: [890, 890], c: "kr 445" },
  { t: "Bergen → Ålesund (navio costeiro, noturno)", m: "barco", d: "12h45", km: "380 km", a: [1100, 1900], c: "desconto a bordo" },
  { t: "Ålesund → Geiranger (catamarã)", m: "barco", d: "3h15", km: "110 km", a: [895, 895], c: "kr 450" },
  { t: "Geiranger → Åndalsnes (via Trollstigen)", m: "onibus", d: "3h", km: "104 km", a: [429, 429], c: "50%" },
  { t: "Åndalsnes → Dombås (Raumabanen)", m: "trem", d: "1h40", km: "114 km", a: [249, 429], c: "50%" },
  { t: "Dombås → Trondheim (Dovrebanen)", m: "trem", d: "2h40", km: "213 km", a: [299, 549], c: "50%" },
  { t: "Trondheim → Oslo", m: "trem", d: "6h40", km: "553 km", a: [399, 999], c: "50%" },
  { t: "Stavanger → Oslo (Sørlandsbanen)", m: "trem", d: "8h", km: "545 km", a: [499, 999], c: "50%" },
  { t: "Fløibanen (funicular, Bergen)", m: "bondinho", d: "8 min", km: "0,85 km", a: [175, 175], c: "kr 88" },
  { t: "Loen Skylift (opcional, Nordfjord)", m: "bondinho", d: "5 min", km: "1 km", a: [290, 290], c: "desconto criança" }
];
const MODE_COLOR = { trem: "var(--teal)", barco: "#2d6b9e", onibus: "var(--amber-deep)", trilha: "#5a7d3b", bondinho: "var(--red)" };
const MODE_LABEL = { trem: "Trem", barco: "Barco", onibus: "Ônibus", trilha: "Trilha", bondinho: "Bondinho" };

/* ---------------- DICAS ---------------- */
const TIPS = [
  { h: "Compre trens 60–90 dias antes", p: "As passagens da Vy abrem <b>90 dias</b> antes da viagem. O mesmo trecho Oslo–Bergen custa kr 399 (Minipris) ou kr 1.099 em cima da hora. Para julho, compre AGORA — os Minipris de alta temporada evaporam." },
  { h: "A mágica dos 4–15 anos", p: "Seu irmão paga <b>meia em quase tudo</b> — e na Vy, 1 criança de 4–15 viaja <b>grátis</b> acompanhando um adulto com bilhete normal em trens regionais. Sempre marquem a idade ao comprar; o sistema aplica sozinho." },
  { h: "Pacote pronto × por conta própria", p: "O pacote Norway in a Nutshell oficial custa ~kr 2.250–2.880 por adulto. Comprando os mesmos 5 bilhetes separados: <b>~kr 1.700–1.990</b>. Para 4 pessoas, a economia paga várias noites de hostel." },
  { h: "Julho = reserve dormida antes", p: "É alta temporada. Flåm, Geiranger e Balestrand são vilarejos minúsculos: hospedagens familiares somem meses antes. Hostels (Haukeland, HI Norway) e cabanas de camping (<i>hytter</i>, ~kr 1.200–1.600 para 4) são os melhores custo-benefício." },
  { h: "Comida sem falência", p: "Restaurante médio: kr 250–400/prato. O truque norueguês: <b>café da manhã reforçado do hotel</b>, almoço de mercado (Rema 1000, Kiwi, Extra — pão, salmão defumado, frutas) e 1 jantar especial a cada 2–3 dias. First Price é a marca branca mais barata." },
  { h: "Água da torneira & garrafinha", p: "A água da torneira norueguesa é excelente (e a de garrafa custa kr 35!). Levem garrafas reutilizáveis — dá para encher até em cachoeira na trilha." },
  { h: "Sol da meia-noite = dias em dobro", p: "Em meados de julho o sol se põe ~22h45 e nasce ~4h30. Dá para fazer trilha depois do jantar com luz plena. Levem <b>máscara de dormir</b> — sério." },
  { h: "Clima: 4 estações por dia", p: "12–19 °C, sol e chuva alternando em horas (Bergen chove 1 dia sim, 1 não). Fórmula: camadas + corta-vento impermeável + bota de trilha já amaciada. Esqueçam guarda-chuva na trilha; capa é melhor." },
  { h: "Cartão para tudo, coroa nenhuma", p: "A Noruega é praticamente <b>cashless</b> — até banheiro público aceita cartão. Cartão de crédito internacional ou Wise/Nomad resolve 100% da viagem. Não troquem dinheiro em espécie." },
  { h: "Trolltunga: ainda não (quase)", p: "A foto famosa da 'língua do troll' exige <b>20 km e 10–12h</b> de trilha — pesado aos 12 anos. O Preikestolen (8 km, 4–5h) entrega paisagem igualmente absurda em versão família. Trolltunga fica para a próxima, de motorhome!" },
  { h: "Entur é o cérebro da viagem", p: "Um único app mostra e vende <b>trem + ônibus + barco + metrô</b> do país inteiro, em inglês. Planejem cada dia nele na véspera; atrasos e plataformas aparecem em tempo real." },
  { h: "Seguro & documentos", p: "Brasileiros não precisam de visto (Schengen, até 90 dias), mas o <b>seguro-viagem com cobertura de €30.000 é obrigatório</b>. Passaporte válido por 3+ meses após a volta. Menores: autorização de viagem se não estiverem com ambos os pais." }
];

/* ---------------- GALERIA ---------------- */
const GALLERY = [
  ["img/naeroyfjord.jpg", "Nærøyfjord — o braço UNESCO do Sognefjord"],
  ["img/flam-railway.jpg", "Flåmsbana — 863 m de descida em 20 km"],
  ["img/bryggen.jpg", "Bryggen, o cais hanseático de Bergen"],
  ["img/preikestolen.jpg", "Preikestolen — 604 m sobre o Lysefjord"],
  ["img/seven-sisters.jpg", "As Sete Irmãs, Geirangerfjord"],
  ["img/trollstigen.jpg", "Trollstigen — a estrada dos trolls, de ônibus"],
  ["img/alesund.jpg", "Ålesund vista do mirante Aksla"],
  ["img/borgund.jpg", "Igreja de madeira de Borgund, ano 1180"],
  ["img/voringsfossen.jpg", "Vøringsfossen, 182 m de queda"],
  ["img/stegastein.jpg", "Mirante Stegastein, 650 m sobre o Aurlandsfjord"],
  ["img/lovatnet.jpg", "Lago Lovatnet visto do Loen Skylift"],
  ["img/balestrand.jpg", "Balestrand, a vila dos artistas"],
  ["img/myrdal.jpg", "Myrdal — a baldeação mais bonita do mundo"],
  ["img/finse.jpg", "Finse, 1.222 m — o teto da Bergensbanen"],
  ["img/stavanger.jpg", "Gamle Stavanger e suas 170 casas brancas"],
  ["img/trondheim.jpg", "Bakklandet, Trondheim"],
  ["img/oslo-opera.jpg", "Ópera de Oslo — suba pelo telhado"],
  ["img/hardanger.jpg", "Hardangerfjord, o fiorde dos pomares"],
  ["img/trolltunga.jpg", "Trolltunga — fica para a viagem de motorhome"],
  ["img/hero-geiranger.jpg", "Geirangerfjord do mirante Ørnesvingen"]
];

const CREDITS = [
  "Geirangerfjord (Ørnesvingen) e Borgund — Ximonic, Simo Räsänen · CC BY-SA 3.0",
  "Nærøyfjorden mot Gudvangen — mcxurxo · CC BY 2.0",
  "Flåm Railway — Christopher Macsurak · CC BY 2.0",
  "Bryggen e Ålesund — Diego Delso, delso.photo · CC BY-SA 4.0",
  "Preikestolen, Seven Sisters e Trollstigen — W. Bulach · CC BY-SA 4.0",
  "Trolltunga — TerjeN · CC BY 3.0",
  "Vøringsfossen e Stegastein — Netha Hussain · CC BY-SA 4.0",
  "Oslo Opera House — kallerna · CC BY-SA 4.0",
  "Myrdal — Inkey · CC BY-SA 4.0",
  "Lovatnet from Hoven — Armatus1995 · CC BY-SA 4.0",
  "Gamle Stavanger — Jules Verne Times Two · CC BY-SA 4.0",
  "Bakklandet Trondheim — HuBar · CC BY-SA 2.5",
  "Finse stasjon — Tore Sætre · CC BY-SA 4.0",
  "Balestrand — Tastocke · CC BY-SA 3.0",
  "Hardangerfjord — Holger Uwe Schmitt · CC BY-SA 4.0",
  "Todas via Wikimedia Commons"
];

/* ---------------- MAPA (geografia real — dados em norway-map.js) ---------------- */
const CITY_LABELS = {
  oslo:        { anchor: "start", dx: 10, dy: 5 },
  bergen:      { anchor: "end", dx: -10, dy: 5 },
  voss:        { anchor: "end", dx: -7, dy: 5 },
  myrdal:      { anchor: "start", dx: 7, dy: 13 },
  finse:       { anchor: "start", dx: 7, dy: 13 },
  flam:        { anchor: "start", dx: 8, dy: -3 },
  gudvangen:   { anchor: "end", dx: -8, dy: 3 },
  aurland:     { anchor: "start", dx: 8, dy: -13 },
  laerdal:     { anchor: "start", dx: 8, dy: 4 },
  sogndal:     { anchor: "start", dx: 8, dy: -4 },
  balestrand:  { anchor: "end", dx: -8, dy: -4 },
  haugesund:   { anchor: "start", dx: 9, dy: 4 },
  stavanger:   { anchor: "end", dx: -10, dy: 12 },
  preikestolen:{ anchor: "start", dx: 8, dy: -6 },
  alesund:     { anchor: "end", dx: -10, dy: 2 },
  geiranger:   { anchor: "start", dx: 8, dy: 12 },
  andalsnes:   { anchor: "start", dx: 8, dy: -5 },
  dombas:      { anchor: "start", dx: 8, dy: 14 },
  trondheim:   { anchor: "start", dx: 11, dy: 5 }
};

/* Fichas das cidades — cultura, fotos e dicas */
const CITY_INFO = {
  oslo: { reg: "Capital · Østlandet", foto: "img/oslo-opera.jpg",
    blurb: "Capital compacta espremida entre o fiorde e a floresta, onde vikings, arquitetura futurista e a melhor cena de museus do país convivem a 10 min de metrô.",
    itens: ["Subir (literalmente) o telhado de mármore da Ópera", "Parque Vigeland: 212 esculturas de Gustav Vigeland", "Museus Fram e Kon-Tiki na península de Bygdøy"],
    dica: "O Oslo Pass (24h) cobre museus + transporte público e tem versão criança." },
  bergen: { reg: "Vestlandet · porta dos fiordes", foto: "img/bryggen.jpg",
    blurb: "Cidade hanseática cercada por 7 montanhas. O cais de Bryggen (UNESCO) era o escritório da liga comercial alemã no séc. XIV — hoje é um labirinto de galerias e cafés entre vielas de madeira torta.",
    itens: ["Fløibanen até o monte Fløyen: trilhas, cabras e canoas grátis", "Mercado de peixe: prove o salmão defumado na hora", "Museu Hanseático e os becos de Bryggen"],
    dica: "Chove 1 dia sim, 1 não — programem os fiordes para o dia de sol e Bergen para o de chuva." },
  voss: { reg: "Entre Bergen e o fiorde",
    blurb: "A capital norueguesa dos esportes radicais: paraglider, rafting, skydiving indoor. Fica à beira do lago Vangsvatnet e é a baldeação clássica entre trem e ônibus do Nutshell.",
    itens: ["Voss Gondol: 9 min até o monte Hanguren", "Rafting no rio Stranda (a partir de 12 anos!)", "Vindtunnel: paraquedismo indoor para a família"],
    dica: "Se sobrar 1h entre conexões, o lago em frente à estação rende um piquenique perfeito." },
  myrdal: { reg: "866 m · entroncamento ferroviário", foto: "img/myrdal.jpg",
    blurb: "Não é bem uma cidade: é uma estação no alto da montanha onde a Bergensbanen encontra a Flåmsbana. Sem estradas — só trilhos, bicicletas e a descida mais famosa da Noruega.",
    itens: ["A baldeação com a vista mais bonita do país", "Início da Rallarvegen, a ciclovia dos ferroviários", "Cachoeiras despencando em todas as direções"],
    dica: "Na troca de trem, fiquem do lado esquerdo da Flåmsbana descendo para Flåm." },
  finse: { reg: "1.222 m · o teto da ferrovia", foto: "img/finse.jpg",
    blurb: "A estação mais alta da Noruega, sem acesso por estrada, à beira da geleira Hardangerjøkulen. Foi aqui que George Lucas filmou o planeta gelado Hoth de Star Wars: O Império Contra-Ataca (1979).",
    itens: ["Neve ao lado dos trilhos até em pleno julho", "Rallarmuseet: o museu dos operários da ferrovia", "Vista da geleira Hardangerjøkulen do vagão"],
    dica: "Vocês passam por aqui no trem Oslo–Myrdal — câmeras prontas ~2h40 depois de Oslo." },
  flam: { reg: "Aurlandsfjord · 350 habitantes", foto: "img/flam-railway.jpg",
    blurb: "Vilarejo minúsculo no fundo do Aurlandsfjord que recebe o trem mais bonito do mundo. Base perfeita para 1–2 noites: cruzeiros, caiaque, zipline e uma cervejaria viking premiada.",
    itens: ["Museu da Flåmsbana (grátis, ao lado da estação)", "Ægir BryggeriPub: hidromel para os adultos, suco artesanal para o resto", "Flåm Zipline: 1.381 m de tirolesa"],
    dica: "Mercadinho Coop fica atrás do hotel Fretheim — abasteçam o piquenique aqui." },
  gudvangen: { reg: "Fim do Nærøyfjord", foto: "img/naeroyfjord.jpg",
    blurb: "O nome significa “campo dos deuses”: um anfiteatro de paredões de 1.400 m no ponto final do cruzeiro pelo Nærøyfjord. Abriga a vila viking mais autêntica do país.",
    itens: ["Njardarheimr: vila viking viva, com moradores em personagem", "Tiro com arco e cunhagem de moedas vikings", "A cachoeira Kjelfossen (755 m) bem atrás da vila"],
    dica: "Reservem 1h30 antes do ônibus para a vila viking — o irmão de 12 vai querer ficar mais." },
  aurland: { reg: "Aurlandsfjord · vila dos sapatos", foto: "img/stegastein.jpg",
    blurb: "Vilarejo que inventou o penny loafer (o mocassim “Aurland” original, anos 1930) e guarda o mirante Stegastein, uma prancha de madeira flutuando 650 m acima do fiorde.",
    itens: ["Stegastein ao pôr do sol (que em julho é ~22h30)", "Fábrica-loja do sapato Aurland, desde 1880", "Geitost: o famoso queijo caramelo de cabra local"],
    dica: "O ônibus panorâmico Flåm–Stegastein tem 4–6 saídas/dia no verão; compre ida e volta." },
  laerdal: { reg: "Sognefjord · vila histórica",
    foto: "img/borgund.jpg",
    blurb: "Gamle Lærdalsøyri tem 160 casas de madeira dos sécs. XVIII–XIX intactas — cenário de filme. A 30 min está Borgund, a igreja de madeira viking (1180) mais bem preservada da Noruega.",
    itens: ["Stavkirke de Borgund e suas cabeças de dragão", "Centro do Salmão Selvagem norueguês", "Passear entre as casinhas de Gamle Lærdalsøyri"],
    dica: "O túnel de Lærdal (24,5 km, o rodoviário mais longo do mundo) tem cavernas azuis — o ônibus atravessa." },
  sogndal: { reg: "Sognefjord · hub estudantil",
    blurb: "Cidadezinha universitária e agrícola, famosa por cerejas e sidra, que funciona como rótula de ônibus e barcos do Sognefjord — e porta de entrada para as geleiras do Jostedalsbreen.",
    itens: ["Base para a caminhada na geleira Nigardsbreen", "Sorvete de morango + cereja da região", "Vista do fiorde na chegada de barco"],
    dica: "Supermercados grandes e hospedagem mais barata que nos vilarejos — bom pit stop." },
  balestrand: { reg: "Sognefjord · vila dos artistas", foto: "img/balestrand.jpg",
    blurb: "Pintores do séc. XIX se apaixonaram por esta península — e nunca mais foi embora. Vilas suíças ornamentadas, o histórico Hotel Kviknes e a igreja de madeira que inspirou a capela de Frozen.",
    itens: ["Igreja de São Olavo (1897), a “capela de Arendelle”", "Ciderhuset: sidras e sucos de maçã do fiorde", "Nadar no fiorde do píer (16 °C: coragem!)"],
    dica: "O buffet histórico do Kviknes é caro, mas o café da tarde com vista compensa." },
  haugesund: { reg: "Costa oeste · terra dos reis vikings",
    blurb: "Parada do Kystbussen entre Bergen e Stavanger. Aqui ao lado, em Avaldsnes, Harald Cabelo Belo unificou a Noruega em 872 — é o “berço do reino”.",
    itens: ["Avaldsnes: fazenda real viking e igreja de São Olavo", "Orla de Smedasundet, cheia de cafés", "Festival do arenque (a cidade cresceu do peixe)"],
    dica: "Dá para descer, almoçar na orla e pegar o Kystbussen seguinte — bilhetes são por trecho." },
  stavanger: { reg: "Rogaland · capital do petróleo", foto: "img/stavanger.jpg",
    blurb: "Mistura curiosa: 170 casinhas brancas do séc. XVIII em Gamle Stavanger, a rua mais colorida do país (Øvre Holmegate) e arte de rua de nível mundial graças ao festival Nuart.",
    itens: ["Museu do Petróleo: plataforma para escalar + cinema", "Caça aos murais do Nuart pelas ruelas", "Sverd i fjell: as 3 espadas viking gigantes na praia"],
    dica: "Domingo os mercados fecham — garantam o lanche da trilha no sábado." },
  preikestolen: { reg: "Lysefjord · 604 m", foto: "img/preikestolen.jpg",
    blurb: "O Púlpito: uma laje de granito perfeitamente plana de 25×25 m pairando 604 m sobre o Lysefjord. A trilha (8 km ida e volta, 500 m de subida) é a grande aventura em família da viagem.",
    itens: ["4–5h de caminhada com pausas — viável aos 12 anos", "Chegar antes das 9h = platô quase vazio", "Ver o barco do cruzeiro passando lá embaixo"],
    dica: "Não tem grade nenhuma: fotos deitados na borda e irmão sempre à vista." },
  alesund: { reg: "Sunnmøre · art nouveau", foto: "img/alesund.jpg",
    blurb: "Queimou inteira numa noite de 1904 e renasceu em 3 anos no estilo art nouveau — torres, gárgulas e fachadas cor pastel entre o mar e os Alpes de Sunnmøre.",
    itens: ["Mirante Aksla: 418 degraus, vista dos 7 ilhéus", "Atlanterhavsparken: um dos maiores aquários do norte da Europa", "Canal Brosundet e o centro art nouveau"],
    dica: "O Jugendstilsenteret (museu do art nouveau) tem um “túnel do tempo” que crianças adoram." },
  geiranger: { reg: "Geirangerfjord · UNESCO", foto: "img/seven-sisters.jpg",
    blurb: "250 moradores, 600 mil visitantes: o fiorde-cartão-postal da Noruega, com as cachoeiras das Sete Irmãs despencando 250 m direto no mar esmeralda.",
    itens: ["Mirante Ørnesvingen (a curva da águia)", "Norsk Fjordsenter: como os fiordes nasceram", "Sorvete de morango da fazenda Westerås"],
    dica: "Fujam do horário dos navios de cruzeiro (checem o calendário do porto) — a vila esvazia à tarde." },
  andalsnes: { reg: "Romsdal · capital do montanhismo", foto: "img/trollstigen.jpg",
    blurb: "Encaixada entre o fiorde e a parede vertical de Trollveggen (1.000 m, a maior da Europa), é o QG dos alpinistas noruegueses — com gôndola panorâmica e a ferrovia de Rauma na porta.",
    itens: ["Romsdalsgondolen até Nesaksla (708 m)", "Rampestreken: passarela suspensa sobre a cidade", "Norsk Tindesenter: museu do alpinismo com parede de escalada"],
    dica: "A gôndola tem tarifa família — e lá em cima o restaurante Eggen tem vista de 360°." },
  dombas: { reg: "Dovrefjell · cruzamento de trilhos",
    blurb: "Vilarejo onde a Raumabanen encontra a Dovrebanen, à beira do parque nacional de Dovrefjell — o único lugar da Europa com bois-almiscarados selvagens, sobreviventes da era do gelo.",
    itens: ["Safári de boi-almiscarado no Dovrefjell (verão)", "Pavilhão-mirante Snøhetta (arquitetura premiada)", "Renas selvagens pela janela do trem"],
    dica: "Se for só baldeação, sentem do lado esquerdo do trem para Trondheim: o vale de Drivdalen é lindo." },
  trondheim: { reg: "Trøndelag · primeira capital", foto: "img/trondheim.jpg",
    blurb: "Capital viking da Noruega (997 d.C.) e destino de peregrinação há mil anos graças à catedral de Nidaros. Hoje é cidade universitária: jovem, ciclável e cheia de cafés.",
    itens: ["Catedral de Nidaros + coroa das joias reais", "Bakklandet: casinhas coloridas e a ponte da felicidade", "Trampe: o único elevador de bicicletas do mundo"],
    dica: "Rockheim (museu do pop/rock norueguês) é interativo — e o irmão vira DJ." }
};

function openCity(id) {
  const info = CITY_INFO[id];
  const c = CITY_XY[id];
  if (!info || !c) return;
  const routesHere = ROUTES.filter(r => r.mapa.pontos.includes(id));
  const modal = document.getElementById("cityModal");
  modal.innerHTML = `
    <div class="cm-card" role="dialog" aria-modal="true" aria-label="${c.l}">
      <button class="cm-close" aria-label="Fechar">✕</button>
      ${info.foto ? `<div class="cm-media"><img src="${info.foto}" alt="${c.l}"></div>` : ""}
      <div class="cm-body">
        <span class="cm-region">${info.reg}</span>
        <h3>${c.l.split("·")[0].trim()}</h3>
        <p class="cm-blurb">${info.blurb}</p>
        <ul class="cm-list">${info.itens.map(i => `<li>✦ ${i}</li>`).join("")}</ul>
        <p class="cm-tip">💡 ${info.dica}</p>
        ${routesHere.length ? `<div class="cm-routes">${routesHere.map(r =>
          `<span class="cm-route-chip" style="--c:${r.mapa.cor}">${r.nome.split(":")[0]}</span>`).join("")}</div>` : ""}
      </div>
    </div>`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const close = () => { modal.hidden = true; document.body.style.overflow = ""; };
  modal.querySelector(".cm-close").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") { close(); document.removeEventListener("keydown", esc); }
  });
}

function buildMap() {
  const routesSvg = ROUTES.map(r => {
    const pts = r.mapa.pontos.map(p => `${CITY_XY[p].x},${CITY_XY[p].y}`).join(" ");
    return `<polyline class="map-route" data-route="${r.id}" points="${pts}" stroke="${r.mapa.cor}" style="color:${r.mapa.cor}"/>`;
  }).join("");

  const citiesSvg = Object.entries(CITY_XY).map(([id, c]) => {
    const lb = CITY_LABELS[id] || { anchor: "start", dx: 8, dy: 4 };
    return `<g class="city-g" data-city="${id}" tabindex="0" role="button" aria-label="Sobre ${c.l}">
       <circle class="city-hit" cx="${c.x}" cy="${c.y}" r="13"/>
       <circle class="map-city" cx="${c.x}" cy="${c.y}" r="${c.big ? 5.5 : 3.8}"/>
       <text class="map-label ${c.big ? "big" : ""}" x="${c.x + lb.dx}" y="${c.y + lb.dy}" text-anchor="${lb.anchor}">${c.l}</text>
     </g>`;
  }).join("");

  const landSvg = NORWAY_PATHS.map(d => `<path class="map-land" d="${d}"/>`).join("");
  const VB = { x: -16, y: -6, w: 652, h: MAP_H + 12 };

  document.getElementById("mapSvg").innerHTML = `
  <svg id="norwaySvg" viewBox="${VB.x} ${VB.y} ${VB.w} ${VB.h}" xmlns="http://www.w3.org/2000/svg" aria-label="Mapa do sul da Noruega com as rotas dos roteiros">
    <defs>
      <linearGradient id="fadeR" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0.86" stop-color="#fff"/><stop offset="1" stop-color="#555"/>
      </linearGradient>
      <linearGradient id="fadeT" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#333"/><stop offset="0.08" stop-color="#fff"/>
      </linearGradient>
      <mask id="edgeFade">
        <rect x="${VB.x}" y="${VB.y}" width="${VB.w}" height="${VB.h}" fill="url(#fadeR)"/>
        <rect x="${VB.x}" y="${VB.y}" width="${VB.w}" height="${VB.h}" fill="url(#fadeT)" style="mix-blend-mode:multiply"/>
      </mask>
    </defs>
    <g mask="url(#edgeFade)">${landSvg}</g>
    <text class="map-sea-label" x="16" y="470" transform="rotate(-78 16 470)">MAR DA NORUEGA</text>
    ${routesSvg}
    ${citiesSvg}
    <g transform="translate(586,54)" opacity="0.75" class="compass">
      <circle r="22" fill="none" stroke="#8fa8ad" stroke-width="1"/>
      <path d="M0 -18 L4.5 0 L0 18 L-4.5 0 Z" fill="#e79a3c"/>
      <text y="-28" text-anchor="middle" fill="#dce8e6" font-size="12" font-weight="700" font-family="Schibsted Grotesk">N</text>
    </g>
  </svg>
  <div class="map-zoom">
    <button data-z="in" aria-label="Aproximar">+</button>
    <button data-z="out" aria-label="Afastar">−</button>
    <button data-z="reset" aria-label="Recentralizar">⌂</button>
  </div>`;

  initPanZoom(VB);

  const legend = document.getElementById("mapLegend");
  legend.innerHTML = ROUTES.map(r =>
    `<button class="ml-item" data-route="${r.id}">
       <span class="ml-swatch" style="background:${r.mapa.cor}"></span>
       <span>${r.nome.split(":")[0]}<br><small style="color:#8fa8ad">${r.dias} dias · ${r.km.toLocaleString("pt-BR")} km</small></span>
     </button>`
  ).join("");

  const activate = id => {
    document.querySelectorAll(".map-route").forEach(p => p.classList.toggle("is-active", p.dataset.route === id));
    document.querySelectorAll(".ml-item").forEach(b => b.classList.toggle("is-active", b.dataset.route === id));
  };
  legend.querySelectorAll(".ml-item").forEach(b => {
    b.addEventListener("mouseenter", () => activate(b.dataset.route));
    b.addEventListener("click", () => activate(b.dataset.route));
  });
  activate(ROUTES[0].id);
}

/* pan + zoom via manipulação do viewBox */
function initPanZoom(BASE) {
  const svg = document.getElementById("norwaySvg");
  const vb = { ...BASE };
  const MIN_W = BASE.w / 9;
  let dragged = false;

  const apply = () => {
    // limita o passeio para a área do mapa (com folga de meia tela)
    vb.x = Math.max(BASE.x - vb.w * 0.5, Math.min(BASE.x + BASE.w - vb.w * 0.5, vb.x));
    vb.y = Math.max(BASE.y - vb.h * 0.5, Math.min(BASE.y + BASE.h - vb.h * 0.5, vb.y));
    svg.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
    svg.classList.toggle("is-zoomed", vb.w < BASE.w * 0.98);
  };

  const toSvg = (cx, cy) => {
    const r = svg.getBoundingClientRect();
    return { x: vb.x + (cx - r.left) / r.width * vb.w, y: vb.y + (cy - r.top) / r.height * vb.h };
  };

  const zoomAt = (px, py, factor) => {
    const w = Math.max(MIN_W, Math.min(BASE.w, vb.w * factor));
    const f = w / vb.w;
    vb.x = px - (px - vb.x) * f;
    vb.y = py - (py - vb.y) * f;
    vb.w = w; vb.h *= f;
    apply();
  };

  svg.addEventListener("wheel", e => {
    e.preventDefault();
    const p = toSvg(e.clientX, e.clientY);
    zoomAt(p.x, p.y, e.deltaY > 0 ? 1.18 : 1 / 1.18);
  }, { passive: false });

  svg.addEventListener("dblclick", e => {
    const p = toSvg(e.clientX, e.clientY);
    zoomAt(p.x, p.y, 1 / 1.8);
  });

  // arrastar (1 dedo/mouse) e pinça (2 dedos)
  const pointers = new Map();
  let pinchDist = 0;
  svg.addEventListener("pointerdown", e => {
    svg.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragged = false;
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
    }
  });
  svg.addEventListener("pointermove", e => {
    if (!pointers.has(e.pointerId)) return;
    const prev = pointers.get(e.pointerId);
    const dx = e.clientX - prev.x, dy = e.clientY - prev.y;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (Math.abs(dx) + Math.abs(dy) > 2) dragged = true;
    const r = svg.getBoundingClientRect();
    if (pointers.size === 1) {
      vb.x -= dx / r.width * vb.w;
      vb.y -= dy / r.height * vb.h;
      apply();
    } else if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDist > 0 && d > 0) {
        const mid = toSvg((a.x + b.x) / 2, (a.y + b.y) / 2);
        zoomAt(mid.x, mid.y, pinchDist / d);
      }
      pinchDist = d;
    }
  });
  const release = e => { pointers.delete(e.pointerId); pinchDist = 0; };
  svg.addEventListener("pointerup", release);
  svg.addEventListener("pointercancel", release);

  // botões
  document.querySelectorAll(".map-zoom button").forEach(b =>
    b.addEventListener("click", () => {
      const cx = vb.x + vb.w / 2, cy = vb.y + vb.h / 2;
      if (b.dataset.z === "in") zoomAt(cx, cy, 1 / 1.5);
      else if (b.dataset.z === "out") zoomAt(cx, cy, 1.5);
      else { Object.assign(vb, BASE); apply(); }
    })
  );

  // clique nas cidades (ignora se foi arrasto)
  svg.querySelectorAll(".city-g").forEach(g => {
    g.addEventListener("click", () => { if (!dragged) openCity(g.dataset.city); });
    g.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCity(g.dataset.city); }
    });
  });
}

/* ---------------- RENDER: PICKER + DETALHE ---------------- */
function buildPicker() {
  const picker = document.getElementById("routePicker");
  picker.innerHTML = ROUTES.map(r => `
    <button class="route-card" data-route="${r.id}" aria-label="Abrir roteiro ${r.nome}">
      <img src="${r.foto}" alt="" loading="lazy">
      <span class="rc-body">
        <span class="rc-tag">${r.tag}</span>
        <span class="rc-title" style="display:block">${r.nome}</span>
        <span class="rc-meta"><b>${r.dias} dias</b> · ${r.km.toLocaleString("pt-BR")} km · transporte desde ${fmtNOK(r.transporteAdulto)}/adulto</span>
      </span>
    </button>`).join("");
  picker.querySelectorAll(".route-card").forEach(b =>
    b.addEventListener("click", () => {
      renderDetail(b.dataset.route);
      document.getElementById("routeDetail").scrollIntoView({ behavior: "smooth", block: "start" });
    })
  );
}

function legHtml(l) {
  const price = l.pa === 0
    ? `<div class="leg-price">Grátis 🎉</div>`
    : `<div class="leg-price">${priceSpan(l.pa)} <small>adulto</small> · ${priceSpan(l.pc)} <small>criança</small></div>`;
  return `
  <div class="leg">
    <div class="leg-head"><span class="leg-mode ${l.modo}">${MODE_LABEL[l.modo]}</span> ${l.de} → ${l.para}</div>
    <div class="leg-route"><span>⏱ <b>${l.dur}</b></span><span>📏 <b>${l.dist}</b></span><span>${l.op}</span></div>
    ${price}
    ${l.tip ? `<div class="leg-tip">💡 ${l.tip}</div>` : ""}
  </div>`;
}

function renderDetail(id) {
  const r = ROUTES.find(x => x.id === id);
  const custoFam = r.transporteAdulto * 3 + r.transporteCrianca; // 3 adultos + 1 criança
  const detail = document.getElementById("routeDetail");
  document.querySelectorAll(".route-card").forEach(c => c.classList.toggle("is-active", c.dataset.route === id));

  detail.innerHTML = `
    <div class="rd-hero">
      <img src="${r.fotoHero}" alt="">
      <div class="rd-hero-text"><h3>${r.nome}</h3><p>${r.resumo}</p></div>
    </div>
    <div class="rd-stats">
      <div class="rd-stat"><b>${r.dias}</b><span>dias</span></div>
      <div class="rd-stat"><b>${r.km.toLocaleString("pt-BR")} km</b><span>percorridos</span></div>
      <div class="rd-stat"><b>${priceSpan(r.transporteAdulto)}</b><span>transporte / adulto</span></div>
      <div class="rd-stat"><b>${priceSpan(r.transporteCrianca)}</b><span>transporte / criança</span></div>
      <div class="rd-stat"><b>${priceSpan(custoFam)}</b><span>transporte / família (3+1)</span></div>
    </div>
    <div class="rd-days">
      ${r.diasDetalhe.map((d, i) => `
        <div class="day ${i === 0 ? "is-open" : ""}">
          <button class="day-toggle" aria-expanded="${i === 0}">
            <span class="day-num">${r.id === "grand" ? (i === 0 ? "1–6" : "7–14") : i + 1}</span>
            <span><span class="day-title">${d.titulo}</span><span class="day-route">${d.rota}</span></span>
            <span class="day-chev">▾</span>
          </button>
          <div class="day-body"><div class="day-body-inner">
            <p class="day-desc">${d.desc}</p>
            ${d.legs.length ? `<div class="legs">${d.legs.map(legHtml).join("")}</div>` : ""}
            ${d.highlights?.length ? `<div class="day-highlights">${d.highlights.map(([h, paid]) => `<span class="hl-chip ${paid ? "paid" : ""}">${paid ? "🎟 " : "✦ "}${h}</span>`).join("")}</div>` : ""}
          </div></div>
        </div>`).join("")}
    </div>`;

  detail.querySelectorAll(".day-toggle").forEach(t =>
    t.addEventListener("click", () => {
      const day = t.closest(".day");
      const open = day.classList.toggle("is-open");
      t.setAttribute("aria-expanded", open);
    })
  );
  refreshPrices();
}

/* ---------------- TABELA ---------------- */
function buildTable() {
  const tbody = document.querySelector("#priceTable tbody");
  tbody.innerHTML = PRICE_ROWS.map(r => `
    <tr>
      <td><b>${r.t}</b></td>
      <td><span class="pt-mode" style="background:${MODE_COLOR[r.m]}">${MODE_LABEL[r.m]}</span></td>
      <td>${r.d}</td>
      <td>${r.km}</td>
      <td>${r.a[0] === r.a[1] ? priceSpan(r.a[0]) : rangeSpan(r.a[0], r.a[1])}</td>
      <td>${r.c}</td>
    </tr>`).join("");
}

/* ---------------- DICAS + GALERIA + CRÉDITOS ---------------- */
function buildTips() {
  document.getElementById("tipsGrid").innerHTML = TIPS.map((t, i) =>
    `<article class="tip reveal" data-n="${String(i + 1).padStart(2, "0")}"><h3>${t.h}</h3><p>${t.p}</p></article>`).join("");
}

function buildGallery() {
  document.getElementById("gallery").innerHTML = GALLERY.map(([src, cap]) =>
    `<button class="g-item" data-src="${src}" data-cap="${cap}"><img src="${src}" alt="${cap}" loading="lazy"><span class="g-cap">${cap}</span></button>`).join("");
  const lb = document.getElementById("lightbox");
  const lbImg = lb.querySelector("img");
  const lbCap = lb.querySelector(".lb-caption");
  document.querySelectorAll(".g-item").forEach(b =>
    b.addEventListener("click", () => {
      lbImg.src = b.dataset.src; lbImg.alt = b.dataset.cap; lbCap.textContent = b.dataset.cap;
      lb.hidden = false; document.body.style.overflow = "hidden";
    })
  );
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; };
  lb.addEventListener("click", e => { if (e.target !== lbImg) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  document.getElementById("photoCredits").innerHTML = CREDITS.map(c => `<li>${c}</li>`).join("");
}

/* ---------------- MOEDA ---------------- */
function refreshPrices() {
  document.querySelectorAll("[data-nok]").forEach(el => { el.textContent = money(+el.dataset.nok); });
  document.querySelectorAll("[data-nok-range]").forEach(el => {
    const [a, b] = el.dataset.nokRange.split("|").map(Number);
    el.textContent = `${money(a)}–${money(b)}`;
  });
  calcUpdate();
}

document.getElementById("currencyToggle").addEventListener("click", () => {
  currency = currency === "NOK" ? "BRL" : "NOK";
  document.querySelectorAll(".ct-opt").forEach(o => o.classList.toggle("is-active", o.dataset.cur === currency));
  refreshPrices();
});

/* ---------------- CALCULADORA ---------------- */
const STAY = [
  { l: "Hostel / cabana", ppAdult: 420, ppKid: 300 },
  { l: "Hotel médio (quarto família)", ppAdult: 700, ppKid: 450 },
  { l: "Conforto", ppAdult: 1050, ppKid: 700 }
];
const FOOD = [
  { l: "Mercado + piquenique", pp: 250 },
  { l: "Misto (1 refeição fora/dia)", pp: 420 },
  { l: "Restaurantes", pp: 700 }
];
const calcState = { adults: 3, kids: 1 };

function calcUpdate() {
  const sel = document.getElementById("calcRoute");
  if (!sel || !sel.value) return;
  const r = ROUTES.find(x => x.id === sel.value);
  const stay = STAY[+document.getElementById("calcStay").value];
  const food = FOOD[+document.getElementById("calcFood").value];
  const acts = document.getElementById("calcActs").checked;
  const { adults, kids } = calcState;
  const nights = r.dias - 1;

  const transporte = r.transporteAdulto * adults + r.transporteCrianca * kids;
  const hospedagem = nights * (stay.ppAdult * adults + stay.ppKid * kids);
  const comida = r.dias * food.pp * (adults + kids * 0.7);
  const atividades = acts ? r.atividadesPP * (adults + kids * 0.6) : 0;
  const total = transporte + hospedagem + comida + atividades;

  document.getElementById("calcStayOut").textContent = stay.l;
  document.getElementById("calcFoodOut").textContent = food.l;
  document.getElementById("calcTotal").textContent = money(total);
  document.getElementById("calcTotalAlt").textContent =
    currency === "NOK" ? `≈ ${fmtBRL(total)}` : `≈ ${fmtNOK(total)}`;
  document.getElementById("calcBreakdown").innerHTML = `
    <li><span>🚆 Transporte (${r.dias} dias, ${adults} ad + ${kids} cri)</span><b>${money(transporte)}</b></li>
    <li><span>🛏 Hospedagem (${nights} noites · ${stay.l.toLowerCase()})</span><b>${money(hospedagem)}</b></li>
    <li><span>🥪 Alimentação (${food.l.toLowerCase()})</span><b>${money(comida)}</b></li>
    <li><span>🎟 Atividades e atrações</span><b>${acts ? money(atividades) : "—"}</b></li>
    <li><span>Por pessoa (média)</span><b>${money(total / (adults + kids))}</b></li>`;
}

function buildCalc() {
  const sel = document.getElementById("calcRoute");
  sel.innerHTML = ROUTES.map(r => `<option value="${r.id}">${r.nome} · ${r.dias} dias</option>`).join("");
  sel.addEventListener("change", calcUpdate);
  ["calcStay", "calcFood"].forEach(id => document.getElementById(id).addEventListener("input", calcUpdate));
  document.getElementById("calcActs").addEventListener("change", calcUpdate);
  document.querySelectorAll(".stepper").forEach(st => {
    const key = st.dataset.key;
    const [minus, plus] = st.querySelectorAll("button");
    const out = st.querySelector("b");
    minus.addEventListener("click", () => { calcState[key] = Math.max(key === "adults" ? 1 : 0, calcState[key] - 1); out.textContent = calcState[key]; calcUpdate(); });
    plus.addEventListener("click", () => { calcState[key] = Math.min(9, calcState[key] + 1); out.textContent = calcState[key]; calcUpdate(); });
  });
  calcUpdate();
}

/* ---------------- SCROLL REVEAL ---------------- */
function buildReveal() {
  document.querySelectorAll(".pillar, .tip, .route-card, .price-table-wrap, .callout").forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---------------- INIT ---------------- */
buildPicker();
renderDetail("nutshell");
buildMap();
buildTable();
buildTips();
buildGallery();
buildCalc();
buildReveal();
refreshPrices();
