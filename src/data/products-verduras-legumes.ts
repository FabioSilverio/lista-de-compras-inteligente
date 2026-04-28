import { Product } from "./types";

export const verdurasLegumes: Product[] = [
  // Alfaces
  { id: "alface-crespa", name: "Alface Crespa (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 3.49 },
    { store: "Pão de Açúcar", price: 4.49 },
  ]},
  { id: "alface-americana", name: "Alface Americana (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.90 },
    { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "alface-lisa", name: "Alface Lisa (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 3.49 },
  ]},
  { id: "alface-roxa", name: "Alface Roxa (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.99 },
    { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "alface-mimosa", name: "Alface Mimosa (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.49 },
  ]},

  // Repolho
  { id: "repolho-branco", name: "Repolho Branco (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "repolho-roxo", name: "Repolho Roxo (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.99 },
  ]},
  { id: "repolho-chines", name: "Acelga (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
  ]},

  // Couve
  { id: "couve-manteiga", name: "Couve Manteiga (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 3.49 },
    { store: "Pão de Açúcar", price: 4.49 },
  ]},
  { id: "couve-flor", name: "Couve-Flor (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
    { store: "Pão de Açúcar", price: 9.99 },
  ]},
  { id: "couve-bruxelas", name: "Couve de Bruxelas (bandeja 200g)", category: "Verduras", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.90 },
    { store: "Pão de Açúcar", price: 12.90 },
  ]},

  // Brássicas
  { id: "brocolis-ninja", name: "Brócolis Ninja (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.49 },
    { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "brocolis-ramoso", name: "Brócolis Ramoso (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.99 },
  ]},
  { id: "espinafre", name: "Espinafre (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.49 },
    { store: "Pão de Açúcar", price: 5.99 },
  ]},
  { id: "rucula", name: "Rúcula (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.99 },
    { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "agriao", name: "Agrião (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 3.49 },
  ]},
  { id: "almeirao", name: "Almeirão (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.99 },
  ]},
  { id: "chicoria", name: "Chicória (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 3.49 },
  ]},
  { id: "escarola", name: "Escarola (maço)", category: "Verduras", prices: [
    { store: "Assaí", price: 2.99 },
    { store: "Carrefour", price: 3.99 },
  ]},

  // Legumes
  { id: "tomate-carmem", name: "Tomate Carmem (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
    { store: "Pão de Açúcar", price: 9.90 },
  ]},
  { id: "tomate-italiano", name: "Tomate Italiano (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 6.49 },
    { store: "Carrefour", price: 7.99 },
    { store: "Pão de Açúcar", price: 10.49 },
  ]},
  { id: "tomate-cereja", name: "Tomate Cereja (bandeja 250g)", category: "Legumes", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
    { store: "Pão de Açúcar", price: 9.90 },
  ]},
  { id: "tomate-maduro", name: "Tomate Maduro (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.49 },
  ]},
  { id: "cebola-branca", name: "Cebola Branca (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.99 },
    { store: "Pão de Açúcar", price: 6.49 },
  ]},
  { id: "cebola-roxa", name: "Cebola Roxa (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.99 },
    { store: "Pão de Açúcar", price: 7.49 },
  ]},
  { id: "batata-inglesa", name: "Batata Inglesa (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "batata-doce", name: "Batata Doce (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.99 },
    { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "batata-baroa", name: "Batata Baroa/Mandioquinha (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.90 },
    { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "batata-asterix", name: "Batata Asterix (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.99 },
  ]},
  { id: "cenoura", name: "Cenoura (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "cenoura-baby", name: "Cenoura Baby (bandeja 200g)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.49 },
  ]},
  { id: "beterraba", name: "Beterraba (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "abobrinha-italiana", name: "Abobrinha Italiana (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.49 },
    { store: "Pão de Açúcar", price: 7.99 },
  ]},
  { id: "abobrinha-menina", name: "Abobrinha Menina (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.99 },
  ]},
  { id: "abobora-moranga", name: "Abóbora Moranga (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.99 },
    { store: "Pão de Açúcar", price: 6.49 },
  ]},
  { id: "abobora-japonesa", name: "Abóbora Japonesa/Cabotiá (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
  ]},
  { id: "chuchu", name: "Chuchu (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 3.99 },
    { store: "Pão de Açúcar", price: 4.99 },
  ]},
  { id: "berinjela", name: "Berinjela (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.99 },
    { store: "Pão de Açúcar", price: 7.49 },
  ]},
  { id: "quiabo", name: "Quiabo (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
    { store: "Pão de Açúcar", price: 9.90 },
  ]},
  { id: "pepino-comum", name: "Pepino Comum (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.99 },
    { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "pepino-japones", name: "Pepino Japonês (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 4.49 },
    { store: "Carrefour", price: 5.99 },
  ]},
  { id: "pimentao-verde", name: "Pimentão Verde (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 7.49 },
  ]},
  { id: "pimentao-vermelho", name: "Pimentão Vermelho (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 7.49 },
    { store: "Carrefour", price: 9.49 },
    { store: "Pão de Açúcar", price: 11.90 },
  ]},
  { id: "pimentao-amarelo", name: "Pimentão Amarelo (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 7.99 },
    { store: "Carrefour", price: 9.90 },
    { store: "Pão de Açúcar", price: 12.90 },
  ]},
  { id: "vagam", name: "Vagem (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 8.99 },
    { store: "Carrefour", price: 10.90 },
    { store: "Pão de Açúcar", price: 13.90 },
  ]},
  { id: "milho-verde-espiga", name: "Milho Verde (espiga un)", category: "Legumes", prices: [
    { store: "Assaí", price: 1.49 },
    { store: "Carrefour", price: 1.99 },
    { store: "Pão de Açúcar", price: 2.99 },
  ]},
  { id: "mandioca", name: "Mandioca/Aipim (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "inhame", name: "Inhame (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 5.99 },
    { store: "Carrefour", price: 7.49 },
    { store: "Pão de Açúcar", price: 9.90 },
  ]},
  { id: "carai", name: "Cará (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 5.49 },
    { store: "Carrefour", price: 6.99 },
  ]},
  { id: "nabo", name: "Nabo (kg)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.99 },
  ]},
  { id: "rabanete", name: "Rabanete (maço)", category: "Legumes", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 4.99 },
  ]},

  // Temperos frescos
  { id: "cebolinha", name: "Cebolinha (maço)", category: "Temperos", prices: [
    { store: "Assaí", price: 1.99 },
    { store: "Carrefour", price: 2.49 },
    { store: "Pão de Açúcar", price: 3.49 },
  ]},
  { id: "salsinha", name: "Salsinha (maço)", category: "Temperos", prices: [
    { store: "Assaí", price: 1.99 },
    { store: "Carrefour", price: 2.49 },
    { store: "Pão de Açúcar", price: 3.49 },
  ]},
  { id: "coentro", name: "Coentro (maço)", category: "Temperos", prices: [
    { store: "Assaí", price: 1.49 },
    { store: "Carrefour", price: 1.99 },
    { store: "Pão de Açúcar", price: 2.99 },
  ]},
  { id: "manjericao", name: "Manjericão (maço)", category: "Temperos", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 3.49 },
    { store: "Pão de Açúcar", price: 4.49 },
  ]},
  { id: "alho-poro", name: "Alho Poró (un)", category: "Verduras", prices: [
    { store: "Assaí", price: 3.99 },
    { store: "Carrefour", price: 5.49 },
    { store: "Pão de Açúcar", price: 6.99 },
  ]},
  { id: "alho-cabeca", name: "Alho (cabeça)", category: "Temperos", prices: [
    { store: "Assaí", price: 2.49 },
    { store: "Carrefour", price: 3.49 },
    { store: "Pão de Açúcar", price: 4.49 },
  ]},
  { id: "gengibre", name: "Gengibre (kg)", category: "Temperos", prices: [
    { store: "Assaí", price: 8.99 },
    { store: "Carrefour", price: 10.90 },
    { store: "Pão de Açúcar", price: 14.90 },
  ]},
  { id: "pimenta-dedo-moca", name: "Pimenta Dedo de Moça (bandeja 100g)", category: "Temperos", prices: [
    { store: "Assaí", price: 3.49 },
    { store: "Carrefour", price: 4.49 },
  ]},
  { id: "pimenta-biquinho", name: "Pimenta Biquinho (bandeja 150g)", category: "Temperos", prices: [
    { store: "Assaí", price: 4.99 },
    { store: "Carrefour", price: 6.49 },
    { store: "Pão de Açúcar", price: 7.99 },
  ]},
];
