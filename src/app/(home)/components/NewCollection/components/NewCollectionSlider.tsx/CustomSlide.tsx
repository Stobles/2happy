import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import CategoryLink from "@/features/Categories/components/CategoryLink";
import Link from "next/link";

const CustomSlide = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full px-4 pt-10 pb-6 bg-main">
      <span className="text-h4 text-white text-center">
        Погрузитесь в мир стильных новинок!
      </span>
      <Button className="w-full" variant="primary" size="medium" asChild>
        <CategoryLink name="Новая коллекция" category="new">
          Все новинки <ArrowUpRightIcon />
        </CategoryLink>
      </Button>
    </div>
  );
};

export default CustomSlide;
