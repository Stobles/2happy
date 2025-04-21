import Image from "next/image";
import Link from "next/link";

import MasterCardIcon from "@/shared/components/icons/Payment/MasterCardIcon";
import PaypalIcon from "@/shared/components/icons/Payment/PayPalIcon";
import Container from "@/shared/components/UI/Container";
import VisaIcon from "@/shared/components/icons/Payment/VisaIcon";
import { mainBlocks, socialIcons } from "./consts/consts";
import AccountList from "./components/AccountList";

const Footer = () => {
  return (
    <footer className="bg-main">
      <Container className="flex-col">
        {/* Footer Header */}

        <div className="w-full flex justify-between items-center pb-12 pt-16 border-b-[1px] border-white">
          <Link href="/">
            <Image
              src="/images/2happy-white-logo.png"
              width={480}
              height={46}
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
          <AccountList />
          {/* Footer Links */}
          {mainBlocks.map((item) => (
            <li key={item.title} className="basis-full">
              <h4 className="text-h4 text-white pb-4">{item.title}</h4>
              <ul className="space-y-2 text-white-secondary">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-button-xs link-hover"
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* Footer Contacts */}

          <li className="basis-full">
            <h4 className="text-h4 text-white pb-4">Контакты</h4>
            <ul className="space-y-2 text-button-xs text-white-secondary">
              <li>
                <a
                  className="text-button-xs link-hover"
                  href="tel:+77777777777"
                >
                  +7–777–777–77–77
                </a>
              </li>
              <li>
                <a
                  className="text-button-xs link-hover"
                  href="mailto:2happykz@mail.ru"
                >
                  2happykz@mail.ru
                </a>
              </li>
              <li>
                <span>Самал 1, дом 31, Алматы</span>
              </li>
              <li>
                <span>Пн-Вс 10.00 - 20.00</span>
              </li>
              <li>
                <a
                  className="text-button-xs link-hover"
                  href="mailto:2happykz@mail.ru"
                >
                  Посмотреть на карте
                </a>
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
