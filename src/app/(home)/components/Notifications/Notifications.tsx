import ArrowSubRightIcon from "@/shared/components/icons/Arrows/ArrowSubRightIcon";
import GiftIcon from "@/shared/components/icons/GiftIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import { Input } from "@/shared/components/UI/Input";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const Notifications = () => {
  return (
    <Section className="relative h-[800px]">
      <div className="absolute right-0 w-[50vw] h-[800px]">
        <Image
          fill
          className="object-cover object-top"
          src="/images/Home/Notifications/bg.jpg"
          alt="notifications-bg"
        />
      </div>
      <Container className="items-center">
        <div className="flex flex-col gap-8 basis-1/2 pr-4">
          <div className="flex flex-col gap-6">
            <span className="w-max flex gap-2 items-center text-body2 py-2 px-4 border-[1px] border-gray">
              <GiftIcon /> Получи -10% на любой заказ
            </span>
            <h3 className="text-h3">Подпишитесь на наши обновления</h3>
            <p className="text-body2">
              Получайте первыми информацию о новых коллекциях, эксклюзивных
              предложениях и специальных акциях!
            </p>
          </div>
          <div className="flex max-w-[500px]">
            <Input
              placeholder="Email"
              wrapperClassName="rounded-tr-[0px] rounded-br-[0px]"
            />
            <Button size="iconNormal">
              <ArrowSubRightIcon />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Notifications;
