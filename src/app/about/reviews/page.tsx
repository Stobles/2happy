import ReviewsList from "@/features/Reviews/components/ReviewsList";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import CreateReviewButton from "./components/CreateReviewButton";

const ReviewsPage = () => {
  return (
    <Section>
      <Container className="flex-col gap-12 my-section">
        <h2 className="text-h2">Отзывы наших клиенток /</h2>
        <CreateReviewButton />
        <ReviewsList />
      </Container>
    </Section>
  );
};

export default ReviewsPage;
