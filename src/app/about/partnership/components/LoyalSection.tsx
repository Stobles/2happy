import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import CheckIcon from "@/shared/components/icons/CheckIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const LoyalSection = () => {
  return (
    <Section>
      <Container className="my-section flex-col gap-16">
        <div className="space-y-8">
          <h2 className="text-h2">
            Программа лояльности <br /> для стилистов /
          </h2>
          <p className="text-h4 w-full text-end pr-[100px]">
            Работайте с клиентами и получайте вознаграждение за покупки
          </p>
        </div>
        <div className="flex gap-16">
          <div className="w-full max-w-[496px] space-y-6">
            <p>
              Мы рады предложить стилистам возможность принять участие
              в партнёрской программе 2НАРРУ, в рамках которой вы сможете
              работать со своими клиентами и получать вознаграждение
              за совершённые ими покупки в наших магазинах
            </p>
            <div className="relative w-full h-[624px]">
              <Image
                fill
                className="object-cover -scale-x-100"
                src="/images/Partnership/Loyal/1.jpg"
                alt="loyal-1"
              />
            </div>
          </div>
          <div className="flex flex-col gap-20 justify-end w-full">
            <div className="space-y-6">
              <h5 className="text-h5">Как это работает?</h5>
              <ul className="flex flex-col gap-4 text-placeholder text-gray-dark">
                <li className="flex gap-2 text-gray-dark">
                  <div className="w-6 h-6 bg-black">
                    <CheckIcon className="fill-white" />
                  </div>
                  Вам необходимо написать нам на Whatsapp и подать заявку
                  на участие в программе лояльности, после чего вы получите
                  карту стилиста
                </li>
                <li className="flex gap-2 text-gray-dark">
                  <div className="w-6 h-6 bg-black">
                    <CheckIcon className="fill-white" />
                  </div>
                  Вы подбираете образы для ваших клиентов из ассортимента бренда
                  2НАРРУ и предоставляете свою карту стилиста при совершении
                </li>
                <li className="flex gap-2 text-gray-dark">
                  <div className="w-6 h-6 bg-black">
                    <CheckIcon className="fill-white" />
                  </div>
                  За каждую покупку, сделанную вашим клиентом, вы будете
                  получать вознаграждение — 10% от суммы в чеке
                  (после вычета НДС). В денежном эквиваленте.
                </li>
                <li className="flex gap-2 text-gray-dark">
                  <div className="w-6 h-6 bg-black">
                    <CheckIcon className="fill-white" />
                  </div>
                  Выплаты за прошлый месяц считаются в следующем и производятся
                  раз в месяц
                </li>
              </ul>
            </div>
            <Button className="w-full" size="large" asChild>
              <a target="_blank" href="https://wa.me/77021657378">
                Стать стилистом <ArrowUpRightIcon />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default LoyalSection;
