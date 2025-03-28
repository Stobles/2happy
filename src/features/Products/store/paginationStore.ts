import { create } from "zustand";

type TPaginationStore = {
  page: number;
  per_page: number;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
};

export const usePaginationStore = create<TPaginationStore>((set) => ({
  page: 1,
  per_page: 8,
  setPage: (page) => set(() => ({ page })),
  setPerPage: (per_page) => set(() => ({ per_page })),
}));
