import { Product } from "./types";

export const limpeza: Product[] = [
  // ===== DETERGENTES =====
  { id: "detergente-500ml", name: "Detergente Líquido (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "detergente-5l", name: "Detergente Líquido (5L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 },
  ]},
  { id: "detergente-po-500g", name: "Detergente em Pó (500g)", category: "Limpeza", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 },
  ]},

  // ===== SABÃO EM PÓ =====
  { id: "sabao-po-1kg", name: "Sabão em Pó (1kg)", category: "Limpeza", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "sabao-po-2kg", name: "Sabão em Pó (2kg)", category: "Limpeza", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 },
  ]},
  { id: "sabao-po-5kg", name: "Sabão em Pó (5kg)", category: "Limpeza", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 },
  ]},

  // ===== SABÃO LÍQUIDO =====
  { id: "sabao-liquido-1l", name: "Sabão Líquido (1L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "sabao-liquido-3l", name: "Sabão Líquido (3L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 },
  ]},
  { id: "sabao-liquido-5l", name: "Sabão Líquido (5L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 39.90 }, { store: "Carrefour", price: 44.90 },
  ]},
  { id: "amaciante-1l", name: "Amaciante (1L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "amaciante-3l", name: "Amaciante (3L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},
  { id: "amaciante-5l", name: "Amaciante (5L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 },
  ]},

  // ===== DESINFETANTES E ÁGUA SANITÁRIA =====
  { id: "agua-sanitaria-1l", name: "Água Sanitária (1L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "agua-sanitaria-2l", name: "Água Sanitária (2L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 6.49 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "agua-sanitaria-5l", name: "Água Sanitária (5L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "desinfetante-500ml", name: "Desinfetante (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "desinfetante-1l", name: "Desinfetante (1L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 7.49 }, { store: "Carrefour", price: 8.49 },
  ]},
  { id: "desinfetante-5l", name: "Desinfetante (5L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 27.90 }, { store: "Carrefour", price: 32.90 },
  ]},

  // ===== LIMPADORES ESPECÍFICOS =====
  { id: "limpa-vidros-500ml", name: "Limpa Vidros (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "multiuso-500ml", name: "Multiuso (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 6.49 },
  ]},
  { id: "multiuso-5l", name: "Multiuso (5L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 32.90 }, { store: "Carrefour", price: 37.90 },
  ]},
  { id: "desengordurante-500ml", name: "Desengordurante (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "lustra-moveis-200ml", name: "Lustra Móveis (200ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 6.49 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "limpa-forno-250ml", name: "Limpa Forno (250ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "tira-manchas-500ml", name: "Tira Manchas (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},

  // ===== ÁLCOOL =====
  { id: "alcool-liquido-1l", name: "Álcool Líquido 70% (1L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "alcool-gel-500ml", name: "Álcool em Gel 70% (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 },
  ]},
  { id: "alcool-gel-1l", name: "Álcool em Gel 70% (1L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 13.90 },
  ]},

  // ===== ESPONJAS E PANOS =====
  { id: "esponja-un", name: "Esponja de Limpeza (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "esponja-pacote-4un", name: "Esponja de Limpeza (pacote 4un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "esponja-aco", name: "Esponja de Aço/Bombril (pacote 8un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 },
  ]},
  { id: "pano-limpeza-un", name: "Pano de Limpeza (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "pano-limpeza-pacote-5un", name: "Pano de Limpeza (pacote 5un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "pano-microfibra", name: "Pano Microfibra (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "flanela", name: "Flanela (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},

  // ===== PAPEL =====
  { id: "papel-toalha-2un", name: "Papel Toalha (pacote 2un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 6.49 },
  ]},
  { id: "papel-toalha-4un", name: "Papel Toalha (pacote 4un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "papel-higienico-4un", name: "Papel Higiênico (pacote 4un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "papel-higienico-8un", name: "Papel Higiênico (pacote 8un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "papel-higienico-12un", name: "Papel Higiênico (pacote 12un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "papel-higienico-folha-dupla-4un", name: "Papel Higiênico Folha Dupla (pacote 4un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "guardanapo", name: "Guardanapo de Papel (pacote 50un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},

  // ===== SACOS DE LIXO =====
  { id: "saco-lixo-15l-20un", name: "Saco de Lixo 15L (20un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "saco-lixo-30l-20un", name: "Saco de Lixo 30L (20un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "saco-lixo-50l-20un", name: "Saco de Lixo 50L (20un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "saco-lixo-100l-10un", name: "Saco de Lixo 100L (10un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 8.49 }, { store: "Carrefour", price: 9.99 },
  ]},

  // ===== UTENSÍLIOS DE LIMPEZA =====
  { id: "vassoura", name: "Vassoura (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "vassoura-vassorinh", name: "Vassourinha (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 },
  ]},
  { id: "rodo", name: "Rodo (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "balde-12l", name: "Balde 12L (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "balde-20l", name: "Balde 20L (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 22.90 },
  ]},
  { id: "luva-latex-par", name: "Luva de Látex (par)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "luva-borracha-par", name: "Luva de Borracha (par)", category: "Limpeza", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "pazinha-lixo", name: "Pazinha de Lixo (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "esfregao", name: "Esfregão/MOP (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},
  { id: "refil-esfregao", name: "Refil para Esfregão (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "escova-vaso", name: "Escova para Vaso Sanitário (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "palha-aco", name: "Palha de Aço (pacote)", category: "Limpeza", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "sacolinha-alimenticia-100un", name: "Sacolinha Alimentícia (pacote 100un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 },
  ]},
  { id: "filme-pvc-30m", name: "Filme PVC (rolo 30m)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "papel-aluminio-30m", name: "Papel Alumínio (rolo 30m)", category: "Limpeza", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "papel-manteiga", name: "Papel Manteiga (rolo)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "fosforo", name: "Fósforo (caixa)", category: "Limpeza", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "vela", name: "Vela (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 1.99 }, { store: "Carrefour", price: 2.49 },
  ]},
  { id: "inseticida", name: "Inseticida (300ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "agua-passar-500ml", name: "Água para Passar Roupa (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "sabao-bar-5un", name: "Sabão em Barra (pacote 5un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "sabao-coco", name: "Sabão de Coco em Barra (pacote 5un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "sabao-pedra", name: "Sabão em Pedra (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 1.99 }, { store: "Carrefour", price: 2.49 },
  ]},
];
