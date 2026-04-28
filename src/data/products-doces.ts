import { Product } from "./types";

export const doces: Product[] = [
  // ===== CHOCOLATES =====
  { id: "chocolate-bar-leite-100g", name: "Chocolate ao Leite (barra 100g)", category: "Doces", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 8.49 },
  ]},
  { id: "chocolate-bar-meio-amargo-100g", name: "Chocolate Meio Amargo (barra 100g)", category: "Doces", prices: [
    { store: "Assaí", price: 6.49 }, { store: "Carrefour", price: 7.49 }, { store: "Pão de Açúcar", price: 9.49 },
  ]},
  { id: "chocolate-bar-branco-100g", name: "Chocolate Branco (barra 100g)", category: "Doces", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 8.49 },
  ]},
  { id: "chocolate-bar-castanha-100g", name: "Chocolate com Castanhas (barra 100g)", category: "Doces", prices: [
    { store: "Assaí", price: 7.49 }, { store: "Carrefour", price: 8.49 }, { store: "Pão de Açúcar", price: 10.99 },
  ]},
  { id: "chocolate-bar-cookies-100g", name: "Chocolate com Cookies (barra 100g)", category: "Doces", prices: [
    { store: "Assaí", price: 7.49 }, { store: "Carrefour", price: 8.49 },
  ]},
  { id: "chocolate-bar-70-100g", name: "Chocolate 70% Cacau (barra 100g)", category: "Doces", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 }, { store: "Pão de Açúcar", price: 14.90 },
  ]},
  { id: "chocolate-bar-diet-80g", name: "Chocolate Diet (barra 80g)", category: "Doces", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},

  // ===== BOMBONS =====
  { id: "bombom-caixa", name: "Bombom Sortido (caixa 250g)", category: "Doces", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 18.90 },
  ]},
  { id: "bombom-cereja", name: "Bombom de Cereja (caixa 200g)", category: "Doces", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 13.90 },
  ]},
  { id: "bombom-alpino", name: "Bombom Alpino (caixa 200g)", category: "Doces", prices: [
    { store: "Assaí", price: 10.90 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "bombom-sonho-de-valsa", name: "Bombom Sonho de Valsa (caixa 200g)", category: "Doces", prices: [
    { store: "Assaí", price: 10.90 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "bombom-ouro-branco", name: "Bombom Ouro Branco (caixa 200g)", category: "Doces", prices: [
    { store: "Assaí", price: 10.90 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "ferrero-rocher-8un", name: "Ferrero Rocher (caixa 8un)", category: "Doces", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},

  // ===== BALAS E CHICLETES =====
  { id: "bala-frutas", name: "Bala de Frutas (pacote 400g)", category: "Doces", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "bala-menta", name: "Bala de Menta (pacote 250g)", category: "Doces", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "bala-tofe", name: "Bala Toffe (pacote 200g)", category: "Doces", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 },
  ]},
  { id: "bala-goma", name: "Bala de Goma/Jujuba (pacote 200g)", category: "Doces", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "chiclete", name: "Chiclete (pacote 30un)", category: "Doces", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "chiclete-trident", name: "Chiclete Trident (pacote 8un)", category: "Doces", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "pirulito", name: "Pirulito (pacote 50un)", category: "Doces", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},

  // ===== SOBREMESAS DE GELADEIRA =====
  { id: "gelatina", name: "Gelatina (caixa 25g)", category: "Doces", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "gelatina-pronta", name: "Gelatina Pronta (pote 120g)", category: "Doces", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "pudim-po", name: "Pudim em Pó (caixa 50g)", category: "Doces", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "pudim-pronto", name: "Pudim Pronto (200g)", category: "Doces", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "mousse-po", name: "Mousse em Pó (caixa 50g)", category: "Doces", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},

  // ===== DOCES TRADICIONAIS BRASILEIROS =====
  { id: "goiabada", name: "Goiabada (300g)", category: "Doces", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "goiabada-cascao", name: "Goiabada Cascão (300g)", category: "Doces", prices: [
    { store: "Assaí", price: 6.49 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "doce-leite-cremoso", name: "Doce de Leite Cremoso (400g)", category: "Doces", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 }, { store: "Pão de Açúcar", price: 14.90 },
  ]},
  { id: "doce-leite-corte", name: "Doce de Leite de Corte (400g)", category: "Doces", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "mel-250g", name: "Mel (frasco 250g)", category: "Doces", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 18.90 },
  ]},
  { id: "mel-500g", name: "Mel (frasco 500g)", category: "Doces", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 },
  ]},
  { id: "geleia-morango", name: "Geleia de Morango (230g)", category: "Doces", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 },
  ]},
  { id: "geleia-frutas-vermelhas", name: "Geleia Frutas Vermelhas (230g)", category: "Doces", prices: [
    { store: "Assaí", price: 7.49 }, { store: "Carrefour", price: 8.99 },
  ]},
  { id: "geleia-damasco", name: "Geleia de Damasco (230g)", category: "Doces", prices: [
    { store: "Assaí", price: 7.49 }, { store: "Carrefour", price: 8.99 },
  ]},
  { id: "geleia-diet", name: "Geleia Diet (230g)", category: "Doces", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "pacoca", name: "Paçoca (un)", category: "Doces", prices: [
    { store: "Assaí", price: 0.49 }, { store: "Carrefour", price: 0.69 },
  ]},
  { id: "pacoca-pacote", name: "Paçoca (pacote 12un)", category: "Doces", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "pe-de-moleque", name: "Pé de Moleque (un)", category: "Doces", prices: [
    { store: "Assaí", price: 0.99 }, { store: "Carrefour", price: 1.29 },
  ]},
  { id: "pe-de-moleque-pacote", name: "Pé de Moleque (pacote 6un)", category: "Doces", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "cocada", name: "Cocada (un)", category: "Doces", prices: [
    { store: "Assaí", price: 0.99 }, { store: "Carrefour", price: 1.29 },
  ]},
  { id: "cocada-pacote", name: "Cocada (pacote 6un)", category: "Doces", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "maria-mole", name: "Maria Mole (caixa 200g)", category: "Doces", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "rapadura", name: "Rapadura (un)", category: "Doces", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "quindim", name: "Quindim (un)", category: "Doces", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},

  // ===== CONFEITOS E COBERTURAS =====
  { id: "granulado-chocolate", name: "Granulado de Chocolate (100g)", category: "Doces", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "confeitos-coloridos", name: "Confeitos Coloridos (100g)", category: "Doces", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "cobertura-chocolate", name: "Cobertura de Chocolate (200g)", category: "Doces", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 },
  ]},
  { id: "mistura-bolo", name: "Mistura para Bolo (pacote 450g)", category: "Doces", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "chantilly", name: "Chantilly em Pó (50g)", category: "Doces", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},

  // ===== BARRINHAS =====
  { id: "barra-cereal", name: "Barra de Cereal (un)", category: "Doces", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "barra-cereal-caixa", name: "Barra de Cereal (caixa 12un)", category: "Doces", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "barra-protein", name: "Barra de Proteína (un)", category: "Doces", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
];
