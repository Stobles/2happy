import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { cn } from "@/shared/utils/cn";
import { ImageProps } from "next/image";
import { MouseEvent, useState } from "react";

const ImageWithZoom = ({ className, ...props }: ImageProps) => {
  const [zoom, setZoom] = useState({ x: "50%", y: "50%", scale: 1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoom({ x: `${x}%`, y: `${y}%`, scale: 1.5 });
  };

  const resetZoom = () => setZoom((prev) => ({ ...prev, scale: 1 }));
  return (
    <div
      className={"zoom-container cursor-pointer"}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetZoom}
    >
      <ImageWithLoader
        className={cn(
          "transition-transform w-full h-auto cursor-zoom-in",
          className
        )}
        style={{
          transformOrigin: `${zoom.x} ${zoom.y}`,
          transform: `scale(${zoom.scale})`,
        }}
        {...props}
      />
    </div>
  );
};

export default ImageWithZoom;
