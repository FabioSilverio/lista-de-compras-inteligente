export interface Product {
  id: string;
  name: string;
  category: string;
  prices: PriceSource[];
}

export interface PriceSource {
  store: string;
  price: number;
  url?: string;
}

export interface MeatSuggestion {
  cookingMethod: string;
  label: string;
  description: string;
  cuts: string[];
}

export const meatSuggestions: MeatSuggestion[] = [
  {
    cookingMethod: "panela",
    label: "Para Panela (Cozido/Ensopado)",
    description: "Cortes ideais para cozidos, ensopados e carne de panela",
    cuts: [
      "Acém",
      "Paleta",
      "Peito bovino",
      "Coxão duro",
      "Músculo",
      "Pescoço",
    ],
  },
  {
    cookingMethod: "grelha",
    label: "Para Grelha (Churrasco)",
    description: "Cortes macios ideais para grelha e churrasco",
    cuts: [
      "Picanha",
      "Alcatra",
      "Contrafilé",
      "Fraldinha",
      "Maminha",
      "Coxão mole",
      "Baby beef",
    ],
  },
  {
    cookingMethod: "assar",
    label: "Para Assar (Forno)",
    description: "Cortes perfeitos para assados no forno",
    cuts: [
      "Alcatra inteira",
      "Maminha",
      "Lagarto",
      "Costela",
      "Picanha",
      "Cupim",
      "Pernil",
    ],
  },
  {
    cookingMethod: "strogonoff",
    label: "Para Strogonoff",
    description: "Cortes macios que ficam perfeitos no strogonoff",
    cuts: [
      "Filé mignon",
      "Alcatra",
      "Coxão mole",
      "Contrafilé",
      "Patinho",
    ],
  },
  {
    cookingMethod: "bife",
    label: "Para Bife",
    description: "Cortes ideais para bifes do dia a dia",
    cuts: [
      "Alcatra",
      "Contrafilé",
      "Coxão mole",
      "Patinho",
      "Lagarto",
      "Fraldinha",
    ],
  },
  {
    cookingMethod: "moida",
    label: "Para Moer (Carne Moída)",
    description: "Cortes que rendem boa carne moída",
    cuts: [
      "Acém",
      "Paleta",
      "Patinho",
      "Peito",
      "Pescoço",
    ],
  },
];

