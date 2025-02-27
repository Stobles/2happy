import Image from "next/image";
import Link from "next/link";

import MasterCardIcon from "@/components/icons/Payment/MasterCardIcon";
import PaypalIcon from "@/components/icons/Payment/PayPalIcon";
import Container from "@/components/UI/Container/Container";
import VisaIcon from "@/components/icons/Payment/VisaIcon";
import { mainBlocks, socialIcons } from "./consts";
import StyledLink from "@/components/UI/StyledLink/StyledLink";
import StyledExternalLink from "@/components/UI/StyledExternalLink/StyledExternalLink";

const Footer = () => {
  return (
    <footer className="bg-radial-gradient bg-main">
      <Container className="flex flex-col">
        {/* Footer Header */}

        <div className="w-full flex justify-between items-center py-12 border-b-[1px] border-white">
          <Link href="/">
            <Image
              src="/footer-logo.jpg"
              width={288}
              height={80}
              alt="footer_logo"
            />
          </Link>
          <ul className="flex gap-4">
            {/* Порядок элементов в массиве не изменяется, поэтому можно использовать index, как ключ */}
            {socialIcons.map((icon, index) => (
              <li
                key={index}
                className="hover:icon-glass-hover transition-colors"
              >
                <Link href={icon.href}>{icon.element}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Main */}

        <ul className="flex gap-12 py-12 border-b-[1px] border-white">
          {/* Footer Links */}
          {mainBlocks.map((item) => (
            <li key={item.title} className="basis-full">
              <h4 className="text-h4 text-white pb-4">Аккаунт</h4>
              <ul className="space-y-2 text-whiteSecondary">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <StyledLink className="text-button-xs" href={link.href}>
                      {link.text}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* Footer Contacts */}

          <li className="basis-full">
            <h4 className="text-h4 text-white pb-4">Контакты</h4>
            <ul className="space-y-2 text-button-xs text-whiteSecondary">
              <li>
                <StyledExternalLink
                  className="text-button-xs"
                  href="tel:+77777777777"
                >
                  +7–777–777–77–77
                </StyledExternalLink>
              </li>
              <li>
                <StyledExternalLink
                  className="text-button-xs"
                  href="mailto:2happykz@mail.ru"
                >
                  2happykz@mail.ru
                </StyledExternalLink>
              </li>
              <li>
                <span>Самал 1, дом 31, Алматы</span>
              </li>
              <li>
                <span>Пн-Вс 10.00 - 20.00</span>
              </li>
              <li>
                <StyledExternalLink
                  className="text-button-xs"
                  href="mailto:2happykz@mail.ru"
                >
                  Посмотреть на карте
                </StyledExternalLink>
              </li>
            </ul>
          </li>
        </ul>

        {/* Footer Bottom */}

        <div className="w-full flex justify-between items-end py-12 ">
          <span className="text-white text-description">
            © 2018 - 2025 2HAPPY. Все права защищены.
          </span>
          <ul className="flex gap-2">
            <li>
              <PaypalIcon />
            </li>
            <li>
              <VisaIcon />
            </li>
            <li>
              <MasterCardIcon />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
