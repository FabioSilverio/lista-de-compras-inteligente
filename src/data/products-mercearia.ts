import { Product } from "./types";

export const mercearia: Product[] = [
  // ===== ARROZ =====
  { id: "arroz-agulhinha-1kg", name: "Arroz Agulhinha (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 }, { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "arroz-agulhinha-2kg", name: "Arroz Agulhinha (2kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 9.49 }, { store: "Carrefour", price: 10.99 }, { store: "Pão de Açúcar", price: 13.49 },
  ]},
  { id: "arroz-agulhinha-5kg", name: "Arroz Agulhinha (5kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 23.90 }, { store: "Pão de Açúcar", price: 27.90 },
  ]},
  { id: "arroz-parboilizado-1kg", name: "Arroz Parboilizado (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 }, { store: "Pão de Açúcar", price: 6.49 },
  ]},
  { id: "arroz-parboilizado-5kg", name: "Arroz Parboilizado (5kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 18.90 }, { store: "Carrefour", price: 22.90 }, { store: "Pão de Açúcar", price: 26.90 },
  ]},
  { id: "arroz-integral-1kg", name: "Arroz Integral (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 8.49 },
  ]},
  { id: "arroz-integral-2kg", name: "Arroz Integral (2kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 10.99 }, { store: "Carrefour", price: 12.90 },
  ]},
  { id: "arroz-arboreo", name: "Arroz Arbóreo (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 }, { store: "Pão de Açúcar", price: 13.90 },
  ]},
  { id: "arroz-basmati", name: "Arroz Basmati (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "arroz-japones", name: "Arroz Japonês (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 12.90 }, { store: "Pão de Açúcar", price: 15.90 },
  ]},
  { id: "arroz-negro", name: "Arroz Negro (500g)", category: "Mercearia", prices: [
    { store: "Carrefour", price: 11.90 }, { store: "Pão de Açúcar", price: 14.90 },
  ]},
  { id: "arroz-selvagem", name: "Arroz Selvagem (250g)", category: "Mercearia", prices: [
    { store: "Carrefour", price: 9.90 }, { store: "Pão de Açúcar", price: 12.90 },
  ]},

  // ===== FEIJÃO =====
  { id: "feijao-carioca-500g", name: "Feijão Carioca (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "feijao-carioca-1kg", name: "Feijão Carioca (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 }, { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "feijao-preto-500g", name: "Feijão Preto (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "feijao-preto-1kg", name: "Feijão Preto (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 }, { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "feijao-fradinho-500g", name: "Feijão Fradinho (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "feijao-branco-500g", name: "Feijão Branco (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 }, { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "feijao-rajado-500g", name: "Feijão Rajado (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "lentilha-500g", name: "Lentilha (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 8.49 },
  ]},
  { id: "grao-bico-500g", name: "Grão de Bico (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 }, { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "ervilha-seca-500g", name: "Ervilha Seca (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "soja-grao", name: "Soja em Grão (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},

  // ===== MACARRÃO =====
  { id: "macarrao-espaguete-500g", name: "Macarrão Espaguete (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "macarrao-penne-500g", name: "Macarrão Penne (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "macarrao-fusilli-500g", name: "Macarrão Fusilli (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "macarrao-talharim-500g", name: "Macarrão Talharim (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "macarrao-ninho-500g", name: "Macarrão Ninho (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 }, { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "macarrao-parafuso-500g", name: "Macarrão Parafuso (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "macarrao-integral-500g", name: "Macarrão Integral (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 }, { store: "Pão de Açúcar", price: 7.49 },
  ]},
  { id: "massa-lasanha-200g", name: "Massa para Lasanha (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 }, { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "macarrao-yakisoba-500g", name: "Macarrão Yakisoba (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 }, { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "macarrao-instantaneo", name: "Macarrão Instantâneo (un)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.99 }, { store: "Carrefour", price: 2.49 },
  ]},
  { id: "macarrao-semi-ovos-500g", name: "Macarrão com Ovos (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 }, { store: "Pão de Açúcar", price: 6.99 },
  ]},

  // ===== ÓLEOS =====
  { id: "oleo-soja-900ml", name: "Óleo de Soja (900ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 }, { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "oleo-soja-3l", name: "Óleo de Soja (3L)", category: "Mercearia", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 },
  ]},
  { id: "oleo-canola-900ml", name: "Óleo de Canola (900ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 }, { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "oleo-girassol-900ml", name: "Óleo de Girassol (900ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 9.49 }, { store: "Carrefour", price: 11.90 }, { store: "Pão de Açúcar", price: 13.90 },
  ]},
  { id: "oleo-milho-900ml", name: "Óleo de Milho (900ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 8.49 }, { store: "Carrefour", price: 9.99 }, { store: "Pão de Açúcar", price: 11.99 },
  ]},
  { id: "oleo-coco-200ml", name: "Óleo de Coco (200ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 22.90 },
  ]},
  { id: "azeite-oliva-500ml", name: "Azeite de Oliva (500ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 }, { store: "Pão de Açúcar", price: 34.90 },
  ]},
  { id: "azeite-oliva-250ml", name: "Azeite de Oliva (250ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 }, { store: "Pão de Açúcar", price: 19.99 },
  ]},
  { id: "azeite-extra-virgem-500ml", name: "Azeite Extra Virgem (500ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 }, { store: "Pão de Açúcar", price: 49.90 },
  ]},

  // ===== TEMPEROS =====
  { id: "sal-refinado-500g", name: "Sal Refinado (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "sal-refinado-1kg", name: "Sal Refinado (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "sal-grosso-1kg", name: "Sal Grosso (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},
  { id: "sal-rosa", name: "Sal Rosa do Himalaia (250g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 8.99 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "alho-triturado", name: "Alho Triturado (frasco 200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "oregano", name: "Orégano (10g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.99 }, { store: "Carrefour", price: 2.49 },
  ]},
  { id: "pimenta-do-reino", name: "Pimenta do Reino (30g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "colorau", name: "Colorau (50g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.99 }, { store: "Carrefour", price: 2.49 },
  ]},
  { id: "cominho", name: "Cominho (30g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "curry", name: "Curry (25g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "paprica", name: "Páprica Doce (30g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.99 },
  ]},
  { id: "paprica-picante", name: "Páprica Picante (30g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "canela-po", name: "Canela em Pó (20g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.99 }, { store: "Carrefour", price: 2.49 },
  ]},
  { id: "canela-pau", name: "Canela em Pau (10g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "noz-moscada", name: "Noz Moscada (15g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "cravo-da-india", name: "Cravo da Índia (15g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "caldo-carne", name: "Caldo de Carne (tablete)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "caldo-galinha", name: "Caldo de Galinha (tablete)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "caldo-legumes", name: "Caldo de Legumes (tablete)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "caldo-costela", name: "Caldo de Costela (tablete)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.49 }, { store: "Carrefour", price: 1.99 },
  ]},
  { id: "shoyu-150ml", name: "Shoyu/Molho de Soja (150ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 }, { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "shoyu-1l", name: "Shoyu/Molho de Soja (1L)", category: "Mercearia", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "molho-ingles", name: "Molho Inglês (150ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 5.49 },
  ]},

  // ===== VINAGRES =====
  { id: "vinagre-alcool-750ml", name: "Vinagre de Álcool (750ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "vinagre-maca-500ml", name: "Vinagre de Maçã (500ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 }, { store: "Pão de Açúcar", price: 7.49 },
  ]},
  { id: "vinagre-vinho-500ml", name: "Vinagre de Vinho (500ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 8.99 },
  ]},

  // ===== MOLHOS CONDIMENTARES =====
  { id: "mostarda-200g", name: "Mostarda (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "ketchup-200g", name: "Ketchup (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "ketchup-400g", name: "Ketchup (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 }, { store: "Pão de Açúcar", price: 8.99 },
  ]},
  { id: "maionese-200g", name: "Maionese (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 }, { store: "Pão de Açúcar", price: 6.49 },
  ]},
  { id: "maionese-500g", name: "Maionese (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 7.49 }, { store: "Carrefour", price: 8.99 }, { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "barbecue", name: "Molho Barbecue (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 }, { store: "Pão de Açúcar", price: 9.90 },
  ]},
  { id: "molho-pimenta", name: "Molho de Pimenta (150ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "tempero-completo-300g", name: "Tempero Completo (300g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.99 },
  ]},

  // ===== MOLHOS DE TOMATE =====
  { id: "molho-tomate-340g", name: "Molho de Tomate Tradicional (340g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 }, { store: "Pão de Açúcar", price: 3.99 },
  ]},
  { id: "molho-tomate-680g", name: "Molho de Tomate Tradicional (680g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "extrato-tomate-130g", name: "Extrato de Tomate (130g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "extrato-tomate-340g", name: "Extrato de Tomate (340g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "polpa-tomate", name: "Polpa de Tomate (520g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "tomate-pelado", name: "Tomate Pelado (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 }, { store: "Pão de Açúcar", price: 6.99 },
  ]},

  // ===== FARINHAS =====
  { id: "farinha-trigo-1kg", name: "Farinha de Trigo (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "farinha-trigo-5kg", name: "Farinha de Trigo (5kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "farinha-trigo-integral-1kg", name: "Farinha de Trigo Integral (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 },
  ]},
  { id: "farinha-mandioca-500g", name: "Farinha de Mandioca (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "farinha-mandioca-1kg", name: "Farinha de Mandioca (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 },
  ]},
  { id: "farinha-milho-500g", name: "Farinha de Milho (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "farinha-rosca-500g", name: "Farinha de Rosca (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "fuba", name: "Fubá (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.99 }, { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "fuba-mimoso", name: "Fubá Mimoso (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 4.49 },
  ]},
  { id: "amido-milho-200g", name: "Amido de Milho/Maizena (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 },
  ]},
  { id: "amido-milho-500g", name: "Amido de Milho/Maizena (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "polvilho-doce-500g", name: "Polvilho Doce (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "polvilho-azedo-500g", name: "Polvilho Azedo (500g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 },
  ]},
  { id: "fermento-po-100g", name: "Fermento em Pó (100g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 },
  ]},
  { id: "fermento-po-250g", name: "Fermento em Pó (250g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 },
  ]},
  { id: "fermento-biologico-125g", name: "Fermento Biológico Seco (125g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "fermento-biologico-fresco", name: "Fermento Biológico Fresco (15g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "bicarbonato", name: "Bicarbonato de Sódio (100g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 1.99 }, { store: "Carrefour", price: 2.49 },
  ]},

  // ===== AÇÚCAR =====
  { id: "acucar-refinado-1kg", name: "Açúcar Refinado (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 }, { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "acucar-refinado-5kg", name: "Açúcar Refinado (5kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "acucar-cristal-1kg", name: "Açúcar Cristal (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.29 }, { store: "Carrefour", price: 3.79 },
  ]},
  { id: "acucar-cristal-5kg", name: "Açúcar Cristal (5kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 13.90 }, { store: "Carrefour", price: 16.90 },
  ]},
  { id: "acucar-mascavo-1kg", name: "Açúcar Mascavo (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.49 }, { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "acucar-confeiteiro-250g", name: "Açúcar de Confeiteiro (250g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "acucar-demerara-1kg", name: "Açúcar Demerara (1kg)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 }, { store: "Pão de Açúcar", price: 7.49 },
  ]},
  { id: "adocante-liquido", name: "Adoçante Líquido (100ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 8.49 }, { store: "Pão de Açúcar", price: 10.99 },
  ]},
  { id: "adocante-sache", name: "Adoçante Sachê (100un)", category: "Mercearia", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 },
  ]},
  { id: "adocante-stevia", name: "Adoçante Stevia (80ml)", category: "Mercearia", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 17.90 },
  ]},

  // ===== ENLATADOS =====
  { id: "milho-lata", name: "Milho Verde em Lata (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 }, { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "ervilha-lata", name: "Ervilha em Lata (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 }, { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "atum-ralado", name: "Atum Ralado em Lata (170g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 }, { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "atum-solido", name: "Atum Sólido em Lata (170g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 9.99 }, { store: "Carrefour", price: 11.90 }, { store: "Pão de Açúcar", price: 14.90 },
  ]},
  { id: "sardinha-lata", name: "Sardinha em Lata (125g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.99 }, { store: "Carrefour", price: 4.99 }, { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "azeitona-verde", name: "Azeitona Verde (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 }, { store: "Pão de Açúcar", price: 8.99 },
  ]},
  { id: "azeitona-preta", name: "Azeitona Preta (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.49 }, { store: "Carrefour", price: 7.99 }, { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "palmito", name: "Palmito em Conserva (300g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 18.90 },
  ]},
  { id: "pepino-conserva", name: "Pepino em Conserva (300g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "cogumelo", name: "Cogumelo em Conserva (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 7.99 }, { store: "Carrefour", price: 9.49 }, { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "seleta-legumes", name: "Seleta de Legumes (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 },
  ]},

  // ===== BISCOITOS =====
  { id: "cream-cracker-400g", name: "Biscoito Cream Cracker (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "agua-e-sal-400g", name: "Biscoito Água e Sal (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "maizena-400g", name: "Biscoito Maizena (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 7.49 },
  ]},
  { id: "maria-400g", name: "Biscoito Maria (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.49 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "biscoito-recheado", name: "Biscoito Recheado (130g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.99 }, { store: "Carrefour", price: 3.49 }, { store: "Pão de Açúcar", price: 4.49 },
  ]},
  { id: "polvilho-biscoito", name: "Biscoito de Polvilho (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
  { id: "rosquinha-coco", name: "Rosquinha de Coco (300g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "rosquinha-leite", name: "Rosquinha de Leite (300g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "amanteigado-400g", name: "Biscoito Amanteigado (400g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "biscoito-aveia", name: "Biscoito de Aveia (200g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 }, { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "wafer-chocolate", name: "Wafer de Chocolate (130g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 2.49 }, { store: "Carrefour", price: 2.99 },
  ]},
  { id: "salgadinho-milho", name: "Salgadinho de Milho (100g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 3.49 }, { store: "Carrefour", price: 3.99 },
  ]},
  { id: "batata-chips", name: "Batata Chips (100g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 }, { store: "Pão de Açúcar", price: 8.99 },
  ]},
  { id: "batata-palha", name: "Batata Palha (100g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 4.49 }, { store: "Carrefour", price: 5.49 },
  ]},
  { id: "amendoim", name: "Amendoim Torrado (250g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.99 }, { store: "Carrefour", price: 7.99 },
  ]},
  { id: "castanha-caju", name: "Castanha de Caju (150g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 14.90 }, { store: "Pão de Açúcar", price: 18.90 },
  ]},
  { id: "torrada", name: "Torrada Tradicional (280g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 5.99 }, { store: "Carrefour", price: 6.99 },
  ]},
  { id: "torrada-integral", name: "Torrada Integral (280g)", category: "Mercearia", prices: [
    { store: "Assaí", price: 6.49 }, { store: "Carrefour", price: 7.49 },
  ]},
];
