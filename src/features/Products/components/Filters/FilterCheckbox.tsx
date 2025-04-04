import { Checkbox, TCheckboxProps } from "@/shared/components/UI/Checkbox";

const FilterCheckbox = ({
  text,
  ...props
}: { text: string } & TCheckboxProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox className="w-6 h-6" {...props} />
      <label>{text}</label>
    </div>
  );
};

export default FilterCheckbox;
