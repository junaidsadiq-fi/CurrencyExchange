"use client";
import { useCurrencies } from "@/context/CurrencyContext";
import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
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
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./ui/border-beam";

function CurrencyConverter({ className }: { className?: string }) {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [transferFee, setTransferFee] = useState(5);
  const [totalAmount, setTotalAmount] = useState(0);
  const currencies = useCurrencies();

  const getCurrencyRate = useCallback(
    (from, to) => {
      const fromCurrencyObj = currencies.find(
        (currency) => currency.name === from
      );
      const toCurrencyObj = currencies.find((currency) => currency.name === to);

      if (fromCurrencyObj && toCurrencyObj) {
        const fromRate = parseFloat(fromCurrencyObj.rate) || 1;
        const toRate = parseFloat(toCurrencyObj.rate) || 1;
        return toRate / fromRate;
      }
      return 1; // Fallback rate if currencies are not found
    },
    [currencies]
  );

  const handleCurrencyChange = (currency, type) => {
    if (type === "from") {
      setFromCurrency(currency);
    } else {
      setToCurrency(currency);
    }
    calculateConversion(amount, transferFee, fromCurrency, toCurrency);
  };

  const calculateConversion = useCallback(
    (value, fee, from, to) => {
      const rate = getCurrencyRate(from, to);
      const convertedValue = value * rate;
      const totalValue = convertedValue + fee;
      setConvertedAmount(parseFloat(convertedValue.toFixed(2)));
      setTotalAmount(parseFloat(totalValue.toFixed(2)));
    },
    [getCurrencyRate]
  );

  useEffect(() => {
    calculateConversion(amount, transferFee, fromCurrency, toCurrency);
  }, [amount, transferFee, fromCurrency, toCurrency, calculateConversion]);

  return (
    <Card
      className={cn(
        "w-full max-h-[40rem] sm:max-w-md lg:max-w-full rounded-xl shadow-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-gray-200 border-opacity-25",
        className
      )}
    >
       <BorderBeam />
      <CardHeader>
        <div className="rounded-full font-poppins text-2xl text-gray-600 font-bold">
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
              <SelectContent className="bg-gray-200">
                {currencies.map(({ name, img }) => (
                  <SelectItem key={name} value={name}>
                    <div className="flex items-center">
                      <Image
                        src={img}
                        alt={`${name} flag`}
                        width={20}
                        height={20}
                      />
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
                      <Image
                        src={img}
                        alt={`${name} flag`}
                        width={20}
                        height={20}
                      />
                      <span className="ml-2">{name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="">
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
        <div className="">
          <Label htmlFor="fee">Transfer Fee</Label>
          <Input
            id="fee"
            type="number"
            value={transferFee}
            onChange={(e) => setTransferFee(parseFloat(e.target.value))}
            placeholder="Enter transfer fee"
            className="rounded-full"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            className="bg-gradient-to-b from-sky-600 to-blue-900 py-2 px-4 border rounded-full hover:bg-blue-500 text-white"
            onClick={() =>
              calculateConversion(amount, transferFee, fromCurrency, toCurrency)
            }
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
        <div className="mt-4">
          <Label htmlFor="total">Total Amount (with fee)</Label>
          <Input
            id="total"
            type="text"
            value={totalAmount}
            readOnly
            className="rounded-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default CurrencyConverter;
