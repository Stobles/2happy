"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import ReviewCard, { ReviewCardLoader } from "./ReviewCard";
import { getCommentsListQueryOptions } from "../api/reviewsApi";
import { TSort } from "@/shared/types/other";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerPlain,
} from "@/shared/components/UI/Select";
import { useRef, useState } from "react";
import useObserver, { useIntersection } from "@/shared/hooks/useObserver";
import { getWordForm } from "@/shared/utils";

const ReviewsSelect = ({
  sort,
  onChange,
}: {
  sort: TSort;
  onChange: (value: string) => void;
}) => {
  const defaultValue = `${sort.type}:${sort.field}`;
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTriggerPlain className="text-button-xs">
        Сортировать по
      </SelectTriggerPlain>
      <SelectContent align="end">
        <SelectItem value="desc:date">Сначала новые</SelectItem>
        <SelectItem value="asc:date">Сначала старые</SelectItem>
        <SelectItem value="desc:has_photo">Только с фото</SelectItem>
      </SelectContent>
    </Select>
  );
};

const ReviewsList = () => {
  const [sort, setSort] = useState<TSort>({ type: "desc", field: "date" });

  const { data, isPending, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      ...getCommentsListQueryOptions({
        per_page: 12,
        order: sort.type,
        orderby: sort.field,
      }),
      select: (result) => ({
        totalPages: result.pages[0].totalPages,
        items: result.pages.map((item) => item.items).flat(),
        totalItems: result.pages[0].totalItems,
      }),
    });

  const callbackRef = useIntersection(() => {
    fetchNextPage();
  });

  const noResults = !isPending && !data?.items.length;

  if (noResults) {
    return (
      <div className="flex items-center justify-center w-full h-[552px]">
        <h2 className="text-h2">Ничего не найдено</h2>
      </div>
    );
  }

  const reviewWordForm = getWordForm(Number(data?.totalItems) ?? 0, {
    one: "Отзыв",
    several: "Отзыва",
    many: "Отзывов",
  });

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h4 className="text-h4">
          {data?.totalItems ?? 0} {reviewWordForm}
        </h4>
        <ReviewsSelect
          sort={sort}
          onChange={(value) =>
            setSort({ type: value.split(":")[0], field: value.split(":")[1] })
          }
        />
      </div>
      <div className="flex flex-col gap-10">
        {data?.items.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
        {!data && isLoading && (
          <>
            <ReviewCardLoader />
            <ReviewCardLoader />
          </>
        )}
        {isFetchingNextPage && (
          <h2 className="text-h2Akira w-full text-center animate-pulse mb-4 mt-10">
            2HAPPY
          </h2>
        )}
        <div ref={callbackRef} className="w-full h-[1px]" />
      </div>
    </div>
  );
};

export default ReviewsList;
