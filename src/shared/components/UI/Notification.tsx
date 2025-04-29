import { cn } from "@/shared/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import SuccessIcon from "../icons/SuccessIcon";
import ErrorIcon from "../icons/ErrorIcon";
import InfoIcon from "../icons/InfoIcon";
import CloseIcon from "../icons/CloseIcon";

const notificationVariants = cva(
  `relative w-full flex gap-2 p-4 pr-8 text-main rounded-sm`,

  {
    variants: {
      variant: {
        info: `bg-light-disabled border border-main`,
        error: `bg-status-muted-error border border-stroke-error`,
        success: `bg-status-muted-success border border-stroke-success`,
      },
      size: {
        large: "",
        small: "",
      },
    },
    defaultVariants: {
      variant: "info",
      size: "large",
    },
  }
);

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  message: string;
  title?: string;
  closeToast?: () => void;
  showClose?: boolean;
}

export type NotificationVariants = NonNullable<
  VariantProps<typeof notificationVariants>["variant"]
>;

const ICONS: Record<NotificationVariants, ReactNode> = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
};

const Notification = ({
  variant,
  message,
  title,
  className,
  showClose = false,
  closeToast,
}: NotificationProps) => {
  return (
    <div className={cn(notificationVariants({ variant, className }))}>
      <div>{ICONS[variant ?? "info"]}</div>
      <div className="w-[360px] pr-4">
        {title && <h5 className="text-h5">{title}</h5>}
        <span className="text-body2">{message}</span>
      </div>
      {showClose && (
        <button
          type="button"
          onClick={closeToast}
          className="absolute top-4 right-4"
        >
          <CloseIcon className="w-[20px] h-[20px] fill-gray" />
        </button>
      )}
    </div>
  );
};

export default Notification;
