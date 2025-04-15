"use client";

import { useSwiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Progress } from "@/shared/components/UI/Progress";
import { cn } from "@/shared/lib/utils";

const SliderProgress = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const swiper = useSwiper();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (swiper.destroyed) return;
      const activeIndex = swiper.realIndex + 1;
      const total = swiper.slides.length;
      setProgress((activeIndex / total) * 100);
    };

    updateProgress();

    swiper.on("slideChange", updateProgress);
    swiper.on("slidesLengthChange", updateProgress);
    return () => {
      swiper.off("slideChange", updateProgress);
      swiper.off("slidesLengthChange", updateProgress);
    };
  }, [swiper]);

  return (
    <Progress
      className={cn("h-[2px]", className)}
      value={progress}
      {...props}
    />
  );
};

export default SliderProgress;
