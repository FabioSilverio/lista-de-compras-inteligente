import { Product, MeatSuggestion } from "./types";
import { frutas } from "./products-frutas";
import { verdurasLegumes } from "./products-verduras-legumes";
import {
  meatSuggestions,
  carnesBovinas,
  carnesSuinas,
  carnesAves,
  carnesOutras,
  peixesFrutosMar,
  todasCarnes,
} from "./products-carnes-peixes";
import { laticinios } from "./products-laticinios";
import { mercearia } from "./products-mercearia";
import { bebidas } from "./products-bebidas";
import { limpeza } from "./products-limpeza";
import { higiene } from "./products-higiene";
import { padaria } from "./products-padaria";
import { ovosFrios } from "./products-ovos-frios";
import { congelados } from "./products-congelados";
import { doces } from "./products-doces";

export const products: Product[] = [
  ...frutas,
  ...verdurasLegumes,
  ...todasCarnes,
  ...laticinios,
  ...mercearia,
  ...bebidas,
  ...limpeza,
  ...higiene,
  ...padaria,
  ...ovosFrios,
  ...congelados,
  ...doces,
];

export type { Product, PriceSource, MeatSuggestion } from "./types";
export { meatSuggestions } from "./products-carnes-peixes";

// Sinônimos / aliases para busca mais inteligente
const SYNONYMS: Record<string, string[]> = {
  refri: ["refrigerante"],
  coca: ["refrigerante cola"],
  guarana: ["refrigerante guaraná"],
  pepsi: ["refrigerante cola"],
  fanta: ["refrigerante laranja"],
  sprite: ["refrigerante limão"],
  toddy: ["toddynho", "achocolatado"],
  dani: ["danone", "iogurte"],
  parma: ["parmalat", "leite"],
  ninho: ["leite em pó"],
  tang: ["suco em pó"],
  mucilon: ["cereal infantil"],
  nescau: ["achocolatado"],
  "leite-condensado": ["leite condensado", "moça"],
  manteiga: ["margarina"],
  vinilico: ["vinílico", "limpa vinílico", "limpa estofado"],
  pedra: ["pedra sanitária"],
  glade: ["aromatizante"],
  veja: ["multiuso"],
  pinho: ["desinfetante", "pinho sol"],
  ype: ["sabão", "detergente"],
  omo: ["sabão em pó"],
  comfort: ["amaciante"],
  cif: ["cremoso", "limpa pedras"],
  pasta: ["creme dental"],
  shampoo: ["xampu"],
  xampu: ["shampoo"],
  fralda: ["fraldas"],
  pao: ["pão"],
  cafe: ["café"],
  cha: ["chá"],
  acucar: ["açúcar"],
  oleo: ["óleo"],
  feijao: ["feijão"],
  agua: ["água"],
  alfacce: ["alface"],
  carne: ["acém", "alcatra", "picanha", "patinho", "moída"],
  frango: ["peito de frango", "coxa", "sobrecoxa", "asa"],
  peixe: ["tilápia", "salmão", "merluza", "pescada", "sardinha"],
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9\s]/g, " ") // remove pontuação
    .replace(/\s+/g, " ")
    .trim();
}

function getQueryTerms(query: string): string[] {
  const normalized = normalize(query);
  const terms = new Set<string>();
  terms.add(normalized);
  normalized.split(" ").filter((w) => w.length >= 2).forEach((w) => terms.add(w));

  // Adicionar sinônimos
  Object.entries(SYNONYMS).forEach(([key, syns]) => {
    if (normalized.includes(normalize(key))) {
      syns.forEach((s) => terms.add(normalize(s)));
    }
  });

  return Array.from(terms);
}

function scoreProduct(product: Product, query: string): number {
  const terms = getQueryTerms(query);
  const productName = normalize(product.name);
  const productCategory = normalize(product.category);
  const productId = normalize(product.id);
  const haystack = `${productName} ${productCategory} ${productId}`;

  let score = 0;
  let matchedAny = false;

  for (const term of terms) {
    if (!term) continue;

    // Match exato no nome
    if (productName === term) {
      score += 100;
      matchedAny = true;
      continue;
    }
    // Começa com o termo (palavra inicial)
    if (productName.startsWith(term)) {
      score += 50;
      matchedAny = true;
      continue;
    }
    // Palavra inteira contida no nome
    const nameWords = productName.split(" ");
    if (nameWords.some((w) => w === term)) {
      score += 40;
      matchedAny = true;
      continue;
    }
    // Palavra que começa com o termo
    if (nameWords.some((w) => w.startsWith(term))) {
      score += 25;
      matchedAny = true;
      continue;
    }
    // Termo contido em qualquer lugar do nome
    if (productName.includes(term)) {
      score += 15;
      matchedAny = true;
      continue;
    }
    // Match na categoria
    if (productCategory === term) {
      score += 12;
      matchedAny = true;
      continue;
    }
    if (productCategory.includes(term)) {
      score += 6;
      matchedAny = true;
      continue;
    }
    // Match no id (kebab-case)
    if (productId.includes(term)) {
      score += 5;
      matchedAny = true;
      continue;
    }
    // Match parcial: termo é prefixo de alguma palavra
    if (term.length >= 3 && haystack.includes(term)) {
      score += 3;
      matchedAny = true;
    }
  }

  return matchedAny ? score : 0;
}

export function searchProducts(query: string): Product[] {
  const q = query.trim();
  if (!q || q.length < 1) return [];

  const scored: { product: Product; score: number }[] = [];

  for (const product of products) {
    const score = scoreProduct(product, q);
    if (score > 0) scored.push({ product, score });
  }

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 15).map((s) => s.product);
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
