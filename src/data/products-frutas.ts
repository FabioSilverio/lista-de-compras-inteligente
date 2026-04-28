import { Product } from "./types";

export const frutas: Product[] = [
  // Banana
  { id: "banana-nanica", name: "Banana Nanica (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.49 },
    { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "banana-prata", name: "Banana Prata (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.49 },
    { store: "Carrefour", price: 6.99 },
    { store: "Pão de Açúcar", price: 8.49 },
  ]},
  { id: "banana-maca", name: "Banana Maçã (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 8.99 },
    { store: "Carrefour", price: 10.90 },
    { store: "Pão de Açúcar", price: 13.90 },
  ]},
  { id: "banana-da-terra", name: "Banana da Terra (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
  ]},

  // Maçã
  { id: "maca-gala", name: "Maçã Gala (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 6.99 },
    { store: "Carrefour", price: 8.90 },
    { store: "Pão de Açúcar", price: 10.90 },
  ]},
  { id: "maca-fuji", name: "Maçã Fuji (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.90 },
    { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "maca-verde", name: "Maçã Verde (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 9.99 },
    { store: "Carrefour", price: 12.90 },
    { store: "Pão de Açúcar", price: 15.90 },
  ]},
  { id: "maca-argentina", name: "Maçã Argentina (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 7.49 },
    { store: "Carrefour", price: 9.49 },
  ]},

  // Laranja
  { id: "laranja-pera", name: "Laranja Pera (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "laranja-bahia", name: "Laranja Bahia (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.99 },
    { store: "Pão de Açúcar", price: 7.49 },
  ]},
  { id: "laranja-lima", name: "Laranja Lima (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.49 },
  ]},

  // Limão
  { id: "limao-taiti", name: "Limão Taiti (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.99 },
    { store: "Pão de Açúcar", price: 6.49 },
  ]},
  { id: "limao-siciliano", name: "Limão Siciliano (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.90 },
    { store: "Pão de Açúcar", price: 12.90 },
  ]},

  // Outras frutas
  { id: "mamao-formosa", name: "Mamão Formosa (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.90 },
    { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "mamao-papaia", name: "Mamão Papaia (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
    { store: "Pão de Açúcar", price: 9.90 },
  ]},
  { id: "morango", name: "Morango (bandeja 250g)", category: "Frutas", prices: [
    { store: "Assaí", price: 9.99 },
    { store: "Carrefour", price: 12.90 },
    { store: "Pão de Açúcar", price: 15.90 },
  ]},
  { id: "abacate-avocado", name: "Abacate Avocado (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.90 },
    { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "abacate-manteiga", name: "Abacate Manteiga (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.90 },
  ]},
  { id: "uva-italia", name: "Uva Itália (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 14.99 },
    { store: "Carrefour", price: 16.90 },
    { store: "Pão de Açúcar", price: 19.90 },
  ]},
  { id: "uva-niagara", name: "Uva Niágara (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 12.99 },
    { store: "Carrefour", price: 14.90 },
    { store: "Pão de Açúcar", price: 17.90 },
  ]},
  { id: "uva-roxa", name: "Uva Roxa (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 16.99 },
    { store: "Carrefour", price: 19.90 },
    { store: "Pão de Açúcar", price: 24.90 },
  ]},
  { id: "melancia", name: "Melancia (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 19.99 },
    { store: "Carrefour", price: 24.90 },
    { store: "Pão de Açúcar", price: 29.90 },
  ]},
  { id: "melao-amarelo", name: "Melão Amarelo (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.90 },
    { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "melao-pele-sapo", name: "Melão Pele de Sapo (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 8.99 },
    { store: "Carrefour", price: 10.90 },
  ]},
  { id: "abacaxi-perola", name: "Abacaxi Pérola (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.90 },
    { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "abacaxi-havaiano", name: "Abacaxi Havaiano (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 8.99 },
    { store: "Carrefour", price: 10.90 },
  ]},
  { id: "pera-portuguesa", name: "Pera Portuguesa (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 9.99 },
    { store: "Carrefour", price: 12.90 },
    { store: "Pão de Açúcar", price: 15.90 },
  ]},
  { id: "pera-williams", name: "Pera Williams (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 11.99 },
    { store: "Carrefour", price: 14.90 },
  ]},
  { id: "manga-palmer", name: "Manga Palmer (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.90 },
    { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "manga-tommy", name: "Manga Tommy (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.90 },
    { store: "Pão de Açúcar", price: 8.90 },
  ]},
  { id: "kiwi", name: "Kiwi (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 16.99 },
    { store: "Carrefour", price: 19.90 },
    { store: "Pão de Açúcar", price: 24.90 },
  ]},
  { id: "ameixa-vermelha", name: "Ameixa Vermelha (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 12.99 },
    { store: "Carrefour", price: 15.90 },
    { store: "Pão de Açúcar", price: 19.90 },
  ]},
  { id: "pessego", name: "Pêssego (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 10.99 },
    { store: "Carrefour", price: 13.90 },
    { store: "Pão de Açúcar", price: 16.90 },
  ]},
  { id: "nectarina", name: "Nectarina (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 13.99 },
    { store: "Carrefour", price: 16.90 },
  ]},
  { id: "caju-fruta", name: "Caju (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.90 },
  ]},
  { id: "goiaba-vermelha", name: "Goiaba Vermelha (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.49 },
    { store: "Carrefour", price: 6.99 },
    { store: "Pão de Açúcar", price: 8.99 },
  ]},
  { id: "goiaba-branca", name: "Goiaba Branca (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.49 },
  ]},
  { id: "caqui", name: "Caqui (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 6.99 },
    { store: "Carrefour", price: 8.90 },
    { store: "Pão de Açúcar", price: 10.99 },
  ]},
  { id: "coco-verde", name: "Coco Verde (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "coco-seco", name: "Coco Seco (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.90 },
  ]},
  { id: "maracuja", name: "Maracujá (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 6.49 },
    { store: "Carrefour", price: 7.99 },
    { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "acerola", name: "Acerola (bandeja 250g)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
  ]},
  { id: "fruta-do-conde", name: "Fruta do Conde (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 14.99 },
    { store: "Carrefour", price: 17.90 },
  ]},
  { id: "jabuticaba", name: "Jabuticaba (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 19.99 },
    { store: "Carrefour", price: 24.90 },
  ]},
  { id: "figo", name: "Figo (bandeja 200g)", category: "Frutas", prices: [
    { store: "Assaí", price: 8.99 },
    { store: "Carrefour", price: 10.90 },
    { store: "Pão de Açúcar", price: 13.90 },
  ]},
  { id: "tangerina", name: "Tangerina/Mexerica (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "cereja", name: "Cereja (bandeja 150g)", category: "Frutas", prices: [
    { store: "Assaí", price: 14.99 },
    { store: "Carrefour", price: 17.90 },
    { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "frutas-vermelhas", name: "Mix Frutas Vermelhas (bandeja 150g)", category: "Frutas", prices: [
    { store: "Assaí", price: 11.99 },
    { store: "Carrefour", price: 14.90 },
    { store: "Pão de Açúcar", price: 18.90 },
  ]},
];
