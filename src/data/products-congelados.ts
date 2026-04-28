import { Product } from "./types";

export const congelados: Product[] = [
  // ===== PIZZAS =====
  { id: "pizza-mussarela", name: "Pizza Congelada Mussarela (un)", category: "Congelados", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 12.90 }, { store: "Pão de Açúcar", price: 15.90 },
  ]},
  { id: "pizza-calabresa", name: "Pizza Congelada Calabresa (un)", category: "Congelados", prices: [
    { store: "Assaí", price: 10.90 }, { store: "Carrefour", price: 13.90 }, { store: "Pão de Açúcar", price: 16.90 },
  ]},
  { id: "pizza-frango-catupiry", name: "Pizza Congelada Frango c/ Catupiry (un)", category: "Congelados", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 18.90 },
  ]},
  { id: "pizza-quatro-queijos", name: "Pizza Congelada Quatro Queijos (un)", category: "Congelados", prices: [
    { store: "Assaí", price: 13.90 }, { store: "Carrefour", price: 16.90 },
  ]},
  { id: "pizza-portuguesa", name: "Pizza Congelada Portuguesa (un)", category: "Congelados", prices: [
    { store: "Assaí", price: 13.90 }, { store: "Carrefour", price: 16.90 },
  ]},

  // ===== LASANHA =====
  { id: "lasanha-bolonhesa", name: "Lasanha Congelada Bolonhesa (600g)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "lasanha-frango", name: "Lasanha Congelada Frango (600g)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "lasanha-presunto-queijo", name: "Lasanha Congelada Presunto e Queijo (600g)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "lasanha-berinjela", name: "Lasanha Congelada Berinjela (600g)", category: "Congelados", prices: [
    { store: "Assaí", price: 13.90 }, { store: "Carrefour", price: 16.90 },
  ]},

  // ===== FRANGO EMPANADO =====
  { id: "nuggets", name: "Nuggets de Frango (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 }, { store: "Swift", price: 14.90 },
  ]},
  { id: "nuggets-1kg", name: "Nuggets de Frango (pacote 1kg)", category: "Congelados", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},
  { id: "frango-empanado", name: "Filé de Frango Empanado (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 10.90 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "steak-frango", name: "Steak de Frango (pacote 450g)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "coxinha-asa-congelada", name: "Coxinha da Asa Congelada (pacote 1kg)", category: "Congelados", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 },
  ]},

  // ===== HAMBÚRGUER =====
  { id: "hamburguer-bovino", name: "Hambúrguer Bovino (caixa 12un)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Swift", price: 19.90 },
  ]},
  { id: "hamburguer-frango", name: "Hambúrguer de Frango (caixa 10un)", category: "Congelados", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 13.90 },
  ]},
  { id: "hamburguer-suino", name: "Hambúrguer Suíno (caixa 10un)", category: "Congelados", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "hamburguer-artesanal", name: "Hambúrguer Artesanal (pacote 4un)", category: "Congelados", prices: [
    { store: "Carrefour", price: 22.90 }, { store: "Swift", price: 24.90 },
  ]},
  { id: "hamburguer-vegetariano", name: "Hambúrguer Vegetariano (caixa 8un)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 16.90 },
  ]},

  // ===== BATATAS =====
  { id: "batata-frita-palito", name: "Batata Frita Palito Congelada (pacote 400g)", category: "Congelados", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "batata-frita-1kg", name: "Batata Frita Congelada (pacote 1kg)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "batata-frita-2kg", name: "Batata Frita Congelada (pacote 2kg)", category: "Congelados", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 27.90 },
  ]},
  { id: "batata-noisettes", name: "Batata Noisettes Congelada (pacote 400g)", category: "Congelados", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "mandioca-frita", name: "Mandioca Frita Congelada (pacote 400g)", category: "Congelados", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "polenta-frita", name: "Polenta Frita Congelada (pacote 400g)", category: "Congelados", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "anéis-cebola", name: "Anéis de Cebola Congelados (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},

  // ===== LEGUMES CONGELADOS =====
  { id: "brocolis-congelado", name: "Brócolis Congelado (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "ervilha-congelada", name: "Ervilha Congelada (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "milho-congelado", name: "Milho Verde Congelado (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "mix-legumes", name: "Mix de Legumes Congelado (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 },
  ]},
  { id: "couve-flor-congelada", name: "Couve-Flor Congelada (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "espinafre-congelado", name: "Espinafre Congelado (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 },
  ]},

  // ===== POLPAS DE FRUTA =====
  { id: "polpa-maracuja", name: "Polpa de Maracujá (pacote 100g)", category: "Congelados", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "polpa-acerola", name: "Polpa de Acerola (pacote 100g)", category: "Congelados", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "polpa-morango", name: "Polpa de Morango (pacote 100g)", category: "Congelados", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},
  { id: "polpa-manga", name: "Polpa de Manga (pacote 100g)", category: "Congelados", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "polpa-caju", name: "Polpa de Caju (pacote 100g)", category: "Congelados", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "polpa-goiaba", name: "Polpa de Goiaba (pacote 100g)", category: "Congelados", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "polpa-abacaxi", name: "Polpa de Abacaxi (pacote 100g)", category: "Congelados", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},

  // ===== SORVETES E PICOLÉS =====
  { id: "sorvete-creme-2l", name: "Sorvete Creme (pote 2L)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "sorvete-chocolate-2l", name: "Sorvete Chocolate (pote 2L)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "sorvete-morango-2l", name: "Sorvete Morango (pote 2L)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "sorvete-napolitano-2l", name: "Sorvete Napolitano (pote 2L)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "sorvete-gourmet-500ml", name: "Sorvete Premium (pote 500ml)", category: "Congelados", prices: [
    { store: "Carrefour", price: 22.90 }, { store: "Pão de Açúcar", price: 29.90 },
  ]},
  { id: "picole-fruta", name: "Picolé de Fruta (un)", category: "Congelados", prices: [
    { store: "Assaí", price: 1.99 }, { store: "Carrefour", price: 2.49 },
  ]},
  { id: "picole-chocolate", name: "Picolé de Chocolate (un)", category: "Congelados", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "picole-creme", name: "Picolé Cremoso (un)", category: "Congelados", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},
  { id: "acai-pote", name: "Açaí (pote 1L)", category: "Congelados", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "acai-porcao", name: "Açaí (porção 200g)", category: "Congelados", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},

  // ===== OUTROS CONGELADOS =====
  { id: "pao-queijo-congelado", name: "Pão de Queijo Congelado (pacote 400g)", category: "Congelados", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "coxinha-congelada", name: "Coxinha Congelada (pacote 400g)", category: "Congelados", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "risole-congelado", name: "Risole Congelado (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "kibe-congelado", name: "Kibe Congelado (pacote 400g)", category: "Congelados", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 13.90 },
  ]},
  { id: "empadinha-congelada", name: "Empadinha Congelada (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "esfiha-congelada", name: "Esfiha Congelada (pacote 300g)", category: "Congelados", prices: [
    { store: "Assaí", price: 10.90 }, { store: "Carrefour", price: 12.90 },
  ]},
];
