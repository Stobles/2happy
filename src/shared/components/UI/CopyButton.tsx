"use client";

import { cn } from "@/shared/utils/cn";
import CheckIcon from "../icons/CheckIcon";
import StyledTooltip from "./StyledTooltip";
import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Notification from "./Notification";
import { toast } from "react-toastify";
import { notify } from "@/shared/lib/notify";

const CopyButton = ({
  children,
  copyText,
  tooltip,
  ...props
}: {
  children: ReactNode;
  copyText: string;
  tooltip?: string;
} & ComponentPropsWithoutRef<"button">) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText).then(
      () => {
        notify({
          message: "Сообщение скопировано в буфер обмена",
          variant: "success",
        });
        setShowSuccess(true);
        timeoutRef.current = setTimeout(() => {
          setShowSuccess(false);
        }, 2000);
      },
      (e) => {
        console.error(e);
      }
    );
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <button
      className="relative"
      onClick={handleCopy}
      data-tooltip-id={`copy_${tooltip}`}
      data-tooltip-content={tooltip}
      disabled={showSuccess}
      {...props}
    >
      <CheckIcon
        className={cn(
          "absolute transition-opacity opacity-0",
          showSuccess && "opacity-100"
        )}
      />
      <div
        className={cn(
          "w-full h-full transition-opacity",
          showSuccess && "opacity-0"
        )}
      >
        {children}
      </div>
      {tooltip && <StyledTooltip id={`copy_${tooltip}`} />}
    </button>
  );
};

export default CopyButton;
