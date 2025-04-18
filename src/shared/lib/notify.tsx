import { toast } from "react-toastify";
import Notification, {
  NotificationVariants,
} from "../components/UI/Notification";

export const notify = ({
  message,
  title,
  variant,
}: {
  message: string;
  title?: string;
  variant?: NotificationVariants;
}) => {
  toast(
    <Notification title={title} message={message} variant={variant} showClose />
  );
};
