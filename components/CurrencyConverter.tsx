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

function CurrencyConverter({ className }: { className?: string }) {
  const [activeTool, setActiveTool] = useState("converter");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(100);
  const [transferFee, setTransferFee] = useState(5);
  const [transferTotal, setTransferTotal] = useState(105);
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

  const calculateConversion = useCallback(
    (value, from, to) => {
      const rate = getCurrencyRate(from, to);
      const convertedValue = value * rate;
      setConvertedAmount(parseFloat(convertedValue.toFixed(2)));
    },
    [getCurrencyRate]
  );

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
  }, [
    activeTool,
    amount,
    calculateConversion,
    fromCurrency,
    toCurrency,
    transferAmount,
    transferFee,
  ]);

  return (
    <Card
      className={cn(
        "w-full bg-white max-h-[29rem] max-w-md rounded-3xl shadow-2xl",
        className
      )}
    >
      <CardHeader>
        <div className="rounded-full bg-gradient-to-b from-sky-600 to-blue-900 px-4 py-2 font-poppins text-xl text-white">
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
        <div className="mt-4 flex justify-end">
          <Button
            className="bg-gradient-to-b from-sky-600 to-blue-900 py-2 px-4 border rounded-full hover:bg-blue-500 text-white"
            onClick={() =>
              calculateConversion(amount, fromCurrency, toCurrency)
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
      </CardContent>
    </Card>
  );
}

export default CurrencyConverter;
