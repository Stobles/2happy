import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";

const DescriptionTab = () => {
  return (
    <div className="flex h-full">
      <div className="basis-[600px]">
        <div className="mb-8">
          <div className="flex gap-2 text-gray-middle mb-4">
            <span>Артикул:</span>
            <span>0101010101</span>
          </div>
          <div>
            Эффектное и стильное платье, сочетающее в себе спортивный
            шик и женственность. Верх выполнен в виде худи с капюшоном
            и молнией, украшенным контрастной надписью. Лёгкая и воздушная юбка
            из полупрозрачного чёрного фатина создаёт эффект многослойности
            и динамики. Свободный крой обеспечивает комфорт, а смелый дизайн
            делает это платье идеальным выбором для стильных и уверенных в себе
            женщин.
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="desc">
            <AccordionTrigger>Подробнее о товаре</AccordionTrigger>
            <AccordionContent>
              авыавываавываавываавываавываавываавывава
              авываавываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="d">
            <AccordionTrigger>Подробнее о товаре</AccordionTrigger>
            <AccordionContent>
              авыавываавываавываавываавываавываавывава
              авываавываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="f">
            <AccordionTrigger>Подробнее о товаре</AccordionTrigger>
            <AccordionContent>
              авыавываавываавываавываавываавываавывава
              авываавываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="g">
            <AccordionTrigger>Подробнее о товаре</AccordionTrigger>
            <AccordionContent>
              авыавываавываавываавываавываавываавывава
              авываавываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
              авываавываавываавываавываавываавываавываавываавыва
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <ImageWithLoader
        wrapperClassName="flex-1 top-[-68px] bg-white"
        className="pl-12"
        src="/images/Home/Main/slider-1.jpg"
        alt="desc-image"
      />
    </div>
  );
};

export default DescriptionTab;
