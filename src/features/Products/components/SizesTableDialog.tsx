import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/Dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/Table";
import { ReactNode } from "react";

const sizes = [
  {
    int: "XS",
    rus: "40",
    eur: "34",
    chest: "82-86",
    waist: "58-62",
    hips: "84-86",
  },
  {
    int: "S",
    rus: "42",
    eur: "36",
    chest: "86-90",
    waist: "62-68",
    hips: "86-90",
  },
  {
    int: "M",
    rus: "44",
    eur: "38",
    chest: "90-96",
    waist: "68-72",
    hips: "90-94",
  },
  {
    int: "L",
    rus: "46",
    eur: "40",
    chest: "96-98",
    waist: "72-76",
    hips: "94-98",
  },
  {
    int: "XL",
    rus: "48",
    eur: "42",
    chest: "100-104",
    waist: "76-80",
    hips: "98-102",
  },
];

const SizesTableDialog = ({ trigger }: { trigger: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-full max-w-[1168px]">
        <DialogHeader>
          <DialogTitle className="text-h4">Таблица размеров</DialogTitle>
          <DialogDescription hidden>Таблица размеров</DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Int</TableHead>
              <TableHead>Rus</TableHead>
              <TableHead>Eur</TableHead>
              <TableHead>
                Обхват груди <br />
                (См)
              </TableHead>
              <TableHead>
                Обхват талии <br />
                (См)
              </TableHead>
              <TableHead>
                Обхват бедер <br />
                (См)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizes.map((size) => (
              <TableRow key={size.int}>
                <TableCell>{size.int}</TableCell>
                <TableCell>{size.rus}</TableCell>
                <TableCell>{size.eur}</TableCell>
                <TableCell>{size.chest}</TableCell>
                <TableCell>{size.waist}</TableCell>
                <TableCell>{size.hips}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default SizesTableDialog;
