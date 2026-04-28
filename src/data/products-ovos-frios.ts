import { Product } from "./types";

export const ovosFrios: Product[] = [
  // ===== OVOS =====
  { id: "ovos-branco-dz", name: "Ovos Brancos (dúzia)", category: "Ovos", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 }, { store: "Pão de Açúcar", price: 14.90 },
  ]},
  { id: "ovos-vermelho-dz", name: "Ovos Vermelhos (dúzia)", category: "Ovos", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 13.90 }, { store: "Pão de Açúcar", price: 16.99 },
  ]},
  { id: "ovos-caipira-dz", name: "Ovos Caipira (dúzia)", category: "Ovos", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "ovos-organicos-dz", name: "Ovos Orgânicos (dúzia)", category: "Ovos", prices: [
    { store: "Carrefour", price: 19.90 }, { store: "Pão de Açúcar", price: 24.90 },
  ]},
  { id: "ovos-codorna-20un", name: "Ovos de Codorna (bandeja 20un)", category: "Ovos", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "ovos-branco-30un", name: "Ovos Brancos (bandeja 30un)", category: "Ovos", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},

  // ===== FRIOS: PRESUNTO E DERIVADOS =====
  { id: "presunto-cozido", name: "Presunto Cozido (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 }, { store: "Pão de Açúcar", price: 29.90 },
  ]},
  { id: "presunto-defumado", name: "Presunto Defumado (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 27.90 },
  ]},
  { id: "presunto-parma", name: "Presunto Parma (kg)", category: "Frios", prices: [
    { store: "Carrefour", price: 89.90 }, { store: "Pão de Açúcar", price: 109.90 },
  ]},
  { id: "peito-peru-frios", name: "Peito de Peru Defumado (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 42.90 }, { store: "Pão de Açúcar", price: 49.90 },
  ]},
  { id: "blanquet-peru", name: "Blanquet de Peru (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 27.90 },
  ]},

  // ===== BACON E TOUCINHO =====
  { id: "bacon-fatiado", name: "Bacon Fatiado (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 27.90 }, { store: "Swift", price: 29.90 },
  ]},
  { id: "bacon-manta", name: "Bacon em Manta (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 },
  ]},
  { id: "toucinho-defumado", name: "Toucinho Defumado (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 14.90 },
  ]},

  // ===== SALAME E EMBUTIDOS =====
  { id: "salame-italiano", name: "Salame Italiano (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 44.90 }, { store: "Carrefour", price: 49.90 }, { store: "Pão de Açúcar", price: 59.90 },
  ]},
  { id: "salame-hamburgues", name: "Salame Hamburguês (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 },
  ]},
  { id: "salaminho", name: "Salaminho (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 39.90 }, { store: "Carrefour", price: 44.90 },
  ]},
  { id: "copai", name: "Copa (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 29.90 }, { store: "Carrefour", price: 34.90 },
  ]},
  { id: "lombo-defumado", name: "Lombo Defumado (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 32.90 }, { store: "Carrefour", price: 37.90 },
  ]},

  // ===== MORTADELA E APRESUNTADO =====
  { id: "mortadela-comum", name: "Mortadela (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 9.90 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "mortadela-ceratti", name: "Mortadela Bologna (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "mortadela-defumada", name: "Mortadela Defumada (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "apresuntado", name: "Apresuntado (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},

  // ===== QUEIJOS FATIADOS =====
  { id: "queijo-cheddar-fatiado", name: "Queijo Cheddar Fatiado (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 42.90 }, { store: "Carrefour", price: 48.90 },
  ]},
  { id: "queijo-mussarela-fatiado", name: "Queijo Mussarela Fatiado (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 36.90 }, { store: "Carrefour", price: 44.90 },
  ]},
  { id: "queijo-prato-fatiado", name: "Queijo Prato Fatiado (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 38.90 }, { store: "Carrefour", price: 46.90 },
  ]},

  // ===== SALSICHA E LINGUIÇA FRIA =====
  { id: "salsicha-lata", name: "Salsicha (lata 180g)", category: "Frios", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "salsicha-pacote", name: "Salsicha (pacote 500g)", category: "Frios", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "salsicha-frango", name: "Salsicha de Frango (pacote 500g)", category: "Frios", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "salsicha-viena", name: "Salsicha Viena (lata 200g)", category: "Frios", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "linguica-fininha", name: "Linguiça Fininha (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 },
  ]},
  { id: "linguica-fininha-defumada", name: "Linguiça Fininha Defumada (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 18.90 }, { store: "Carrefour", price: 22.90 },
  ]},
];
