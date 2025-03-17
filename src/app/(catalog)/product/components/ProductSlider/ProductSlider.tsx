import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

const ProductSlider = () => {
  return (
    <div className="flex-1 basis-[51%] overflow-hidden">
      <Swiper>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
