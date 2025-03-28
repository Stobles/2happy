import { create } from "zustand";

type TProductsStore = {
  totalItems: number;
  setTotalItems: (totalItems: number) => void;
  totalPages: number;
  setTotalPages: (totalPages: number) => void;
};

export const useProductsStore = create<TProductsStore>()((set) => {
  return {
    totalItems: 0,
    setTotalItems: (totalItems) => set({ totalItems }),
    totalPages: 0,
    setTotalPages: (totalPages) => set({ totalPages }),
  };
});
