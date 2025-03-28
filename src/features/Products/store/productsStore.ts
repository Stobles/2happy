import { create } from "zustand";

type TCatalogStore = {
  gridType: "big" | "small";
  setGridType: (type: "big" | "small") => void;

  totalItems: number;
  setTotalItems: (totalItems: number) => void;

  totalPages: number;
  setTotalPages: (totalPages: number) => void;
};

export const useCatalogStore = create<TCatalogStore>()((set) => {
  return {
    gridType: "small",
    setGridType: (type) => set({ gridType: type }),
    totalItems: 0,
    setTotalItems: (totalItems) => set({ totalItems }),
    totalPages: 1,
    setTotalPages: (totalPages) => set({ totalPages }),
  };
});
