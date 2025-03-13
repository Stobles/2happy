import { cn } from "@/lib/utils";
import InstagramIcon from "../../../components/icons/Social/InstagramIcon";
import ImageWithFallback from "../../../components/UI/ImageWithFallback";

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
      <ImageWithFallback
        src={src}
        className="group-hover:opacity-60 transition-opacity"
        fallbackSrc={src}
        alt="instagram-image"
      />
    </a>
  );
};

export default InstagramCard;
