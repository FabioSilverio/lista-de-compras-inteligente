import { Product } from "./types";

export const bebidas: Product[] = [
  // ===== ÁGUA =====
  { id: "agua-500ml", name: "Água Mineral sem Gás (500ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "agua-1.5l", name: "Água Mineral sem Gás (1.5L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 }, { store: "Pão de Açúcar", price: 3.99 },
  ]},
  { id: "agua-5l", name: "Água Mineral sem Gás (5L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "agua-gas-500ml", name: "Água com Gás (500ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 }, { store: "Pão de Açúcar", price: 3.99 },
  ]},
  { id: "agua-gas-1.5l", name: "Água com Gás (1.5L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 }, { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "agua-coco-1l", name: "Água de Coco (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 }, { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "agua-coco-200ml", name: "Água de Coco (200ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},
  { id: "agua-saborizada-500ml", name: "Água Saborizada (500ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 },
  ]},

  // ===== REFRIGERANTES =====
  { id: "refrigerante-cola-2l", name: "Refrigerante Cola (2L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 }, { store: "Pão de Açúcar", price: 10.99 },
  ]},
  { id: "refrigerante-cola-lata", name: "Refrigerante Cola (lata 350ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 },
  ]},
  { id: "refrigerante-guarana-2l", name: "Refrigerante Guaraná (2L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.49 }, { store: "Carrefour", price: 8.99 }, { store: "Pão de Açúcar", price: 10.49 },
  ]},
  { id: "refrigerante-guarana-lata", name: "Refrigerante Guaraná (lata 350ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.29 }, { store: "Carrefour", price: 3.79 },
  ]},
  { id: "refrigerante-laranja-2l", name: "Refrigerante Laranja (2L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "refrigerante-laranja-lata", name: "Refrigerante Laranja (lata 350ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},
  { id: "refrigerante-limao-2l", name: "Refrigerante Limão (2L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "refrigerante-limao-lata", name: "Refrigerante Limão (lata 350ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},
  { id: "refrigerante-uva-2l", name: "Refrigerante Uva (2L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "refrigerante-uva-lata", name: "Refrigerante Uva (lata 350ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},

  // ===== SUCOS =====
  { id: "suco-laranja-200ml", name: "Suco de Laranja (200ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "suco-laranja-1l", name: "Suco de Laranja Integral (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.99 }, { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "suco-uva-500ml", name: "Suco de Uva Integral (500ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "suco-uva-1l", name: "Suco de Uva Integral (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 18.90 },
  ]},
  { id: "suco-maracuja-1l", name: "Suco de Maracujá (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "suco-pessego-1l", name: "Suco de Pêssego (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "suco-abacaxi-1l", name: "Suco de Abacaxi (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "suco-caju-1l", name: "Suco de Caju (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "suco-goiaba-1l", name: "Suco de Goiaba (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "suco-manga-1l", name: "Suco de Manga (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "suco-maca-1l", name: "Suco de Maçã (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "suco-po-laranja", name: "Suco em Pó Laranja (25g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 0.99 }, { store: "Carrefour", price: 1.29 },
  ]},
  { id: "suco-po-uva", name: "Suco em Pó Uva (25g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 0.99 }, { store: "Carrefour", price: 1.29 },
  ]},
  { id: "suco-po-maracuja", name: "Suco em Pó Maracujá (25g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 0.99 }, { store: "Carrefour", price: 1.29 },
  ]},
  { id: "suco-po-abacaxi", name: "Suco em Pó Abacaxi (25g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 0.99 }, { store: "Carrefour", price: 1.29 },
  ]},
  { id: "suco-po-manga", name: "Suco em Pó Manga (25g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 0.99 }, { store: "Carrefour", price: 1.29 },
  ]},

  // ===== CAFÉ =====
  { id: "cafe-torrado-250g", name: "Café Torrado e Moído (250g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 }, { store: "Pão de Açúcar", price: 13.49 },
  ]},
  { id: "cafe-torrado-500g", name: "Café Torrado e Moído (500g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "cafe-gourmet-250g", name: "Café Gourmet (250g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "cafe-especial-250g", name: "Café Especial (250g)", category: "Bebidas", prices: [
    { store: "Carrefour", price: 22.90 }, { store: "Pão de Açúcar", price: 29.90 },
  ]},
  { id: "cafe-capsula", name: "Café em Cápsula (10un)", category: "Bebidas", prices: [
    { store: "Assaí", price: 15.90 }, { store: "Carrefour", price: 18.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "cafe-soluvel-50g", name: "Café Solúvel (50g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "cafe-soluvel-100g", name: "Café Solúvel (100g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "cappuccino", name: "Cappuccino (200g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 }, { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "cafe-descafeinado", name: "Café Descafeinado (250g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 },
  ]},

  // ===== CHÁS =====
  { id: "cha-mate", name: "Chá Mate (25un)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "cha-camomila", name: "Chá de Camomila (15un)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "cha-erva-doce", name: "Chá de Erva Doce (15un)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "cha-verde", name: "Chá Verde (15un)", category: "Bebidas", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 }, { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "cha-preto", name: "Chá Preto (15un)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "cha-hortela", name: "Chá de Hortelã (15un)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "cha-gelado-lata", name: "Chá Gelado (lata 330ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "cha-gelado-pva", name: "Chá Gelado (1.5L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},

  // ===== ACHOCOLATADOS =====
  { id: "achocolatado-400g", name: "Achocolatado em Pó (400g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 }, { store: "Pão de Açúcar", price: 13.90 },
  ]},
  { id: "achocolatado-800g", name: "Achocolatado em Pó (800g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "chocolate-po-200g", name: "Chocolate em Pó (200g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 }, { store: "Pão de Açúcar", price: 10.90 },
  ]},
  { id: "cacau-po-100g", name: "Cacau em Pó (100g)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.49 }, { store: "Carrefour", price: 8.99 }, { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "toddynho", name: "Toddynho (200ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "nescau-pronto", name: "Nescau Pronto (200ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},

  // ===== LÁCTEOS BEBÍVEIS =====
  { id: "yakult", name: "Yakult/Leite Fermentado (80ml un)", category: "Bebidas", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},
  { id: "yakult-pack", name: "Yakult/Leite Fermentado (pack 5un)", category: "Bebidas", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "leite-fermentado-outro", name: "Leite Fermentado (bandeja 6un 80ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},

  // ===== ENERGÉTICOS E ISOTÔNICOS =====
  { id: "energetico-lata", name: "Energético (lata 250ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 }, { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "energetico-2l", name: "Energético (2L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 17.90 }, { store: "Carrefour", price: 21.90 },
  ]},
  { id: "isotônico-500ml", name: "Isotônico (500ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 }, { store: "Pão de Açúcar", price: 7.99 },
  ]},

  // ===== CERVEJA =====
  { id: "cerveja-lata", name: "Cerveja (lata 350ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 },
  ]},
  { id: "cerveja-garrafa-600ml", name: "Cerveja (garrafa 600ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "cerveja-long-neck", name: "Cerveja Long Neck (330ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 4.99 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "cerveja-puro-malte", name: "Cerveja Puro Malte (lata 350ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 4.99 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "cerveja-puro-malte-600ml", name: "Cerveja Puro Malte (garrafa 600ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 9.99 }, { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "cerveja-sem-alcool", name: "Cerveja Sem Álcool (lata 350ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.49 },
  ]},
  { id: "cerveja-artesanal-500ml", name: "Cerveja Artesanal (500ml)", category: "Bebidas", prices: [
    { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 18.90 },
  ]},
  { id: "chopp-lata", name: "Chopp (lata 473ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 5.99 },
  ]},

  // ===== VINHO =====
  { id: "vinho-tinto", name: "Vinho Tinto Seco (750ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 }, { store: "Pão de Açúcar", price: 39.90 },
  ]},
  { id: "vinho-tinto-suave", name: "Vinho Tinto Suave (750ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "vinho-branco", name: "Vinho Branco Seco (750ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 27.90 }, { store: "Pão de Açúcar", price: 34.90 },
  ]},
  { id: "vinho-branco-suave", name: "Vinho Branco Suave (750ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "vinho-rose", name: "Vinho Rosé (750ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},
  { id: "espumante", name: "Espumante (750ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 }, { store: "Pão de Açúcar", price: 39.90 },
  ]},
  { id: "espumante-moscatel", name: "Espumante Moscatel (750ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 },
  ]},

  // ===== DESTILADOS =====
  { id: "vodka", name: "Vodka (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 29.90 }, { store: "Carrefour", price: 34.90 },
  ]},
  { id: "whisky-8anos", name: "Whisky 8 Anos (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 69.90 }, { store: "Carrefour", price: 79.90 },
  ]},
  { id: "whisky-12anos", name: "Whisky 12 Anos (750ml)", category: "Bebidas", prices: [
    { store: "Carrefour", price: 119.90 }, { store: "Pão de Açúcar", price: 139.90 },
  ]},
  { id: "cachaca", name: "Cachaça (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "cachaca-artesanal", name: "Cachaça Artesanal (700ml)", category: "Bebidas", prices: [
    { store: "Carrefour", price: 34.90 }, { store: "Pão de Açúcar", price: 44.90 },
  ]},
  { id: "rum", name: "Rum (1L)", category: "Bebidas", prices: [
    { store: "Assaí", price: 29.90 }, { store: "Carrefour", price: 34.90 },
  ]},
  { id: "gin", name: "Gin (750ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 49.90 }, { store: "Carrefour", price: 59.90 },
  ]},
  { id: "conhaque", name: "Conhaque (700ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 39.90 }, { store: "Carrefour", price: 44.90 },
  ]},
  { id: "licor", name: "Licor (700ml)", category: "Bebidas", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 },
  ]},
];
