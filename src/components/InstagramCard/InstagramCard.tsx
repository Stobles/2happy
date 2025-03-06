import { cn } from "@/lib/utils";
import Image from "next/image";
import InstagramIcon from "../icons/Social/InstagramIcon";

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
      <InstagramIcon className="absolute w-[10%] h-[10%] min-w-12 min-h-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] fill-black opacity-0 group-hover:opacity-100 transition-opacity" />
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
