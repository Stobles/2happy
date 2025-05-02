import { Image } from "@/shared/types/api";
import { create } from "zustand";

type TProductStore = {
  images: Image[];
  setImages: (images: Image[]) => void;
};

export const useProductStore = create<TProductStore>((set) => ({
  images: [],
  setImages: (images) => {
    set({ images });
  },
}));
