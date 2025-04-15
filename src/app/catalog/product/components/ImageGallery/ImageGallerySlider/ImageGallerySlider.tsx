import { Swiper, SwiperSlide } from "swiper/react";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Navigation } from "swiper/modules";
import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import { useEffect, useRef, useState } from "react";
import SliderProgress from "@/shared/components/Slider/SliderProgress";
import ImageWithZoom from "@/shared/components/UI/ImageWithZoom";
import { cn } from "@/shared/lib/utils";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

const TEST_IMAGES = [
  "/images/Home/Main/slider-1.jpg",
  "/images/Home/Main/slider-2.jpg",
  "/images/Home/Main/slider-3.jpg",
];

const ImageGallerySlider = ({ openWide }: { openWide: boolean }) => {
  const [activeImage, setActiveImage] = useState<string>(() => TEST_IMAGES[0]);
  const [isReady, setIsReady] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (nextRef.current && prevRef.current) setIsReady(true);
  }, [nextRef.current, prevRef.current]);
  return (
    <div className="w-full h-full flex justify-center">
      <div className="relative h-full w-full margin-x-auto max-w-[688px]">
        {/* Разработать компонент кнопки-иконки */}
        <div
          className={cn(
            "absolute w-full h-full transition-opacity opacity-0 pointer-events-none z-50",
            openWide && "opacity-100 pointer-events-auto"
          )}
        >
          <ImageWithZoom
            fill
            src={activeImage}
            className="object-cover "
            alt="scaled-product-image"
          />
        </div>
        {isReady && (
          <Swiper
            className="gallery-slider"
            modules={[Navigation]}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            centeredSlides={true}
            onSlideChange={(swiper) => {
              setActiveImage(TEST_IMAGES[swiper.activeIndex]);
            }}
            slidesPerView={1}
          >
            {TEST_IMAGES.map((item) => (
              <SwiperSlide key={item}>
                <ImageWithLoader src={item} alt="product-image" />
              </SwiperSlide>
            ))}

            <SliderProgress className="absolute bottom-0" />
          </Swiper>
        )}
        <IconButton
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 disabled:bg-transparent"
          variant="secondary"
          size="large"
        >
          <ArrowRightIcon className="rotate-180" />
        </IconButton>
        <IconButton
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 disabled:bg-transparent"
          variant="secondary"
          size="large"
        >
          <ArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageGallerySlider;
