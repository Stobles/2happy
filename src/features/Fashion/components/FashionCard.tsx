import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const FashionCard = ({
  title,
  src,
  href,
  className,
}: {
  title: string;
  src: string;
  href: string;
  className?: string;
}) => {
  return (
    <article className={cn("group w-full h-full max-w-[288px]", className)}>
      <Link className="w-full h-full flex flex-col gap-4" href={href}>
        <div className="relative h-full">
          <Image
            fill
            className="object-cover object-top group-hover:opacity-60 transition-opacity"
            src={src}
            alt="fashion-image"
          />
        </div>
        <div className="flex justify-between gap-2">
          <h5 className="text-h5 text-ellipsis">{title}</h5>
          <ArrowUpRightIcon className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </article>
  );
};

export default FashionCard;
