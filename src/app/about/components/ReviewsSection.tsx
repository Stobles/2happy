import { paths } from "@/config/paths";
import StyledReviewCard from "@/features/Reviews/components/StyledReviewCard";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";

const ReviewsSection = () => {
  return (
    <Section>
      <Container className="my-section">
        <div className="flex gap-6 w-full">
          <div className="flex flex-col max-w-[624px] w-full items-end gap-20">
            <div className="w-full space-y-8">
              <h2 className="text-h2">Ваши отзывы /</h2>
              <p className="text-h5 ml-20">
                — это часть нашей истории, которую мы <br />
                создаём вместе с вами
              </p>
            </div>
            <StyledReviewCard className="w-[424px]" />
            <Button asChild>
              <Link href={paths.about.reviews.getHref()}>
                Смотреть все отзывы <ArrowUpRightIcon />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-[424px_128px] grid-rows-[272px_272px] gap-6 mt-16">
            <StyledReviewCard className="col-span-2" />
            <StyledReviewCard />
            <div className="relative">
              <Image
                fill
                className="object-cover"
                src="/images/About/2happy-black.png"
                alt="2happy-logo"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ReviewsSection;
