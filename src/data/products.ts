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
