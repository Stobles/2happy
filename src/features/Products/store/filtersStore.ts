import { create } from "zustand";

export type TPriceRange = { min: number; max: number };

type TFiltersStore = {
  priceRange: TPriceRange | undefined;
  setPriceRange: (priceRange: TPriceRange) => void;
  clearFilters: () => void;
};

export const useFiltersStore = create<TFiltersStore>()((set) => {
  return {
    priceRange: undefined,
    setPriceRange: (priceRange) => set({ priceRange }),
    clearFilters: () => set({ priceRange: undefined }),
  };
});
