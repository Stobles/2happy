import { useParams } from "next/navigation";

export const parseProductId = (input: string): { slug: string; id: number } => {
  const [slug, id] = input.split("_");
  if (!slug || !id || isNaN(Number(id)))
    throw new Error("Неправильный [productId]");
  return { slug, id: Number(id) };
};

export const useGetProductId = () => {
  const { productId } = useParams<{ productId: string }>();

  return parseProductId(productId);
};
