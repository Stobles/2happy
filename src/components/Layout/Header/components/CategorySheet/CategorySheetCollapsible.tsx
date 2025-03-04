import ChevronDownIcon from "@/components/icons/Chevron/ChevronDownIcon";
import { Collapsible, CollapsibleContent } from "@/components/UI/Collapsible";
import Link from "next/link";
import { useState } from "react";

const CategorySheetCollapsible = ({
  mainlist,
  collapsibleList,
}: {
  mainlist: { id: string; title: string }[];
  collapsibleList: { id: string; title: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="pb-4 overflow-y-auto">
        <ul className="space-y-2">
          {mainlist.map((item) => (
            <li key={item.title}>
              <Link
                href={`/${item.id}`}
                className="text-button-normal link-hover"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Collapsible open={isOpen}>
          <CollapsibleContent>
            <ul className="space-y-2 mt-2 pb-[2px]">
              {collapsibleList.map((item) => (
                <li key={item.title}>
                  <Link
                    href={`/${item.id}`}
                    className="text-button-normal link-hover"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center text-button-xs link-hover mb-6"
      >
        {isOpen ? "Свернуть" : "Ещё"}
        <ChevronDownIcon
          className={`group-hover:fill-lightGrey transition-[fill,transform] ${
            isOpen && "rotate-180"
          }`}
        />
      </button>
    </>
  );
};

export default CategorySheetCollapsible;
