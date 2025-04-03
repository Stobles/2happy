import { Button } from "@/shared/components/UI/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerPlain,
  SelectValue,
} from "@/shared/components/UI/Select";
import Rating from "@/shared/components/UI/Rating";
import ReviewCard from "@/features/Reviews/components/ReviewCard";

const ReviewsTab = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-h5">4,8</span>
          <Rating rating={5} readOnly />
        </div>
        <Select defaultValue="new">
          <SelectTriggerPlain>
            <SelectValue />
          </SelectTriggerPlain>
          <SelectContent align="end">
            <SelectItem value="new">Сначала новые</SelectItem>
            <SelectItem value="onlyPhoto">Только с фото</SelectItem>
            <SelectItem value="positive">Положительные</SelectItem>
            <SelectItem value="positive">Отрицательные</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ReviewCard />
      <Button className="w-full" variant="secondary" size="medium">
        Показать еще
      </Button>
    </div>
  );
};

export default ReviewsTab;
