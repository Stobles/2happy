import Cookies from "js-cookie";
import { create } from "zustand";
import { parseJwt } from "../utils/parseJWT";

type TAuthStore = {
  userToken: string | undefined;
  setUserToken: (token: string) => void;
  clearUserToken: () => void;
};

export const useAuthStore = create<TAuthStore>()((set) => {
  const accessToken = Cookies.get("access_token");

  const parsedToken = parseJwt(accessToken);

  const isParsedTokenValid = parsedToken && parsedToken.exp;
  return {
    userToken: isParsedTokenValid ? accessToken : undefined,
    setUserToken: (userToken) => {
      const parsedToken = parseJwt(userToken);
      if (parsedToken && parsedToken.exp) set({ userToken });
      else set({ userToken: undefined });
    },
    clearUserToken: () => set({ userToken: undefined }),
  };
});
