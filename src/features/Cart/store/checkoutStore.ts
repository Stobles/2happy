import { create } from "zustand";

type TCheckoutStore = {
  token: string | undefined;
  setToken: (token: string) => void;
};

export const useCheckoutStore = create<TCheckoutStore>((set) => ({
  token: undefined,
  setToken: (token) => {
    set({ token });
  },
}));
