import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { getDefaultText } from "../utils/getDefaultText";

export const useBreadcrumbsList = () => {
  const pathname = usePathname();

  const [trailingPath, setTrailingPath] = useState<string>("");

  const context = useMemo(
    () => ({
      trailingPath,
      setTrailingPath,
    }),
    [trailingPath]
  );

  const pathnames = pathname.split("/").filter((path) => path);
  const breadcrumbs = useMemo(() => {
    const crumbs = pathnames.map((path, i) => ({
      text: getDefaultText(path) ?? path,
      href: pathnames.slice(0, i + 1).join("/"),
    }));

    return [{ text: "Главная", href: "/" }, ...crumbs];
  }, [pathname, trailingPath]);

  if (
    trailingPath &&
    breadcrumbs.length > 0 &&
    trailingPath !== breadcrumbs[breadcrumbs.length - 1].text
  ) {
    breadcrumbs[breadcrumbs.length - 1].text = trailingPath;
  }

  return { breadcrumbs, context };
};
