import { Button } from "@/components/UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../../types";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import SliderButton from "@/components/UI/SliderButton";
import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";

export const CategorySlider = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="category-slider ">
      <Swiper slidesPerView="auto" spaceBetween={16}>
        <SliderButton
          asChild
          slideType="prev"
          className="absolute left-[-1px] top-0 z-10"
        >
          <Button variant="tertiary" size="iconSmall">
            <ArrowRightIcon className="rotate-180" />
          </Button>
        </SliderButton>
        {categories.map((item) => (
          <SwiperSlide key={item.text} className="pb-1">
            <Button
              className="py-2 px-4 hover:shadow-elevation-1"
              variant="secondary"
              size="small"
              asChild
            >
              <Link href={item.href}>{item.text}</Link>
            </Button>
          </SwiperSlide>
        ))}
        <SliderButton
          className="absolute top-0 right-[-1px] z-10"
          asChild
          slideType="next"
        >
          <Button variant="tertiary" size="iconSmall">
            <ArrowRightIcon />
          </Button>
        </SliderButton>
      </Swiper>
    </div>
  );
};
