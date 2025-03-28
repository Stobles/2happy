import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";
import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import ProductCard from "@/features/Products/components/ProductCards/ProductCard";
import { Product } from "@/features/Products/types";
import Image from "next/image";
import Link from "next/link";

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
];

const FinalSale = () => {
  return (
    <Section>
      <Container className="grid grid-cols-4 grid-rows-[544px] gap-x-6 my-section">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <div className="flex flex-col justify-between">
          <h2 className="text-h2">
            FINAL SALE <br />/
          </h2>
          <div className="flex flex-col gap-6 mb-10">
            <Link className="link-hover" href="/">
              Смотреть все <ArrowRightIcon />
            </Link>
            <div className="relative h-[160px]">
              <Image
                fill
                className="object-cover object-top"
                src="/images/Home/FinalSale/view-all.jpg"
                alt="final-sale-section-image"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FinalSale;
