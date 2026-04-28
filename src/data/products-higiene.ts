import { Product } from "./types";

export const higiene: Product[] = [
  // ===== CABELOS =====
  { id: "shampoo-325ml", name: "Shampoo (325ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "shampoo-400ml", name: "Shampoo (400ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 21.90 },
  ]},
  { id: "condicionador-325ml", name: "Condicionador (325ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "condicionador-400ml", name: "Condicionador (400ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 21.90 },
  ]},
  { id: "creme-pentear", name: "Creme para Pentear (300ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "mascara-capilar", name: "Máscara Capilar (300g)", category: "Higiene", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "shampoo-antiqueda", name: "Shampoo Antiqueda (200ml)", category: "Higiene", prices: [
    { store: "Carrefour", price: 19.90 }, { store: "Pão de Açúcar", price: 24.90 },
  ]},
  { id: "shampoo-anticaspa", name: "Shampoo Anticaspa (200ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},

  // ===== CORPO =====
  { id: "sabonete-un", name: "Sabonete (un 90g)", category: "Higiene", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "sabonete-pacote-6un", name: "Sabonete (pacote 6un)", category: "Higiene", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 },
  ]},
  { id: "sabonete-intimo", name: "Sabonete Íntimo (200ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 13.90 },
  ]},
  { id: "sabonete-liquido", name: "Sabonete Líquido (250ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "desodorante-aerosol", name: "Desodorante Aerosol (150ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 9.90 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "desodorante-rollon", name: "Desodorante Roll-on (50ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.99 },
  ]},
  { id: "desodorante-creme", name: "Desodorante Creme (50g)", category: "Higiene", prices: [
    { store: "Assaí", price: 8.49 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "hidratante-corporal-200ml", name: "Hidratante Corporal (200ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "hidratante-corporal-400ml", name: "Hidratante Corporal (400ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},
  { id: "oleo-corporal", name: "Óleo Corporal (200ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 },
  ]},

  // ===== BUCAL =====
  { id: "creme-dental-90g", name: "Creme Dental (90g)", category: "Higiene", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "creme-dental-180g", name: "Creme Dental (180g)", category: "Higiene", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "creme-dental-150g", name: "Creme Dental Proteção Total (150g)", category: "Higiene", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "escova-dental", name: "Escova de Dentes (un)", category: "Higiene", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 6.49 },
  ]},
  { id: "escova-dental-dupla", name: "Escova de Dentes (pacote 2un)", category: "Higiene", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "fio-dental", name: "Fio Dental (50m)", category: "Higiene", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "enxaguante-bucal-250ml", name: "Enxaguante Bucal (250ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "enxaguante-bucal-500ml", name: "Enxaguante Bucal (500ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},

  // ===== ROSTO =====
  { id: "protetor-solar-fps30", name: "Protetor Solar FPS 30 (120ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 29.90 }, { store: "Carrefour", price: 34.90 }, { store: "Pão de Açúcar", price: 44.90 },
  ]},
  { id: "protetor-solar-fps50", name: "Protetor Solar FPS 50 (120ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 }, { store: "Pão de Açúcar", price: 49.90 },
  ]},
  { id: "protetor-solar-fps70", name: "Protetor Solar FPS 70 (120ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 39.90 }, { store: "Carrefour", price: 44.90 },
  ]},
  { id: "protetor-solar-infantil", name: "Protetor Solar Infantil FPS 50 (120ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 39.90 }, { store: "Carrefour", price: 44.90 }, { store: "Pão de Açúcar", price: 54.90 },
  ]},
  { id: "repetente", name: "Repelente (100ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},

  // ===== DEPILAÇÃO E BARBEAR =====
  { id: "lamina-barbear", name: "Lâmina de Barbear (cartucho 2un)", category: "Higiene", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "lamina-barbear-descart", name: "Lâmina de Barbear Descartável (pacote 5un)", category: "Higiene", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "creme-barbear", name: "Creme de Barbear (65g)", category: "Higiene", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "espuma-barbear", name: "Espuma de Barbear (200ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "creme-depilatorio", name: "Creme Depilatório (100g)", category: "Higiene", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},

  // ===== HIGIENE FEMININA =====
  { id: "absorvente-comum-8un", name: "Absorvente Comum (pacote 8un)", category: "Higiene", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "absorvente-noturno-8un", name: "Absorvente Noturno (pacote 8un)", category: "Higiene", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "absorvente-diario", name: "Protetor Diário (pacote 30un)", category: "Higiene", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "coletor-menstrual", name: "Coletor Menstrual (un)", category: "Higiene", prices: [
    { store: "Carrefour", price: 39.90 }, { store: "Pão de Açúcar", price: 49.90 },
  ]},

  // ===== FRALDAS E BEBÊ =====
  { id: "fralda-infantil-g", name: "Fralda Infantil Tamanho G (pacote 30un)", category: "Higiene", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 },
  ]},
  { id: "fralda-infantil-m", name: "Fralda Infantil Tamanho M (pacote 34un)", category: "Higiene", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 },
  ]},
  { id: "fralda-infantil-xg", name: "Fralda Infantil Tamanho XG (pacote 26un)", category: "Higiene", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 },
  ]},
  { id: "fralda-geriátrica", name: "Fralda Geriátrica Tamanho M (pacote 10un)", category: "Higiene", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},
  { id: "lenco-umedecido-50un", name: "Lenço Umedecido (pacote 50un)", category: "Higiene", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "lenco-umedecido-100un", name: "Lenço Umedecido (pacote 100un)", category: "Higiene", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "oleo-bebe", name: "Óleo para Bebê (200ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 10.90 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "pomada-assadura", name: "Pomada para Assadura (90g)", category: "Higiene", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},

  // ===== OUTROS =====
  { id: "cotonele-75g", name: "Cotonete (pacote 75g)", category: "Higiene", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "algodao-50g", name: "Algodão (rolo 50g)", category: "Higiene", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "acetona-100ml", name: "Acetona/Removedor Esmalte (100ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "esmalte", name: "Esmalte (un)", category: "Higiene", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},
  { id: "agua-oxigenada-100ml", name: "Água Oxigenada 10vol (100ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
];
