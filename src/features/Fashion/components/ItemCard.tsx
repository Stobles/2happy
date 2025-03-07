import Image from "next/image";
import Link, { LinkProps } from "next/link";
import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import { cn } from "@/lib/utils";

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
        "group relative block bg-white w-full h-full rounded-[2px] shadow-elevation-1 hover:shadow-elevation-3 transition-shadow",
        className
      )}
      {...props}
    >
      <ArrowUpRightIcon className="absolute top-4 right-4 z-[1] opacity-0 group-hover:opacity-100 transition-opacity" />
      <Image
        fill
        className="object-cover object-top p-2 group-hover:opacity-60 transition-opacity"
        src={src}
        alt="item-img"
      />
    </Link>
  );
};

export default ItemCard;
