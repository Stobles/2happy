import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const WhatsAppBoldIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      className={cn("fill-main transition-all", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.96 3.55a6.942 6.942 0 0 0-4.93-2.034c-3.842 0-6.97 3.112-6.972 6.937a6.894 6.894 0 0 0 .931 3.469L1 15.516l3.695-.965a6.989 6.989 0 0 0 3.332.844h.002c3.842 0 6.97-3.112 6.971-6.938a6.88 6.88 0 0 0-2.04-4.907ZM8.03 14.224h-.003a5.804 5.804 0 0 1-2.949-.804l-.211-.125-2.193.572.585-2.127-.138-.219a5.733 5.733 0 0 1-.886-3.068c0-3.179 2.6-5.765 5.797-5.765a5.781 5.781 0 0 1 5.791 5.77c-.001 3.179-2.6 5.766-5.794 5.766Zm3.177-4.319c-.174-.087-1.031-.506-1.19-.564-.159-.058-.276-.087-.392.087a10.4 10.4 0 0 1-.551.68c-.102.117-.203.13-.377.043-.174-.087-.736-.27-1.401-.86a5.227 5.227 0 0 1-.97-1.201c-.1-.173-.01-.267.077-.354.079-.078.174-.202.261-.303.088-.102.117-.174.174-.29.058-.115.03-.217-.014-.303-.043-.087-.392-.94-.537-1.287-.141-.339-.285-.293-.392-.298a7.074 7.074 0 0 0-.334-.006.642.642 0 0 0-.464.217c-.16.173-.61.593-.61 1.446 0 .852.625 1.677.711 1.793.087.116 1.229 1.867 2.976 2.617.324.14.656.261.993.366.417.131.797.113 1.097.068.334-.05 1.031-.42 1.176-.824.144-.405.145-.752.101-.824-.043-.072-.16-.116-.334-.203Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default WhatsAppBoldIcon;
