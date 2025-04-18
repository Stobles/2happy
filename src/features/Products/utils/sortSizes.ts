export const sizesOrder = ["XS", "S", "M", "L", "XL", "One Size"] as const;

type TValueGetter<T = string, U = string> = (value: T) => U;

const defaultGetter = <T>(value: T): string => String(value);

export function sortSizes<T>(
  sizes: T[],
  valueGetter: TValueGetter<T> = defaultGetter
): T[] {
  const orderMap = Object.fromEntries(
    sizesOrder.map((size, index) => [size, index])
  );

  return sizes.sort((a, b) => {
    const aIndex = orderMap[valueGetter(a)] ?? Infinity;
    const bIndex = orderMap[valueGetter(b)] ?? Infinity;
    return aIndex - bIndex;
  });
}
