import { Skeleton } from "@/shared/components/UI/Skeleton";
import { cn } from "@/shared/lib/utils";

const ProductCardLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-4 w-full h-full", className)}>
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-3/5 h-[18px]" />
      <Skeleton className="w-2/5 h-[18px]" />
    </div>
  );
};

export default ProductCardLoader;
