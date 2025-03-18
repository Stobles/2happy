import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import Slider from "./components/Slider/Slider";
import SectionImage from "@/components/UI/SectionImage";

const NewCollection = () => {
  return (
    <Section>
      <Container className="flex-col gap-16 my-section">
        <SectionImage />
        <h2 className="text-h2">Новая коллекция / 25</h2>
        <Slider />
      </Container>
    </Section>
  );
};

export default NewCollection;
