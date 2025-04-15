import Container from "@/shared/components/UI/Container";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/UI/Tabs";
import DescriptionTab from "./DescriptionTab/DescriptionTab";
import ReviewsTab from "./ReviewsTab/ReviewsTab";
import { Suspense } from "react";

const AboutSection = () => {
  return (
    <div className="border-b border-main">
      <Container className="mt-[80px] mb-section">
        <Tabs className="w-full" defaultValue="description">
          <TabsList>
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы покупателей</TabsTrigger>
          </TabsList>
          <TabsContent className="h-full" value="description">
            <Suspense fallback>
              <DescriptionTab />
            </Suspense>
          </TabsContent>
          <TabsContent className="h-full" value="reviews">
            <ReviewsTab />
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};

export default AboutSection;
