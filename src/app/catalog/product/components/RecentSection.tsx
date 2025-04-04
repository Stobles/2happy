import Container from "@/shared/components/UI/Container";
import { ScrollArea, ScrollBar } from "@/shared/components/UI/ScrollArea";
import Section from "@/shared/components/UI/Section";
import SectionImage from "@/shared/components/UI/SectionImage";
import ProductCard from "@/features/Products/components/ProductCards/ProductCard";
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
  {
    id: "id45",
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
    id: "id46",
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
    id: "id7",
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
    id: "id8",
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

const RecentSection = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-16 my-section">
        <SectionImage />
        <h2 className="text-h2">Недавно просмотренные /</h2>
        <ScrollArea>
          <div className="grid grid-flow-col auto-cols-[288px] gap-6 h-[552px] mb-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Container>
    </Section>
  );
};

export default RecentSection;
