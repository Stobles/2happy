import { Button } from "@/components/UI/Button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/UI/Pagination";
import { getProductsListParameters } from "@/features/Products/api/productsApi";
import { useProductsStore } from "@/features/Products/store/productsStore";
import { Dispatch, SetStateAction } from "react";

const CatalogPagination = ({
  page,
  per_page,
  setParams,
}: {
  page: number;
  per_page: number;
  setParams: Dispatch<SetStateAction<getProductsListParameters>>;
}) => {
  const { totalItems, totalPages } = useProductsStore();

  const getPageNumbers = () => {
    if (totalPages <= 4)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (page <= 2) return [1, 2, 3, 4];
    if (page >= totalPages - 1)
      return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];

    return [page - 1, page, page + 1, page + 2];
  };

  const pages = getPageNumbers();

  const handlePageChange = (page: number) =>
    setParams((prev) => ({ ...prev, page }));

  return (
    <>
      <Button className="w-full" variant="secondary" size="normal">
        Показать еще
      </Button>
      <div className="flex justify-between">
        <Pagination>
          <PaginationContent>
            {/* Кнопка Назад */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  handlePageChange(page - 1);
                }}
                disabled={page === 1}
              />
            </PaginationItem>

            {/* Первая страница всегда показывается */}
            <PaginationItem>
              <PaginationButton
                onClick={() => {
                  handlePageChange(1);
                }}
                isActive={page === 1}
              >
                1
              </PaginationButton>
            </PaginationItem>

            {/* Добавляем ... если первая страница не в списке */}
            {pages[0] > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Динамические страницы */}
            {pages.map(
              (p) =>
                p !== 1 &&
                p !== totalPages && (
                  <PaginationItem key={p}>
                    <PaginationButton
                      onClick={() => handlePageChange(p)}
                      isActive={p === page}
                    >
                      {p}
                    </PaginationButton>
                  </PaginationItem>
                )
            )}

            {/* Добавляем ... если последняя страница не в списке */}
            {pages[pages.length - 1] < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Последняя страница */}
            {totalPages > 4 && (
              <PaginationItem>
                <PaginationButton
                  onClick={() => {
                    handlePageChange(totalPages);
                  }}
                  isActive={page === +totalPages}
                >
                  {totalPages}
                </PaginationButton>
              </PaginationItem>
            )}

            {/* Кнопка Вперед */}
            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  handlePageChange(page + 1);
                }}
                disabled={page === +totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <span className="text-gray-middle text-button-xs">
          {Math.min(page * per_page, totalItems)} из {totalItems}
        </span>
      </div>
    </>
  );
};

export default CatalogPagination;
