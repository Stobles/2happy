import Image from "next/image";
import Link from "next/link";

import SearchIcon from "@/components/icons/SearchIcon";
import Container from "@/components/UI/Container/Container";
import StyledTooltip from "@/components/UI/StyledTooltip/StyledTooltip";

import { iconLinks, mainLinks, subLinks } from "./consts";

const Header = () => {
  return (
    <header className="shadow-header">
      <div className="min-h-[56px]">
        <Container className="flex h-full items-center justify-end gap-5 py-5">
          {subLinks.map((link) => (
            <Link key={link.title} href={link.href} className="text-button-xs">
              {link.title}
            </Link>
          ))}
        </Container>
      </div>
      <div className="min-h-[80px] border-y-[1px] border-main">
        <Container className="flex items-center">
          <Link href="/home">
            <Image
              width={80}
              height={80}
              src="/header-logo.jpg"
              alt="header-logo"
            />
          </Link>
          <div className="flex justify-center gap-6 flex-1 px-2">
            {/* это будет, как отдельный компонент, скорее всего */}
            <div className="text-button-normal">Каталог</div>
            {/*  */}
            {mainLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-button-normal"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-10">
            <div className="text-button-normal flex gap-2">
              <SearchIcon /> <span>Поиск</span>
            </div>
            <div className="flex gap-6">
              {iconLinks.map((icon) => (
                <Link
                  key={icon.tooltip.id}
                  href={icon.href}
                  data-tooltip-id={icon.tooltip.id}
                  data-tooltip-content={icon.tooltip.content}
                >
                  {icon.element}
                  <StyledTooltip id={icon.tooltip.id} />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
