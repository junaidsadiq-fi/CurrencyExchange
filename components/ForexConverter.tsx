import Image from "next/image";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useCurrencies } from "@/context/CurrencyContext";

export default function ForexConverter() {
  return (
    <section className="w-full relative">
      <div className="relative z-10">
        <TableContainer />
      </div>
    </section>
  );
}

const TableContainer = () => {
  const currencies = useCurrencies();
  const visibleCurrencies = currencies.filter((currency) => currency.visible);

  return (
    <div
      className={cn(
        "border rounded-[20px] overflow-auto max-h-[520px] scrollbar-hide", // Hide scrollbar
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.5)]"
      )}
    >
      <Table id="converter" className="">
        <TableHeader className="bg-gradient-to-b from-sky-600 to-blue-900">
          <TableRow className="h-12">
            <TableHead className="font-poppins text-center text-white text-xl">
              Exchange Rates
            </TableHead>
           {/*  <TableHead className="font-poppins text-white text-xl">
              Currency
            </TableHead>
            <TableHead className="font-poppins text-white text-xl">
              Currency
            </TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className="grid grid-flow-row-dense auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {visibleCurrencies.map((currency) => (
            <TableCell
              key={currency.name}
              className="flex items-center space-x-3"
            >
              <Image
                src={currency.img}
                alt={`${currency.name} flag`}
                width="25"
                height="25"
                className="rounded-full"
              />
              <span className="text-xl md:text-lg font-bold">{currency.name}</span>
              <span className="text-right text-lg md:text-md ">
                {currency.rate}
              </span>
            </TableCell>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
