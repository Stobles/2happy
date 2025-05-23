import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import MailIcon from "@/shared/components/icons/MailIcon";
import PhoneIcon from "@/shared/components/icons/PhoneIcon";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import WhatsAppIcon from "@/shared/components/icons/Social/WhatsAppIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Section from "@/shared/components/UI/Section";

const ContactUsSection = () => {
  return (
    <Section className="my-section">
      <Container>
        <ImageWithLoader
          wrapperClassName="w-[416px] h-[504px] absolute top-0 right-0"
          className="object-[50%_50%] -scale-x-100"
          src="/images/Account/contact-us.jpg"
          alt="contact-us"
        />
        <div className="w-full">
          <div>
            <div className="flex flex-col justify-center gap-8 max-w-[624px] ml-[104px] my-[88px]">
              <h3 className="text-h3">Объединим идеи и стиль</h3>
              <div className="ml-[104px]">
                <p className="text-h5">
                  Если вы хотите стать частью нашей истории — напишите нам.
                  Обсудим идеи и создадим <br /> что-то особенное вместе!
                </p>
                <Button className="w-full mt-14" size="medium" asChild>
                  <a
                    href="https://wa.me/77021657378"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Связаться с нами
                    <ArrowUpRightIcon />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 px-20 bg-black text-white">
            <p className="text-h5">ежедневно с 10:00 до 20:00 (время Астаны)</p>
            <ul className="flex justify-between">
              <li className="flex items-center gap-4">
                <div className="border border-white rounded-xs">
                  <PhoneIcon className="fill-white" />
                </div>
                <a
                  href="tel:+77021657378"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
                >
                  +7-702-165-73-78
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="border border-white rounded-xs">
                  <MailIcon className="fill-white" />
                </div>
                <a
                  href="mailto:2happy.almaty@gmail.com"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
                >
                  2happy.almaty@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="border border-white rounded-xs">
                  <WhatsAppIcon className="fill-white" />
                </div>
                <a
                  href="https://wa.me/77021657378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
                >
                  Whats App
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="border border-white rounded-xs">
                  <InstagramIcon className="fill-white" />
                </div>
                <a
                  href="https://www.instagram.com/2happy_kz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
                >
                  @2HAPPY_KZ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactUsSection;
