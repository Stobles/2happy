import { cn } from "@/lib/utils";

const CartIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={cn(
        "stroke-main fill-transparent transition-[fill,stroke,transform]",
        className
      )}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M5.31 4.86h14.76l-2.01 7H6.39M5 3l2.01 12.86L5 2.86H1.99m6.02 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm11.04 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="m7.25 15.93 11.21.07"
      />
    </svg>
  );
};

export default CartIcon;
