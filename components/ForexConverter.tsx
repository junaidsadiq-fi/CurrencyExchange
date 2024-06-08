"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useCurrencies } from "@/context/CurrencyContext";
import CurrencyConverter from "./CurrencyConverter";

export default function ForexConverter() {
  return (
    <section className="w-full relative">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="grid grid-cols-none lg:grid-cols-1 md:grid-cols-1 gap-8 relative z-10">
        <TableContainer />
        {/* <CurrencyConverter className="lg:hidden sm:block" /> */}
      </div>
    </section>
  );
}


const TableContainer = () => {
  const currencies = useCurrencies();

  const convertedCurrencies = currencies.map((currency) => ({
    ...currency,
    rate: Number(currency.rate),
  }));

  return (
    <div
      className={cn(
        "border rounded-[20px] overflow-hidden",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.5)]",
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <Table id="converter" className="">
        <TableHeader className="bg-gradient-to-b from-sky-600 to-blue-900">
          <TableRow className=" h-16">
            <TableHead className="font-poppins text-white text-xl">
              Currency
            </TableHead>
            <TableHead className="text-right font-poppins text-white sm:text-sm text-lg">
              Exchange Rate (in Euro)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {convertedCurrencies.map((currency) => (
            <TableRow key={currency.name}>
              <TableCell className="flex items-center space-x-2">
                <Image
                  src={currency.img}
                  alt={`${currency.name} flag`}
                  width="30"
                  height="20"
                />
                <span className="text-xl">{currency.name}</span>
              </TableCell>
              <TableCell className="text-right text-xl font-bold">
                {currency.rate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};


/* function ConverterContainer() {
  const [activeTool, setActiveTool] = useState("converter");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(100);
  const [transferFee, setTransferFee] = useState(5);
  const [transferTotal, setTransferTotal] = useState(105);
  const currencies = useCurrencies();

  const getCurrencyRate = useCallback((from, to) => {
    const fromCurrencyObj = currencies.find((currency) => currency.name === from);
    const toCurrencyObj = currencies.find((currency) => currency.name === to);

    if (fromCurrencyObj && toCurrencyObj) {
      const fromRate = parseFloat(fromCurrencyObj.rate) || 1;
      const toRate = parseFloat(toCurrencyObj.rate) || 1;
      return toRate / fromRate;
    }
    return 1; // Fallback rate if currencies are not found
  }, [currencies]);

  const handleToolChange = (tool) => {
    setActiveTool(tool);
  };

  const handleCurrencyChange = (currency, type) => {
    if (type === "from") {
      setFromCurrency(currency);
    } else {
      setToCurrency(currency);
    }
    calculateConversion(amount, fromCurrency, toCurrency);
  };

  const calculateConversion = useCallback((value, from, to) => {
    const rate = getCurrencyRate(from, to);
    const convertedValue = value * rate;
    setConvertedAmount(parseFloat(convertedValue.toFixed(2)));
  }, [getCurrencyRate]);

  const calculateTransfer = (amount, fee) => {
    const total = amount + fee;
    setTransferAmount(amount);
    setTransferFee(fee);
    setTransferTotal(total);
  };

  useEffect(() => {
    if (activeTool === "converter") {
      calculateConversion(amount, fromCurrency, toCurrency);
    } else {
      calculateTransfer(transferAmount, transferFee);
    }
  }, [activeTool, amount, calculateConversion, fromCurrency, toCurrency, transferAmount, transferFee]);

  return (
    <Card className="w-full bg-white max-h-[31rem] max-w-md rounded-3xl p-2 shadow-2xl">
      <CardHeader>
        <div className="rounded-full bg-gradient-to-b from-sky-600 to-blue-900 px-4 py-4 font-poppins text-xl text-white">
          Currency Converter
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="from">From</Label>
            <Select
              defaultValue={fromCurrency}
              onValueChange={(value) => handleCurrencyChange(value, "from")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent className="bg-slate-400">
                {currencies.map(({ name, img }) => (
                  <SelectItem key={name} value={name}>
                    <div className="flex items-center">
                      <Image src={img} alt={`${name} flag`} width={20} height={20} />
                      <span className="ml-2">{name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="to">To</Label>
            <Select
              defaultValue={toCurrency}
              onValueChange={(value) => handleCurrencyChange(value, "to")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent className="bg-gray-200">
                {currencies.map(({ name, img }) => (
                  <SelectItem key={name} value={name}>
                    <div className="flex items-center">
                      <Image src={img} alt={`${name} flag`} width={20} height={20} />
                      <span className="ml-2">{name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="Enter amount"
            className="rounded-full"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            className="bg-gradient-to-b from-sky-600 to-blue-900 py-2 px-4 border rounded-full hover:bg-blue-500 text-white"
            onClick={() => calculateConversion(amount, fromCurrency, toCurrency)}
          >
            Convert
          </Button>
        </div>
        <div className="mt-4">
          <Label htmlFor="converted">Converted Amount</Label>
          <Input
            id="converted"
            type="text"
            value={convertedAmount}
            readOnly
            className="rounded-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
 */
