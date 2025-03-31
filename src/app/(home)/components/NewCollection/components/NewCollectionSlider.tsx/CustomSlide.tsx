import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/components/UI/Button";

const CustomSlide = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full px-4 pt-10 pb-6 bg-main">
      <span className="text-h4 text-white text-center">
        Погрузитесь в мир стильных новинок!
      </span>
      <Button className="w-full" variant="primary" size="medium">
        Все новинки <ArrowUpRightIcon />
      </Button>
    </div>
  );
};

export default CustomSlide;
