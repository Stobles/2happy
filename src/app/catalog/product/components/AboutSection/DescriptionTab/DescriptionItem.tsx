const DescriptionItem = ({ description }: { description: string }) => {
  const descriptionFormatted = description.replace(/<[^>]+>/g, "");
  return (
    <div>
      {descriptionFormatted}
      {!descriptionFormatted && (
        <p className="text-center w-full">У товара отсутствует описание</p>
      )}
    </div>
  );
};

export default DescriptionItem;
