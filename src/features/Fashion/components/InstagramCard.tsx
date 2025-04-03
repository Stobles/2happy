import { cn } from "@/shared/lib/utils";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";

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
      <ImageWithLoader
        src={src}
        className="group-hover:opacity-60 transition-opacity"
        alt="instagram-image"
      />
    </a>
  );
};

export default InstagramCard;
