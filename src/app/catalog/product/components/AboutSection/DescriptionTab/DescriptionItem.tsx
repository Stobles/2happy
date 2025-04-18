import { sanitizeHtml } from "@/shared/lib/sanitizeHtml";

const DescriptionItem = ({ description }: { description: string }) => {
  const { safeHTML, parse } = sanitizeHtml(description);
  return (
    <div>
      <div className="richtext-content text-gray-dark">
        {safeHTML && parse(safeHTML)}
        {!safeHTML && (
          <p className="text-center">У товара отсутствует описание</p>
        )}
      </div>
    </div>
  );
};

export default DescriptionItem;
