import MailIcon from "@/shared/components/icons/MailIcon";
import PhoneIcon from "@/shared/components/icons/PhoneIcon";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import WhatsAppIcon from "@/shared/components/icons/Social/WhatsAppIcon";
import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Section from "@/shared/components/UI/Section";
import Link from "next/link";

const ThankfulSection = () => {
  return (
    <Section className="flex flex-col">
      <Container className="flex flex-col my-section">
        <ImageWithLoader
          wrapperClassName="absolute top-0 right-0 z-10 w-[600px] h-[496px]"
          src="/images/Success-checkout/thanks.jpg"
          alt="thanks-image"
        />
        <div className="relative z-20 pt-8 pb-24 flex flex-col gap-8 items-center">
          <h1 className="text-h1 uppercase">Спасибо за покупку!</h1>
          <p className="text-h5 max-w-[366px] w-full">
            Ваш заказ успешно оплачен. <br /> Наш менеджер скоро свяжется с вами
            для обсуждения деталей доставки.
          </p>
        </div>
        <div className="flex flex-col gap-8 bg-main py-10 px-20 text-white">
          <div className="flex flex-col gap-10 max-w-[420px] w-full">
            <p>
              Подтверждение заказа уже в пути на Вашу почту. Отслеживайте статус
              и управляйте покупками в 
              <Link href="/" className="link-hover">
                личном кабинете
              </Link>
            </p>
            <p>
              Если у вас возникли какие — либо вопросы, вы можете позвонить
              нам или написать:
            </p>
          </div>
          <div className="w-full">
            <ul className="flex justify-between">
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-xs">
                  <PhoneIcon className="fill-white" />
                </div>
                <a
                  href="tel:+77015557060"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
                >
                  +7–701–555–70–60
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-xs">
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
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-xs">
                  <WhatsAppIcon className="fill-white" />
                </div>
                <a
                  href="https://wa.me/77015557060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
                >
                  Whats App
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-xs">
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

export default ThankfulSection;
