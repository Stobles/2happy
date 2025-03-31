import { Skeleton } from "@/components/UI/Skeleton";

const CategoryListLoader = ({ count }: { count: number }) => {
  const array = new Array(count).fill(null);
  return (
    <div className="flex flex-col gap-4">
      {array.map((_, index) => (
        <Skeleton key={index} className="w-full h-[14px] rounded-lg" />
      ))}
    </div>
  );
};

export default CategoryListLoader;
