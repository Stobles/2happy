import CloseIcon from "@/shared/components/icons/CloseIcon";
import OpenWideIcon from "@/shared/components/icons/OpenWideIcon";
import Container from "@/shared/components/UI/Container";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { ReactNode, useState } from "react";
import ImageGallerySlider from "./ImageGallerySlider/ImageGallerySlider";

const ImageGallery = ({ children }: { children: ReactNode }) => {
  const [openWide, setOpenWide] = useState(false);
  return (
    <Dialog>
      <DialogTrigger className="w-full h-full">{children}</DialogTrigger>
      <DialogContent className="w-screen max-w-screen h-screen" hideClose>
        <Container className="relative flex-col h-full">
          <DialogTitle className="sr-only">
            Галлерея изображений товара
          </DialogTitle>
          <div className="w-full flex gap-4 justify-end">
            <button onClick={() => setOpenWide((prev) => !prev)}>
              <OpenWideIcon className="hover:fill-gray" />
            </button>
            <DialogClose>
              <CloseIcon className="hover:fill-gray" />
            </DialogClose>
          </div>
          <ImageGallerySlider openWide={openWide} />
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