export const products: Product[] = [
  // ===== FRUTAS =====
  { id: "banana", name: "Banana (kg)", category: "Frutas", prices: [
    { store: "Mercado Livre", price: 6.99, url: "https://www.mercadolivre.com.br" },
    { store: "Assaí", price: 5.49 },
    { store: "Carrefour", price: 7.90 },
    { store: "Pão de Açúcar", price: 8.99 },
  ]},
  { id: "maca", name: "Maçã (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.90 },
    { store: "Pão de Açúcar", price: 12.90 },
    { store: "Mercado Livre", price: 8.49 },
  ]},
  { id: "laranja", name: "Laranja (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.90 },
    { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "mamao", name: "Mamão (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.90 },
    { store: "Mercado Livre", price: 5.99 },
  ]},
  { id: "morango", name: "Morango (bandeja)", category: "Frutas", prices: [
    { store: "Carrefour", price: 12.90 },
    { store: "Pão de Açúcar", price: 15.90 },
    { store: "Assaí", price: 9.99 },
  ]},
  { id: "abacate", name: "Abacate (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.90 },
  ]},
  { id: "uva", name: "Uva (kg)", category: "Frutas", prices: [
    { store: "Assaí", price: 14.99 },
    { store: "Carrefour", price: 16.90 },
    { store: "Pão de Açúcar", price: 19.90 },
  ]},
  { id: "melancia", name: "Melancia (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 19.99 },
    { store: "Carrefour", price: 24.90 },
  ]},
  { id: "abacaxi", name: "Abacaxi (un)", category: "Frutas", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.90 },
  ]},

  // ===== LEGUMES E VERDURAS =====
  { id: "alface", name: "Alface (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.90 },
    { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "tomate", name: "Tomate (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 6.99 },
    { store: "Carrefour", price: 8.90 },
    { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "cebola", name: "Cebola (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.90 },
  ]},
  { id: "batata", name: "Batata (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 7.90 },
    { store: "Pão de Açúcar", price: 9.90 },
  ]},
  { id: "cenoura", name: "Cenoura (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 6.90 },
  ]},
  { id: "brocolis", name: "Brócolis (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.90 },
  ]},
  { id: "couve", name: "Couve (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 3.90 },
  ]},
  { id: "alho", name: "Alho (cabeça)", category: "Temperos", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.90 },
  ]},
  { id: "pimentao", name: "Pimentão (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 8.90 },
  ]},
  { id: "chuchu", name: "Chuchu (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 4.90 },
  ]},
  { id: "berinjela", name: "Berinjela (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.90 },
  ]},
  { id: "abobrinha", name: "Abobrinha (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 5.49 },
    { store: "Carrefour", price: 7.90 },
  ]},

  // ===== CARNES =====
  { id: "picanha", name: "Picanha (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 59.90 },
    { store: "Carrefour", price: 69.90 },
    { store: "Swift", price: 74.90 },
    { store: "Açougue online", price: 54.90 },
  ]},
  { id: "alcatra", name: "Alcatra (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 36.90 },
    { store: "Carrefour", price: 42.90 },
    { store: "Swift", price: 44.90 },
  ]},
  { id: "contrafile", name: "Contrafilé (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 34.90 },
    { store: "Carrefour", price: 39.90 },
    { store: "Swift", price: 42.90 },
  ]},
  { id: "file-mignon", name: "Filé Mignon (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 55.90 },
    { store: "Carrefour", price: 64.90 },
    { store: "Swift", price: 69.90 },
  ]},
  { id: "acem", name: "Acém (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 24.90 },
    { store: "Carrefour", price: 29.90 },
  ]},
  { id: "paleta", name: "Paleta (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 22.90 },
    { store: "Carrefour", price: 27.90 },
  ]},
  { id: "fraldinha", name: "Fraldinha (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 38.90 },
    { store: "Carrefour", price: 44.90 },
    { store: "Swift", price: 49.90 },
  ]},
  { id: "maminha", name: "Maminha (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 42.90 },
    { store: "Carrefour", price: 48.90 },
    { store: "Swift", price: 52.90 },
  ]},
  { id: "coxao-mole", name: "Coxão Mole (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 32.90 },
    { store: "Carrefour", price: 37.90 },
  ]},
  { id: "coxao-duro", name: "Coxão Duro (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 28.90 },
    { store: "Carrefour", price: 33.90 },
  ]},
  { id: "patinho", name: "Patinho (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 30.90 },
    { store: "Carrefour", price: 35.90 },
  ]},
  { id: "lagarto", name: "Lagarto (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 34.90 },
    { store: "Carrefour", price: 39.90 },
  ]},
  { id: "musculo", name: "Músculo (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 26.90 },
    { store: "Carrefour", price: 31.90 },
  ]},
  { id: "costela", name: "Costela Bovina (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 18.90 },
    { store: "Carrefour", price: 24.90 },
  ]},
  { id: "cupim", name: "Cupim (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 29.90 },
    { store: "Carrefour", price: 34.90 },
  ]},
  { id: "peito-frango", name: "Peito de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 16.90 },
    { store: "Carrefour", price: 19.90 },
    { store: "Swift", price: 21.90 },
  ]},
  { id: "sobrecoxa", name: "Sobrecoxa de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 12.90 },
    { store: "Carrefour", price: 15.90 },
  ]},
  { id: "coxa-frango", name: "Coxa de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 10.90 },
    { store: "Carrefour", price: 13.90 },
  ]},
  { id: "asa-frango", name: "Asa de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 11.90 },
    { store: "Carrefour", price: 14.90 },
  ]},
  { id: "frango-inteiro", name: "Frango Inteiro (un)", category: "Carnes", prices: [
    { store: "Assaí", price: 18.90 },
    { store: "Carrefour", price: 22.90 },
  ]},
  { id: "linguica", name: "Linguiça Toscana (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 14.90 },
    { store: "Carrefour", price: 18.90 },
    { store: "Swift", price: 22.90 },
  ]},
  { id: "bisteca", name: "Bisteca Suína (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 16.90 },
    { store: "Carrefour", price: 19.90 },
  ]},
  { id: "pernil", name: "Pernil Suíno (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 14.90 },
    { store: "Carrefour", price: 18.90 },
  ]},
  { id: "lombo-suino", name: "Lombo Suíno (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 19.90 },
    { store: "Carrefour", price: 24.90 },
  ]},
  { id: "carne-moida", name: "Carne Moída (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 24.90 },
    { store: "Carrefour", price: 29.90 },
  ]},

  // ===== LATICÍNIOS =====
  { id: "leite", name: "Leite Integral (L)", category: "Laticínios", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "queijo-mussarela", name: "Queijo Mussarela (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 34.90 },
    { store: "Carrefour", price: 42.90 },
    { store: "Pão de Açúcar", price: 49.90 },
  ]},
  { id: "queijo-prato", name: "Queijo Prato (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 36.90 },
    { store: "Carrefour", price: 44.90 },
  ]},
  { id: "queijo-parmesao", name: "Queijo Parmesão (kg)", category: "Laticínios", prices: [
    { store: "Assaí", price: 59.90 },
    { store: "Carrefour", price: 69.90 },
    { store: "Pão de Açúcar", price: 79.90 },
  ]},
  { id: "manteiga", name: "Manteiga (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 12.90 },
    { store: "Carrefour", price: 14.90 },
    { store: "Pão de Açúcar", price: 16.99 },
  ]},
  { id: "requeijao", name: "Requeijão (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 7.49 },
    { store: "Carrefour", price: 8.99 },
  ]},
  { id: "iogurte", name: "Iogurte Natural (170g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.49 },
    { store: "Pão de Açúcar", price: 4.49 },
  ]},
  { id: "creme-leite", name: "Creme de Leite (200g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 3.99 },
    { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "leite-condensado", name: "Leite Condensado (395g)", category: "Laticínios", prices: [
    { store: "Assaí", price: 6.99 },
    { store: "Carrefour", price: 7.99 },
    { store: "Pão de Açúcar", price: 8.99 },
  ]},

  // ===== MERCEARIA =====
  { id: "arroz", name: "Arroz (5kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 19.90 },
    { store: "Carrefour", price: 23.90 },
    { store: "Pão de Açúcar", price: 27.90 },
  ]},
  { id: "feijao", name: "Feijão Carioca (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.99 },
    { store: "Carrefour", price: 8.49 },
    { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "macarrao", name: "Macarrão Espaguete (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.49 },
    { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "oleo", name: "Óleo de Soja (900ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.99 },
    { store: "Carrefour", price: 8.49 },
    { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "azeite", name: "Azeite de Oliva (500ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 24.90 },
    { store: "Carrefour", price: 29.90 },
    { store: "Pão de Açúcar", price: 34.90 },
  ]},
  { id: "sal", name: "Sal Refinado (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 2.99 },
  ]},
  { id: "acucar", name: "Açúcar Refinado (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 3.99 },
  ]},
  { id: "cafe", name: "Café Torrado (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 14.90 },
    { store: "Carrefour", price: 17.90 },
    { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "molho-tomate", name: "Molho de Tomate (340g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 2.99 },
    { store: "Pão de Açúcar", price: 3.99 },
  ]},
  { id: "extrato-tomate", name: "Extrato de Tomate (340g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.49 },
  ]},
  { id: "farinha-trigo", name: "Farinha de Trigo (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.49 },
  ]},
  { id: "farinha-mandioca", name: "Farinha de Mandioca (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
  ]},
  { id: "fermento", name: "Fermento em Pó (100g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.49 },
  ]},
  { id: "milho", name: "Milho em Lata (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 3.99 },
  ]},
  { id: "ervilha", name: "Ervilha em Lata (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 3.99 },
  ]},
  { id: "atum", name: "Atum em Lata (170g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.49 },
    { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "sardinha", name: "Sardinha em Lata (125g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 4.99 },
  ]},
  { id: "biscoito", name: "Biscoito Cream Cracker (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
  ]},
  { id: "macarrao-instantaneo", name: "Macarrão Instantâneo (un)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.99 },
    { store: "Carrefour", price: 2.49 },
  ]},
  { id: "maionese", name: "Maionese (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 7.49 },
    { store: "Carrefour", price: 8.99 },
    { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "ketchup", name: "Ketchup (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
  ]},
  { id: "mostarda", name: "Mostarda (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
  ]},
  { id: "vinagre", name: "Vinagre (750ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.49 },
  ]},
  { id: "tempero-completo", name: "Tempero Completo (300g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.99 },
  ]},
  { id: "caldo-carne", name: "Caldo de Carne (tablete)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.49 },
    { store: "Carrefour", price: 1.99 },
  ]},
  { id: "caldo-galinha", name: "Caldo de Galinha (tablete)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.49 },
    { store: "Carrefour", price: 1.99 },
  ]},

  // ===== BEBIDAS =====
  { id: "agua", name: "Água Mineral (1.5L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 2.99 },
  ]},
  { id: "refrigerante", name: "Refrigerante (2L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.49 },
    { store: "Pão de Açúcar", price: 10.99 },
  ]},
  { id: "cerveja", name: "Cerveja (lata 350ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 3.99 },
  ]},
  { id: "suco-laranja", name: "Suco de Laranja (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.99 },
    { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "suco-uva", name: "Suco de Uva (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 9.99 },
    { store: "Carrefour", price: 12.90 },
  ]},

  // ===== LIMPEZA =====
  { id: "detergente", name: "Detergente (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 2.99 },
  ]},
  { id: "sabao-po", name: "Sabão em Pó (1kg)", category: "Limpeza", prices: [
    { store: "Assaí", price: 9.99 },
    { store: "Carrefour", price: 12.90 },
  ]},
  { id: "agua-sanitaria", name: "Água Sanitária (1L)", category: "Limpeza", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 4.99 },
  ]},
  { id: "desinfetante", name: "Desinfetante (500ml)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 5.99 },
  ]},
  { id: "esponja", name: "Esponja de Limpeza (un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 1.49 },
    { store: "Carrefour", price: 1.99 },
  ]},
  { id: "papel-toalha", name: "Papel Toalha (2un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.49 },
  ]},
  { id: "papel-higienico", name: "Papel Higiênico (4un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
  ]},
  { id: "saco-lixo", name: "Saco de Lixo (20un)", category: "Limpeza", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
  ]},

  // ===== HIGIENE =====
  { id: "shampoo", name: "Shampoo (325ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 11.90 },
    { store: "Carrefour", price: 14.90 },
  ]},
  { id: "condicionador", name: "Condicionador (325ml)", category: "Higiene", prices: [
    { store: "Assaí", price: 11.90 },
    { store: "Carrefour", price: 14.90 },
  ]},
  { id: "sabonete", name: "Sabonete (un)", category: "Higiene", prices: [
    { store: "Assaí", price: 1.49 },
    { store: "Carrefour", price: 1.99 },
  ]},
  { id: "creme-dental", name: "Creme Dental (90g)", category: "Higiene", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 4.99 },
  ]},
  { id: "desodorante", name: "Desodorante (un)", category: "Higiene", prices: [
    { store: "Assaí", price: 9.90 },
    { store: "Carrefour", price: 12.90 },
  ]},

  // ===== OVOS E FRIOS =====
  { id: "ovos", name: "Ovos (dúzia)", category: "Ovos", prices: [
    { store: "Assaí", price: 9.99 },
    { store: "Carrefour", price: 11.90 },
    { store: "Pão de Açúcar", price: 14.90 },
  ]},
  { id: "presunto", name: "Presunto (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 19.90 },
    { store: "Carrefour", price: 24.90 },
  ]},
  { id: "peito-peru", name: "Peito de Peru (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 34.90 },
    { store: "Carrefour", price: 42.90 },
  ]},
  { id: "bacon", name: "Bacon (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 22.90 },
    { store: "Carrefour", price: 27.90 },
  ]},
  { id: "salame", name: "Salame (kg)", category: "Frios", prices: [
    { store: "Assaí", price: 44.90 },
    { store: "Carrefour", price: 49.90 },
  ]},

  // ===== PADARIA =====
  { id: "pao-frances", name: "Pão Francês (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 0.69 },
    { store: "Carrefour", price: 0.80 },
    { store: "Pão de Açúcar", price: 0.99 },
  ]},
  { id: "pao-forma", name: "Pão de Forma (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 6.99 },
    { store: "Carrefour", price: 8.49 },
  ]},
  { id: "bolo", name: "Bolo Simples (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 9.99 },
    { store: "Carrefour", price: 14.90 },
  ]},
];

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    )
    .slice(0, 12);
}

export function searchMeatByCookingMethod(method: string): string[] {
  const suggestion = meatSuggestions.find(
    (s) =>
      s.cookingMethod === method ||
      s.label.toLowerCase().includes(method.toLowerCase())
  );
  return suggestion?.cuts || [];
}

export function getAllMeatCuts(): string[] {
  const allCuts = new Set<string>();
  meatSuggestions.forEach((s) => s.cuts.forEach((c) => allCuts.add(c)));
  return Array.from(allCuts);
}

export function findProductByName(name: string): Product | undefined {
  const q = name.toLowerCase().trim();
  return products.find(
    (p) => p.name.toLowerCase() === q || p.id === q.replace(/\s+/g, "-").toLowerCase()
  );
}
