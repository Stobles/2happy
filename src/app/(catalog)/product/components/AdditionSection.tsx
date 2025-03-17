import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import ProductCard from "@/features/Products/components/ProductCard";
import { Product } from "@/features/Products/types";

const PRODUCTS: Product[] = [
  {
    id: "id1",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [
      { id: 1, size: "XS" },
      { id: 2, size: "S" },
      { id: 3, size: "M" },
    ],
    price: 50000,
    sale: {
      price: 25000,
      amount: 25,
    },
    image: "/images/Home/Fashion/fashion-1.jpg",
  },
  {
    id: "id2",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "/images/Home/Fashion/fashion-1.jpg",
  },
  {
    id: "id3",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "/images/Home/Fashion/fashion-1.jpg",
  },
  {
    id: "id4",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "/images/Home/Fashion/fashion-1.jpg",
  },
];

const AdditionSection = () => {
  return (
    <Section className="border-b border-main">
      <Container className="my-section flex flex-col gap-16">
        <h2 className="text-h2">Дополните свой образ /</h2>
        <div className="grid grid-cols-4 grid-rows-[624px] gap-x-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex flex-col gap-6">
              <ProductCard product={product} />
              <Button variant="secondary" size="medium" className="w-full">
                Добавить в корзину
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default AdditionSection;
