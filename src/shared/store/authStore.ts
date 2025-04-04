import Cookies from "js-cookie";
import { create } from "zustand";

type TAuthStore = {
  userToken: string | undefined;
  setUserToken: (token: string) => void;
};

export const useAuthStore = create<TAuthStore>()((set) => {
  const accessToken = Cookies.get("access_token");
  return {
    userToken: accessToken,
    setUserToken: (userToken) => set({ userToken }),
  };
});
