import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

interface ISliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  slideType: "next" | "prev";
  asChild?: boolean;
}

const SliderButton = ({ slideType, asChild, ...props }: ISliderButtonProps) => {
  const Comp = asChild ? Slot : "button";

  const swiper = useSwiper();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (slideType === "next") swiper.slideNext();
    else swiper.slidePrev();
  };

  useEffect(() => {
    if (!swiper) return;

    const updateState = () => {
      setIsDisabled(slideType === "next" ? swiper.isEnd : swiper.isBeginning);
    };

    updateState();
    swiper.on("slideChange", updateState);
    swiper.on("reachEnd", updateState);
    swiper.on("reachBeginning", updateState);

    return () => {
      swiper.off("slideChange", updateState);
      swiper.off("reachEnd", updateState);
      swiper.off("reachBeginning", updateState);
    };
  }, [swiper, slideType]);

  return (
    <Comp
      style={{
        display: isDisabled ? "none" : "block",
      }}
      onClick={handleClick}
      {...props}
    />
  );
};

export default SliderButton;
