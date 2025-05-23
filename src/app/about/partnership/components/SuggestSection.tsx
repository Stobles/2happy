import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import HangerIcon from "@/shared/components/icons/Suggest/HangerIcon";
import PhotoIcon from "@/shared/components/icons/Suggest/PhotoIcon";
import SewIcon from "@/shared/components/icons/Suggest/SewIcon";
import StarIcon from "@/shared/components/icons/Suggest/StarIcon";
import WriteIcon from "@/shared/components/icons/Suggest/WriteIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const SuggestSection = () => {
  return (
    <Section>
      <Container className="flex-col gap-16 my-section">
        <h2 className="text-h2">Что мы предлагаем / </h2>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-[288px_288px_128px_264px_184px] grid-rows-[176px_176px] gap-6">
            <div className="relative row-span-2">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/1.jpg"
                alt="suggest-1"
              />
            </div>
            <div className="flex flex-col items-end gap-4 border border-main rounded-xs p-8 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <HangerIcon />
              <p className="text-h5 w-full ">
                Совместные <br /> коллекции и капсулы
              </p>
            </div>
            <div className="relative">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/2.jpg"
                alt="suggest-2"
              />
            </div>
            <div />
            <div className="relative row-span-2 ">
              <Image
                fill
                className="object-cover pt-[100px]"
                src="/images/Partnership/Suggest/3.jpg"
                alt="suggest-3"
              />
            </div>
            <div className="flex flex-col items-end gap-4 border border-main rounded-xs p-8 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <WriteIcon />
              <p className="text-h5 w-full ">
                Франшиза <br /> бренда 2HAPPY
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-end gap-4 border border-main rounded-xs p-8 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <StarIcon />
              <p className="text-h5 w-full ">
                Франшиза <br /> бренда 2HAPPY
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[296px_128px_280px_448px] grid-rows-[176px_176px] gap-6">
            <div className="relative w-full h-[80px] self-center">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/2happy.png"
                alt="suggest-4"
              />
            </div>
            <div className="relative">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/2.jpg"
                alt="suggest-5"
              />
            </div>
            <div className="relative row-span-2">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/4.jpg"
                alt="suggest-6"
              />
            </div>
            <div className=" flex flex-col items-end gap-4 border border-main rounded-xs p-8 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <SewIcon />
              <p className="text-h5 w-full ">
                Корпоративные заказы <br /> и кастомизация
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-end gap-4 border border-main rounded-xs p-8 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <PhotoIcon />
              <p className="text-h5 w-full ">
                Коллаборации <br /> с инфлюенсерами и амбассадорами
              </p>
            </div>
            <Button className="w-full self-end" size="large">
              Стать партнёром <ArrowUpRightIcon />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SuggestSection;
