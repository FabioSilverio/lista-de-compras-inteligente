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


