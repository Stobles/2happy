import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

export type TBreadcrumbsContext = {
  trailingPath: string;
  setTrailingPath: Dispatch<SetStateAction<string>>;
};

export const BreadcrumbsContext = createContext<TBreadcrumbsContext>({
  trailingPath: "",
  setTrailingPath: () => {},
});

export const useBreadcrumbs = (trailingPath?: string) => {
  const context = useContext(BreadcrumbsContext);

  useEffect(() => {
    context.setTrailingPath(trailingPath ? trailingPath : "loading");
    return () => context.setTrailingPath("");
  }, [trailingPath, context]);
};
