"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";

import Container from "@/components/UI/Container";
import StyledTooltip from "@/components/UI/StyledTooltip";

import { iconLinks, mainLinks, subLinks } from "./consts/consts";
import CategorySheet from "./components/CategorySheet/CategorySheet";
import SearchSheet from "./components/SearchSheet";
import Account from "./components/Account";
import useObserver from "@/hooks/useObserver";

import "./style.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const upperHeaderRef = useRef(null);

  useObserver(upperHeaderRef, (entry) => setIsSticky(!entry.isIntersecting));

  return (
    <>
      {/* Это подложка под sticky header, чтобы при скролле была тень и border, но скрывались под CategorySheet */}
      <div className="fixed h-[calc(var(--sticky-header-height)+1px)] left-0 top-0 w-full z-[49] shadow-header border-b-[1px] border-main"></div>
      {/* Это подложка под большой header, чтобы была тень и border, но скрывались под CategorySheet */}
      <div className="absolute h-[var(--full-header-height)] left-0 top-0 w-full z-[49] shadow-header border-b-[1px] border-main"></div>

      <div
        ref={upperHeaderRef}
        className="min-h-[56px] border-b-[1px] border-main z-header bg-white "
      >
        <Container className="h-full items-center justify-end gap-5 py-5">
          {subLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-button-xs link-hover"
            >
              {link.title}
            </Link>
          ))}
        </Container>
      </div>
      <header className="sticky top-0 min-h-[80px] bg-white z-header">
        <Container className="items-center">
          <Link href="/">
            <Image
              width={80}
              height={80}
              src="/images/Header/header-logo.jpg"
              alt="header-logo"
            />
          </Link>
          <nav className="flex-1 px-2">
            <ul className="flex justify-center gap-6 ">
              <li>
                <CategorySheet isSticky={isSticky} />
              </li>
              {mainLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-button-normal link-hover"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-10">
            <SearchSheet />
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
              <Account />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
