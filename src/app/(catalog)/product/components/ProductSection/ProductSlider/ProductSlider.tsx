"use client";

import { MouseEvent, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import ImageWithFallback from "@/components/UI/ImageWithFallback";

import { Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

const SLIDES = [
  "/images/Home/Main/slider-1.jpg",
  "/images/Home/Main/slider-2.jpg",
  "/images/Home/Main/slider-3.jpg",
  "/images/Home/Main/slider-4.jpg",
  "/images/Home/Main/slider-5.jpg",
  "/images/Home/Main/slider-6.jpg",
];

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

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
    <div className="product-slider flex gap-6 flex-1 basis-[51%] overflow-hidden">
      <Swiper
        className="thumbs-slider"
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={5}
        spaceBetween={8}
        modules={[Thumbs]}
      >
        {SLIDES.map((slide) => (
          // Ключ нужно будет сделать уникальным
          <SwiperSlide
            key={slide}
            style={{ display: thumbsSwiper ? "block" : "none" }}
          >
            <Image
              fill
              src={slide}
              className="object-cover"
              alt="product-slide-thumb"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="main-slider"
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
      >
        {SLIDES.map((slide) => (
          // Ключ нужно будет сделать уникальным
          <SwiperSlide key={slide}>
            <div
              className="zoom-container"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetZoom}
            >
              <ImageWithFallback
                src={slide}
                className=" transition-transform w-full h-auto"
                fallbackSrc={slide}
                style={{
                  transformOrigin: `${zoom.x} ${zoom.y}`,
                  transform: `scale(${zoom.scale})`,
                }}
                alt="product-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
