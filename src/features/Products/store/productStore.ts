// import { create } from "zustand";

// type TProductStore = {
//   productId: number;
//   productSlug: string;
//   setProductSlugAndId: (product: string) => void;
// };

// export const useProductStore = create<TProductStore>((set) => ({
//   productId: 0,
//   productSlug: "",
//   setProductSlugAndId: (product: string) => {
//     const [slug, id] = product.split("_");

//     console.log(product);

//     set({
//       productId: Number(id),
//       productSlug: slug,
//     });
//   },
// }));
