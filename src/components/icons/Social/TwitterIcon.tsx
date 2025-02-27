import { cn } from "@/lib/utils";

const TwitterIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      className={cn("fill-transparent", className)}
    >
      <g clipPath="url(#a)">
        <path
          stroke="#FCFCFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.5 3c-.9576.67548-2.0179 1.19211-3.14 1.53-.6023-.69249-1.4027-1.18331-2.293-1.40607-.8903-.22277-1.8275-.16673-2.6849.16052-.8574.32726-1.5937.90995-2.1091 1.66927-.5155.75931-.7853 1.65862-.773 2.57628v1c-1.7574.04557-3.49873-.34419-5.06899-1.13455C5.86074 6.60508 4.51032 5.43864 3.5 4c0 0-4 9 5 13-2.05947 1.398-4.51284 2.0989-7 2 9 5 20 0 20-11.5-.0009-.27855-.0277-.55641-.08-.83C22.4406 5.66349 23.1608 4.39271 23.5 3v0Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h24v24H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TwitterIcon;
