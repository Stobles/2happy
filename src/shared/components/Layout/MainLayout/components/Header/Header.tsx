"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";

import Container from "@/shared/components/UI/Container";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";

import { iconLinks, mainLinks, subLinks } from "./consts/consts";
import NavLink from "@/shared/components/UI/NavLink";
import CategorySheet from "@/features/Categories/components/CategorySheet/CategorySheet";
import SearchSheet from "./components/SearchSheet";
import Account from "./components/Account";
import useObserver from "@/shared/hooks/useObserver";

import "./style.css";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import CartSheet from "@/features/Cart/components/CartSheet";
import CartIcon from "@/shared/components/icons/CartIcon";

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
              priority
            />
          </Link>
          <nav className="flex-1 px-2">
            <ul className="flex justify-center gap-6 ">
              <li>
                <CategorySheet isSticky={isSticky} />
              </li>
              {mainLinks.map(({ title, ...props }) => (
                <li key={title}>
                  <NavLink {...props}>{title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-10">
            <SearchSheet />
            <div className="flex gap-6">
              <Link
                href="/"
                data-tooltip-id="favorite"
                data-tooltip-content="Избранное"
              >
                <HeartIcon className="hover:fill-black" />
                <StyledTooltip id="favorite" />
              </Link>
              <CartSheet>
                <div data-tooltip-id="cart" data-tooltip-content="Корзина">
                  <CartIcon className="hover:fill-black" />
                  <StyledTooltip id="cart" />
                </div>
              </CartSheet>
              <Account />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
