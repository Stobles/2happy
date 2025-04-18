import CarIcon from "@/shared/components/icons/Features/CarIcon";
import MapIcon from "@/shared/components/icons/Features/MapIcon";
import ParcelIcon from "@/shared/components/icons/Features/ParcelIcon";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import { ReactNode } from "react";

const FEATURES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <CarIcon />,
    title: "Быстрая доставка",
    text: "Отправляем заказы в кратчайшие сроки",
  },
  {
    icon: <MapIcon />,
    title: "Простое отслеживание",
    text: "Контролируйте статус заказа в любое время",
  },
  {
    icon: <ParcelIcon />,
    title: "Удобные способы получения",
    text: "Курьерская доставка или пункт выдачи",
  },
];

const Features = () => {
  return (
    <Section className="bg-main">
      <Container className="my-section">
        <ul className="flex w-full gap-6">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col items-center gap-6 flex-1 pt-8 px-7 pb-10 rounded-xs shadow-feature bg-white/10"
            >
              {feature.icon}
              <h5 className="text-h5 text-white">{feature.title}</h5>
              <span className="text-white">{feature.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Features;
