import { cn } from "@/shared/lib/utils";

const MasterCardIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="24"
      className={cn("fill-transparent", className)}
    >
      <rect
        width="34"
        height="23"
        x=".5"
        y=".5"
        fill="#FCFCFF"
        stroke="#9EA4AE"
        rx="1.5"
      />
      <path
        fill="#F93232"
        fillRule="evenodd"
        d="M17.75 17.1569c-1.1916 1.0283-2.7372 1.6491-4.4262 1.6491-3.76869 0-6.8238-3.0906-6.8238-6.903C6.5 8.09057 9.55511 5 13.3238 5c1.689 0 3.2346.62075 4.4262 1.64903C18.9416 5.62075 20.4872 5 22.1762 5 25.9449 5 29 8.09057 29 11.903c0 3.8124-3.0551 6.903-6.8238 6.903-1.689 0-3.2346-.6208-4.4262-1.6491Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFB82E"
        fillRule="evenodd"
        d="M17.75 17.1569c1.4672-1.2661 2.3975-3.1501 2.3975-5.2539 0-2.10383-.9303-3.98783-2.3975-5.25397C18.9416 5.62075 20.4872 5 22.1762 5 25.9449 5 29 8.09057 29 11.903c0 3.8124-3.0551 6.903-6.8238 6.903-1.689 0-3.2346-.6208-4.4262-1.6491Z"
        clipRule="evenodd"
      />
      <path
        fill="#FF5E00"
        fillRule="evenodd"
        d="M17.75 6.64844c1.4672 1.26613 2.3976 3.15012 2.3976 5.25396 0 2.1038-.9304 3.9878-2.3976 5.2539-1.4671-1.2661-2.3975-3.1501-2.3975-5.2539 0-2.10384.9304-3.98783 2.3975-5.25396Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MasterCardIcon;
