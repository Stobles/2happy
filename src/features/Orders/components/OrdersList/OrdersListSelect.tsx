import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerPlain,
} from "@/shared/components/UI/Select";

const OrdersListSelect = () => {
  return (
    <Select>
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
