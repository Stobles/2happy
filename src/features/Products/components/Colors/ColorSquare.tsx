import { colorsByName } from "../../consts/consts";

const ColorSquare = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        backgroundColor: colorsByName[color],
      }}
      className={`w-[16px] h-[16px]`}
    />
  );
};

export default ColorSquare;
