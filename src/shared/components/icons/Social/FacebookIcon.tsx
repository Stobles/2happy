import { cn } from "@/shared/lib/utils";

const FacebookIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      className={cn(
        "fill-transparent transition-[fill,stroke,transform]",
        className
      )}
    >
      <path
        stroke="#FCFCFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.5 2h-3c-1.3261 0-2.5979.52678-3.5355 1.46447C10.0268 4.40215 9.5 5.67392 9.5 7v3h-3v4h3v8h4v-8h3l1-4h-4V7c0-.26522.1054-.51957.2929-.70711C13.9804 6.10536 14.2348 6 14.5 6h3V2Z"
      />
    </svg>
  );
};

export default FacebookIcon;
