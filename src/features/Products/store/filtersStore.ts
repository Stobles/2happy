import { create } from "zustand";

export type TCheckboxFilterItem = { id: number; name: string };
export type TPriceRange = { min: number; max: number };

type TFiltersStore = {
  priceRange: TPriceRange | undefined;
  setPriceRange: (priceRange: TPriceRange) => void;

  colors: TCheckboxFilterItem[];
  setColors: (colors: TCheckboxFilterItem[]) => void;
  deleteColor: (id: number) => void;

  sizes: TCheckboxFilterItem[];
  setSizes: (sizes: TCheckboxFilterItem[]) => void;
  deleteSize: (id: number) => void;

  filtersLength: number;
  clearFilters: () => void;
};

export const useFiltersStore = create<TFiltersStore>()((set, get) => ({
  priceRange: undefined,
  colors: [],
  sizes: [],
  filtersLength: 0,

  setPriceRange: (priceRange) =>
    set((state) => ({
      priceRange,
      filtersLength:
        (priceRange ? 1 : 0) + state.colors.length + state.sizes.length,
    })),

  setColors: (colors) =>
    set((state) => ({
      colors,
      filtersLength:
        (state.priceRange ? 1 : 0) + colors.length + state.sizes.length,
    })),

  deleteColor: (id) =>
    set((state) => {
      const updatedColors = state.colors.filter((item) => item.id !== id);
      return {
        colors: updatedColors,
        filtersLength:
          (state.priceRange ? 1 : 0) +
          updatedColors.length +
          state.sizes.length,
      };
    }),

  setSizes: (sizes) =>
    set((state) => ({
      sizes,
      filtersLength:
        (state.priceRange ? 1 : 0) + state.colors.length + sizes.length,
    })),

  deleteSize: (id) =>
    set((state) => {
      const updatedSizes = state.sizes.filter((item) => item.id !== id);
      return {
        sizes: updatedSizes,
        filtersLength:
          (state.priceRange ? 1 : 0) +
          state.colors.length +
          updatedSizes.length,
      };
    }),

  clearFilters: () =>
    set({ priceRange: undefined, colors: [], sizes: [], filtersLength: 0 }),
}));
