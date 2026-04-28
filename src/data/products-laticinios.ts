import { Product } from "./types";

export const laticinios: Product[] = [
  // Leites
  { id: "leite-integral", name: "Leite Integral (1L)", category: "Laticínios", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "leite-desnatado", name: "Leite Desnatado (1L)", category: "Laticínios", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 }, { store: "Pão de Açúcar", price: 6.49 },
  ]},
  { id: "leite-semidesnatado", name: "Leite Semidesnatado (1L)", category: "Laticínios", prices: [
    { store: "Assaí", price: 4.69 }, { store: "Carrefour", price: 5.69 }, { store: "Pão de Açúcar", price: 6.19 },
  ]},
  { id: "leite-zero-lactose", name: "Leite Zero Lactose (1L)", category: "Laticínios", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "leite-vegetal", name: "Leite Vegetal (amêndoas/aveia) (1L)", category: "Laticínios", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 17.90 },
  ]},
  { id: "leite-po-integral", name: "Leite em Pó Integral (400g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 19.99 },
  ]},
  { id: "leite-po-desnatado", name: "Leite em Pó Desnatado (380g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 15.90 },
  ]},

  // Queijos
  { id: "queijo-mussarela", name: "Queijo Mussarela (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 42.90 }, { store: "Pão de Açúcar", price: 49.90 },
  ]},
  { id: "queijo-prato", name: "Queijo Prato (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 36.90 }, { store: "Carrefour", price: 44.90 }, { store: "Pão de Açúcar", price: 49.90 },
  ]},
  { id: "queijo-parmesao", name: "Queijo Parmesão (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 59.90 }, { store: "Carrefour", price: 69.90 }, { store: "Pão de Açúcar", price: 79.90 },
  ]},
  { id: "queijo-minas-frescal", name: "Queijo Minas Frescal (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 29.90 }, { store: "Carrefour", price: 34.90 }, { store: "Pão de Açúcar", price: 39.90 },
  ]},
  { id: "queijo-minas-padrao", name: "Queijo Minas Padrão (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 32.90 }, { store: "Carrefour", price: 38.90 }, { store: "Pão de Açúcar", price: 44.90 },
  ]},
  { id: "queijo-coalho", name: "Queijo Coalho (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 27.90 }, { store: "Carrefour", price: 32.90 },
  ]},
  { id: "queijo-provolone", name: "Queijo Provolone (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 44.90 }, { store: "Carrefour", price: 49.90 }, { store: "Pão de Açúcar", price: 59.90 },
  ]},
  { id: "queijo-gorgonzola", name: "Queijo Gorgonzola (kg)", category: "Laticínios", prices: [
    { store: "Carrefour", price: 64.90 }, { store: "Pão de Açúcar", price: 79.90 },
  ]},
  { id: "queijo-brie", name: "Queijo Brie (kg)", category: "Laticínios", prices: [
    { store: "Carrefour", price: 59.90 }, { store: "Pão de Açúcar", price: 72.90 },
  ]},
  { id: "queijo-ricota", name: "Queijo Ricota (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 }, { store: "Pão de Açúcar", price: 28.90 },
  ]},
  { id: "queijo-cottage", name: "Queijo Cottage (250g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 }, { store: "Pão de Açúcar", price: 13.90 },
  ]},
  { id: "queijo-cheddar", name: "Queijo Cheddar (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 39.90 }, { store: "Carrefour", price: 44.90 }, { store: "Pão de Açúcar", price: 54.90 },
  ]},
  { id: "requeijao-cremoso", name: "Requeijão Cremoso (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 7.49 }, { store: "Carrefour", price: 8.99 }, { store: "Pão de Açúcar", price: 10.99 },
  ]},
  { id: "requeijao-light", name: "Requeijão Light (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 8.49 }, { store: "Carrefour", price: 9.99 }, { store: "Pão de Açúcar", price: 11.99 },
  ]},
  { id: "requeijao-copo", name: "Requeijão de Copo (250g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},

  // Manteiga / Margarina / Creme
  { id: "manteiga-com-sal", name: "Manteiga com Sal (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 16.99 },
  ]},
  { id: "manteiga-sem-sal", name: "Manteiga sem Sal (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 13.90 }, { store: "Carrefour", price: 15.90 }, { store: "Pão de Açúcar", price: 17.99 },
  ]},
  { id: "margarina", name: "Margarina (500g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 }, { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "creme-leite", name: "Creme de Leite (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 }, { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "leite-condensado", name: "Leite Condensado (395g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 }, { store: "Pão de Açúcar", price: 8.99 },
  ]},
  { id: "creme-ricota", name: "Creme de Ricota (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 8.49 },
  ]},

  // Iogurtes
  { id: "iogurte-natural", name: "Iogurte Natural (170g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 }, { store: "Pão de Açúcar", price: 4.49 },
  ]},
  { id: "iogurte-grego", name: "Iogurte Grego (100g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "iogurte-com-frutas", name: "Iogurte com Frutas (bandeja 4un)", category: "Laticínios", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 }, { store: "Pão de Açúcar", price: 8.99 },
  ]},
  { id: "iogurte-proteico", name: "Iogurte Proteico (150g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 }, { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "iogurte-infantil", name: "Iogurte Infantil (bandeja 6un)", category: "Laticínios", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 }, { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "bebida-lactea", name: "Bebida Láctea (1L)", category: "Laticínios", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 7.99 },
  ]},

  // Nata / Creme
  { id: "nata", name: "Nata/Creme de Leite Fresco (200ml)", category: "Laticínios", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 8.49 },
  ]},
  { id: "coalhada", name: "Coalhada (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "doce-leite-pote", name: "Doce de Leite (400g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 }, { store: "Pão de Açúcar", price: 14.90 },
  ]},
];
