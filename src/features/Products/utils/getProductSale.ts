export const getProductSale = (regularPrice: number, salePrice: number) =>
  (salePrice / regularPrice) * 100;
