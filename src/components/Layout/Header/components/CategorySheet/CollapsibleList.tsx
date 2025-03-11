import ChevronDownIcon from "@/components/icons/Chevron/ChevronDownIcon";
import { Collapsible, CollapsibleContent } from "@/components/UI/Collapsible";
import { ScrollArea } from "@/components/UI/ScrollArea";
import Link from "next/link";
import { useState } from "react";

const CollapsibleList = ({
  mainlist,
  collapsibleList,
}: {
  mainlist: { id: string; title: string }[];
  collapsibleList: { id: string; title: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ScrollArea className="pb-[2px]">
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
      </ScrollArea>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center text-button-xs link-hover my-6 pb-1"
      >
        {isOpen ? "Свернуть" : "Ещё"}
        <ChevronDownIcon
          className={`group-hover:fill-gray ${isOpen && "rotate-180"}`}
        />
      </button>
    </>
  );
};

export default CollapsibleList;
