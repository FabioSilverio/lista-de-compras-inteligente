import { Product } from "./types";

export const padaria: Product[] = [
  // ===== PÃES SALGADOS =====
  { id: "pao-frances", name: "Pão Francês (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 0.69 }, { store: "Carrefour", price: 0.80 }, { store: "Pão de Açúcar", price: 0.99 },
  ]},
  { id: "pao-forma-branco", name: "Pão de Forma Branco (pacote)", category: "Padaria", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 }, { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "pao-forma-integral", name: "Pão de Forma Integral (pacote)", category: "Padaria", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 }, { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "pao-forma-centeio", name: "Pão de Forma Centeio (pacote)", category: "Padaria", prices: [
    { store: "Assaí", price: 8.49 }, { store: "Carrefour", price: 9.99 }, { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "pao-forma-sem-gluten", name: "Pão de Forma sem Glúten (pacote)", category: "Padaria", prices: [
    { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 18.90 },
  ]},
  { id: "pao-brioche", name: "Pão Brioche (pacote)", category: "Padaria", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 17.90 },
  ]},
  { id: "pao-hamburguer", name: "Pão de Hambúrguer (pacote 4un)", category: "Padaria", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 }, { store: "Pão de Açúcar", price: 7.49 },
  ]},
  { id: "pao-hot-dog", name: "Pão de Hot Dog (pacote 6un)", category: "Padaria", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 }, { store: "Pão de Açúcar", price: 7.49 },
  ]},
  { id: "pao-batata", name: "Pão de Batata (pacote 5un)", category: "Padaria", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "pao-queijo-pacote", name: "Pão de Queijo (pacote 400g)", category: "Padaria", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 12.90 }, { store: "Pão de Açúcar", price: 15.90 },
  ]},
  { id: "pao-queijo-porcao", name: "Pão de Queijo (porção 200g)", category: "Padaria", prices: [
    { store: "Padaria local", price: 8.00 }, { store: "Assaí", price: 6.99 },
  ]},
  { id: "pao-sovado", name: "Pão Sovado (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "pao-de-milho", name: "Pão de Milho (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 0.79 }, { store: "Carrefour", price: 0.99 },
  ]},
  { id: "pao-de-mandioca", name: "Pão de Mandioca (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 0.79 }, { store: "Carrefour", price: 0.99 },
  ]},
  { id: "pao-australiano", name: "Pão Australiano (pacote)", category: "Padaria", prices: [
    { store: "Carrefour", price: 12.90 }, { store: "Pão de Açúcar", price: 15.90 },
  ]},
  { id: "pao-integral-graos", name: "Pão Integral com Grãos (pacote)", category: "Padaria", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "baguete", name: "Baguete (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 }, { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "pao-de-alho", name: "Pão de Alho (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "ciabatta", name: "Ciabatta (un)", category: "Padaria", prices: [
    { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},

  // ===== CROISSANT E FOLHEADOS =====
  { id: "croissant-manteiga", name: "Croissant de Manteiga (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "croissant-presunto-queijo", name: "Croissant Presunto e Queijo (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "croissant-chocolate", name: "Croissant de Chocolate (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "folhado-frango", name: "Folhado de Frango (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 },
  ]},
  { id: "folhado-calabresa", name: "Folhado de Calabresa (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 },
  ]},

  // ===== BOLOS =====
  { id: "bolo-simples", name: "Bolo Simples (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "bolo-cenoura", name: "Bolo de Cenoura (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 16.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "bolo-chocolate", name: "Bolo de Chocolate (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 16.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "bolo-laranja", name: "Bolo de Laranja (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "bolo-fuba", name: "Bolo de Fubá (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 10.90 }, { store: "Carrefour", price: 13.90 },
  ]},
  { id: "bolo-coco", name: "Bolo de Coco (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 15.90 },
  ]},
  { id: "bolo-formigueiro", name: "Bolo Formigueiro (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "bolo-red-velvet", name: "Bolo Red Velvet (un)", category: "Padaria", prices: [
    { store: "Carrefour", price: 29.90 }, { store: "Pão de Açúcar", price: 39.90 },
  ]},
  { id: "bolo-banana", name: "Bolo de Banana (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 13.90 }, { store: "Carrefour", price: 16.90 },
  ]},

  // ===== TORTAS E SALGADOS =====
  { id: "torta-frango", name: "Torta de Frango (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 17.90 }, { store: "Carrefour", price: 22.90 },
  ]},
  { id: "torta-palmito", name: "Torta de Palmito (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 },
  ]},
  { id: "empada-frango", name: "Empada de Frango (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "empada-palmito", name: "Empada de Palmito (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "quiche", name: "Quiche (un)", category: "Padaria", prices: [
    { store: "Carrefour", price: 7.99 }, { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "pizza-pao", name: "Pizza de Pão/Pão Recheado (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},

  // ===== DOCES DE PADARIA =====
  { id: "sonho", name: "Sonho (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 }, { store: "Pão de Açúcar", price: 6.49 },
  ]},
  { id: "brigadeiro-padaria", name: "Brigadeiro (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "beijinho", name: "Beijinho (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "carolina", name: "Carolina (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "bomba-chocolate", name: "Bomba de Chocolate (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "rosca-doce", name: "Rosca Doce (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "cuca", name: "Cuca (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "churros", name: "Churros (un)", category: "Padaria", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
];
