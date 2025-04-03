"use client";

import StarIcon from "@/shared/components/icons/StarIcon";
import { useState } from "react";

const generateStars = (rating: number, maxRating: number = 5) => {
  const stars = [];
  for (let i = 0; i < maxRating; i++) {
    stars.push({ checked: i < Math.round(rating) });
  }
  return stars;
};

const Rating = ({
  rating,
  readOnly,
  onRatingChange,
}: {
  rating: number;
  readOnly?: boolean;
  onRatingChange?: (rating: number) => void;
}) => {
  const [stars, setStars] = useState<{ checked: boolean }[]>(
    generateStars(rating)
  );

  const handleClickOnStar = (rating: number) => {
    setStars(generateStars(rating));

    if (onRatingChange) onRatingChange(rating);
  };
  return (
    <div className="flex">
      {stars.map((star, index) => (
        <StarIcon
          key={index}
          className={`${!readOnly && "cursor-pointer [&_*]:cursor-pointer"} ${
            star.checked ? "fill-main" : "fill-dark-disabled"
          }`}
          onClick={() => (readOnly ? {} : handleClickOnStar(index + 1))}
        />
      ))}
    </div>
  );
};

export default Rating;
