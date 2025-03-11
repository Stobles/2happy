import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import Image from "next/image";
import Slider from "./components/Slider/Slider";

const NewCollection = () => {
  return (
    <Section>
      <Container className="flex-col gap-16 my-section">
        <Image
          className="absolute w-[992px] h-[112px] top-[-64px] right-0"
          width={1208}
          height={128}
          src="/images/section-logo.png"
          alt="section-logo"
        />
        <h2 className="text-h2">Новая коллекция / 25</h2>
        <Slider />
      </Container>
    </Section>
  );
};

export default NewCollection;
