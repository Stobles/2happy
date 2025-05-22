import WhatsAppBoldIcon from "@/shared/components/icons/Social/WhatsAppBoldIcon";
import { IconButton } from "@/shared/components/UI/IconButton";

const WhatsAppButton = () => {
  return (
    <div className="fixed right-[224px] bottom-[88px]">
      <IconButton
        className="rounded-full w-[72px] h-[72px] overflow-hidden"
        asChild
      >
        <a target="_blank" href="https://wa.me/77021657378">
          <WhatsAppBoldIcon className="!size-12 " />
        </a>
      </IconButton>
    </div>
  );
};

export default WhatsAppButton;
