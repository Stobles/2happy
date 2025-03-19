const ColorSquare = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`w-[16px] h-[16px]`}
    />
  );
};

export default ColorSquare;
