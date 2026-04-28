import { Product, MeatSuggestion } from "./types";

export const meatSuggestions: MeatSuggestion[] = [
  {
    cookingMethod: "panela",
    label: "Para Panela (Cozido/Ensopado)",
    description: "Cortes ideais para cozidos, ensopados e carne de panela",
    cuts: ["Acém", "Paleta", "Peito bovino", "Coxão duro", "Músculo", "Pescoço"],
  },
  {
    cookingMethod: "grelha",
    label: "Para Grelha (Churrasco)",
    description: "Cortes macios ideais para grelha e churrasco",
    cuts: ["Picanha", "Alcatra", "Contrafilé", "Fraldinha", "Maminha", "Coxão mole", "Baby beef"],
  },
  {
    cookingMethod: "assar",
    label: "Para Assar (Forno)",
    description: "Cortes perfeitos para assados no forno",
    cuts: ["Alcatra inteira", "Maminha", "Lagarto", "Costela", "Picanha", "Cupim", "Pernil"],
  },
  {
    cookingMethod: "strogonoff",
    label: "Para Strogonoff",
    description: "Cortes macios que ficam perfeitos no strogonoff",
    cuts: ["Filé mignon", "Alcatra", "Coxão mole", "Contrafilé", "Patinho"],
  },
  {
    cookingMethod: "bife",
    label: "Para Bife",
    description: "Cortes ideais para bifes do dia a dia",
    cuts: ["Alcatra", "Contrafilé", "Coxão mole", "Patinho", "Lagarto", "Fraldinha"],
  },
  {
    cookingMethod: "moida",
    label: "Para Moer (Carne Moída)",
    description: "Cortes que rendem boa carne moída",
    cuts: ["Acém", "Paleta", "Patinho", "Peito", "Pescoço"],
  },
];

export const carnesBovinas: Product[] = [
  { id: "picanha", name: "Picanha (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 59.90 }, { store: "Carrefour", price: 69.90 }, { store: "Swift", price: 74.90 }, { store: "Açougue online", price: 54.90 },
  ]},
  { id: "alcatra", name: "Alcatra (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 36.90 }, { store: "Carrefour", price: 42.90 }, { store: "Swift", price: 44.90 },
  ]},
  { id: "alcatra-inteira", name: "Alcatra Inteira (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 39.90 }, { store: "Carrefour", price: 44.90 }, { store: "Swift", price: 48.90 },
  ]},
  { id: "contrafile", name: "Contrafilé (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 }, { store: "Swift", price: 42.90 },
  ]},
  { id: "file-mignon", name: "Filé Mignon (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 55.90 }, { store: "Carrefour", price: 64.90 }, { store: "Swift", price: 69.90 },
  ]},
  { id: "acem", name: "Acém (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 },
  ]},
  { id: "paleta", name: "Paleta (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 27.90 },
  ]},
  { id: "fraldinha", name: "Fraldinha (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 38.90 }, { store: "Carrefour", price: 44.90 }, { store: "Swift", price: 49.90 },
  ]},
  { id: "maminha", name: "Maminha (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 42.90 }, { store: "Carrefour", price: 48.90 }, { store: "Swift", price: 52.90 },
  ]},
  { id: "coxao-mole", name: "Coxão Mole (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 32.90 }, { store: "Carrefour", price: 37.90 },
  ]},
  { id: "coxao-duro", name: "Coxão Duro (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 28.90 }, { store: "Carrefour", price: 33.90 },
  ]},
  { id: "patinho", name: "Patinho (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 30.90 }, { store: "Carrefour", price: 35.90 },
  ]},
  { id: "lagarto", name: "Lagarto (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 },
  ]},
  { id: "musculo", name: "Músculo (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 26.90 }, { store: "Carrefour", price: 31.90 },
  ]},
  { id: "costela-bovina", name: "Costela Bovina (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 18.90 }, { store: "Carrefour", price: 24.90 },
  ]},
  { id: "costela-janela", name: "Costela Janela (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 27.90 },
  ]},
  { id: "costela-ripa", name: "Costela Ripa (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 },
  ]},
  { id: "cupim", name: "Cupim (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 29.90 }, { store: "Carrefour", price: 34.90 },
  ]},
  { id: "peito-bovino", name: "Peito Bovino (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 20.90 }, { store: "Carrefour", price: 25.90 },
  ]},
  { id: "pescoco-bovino", name: "Pescoço Bovino (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 17.90 }, { store: "Carrefour", price: 22.90 },
  ]},
  { id: "baby-beef", name: "Baby Beef (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 44.90 }, { store: "Carrefour", price: 49.90 }, { store: "Swift", price: 54.90 },
  ]},
  { id: "bife-ancho", name: "Bife Ancho (kg)", category: "Carnes", prices: [
    { store: "Carrefour", price: 64.90 }, { store: "Swift", price: 69.90 }, { store: "Pão de Açúcar", price: 79.90 },
  ]},
  { id: "bife-chorizo", name: "Bife Chorizo (kg)", category: "Carnes", prices: [
    { store: "Carrefour", price: 59.90 }, { store: "Swift", price: 64.90 }, { store: "Pão de Açúcar", price: 74.90 },
  ]},
  { id: "bife-vazio", name: "Bife Vazio (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 28.90 }, { store: "Carrefour", price: 33.90 },
  ]},
  { id: "carne-moida-bovina", name: "Carne Moída Bovina (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 },
  ]},
  { id: "figado-bovino", name: "Fígado Bovino (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 15.90 },
  ]},
  { id: "coracao-bovino", name: "Coração Bovino (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 18.90 },
  ]},
  { id: "lingua-bovina", name: "Língua Bovina (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 },
  ]},
  { id: "rabo-bovino", name: "Rabo Bovino (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 },
  ]},
];

