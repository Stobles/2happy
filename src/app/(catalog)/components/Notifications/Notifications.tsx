import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container";
import { Input } from "@/components/UI/Input";
import Section from "@/components/UI/Section";
import Image from "next/image";
import Link from "next/link";

const Notifications = () => {
  return (
    <Section className="h-[800px]">
      <div className="absolute right-0 w-[43vw] h-[800px]">
        <Image
          fill
          className="object-cover object-top"
          src="/images/Catalog/Notifications/bg.jpg"
          alt="notifications-bg"
        />
      </div>
      <Container className="my-section items-center">
        <div className="flex flex-col gap-6 basis-[600px]">
          <h2 className="text-h3">
            Подпишитесь <br />
            на наши обновления
          </h2>
          <p className="text-body2">
            Получайте первыми информацию о новых коллекциях, <br /> эксклюзивных
            предложениях и специальных акциях!
          </p>
          <div>
            <Input placeholder="Email" />
            <p className="text-button-xs text-darkGrey mt-4 mb-6">
              Подписываясь, вы даёте своё согласие на получение маркетинговые
              сообщения по электронной почте и подтверждаете, что ознакомелись
              с 
              <Link href="/" className="text-black underline">
                «Политикой конфиденциальности»
              </Link>
              . Чтобы отказаться от рассылки, нажмите на кнопку «Отписаться»
              в конце письма.
            </p>
            <Button size="normal" className="w-full">
              Подписаться
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Notifications;
