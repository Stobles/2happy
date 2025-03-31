"use client";

import ChevronDownIcon from "@/components/icons/Chevron/ChevronDownIcon";
import { Collapsible, CollapsibleContent } from "@/components/UI/Collapsible";
import { ScrollArea } from "@/components/UI/ScrollArea";
import { Category } from "@/features/Categories/types";
import Link from "next/link";
import { useState } from "react";

const CategoriesCollapsibleList = ({
  categories,
  showCount,
}: {
  categories: Category[];
  showCount: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortedCategories = categories.sort(
    (a, b) => a.menu_order - b.menu_order
  );

  const mainlist = sortedCategories.slice(0, showCount);
  const collapsibleList = sortedCategories.slice(showCount - 1, -1);

  return (
    <div>
      <ScrollArea className="pb-[2px]">
        <ul className="space-y-2">
          {mainlist.map((item) => (
            <li key={item.id}>
              <Link
                href={`/${item.id}`}
                className="text-button-normal link-hover"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {collapsibleList.length ? (
          <Collapsible open={isOpen}>
            <CollapsibleContent>
              <ul className="space-y-2 mt-2 pb-[2px]">
                {collapsibleList.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/${item.id}`}
                      className="text-button-normal link-hover"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ) : null}
      </ScrollArea>
      {collapsibleList.length ? (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="group flex items-center text-button-xs link-hover mt-4"
        >
          {isOpen ? "Свернуть" : "Ещё"}
          <ChevronDownIcon
            className={`group-hover:fill-gray ${isOpen && "rotate-180"}`}
          />
        </button>
      ) : null}
    </div>
  );
};

export default CategoriesCollapsibleList;
