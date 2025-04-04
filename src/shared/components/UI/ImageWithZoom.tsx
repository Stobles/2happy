import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { MouseEvent, useState } from "react";

const ImageWithZoom = ({ src }: { src: string }) => {
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
      className="zoom-container cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetZoom}
    >
      <ImageWithLoader
        src={src}
        className=" transition-transform w-full h-auto cursor-zoom-in"
        style={{
          transformOrigin: `${zoom.x} ${zoom.y}`,
          transform: `scale(${zoom.scale})`,
        }}
        alt="product-image"
      />
    </div>
  );
};

export default ImageWithZoom;
