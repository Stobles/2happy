import { useCallback } from "react";

export const useQueryParams = () => {
  const setQueryParams = useCallback(
    (newParams: Record<string, string | undefined>) => {
      const currentParams = new URLSearchParams(window.location.search);

      Object.entries(newParams).forEach(([key, value]) => {
        if (value === undefined || value === null) {
          currentParams.delete(key);
        } else {
          currentParams.set(key, value);
        }
      });

      const queryString = currentParams.toString();
      const newUrl = queryString
        ? `${window.location.pathname}?${queryString}`
        : window.location.pathname;

      history.replaceState(null, "", newUrl);
    },
    []
  );

  return setQueryParams;
};
