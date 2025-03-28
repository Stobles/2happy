import InstagramCard from "@/features/Fashion/components/InstagramCard";
import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import Image from "next/image";

const Instagram = () => {
  return (
    <Section className="relative bg-gradient-4 h-[1024px]">
      <Image
        className="z-[-1]"
        fill
        src="/images/section-bg.png"
        alt="section-bg"
        quality={90}
      />
      <Container className="flex-col gap-10 my-section">
        <Image
          className="absolute h-[128px] top-[-88px] left-0"
          width={1208}
          height={128}
          src="/images/section-logo.png"
          alt="section-logo"
        />
        <h2 className="text-h2 text-white">
          #2happy <br />/
        </h2>
        <div className="grid grid-cols-4 grid-rows-[repeat(2,288px)] gap-6">
          <div className="text-body1 text-white">
            Откройте для себя больше вдохновения и стильных идей в нашем
            Instagram @2happy_kz! Будьте в курсе новинок, акций и трендов
          </div>
          <InstagramCard href="/" src="/images/Home/Instagram/1.jpg" />
          <InstagramCard
            href="/"
            className="row-span-2 col-span-2"
            src="/images/Home/Instagram/2.jpg"
          />
          <InstagramCard href="/" src="/images/Home/Instagram/3.jpg" />
          <InstagramCard href="/" src="/images/Home/Instagram/4.jpg" />
        </div>
      </Container>
    </Section>
  );
};

export default Instagram;
