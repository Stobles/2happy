import { cn } from "@/lib/utils";
import Image from "next/image";

const InstagramCard = ({
  src,
  href,
  className,
}: {
  src: string;
  href: string;
  className?: string;
}) => {
  return (
    <a href={href} className={cn("group relative w-full h-full", className)}>
      <Image
        fill
        className="object-cover object-top group-hover:opacity-60 transition-opacity"
        src={src}
        alt="instagram-image"
      />
    </a>
  );
};

export default InstagramCard;
