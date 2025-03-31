import { Checkbox } from "@/components/UI/Checkbox";

const FilterCheckbox = ({
  defaultChecked,
  onCheck,
  text,
}: {
  defaultChecked?: boolean;
  onCheck: () => void;
  text: string;
}) => {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox
        defaultChecked={defaultChecked}
        onCheckedChange={onCheck}
        className="w-6 h-6"
      />
      <label>{text}</label>
    </div>
  );
};

export default FilterCheckbox;
