import { cn } from "@/shared/utils/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-xs bg-gray-light", className)}
      {...props}
    />
  );
}

export { Skeleton };