export const carnesSuinas: Product[] = [
  { id: "bisteca-suina", name: "Bisteca Suína (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 }, { store: "Swift", price: 22.90 },
  ]},
  { id: "pernil-suino", name: "Pernil Suíno (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 18.90 }, { store: "Swift", price: 21.90 },
  ]},
  { id: "lombo-suino", name: "Lombo Suíno (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 }, { store: "Swift", price: 27.90 },
  ]},
  { id: "costela-suina", name: "Costela Suína (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 }, { store: "Swift", price: 22.90 },
  ]},
  { id: "carre-suino", name: "Carré Suíno (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 18.90 }, { store: "Carrefour", price: 22.90 }, { store: "Swift", price: 25.90 },
  ]},
  { id: "panceta-suina", name: "Panceta/Barriga Suína (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 15.90 }, { store: "Carrefour", price: 18.90 },
  ]},
  { id: "sobrepaleta-suina", name: "Sobrepaleta Suína (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 13.90 }, { store: "Carrefour", price: 16.90 },
  ]},
  { id: "file-mignon-suino", name: "Filé Mignon Suíno (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 29.90 }, { store: "Carrefour", price: 34.90 }, { store: "Swift", price: 39.90 },
  ]},
  { id: "picanha-suina", name: "Picanha Suína (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 32.90 }, { store: "Carrefour", price: 37.90 }, { store: "Swift", price: 42.90 },
  ]},
  { id: "costelinha-defumada", name: "Costelinha Defumada (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 }, { store: "Swift", price: 34.90 },
  ]},
  { id: "paio", name: "Paio (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},
  { id: "linguica-toscana", name: "Linguiça Toscana (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 18.90 }, { store: "Swift", price: 22.90 },
  ]},
  { id: "linguica-calabresa", name: "Linguiça Calabresa (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 15.90 }, { store: "Carrefour", price: 19.90 }, { store: "Swift", price: 24.90 },
  ]},
  { id: "linguica-pernil", name: "Linguiça Pernil (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 20.90 },
  ]},
  { id: "linguica-portuguesa", name: "Linguiça Portuguesa (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 18.90 }, { store: "Carrefour", price: 22.90 },
  ]},
  { id: "chourico", name: "Chouriço (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},
];

export const carnesAves: Product[] = [
  { id: "peito-frango", name: "Peito de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 }, { store: "Swift", price: 21.90 },
  ]},
  { id: "file-frango", name: "Filé de Frango/Sassami (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 18.90 }, { store: "Carrefour", price: 22.90 }, { store: "Swift", price: 24.90 },
  ]},
  { id: "sobrecoxa", name: "Sobrecoxa de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 12.90 }, { store: "Carrefour", price: 15.90 }, { store: "Swift", price: 17.90 },
  ]},
  { id: "coxa-frango", name: "Coxa de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 10.90 }, { store: "Carrefour", price: 13.90 },
  ]},
  { id: "asa-frango", name: "Asa de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 11.90 }, { store: "Carrefour", price: 14.90 },
  ]},
  { id: "cozinha-asa", name: "Coxinha da Asa (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 13.90 }, { store: "Carrefour", price: 16.90 },
  ]},
  { id: "frango-inteiro", name: "Frango Inteiro (un)", category: "Carnes", prices: [
    { store: "Assaí", price: 18.90 }, { store: "Carrefour", price: 22.90 }, { store: "Swift", price: 25.90 },
  ]},
  { id: "coracao-frango", name: "Coração de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 14.90 }, { store: "Carrefour", price: 17.90 },
  ]},
  { id: "moela-frango", name: "Moela de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 8.90 }, { store: "Carrefour", price: 10.90 },
  ]},
  { id: "figado-frango", name: "Fígado de Frango (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 7.90 }, { store: "Carrefour", price: 9.90 },
  ]},
  { id: "peito-peru-ave", name: "Peito de Peru (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 27.90 }, { store: "Carrefour", price: 32.90 }, { store: "Swift", price: 37.90 },
  ]},
  { id: "coxinha-peru", name: "Coxinha de Peru (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 26.90 },
  ]},
  { id: "asa-peru", name: "Asa de Peru (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 23.90 },
  ]},
];

