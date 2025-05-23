import DiamondIcon from "@/shared/components/icons/Values/DiamondIcon";
import HeartValueIcon from "@/shared/components/icons/Values/HeartValueIcon";
import InspirationIcon from "@/shared/components/icons/Values/InspirationIcon";
import LeafIcon from "@/shared/components/icons/Values/LeafIcon";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";

const OurValues = () => {
  return (
    <Section>
      <Container className="flex-col gap-16 my-section">
        <div className="flex flex-col gap-8 w-full">
          <h2 className="text-h2 text-end w-full">наши ценности /</h2>
          <p className="text-h4 ml-[184px]">Что мы ставим в приоритет</p>
        </div>
        <div className="flex gap-6">
          <div className="w-full flex flex-col items-center gap-6 bg-white p-4 shadow-value">
            <InspirationIcon />
            <span className="text-body1 text-center">
              Делиться <br /> вдохновением
            </span>
          </div>
          <div className="w-full flex flex-col items-center gap-6 bg-white p-4 shadow-value">
            <LeafIcon />
            <span className="text-body1 text-center">
              Быть <br /> естественными
            </span>
          </div>
          <div className="w-full flex flex-col items-center gap-6 bg-white p-4 shadow-value">
            <HeartValueIcon />
            <span className="text-body1 text-center">
              Создавать <br /> настроение
            </span>
          </div>
          <div className="w-full flex flex-col items-center gap-6 bg-white p-4 shadow-value">
            <DiamondIcon />
            <span className="text-body1 text-center">
              Выражать <br /> индивидуальность
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OurValues;
