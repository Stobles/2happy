"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { SyntheticEvent, useEffect, useState } from "react";

const ImageWithFallback = ({
  wrapperClassName,
  fallbackSrc,
  className,
  src,
  alt,
  ...props
}: { wrapperClassName?: string; fallbackSrc: string } & ImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = (result: SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    if (result.currentTarget.naturalWidth === 0) {
      setImageSrc(fallbackSrc);
      setIsLoading(true);
    }
  };

  const onError = () => {
    setImageSrc(fallbackSrc);
    setIsLoading(true);
  };

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <div className={cn("relative w-full h-full", wrapperClassName)}>
      <div
        className={cn(
          `absolute flex justify-center items-center w-full h-full z-10 bg-white opacity-0 transition-opacity`,
          isLoading && "opacity-100"
        )}
      >
        <span className="animate-pulse font-akira text-3xl">2HAPPY</span>
      </div>
      <Image
        fill
        src={imageSrc}
        sizes="100%"
        className={cn("object-cover object-top", className)}
        onLoad={onLoad}
        onError={onError}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
