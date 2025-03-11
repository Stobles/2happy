import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container";
import { Input } from "@/components/UI/Input";
import Section from "@/components/UI/Section";

const Notifications = () => {
  return (
    <Section>
      <Container className="my-section gap-6">
        <div className="shrink-0 basis-[500px]">
          <h2 className="text-h3 mb-6">
            Подпишитесь <br /> на наши обновления
          </h2>
          <p className="text-body2">
            Получайте первыми информацию о новых коллекциях, эксклюзивных
            предложениях и специальных акциях!
          </p>
        </div>
        <div>
          <Input placeholder="Email" />
          <p className="text-button-xs mt-4 mb-6">
            Подписываясь, вы даёте своё согласие на получение маркетинговые
            сообщения по электронной почте и подтверждаете, что ознакомелись
            с «Политикой конфиденциальности». Чтобы отказаться от рассылки,
            нажмите на кнопку «Отписаться» в конце письма.
          </p>
          <Button className="w-full" size="normal">
            Подписаться
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Notifications;
