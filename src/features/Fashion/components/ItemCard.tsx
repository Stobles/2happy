import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import ImageWithFallback from "@/components/UI/ImageWithFallback";

// Нужно переименовать
const ItemCard = ({
  src,
  href,
  className,
  ...props
}: { src: string; className?: string } & LinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block bg-white w-full h-full rounded-xs shadow-elevation-1 hover:shadow-elevation-3 transition-shadow",
        className
      )}
      {...props}
    >
      <ArrowUpRightIcon className="absolute top-4 right-4 z-[1] opacity-0 group-hover:opacity-100 transition-opacity" />
      <ImageWithFallback
        className="p-2 group-hover:opacity-60 transition-opacity"
        src={src}
        fallbackSrc={src}
        alt="item-img"
      />
    </Link>
  );
};

export default ItemCard;
