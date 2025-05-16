import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerPlain,
} from "@/shared/components/UI/Select";

const OrdersListSelect = ({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (value: string) => void;
}) => {
  return (
    <Select
      value={value}
      onValueChange={(value) => {
        onSelect(value);
      }}
    >
      <SelectTriggerPlain className="text-button-xs">
        Сортировать по
      </SelectTriggerPlain>
      <SelectContent align="end">
        <SelectItem value="desc:date">Сначала новые</SelectItem>
        <SelectItem value="asc:date">Сначала старые</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default OrdersListSelect;
