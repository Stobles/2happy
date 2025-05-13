"use client";

import Image from "next/image";
import Link from "next/link";

import { ReactNode, useEffect, useRef, useState } from "react";

import Container from "@/shared/components/UI/Container";

import { fetchNonce } from "@/features/Cart/api/cartQueries";
import { mainLinks, subLinks } from "./consts/consts";

import NavLink from "@/shared/components/UI/NavLink";
import CategorySheet from "@/features/Categories/components/CategorySheet/CategorySheet";
import SearchSheet from "./components/SearchSheet";
import useObserver from "@/shared/hooks/useObserver";

import "./style.css";

const Header = ({ buttonsSlot }: { buttonsSlot: ReactNode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const upperHeaderRef = useRef(null);

  useObserver(upperHeaderRef, (entry) => setIsSticky(!entry.isIntersecting));

  useEffect(() => {
    fetchNonce();
  }, []);

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
        <Container className="h-full items-center justify-end gap-5">
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
            {buttonsSlot}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
