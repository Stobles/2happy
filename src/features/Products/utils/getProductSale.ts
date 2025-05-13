export const getProductSale = (regularPrice: number, salePrice: number) => {
  if (regularPrice <= 0) return 0;

  const discount = ((regularPrice - salePrice) / regularPrice) * 100;
  return Math.round(discount * 100) / 100;
};