export const carnesOutras: Product[] = [
  { id: "carne-ovino", name: "Cordeiro (kg)", category: "Carnes", prices: [
    { store: "Carrefour", price: 49.90 }, { store: "Swift", price: 54.90 }, { store: "Pão de Açúcar", price: 59.90 },
  ]},
  { id: "costela-ovino", name: "Costela de Cordeiro (kg)", category: "Carnes", prices: [
    { store: "Carrefour", price: 54.90 }, { store: "Swift", price: 59.90 },
  ]},
  { id: "pernil-ovino", name: "Pernil de Cordeiro (kg)", category: "Carnes", prices: [
    { store: "Carrefour", price: 44.90 }, { store: "Swift", price: 49.90 },
  ]},
  { id: "carne-cabrito", name: "Cabrito (kg)", category: "Carnes", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 },
  ]},
];

export const peixesFrutosMar: Product[] = [
  { id: "file-tilapia", name: "Filé de Tilápia (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 32.90 }, { store: "Carrefour", price: 39.90 }, { store: "Pão de Açúcar", price: 44.90 },
  ]},
  { id: "file-merluza", name: "Filé de Merluza (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 },
  ]},
  { id: "postas-bacalhau", name: "Bacalhau (kg)", category: "Peixes", prices: [
    { store: "Carrefour", price: 89.90 }, { store: "Pão de Açúcar", price: 109.90 },
  ]},
  { id: "salmao", name: "Salmão (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 79.90 }, { store: "Carrefour", price: 89.90 }, { store: "Pão de Açúcar", price: 99.90 },
  ]},
  { id: "file-pescada", name: "Filé de Pescada (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 27.90 },
  ]},
  { id: "file-panga", name: "Filé de Panga (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 18.90 }, { store: "Carrefour", price: 22.90 },
  ]},
  { id: "postas-dourado", name: "Dourado (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 26.90 }, { store: "Carrefour", price: 31.90 },
  ]},
  { id: "postas-pintado", name: "Pintado (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 34.90 }, { store: "Carrefour", price: 39.90 },
  ]},
  { id: "postas-tucunare", name: "Tucunaré (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 29.90 }, { store: "Carrefour", price: 34.90 },
  ]},
  { id: "postas-pacu", name: "Pacu (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 22.90 }, { store: "Carrefour", price: 27.90 },
  ]},
  { id: "postas-tambaqui", name: "Tambaqui (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 },
  ]},
  { id: "sardinha-fresca", name: "Sardinha Fresca (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 8.90 }, { store: "Carrefour", price: 11.90 },
  ]},
  { id: "postas-caacao", name: "Cação (kg)", category: "Peixes", prices: [
    { store: "Assaí", price: 16.90 }, { store: "Carrefour", price: 19.90 },
  ]},
  { id: "postas-atum-fresco", name: "Atum Fresco (kg)", category: "Peixes", prices: [
    { store: "Carrefour", price: 64.90 }, { store: "Pão de Açúcar", price: 79.90 },
  ]},
  { id: "sururu", name: "Sururu (kg)", category: "Frutos do Mar", prices: [
    { store: "Assaí", price: 49.90 }, { store: "Carrefour", price: 59.90 },
  ]},
  { id: "polvo", name: "Polvo (kg)", category: "Frutos do Mar", prices: [
    { store: "Carrefour", price: 69.90 }, { store: "Pão de Açúcar", price: 79.90 },
  ]},
  { id: "lula", name: "Lula (kg)", category: "Frutos do Mar", prices: [
    { store: "Assaí", price: 39.90 }, { store: "Carrefour", price: 44.90 },
  ]},
  { id: "camarao-rosa", name: "Camarão Rosa (kg)", category: "Frutos do Mar", prices: [
    { store: "Assaí", price: 39.90 }, { store: "Carrefour", price: 44.90 }, { store: "Pão de Açúcar", price: 54.90 },
  ]},
  { id: "camarao-sete-barbas", name: "Camarão Sete Barbas (kg)", category: "Frutos do Mar", prices: [
    { store: "Assaí", price: 29.90 }, { store: "Carrefour", price: 34.90 },
  ]},
  { id: "camarao-vg", name: "Camarão VG (kg)", category: "Frutos do Mar", prices: [
    { store: "Carrefour", price: 49.90 }, { store: "Pão de Açúcar", price: 59.90 },
  ]},
  { id: "marisco", name: "Marisco (kg)", category: "Frutos do Mar", prices: [
    { store: "Assaí", price: 24.90 }, { store: "Carrefour", price: 29.90 },
  ]},
  { id: "mexilhao", name: "Mexilhão (kg)", category: "Frutos do Mar", prices: [
    { store: "Assaí", price: 19.90 }, { store: "Carrefour", price: 24.90 },
  ]},
  { id: "ostra", name: "Ostra (dúzia)", category: "Frutos do Mar", prices: [
    { store: "Carrefour", price: 19.90 }, { store: "Pão de Açúcar", price: 24.90 },
  ]},
  { id: "casquinha-siri", name: "Casquinha de Siri (un)", category: "Frutos do Mar", prices: [
    { store: "Assaí", price: 4.99 }, { store: "Carrefour", price: 5.99 },
  ]},
];

export const todasCarnes: Product[] = [
  ...carnesBovinas,
  ...carnesSuinas,
  ...carnesAves,
  ...carnesOutras,
  ...peixesFrutosMar,
];
