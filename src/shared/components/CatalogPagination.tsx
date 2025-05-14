"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/shared/components/UI/Pagination";
import { RefObject } from "react";

const CatalogPagination = ({
  page,
  per_page,
  totalItems,
  totalPages,
  scrollToRef,
  scrollInset,
  setPage,
}: {
  page: number;
  per_page: number;
  totalItems: number;
  totalPages: number;
  scrollToRef?: RefObject<HTMLDivElement | null>;
  scrollInset?: number;
  setPage: (page: number) => void;
}) => {
  if (!totalItems) return null;

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= 3) return [1, 2, 3, 4, "...", totalPages];

    if (page >= totalPages - 2)
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];

    return [1, "...", page - 1, page, page + 1, page + 2, "...", totalPages];
  };

  const pages = getPageNumbers();

  const handlePageChange = (newPage: number) => {
    if (typeof newPage === "number") {
      if (scrollToRef && scrollToRef.current) {
        const offsetTop = scrollInset
          ? scrollToRef.current?.offsetTop + scrollInset
          : scrollToRef.current?.offsetTop;
        document.body.scrollTo({ top: offsetTop, behavior: "smooth" });
      }

      setPage(newPage);
    }
  };

  return (
    <div className="flex justify-between">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            />
          </PaginationItem>

          {pages.map((p, index) => (
            <PaginationItem key={index}>
              {p === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationButton
                  onClick={() => handlePageChange(+p)}
                  isActive={p === page}
                >
                  {p}
                </PaginationButton>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <span className="text-gray-middle text-button-xs">
        {Math.min(page * per_page, totalItems)} из {totalItems}
      </span>
    </div>
  );
};

export default CatalogPagination;
