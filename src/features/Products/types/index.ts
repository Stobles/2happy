export interface Product {
  id: string;
  title: string;
  colors: {
    id: number;
    hex: string;
  }[];
  sizes: {
    id: number;
    size: string;
  }[];
  price: number;
  sale?: {
    price: number;
    amount: number;
  };
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export type TProductGrid = "big" | "small";
