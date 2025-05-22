import CreateReviewDialog from "@/features/Reviews/components/CreateReviewDialog";
import ReviewsList from "@/features/Reviews/components/ReviewsList";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";

const ReviewsPage = () => {
  return (
    <Section>
      <Container className="flex-col gap-12 my-section">
        <h2 className="text-h2">Отзывы наших клиенток /</h2>
        <CreateReviewDialog>
          <Button size="medium">Написать отзыв</Button>
        </CreateReviewDialog>
        <ReviewsList />
      </Container>
    </Section>
  );
};

export default ReviewsPage;
