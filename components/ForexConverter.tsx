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
        "border rounded-[20px] overflow-auto md:min-w-[calc(50vw)] lg:min-w-[calc(53vw)] lg:min-h-[400px] md:min-h-[550px] scrollbar-hide",
        "bg-white drop-shadow-lg border-gray-200 border-opacity-25"
      )}
    >
      <Table id="converter" className="min-w-full">
        <TableHeader className="">
          <TableRow className="h-6">
            <TableHead className="font-poppins bg-gradient-to-b from-sky-600 to-blue-700 text-center text-white font-bold text-xl">
              Exchange Rates
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="grid grid-cols-2 grid-flow-row-dense auto-rows-max sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 py-8 px-2">
          {visibleCurrencies.map((currency) => (
            <TableCell
              key={currency.name}
              className="flex sm:flex-row items-center space-x-2 sm:space-x-3 md:space-x-4 text-center sm:text-left"
            >
              <Image
                src={currency.img}
                alt={`${currency.name} flag`}
                width={40}
                height={40}
                className="rounded-full sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              />
              <div className="flex flex-col">
                <figcaption className="text-sm font-bold text-gray-700  ">
                  {currency.name}
                </figcaption>
                <p className="text-lg font-bold text-gray-800">
                  {currency.rate}
                </p>
              </div>
            </TableCell>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
