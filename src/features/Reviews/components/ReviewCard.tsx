import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/Avatar";
import Rating from "@/components/UI/Rating";

const ReviewCard = () => {
  return (
    <article className="flex flex-col gap-6 pb-6 border-b border-gray">
      <div className="w-full flex justify-between items-end">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="/images/Comments/comment-1.png" />
            {/* Здесь будут инициалы пользователя */}
            <AvatarFallback>НГ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <span className="text-button-xs">Наталья Г.</span>
            <Rating rating={4} readOnly />
          </div>
        </div>
        <span className="text-body2 text-gray-middle">26/03/05</span>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="text-h5">Красивое платье</h5>
        <p className="text-body2 text-gray-middle">
          Это платье — просто находка для тех, кто любит стильные
          и нестандартные образы! Удобный худи отлично сидит, ткань мягкая
          и приятная к телу. Лёгкая фатиновая юбка придаёт образу воздушность
          и делает его по‑настоящему эффектным. Можно носить как с кроссовками
          для повседневного стиля, так и с каблуками для вечернего выхода.
          Качество на высоте, доставка быстрая. Очень довольна покупкой!
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;
