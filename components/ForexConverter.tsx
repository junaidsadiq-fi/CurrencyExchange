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
      <div className="grid grid-cols-1 gap-8 relative z-10">
        <TableContainer />
      </div>
    </section>
  );
}


const TableContainer = () => {
  const currencies = useCurrencies();
  const visibleCurrencies = currencies.filter(currency => currency.visible);

  return (
    <div
      className={cn(
        "border rounded-[20px] overflow-hidden",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.5)]",
      )}
    >
      <Table id="converter" className="">
        <TableHeader className="bg-gradient-to-b from-sky-600 to-blue-900">
          <TableRow className=" h-8">
            <TableHead className="font-poppins text-white text-xl">
              Currency
            </TableHead>
            <TableHead className="text-right font-poppins text-white sm:text-sm text-lg">
              Exchange Rate (in Euro)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleCurrencies.map((currency) => (
            <TableRow key={currency.name}>
              <TableCell className="flex items-center space-x-2">
                <Image
                  src={currency.img}
                  alt={`${currency.name} flag`}
                  width="30"
                  height="30"
                  className="rounded-full"
                />
                <span className="text-lg">{currency.name}</span>
              </TableCell>
              <TableCell className="text-right text-lg font-bold">
                {currency.rate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
