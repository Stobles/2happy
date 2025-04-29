export const getPriceWithMinors = (price: number | string, minor: number) => {
  if (typeof price === "string") return Number(price) / Math.pow(10, minor);
  return price / Math.pow(10, minor);
};
