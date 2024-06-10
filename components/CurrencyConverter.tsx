"use client";
import { useCurrencies } from "@/context/CurrencyContext";
import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
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
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("GHS");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
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
      return 1; 
    },
    [currencies]
  );

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

  useEffect(() => {
    calculateConversion(amount, fromCurrency, toCurrency);
  }, [amount, fromCurrency, toCurrency, calculateConversion]);

  const handleInputChange = (event) => {
    const value = parseFloat(event.target.value);
    setAmount(value);
    calculateConversion(value, fromCurrency, toCurrency);
  };

  return (
    <Card
      className={cn(
        "w-full rounded-xl shadow-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-gray-200 border-opacity-25",
        className
      )}
    >
      <BorderBeam />
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
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
                    <Image src={img} alt={`${name} flag`} width={20} height={20} />
                    <span className="ml-2">{name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          </div>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Label htmlFor="converted">Converted Amount</Label>
            <Input
              id="converted"
              type="text"
              value={`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}
              readOnly
              className="rounded-full"
            />
          </div>
          <Button
            className="bg-gradient-to-b from-sky-600 to-blue-900 py-2 px-4 border rounded-full hover:bg-blue-500 text-white"
            onClick={() =>
              calculateConversion(amount, fromCurrency, toCurrency)
            }
          >
            Convert
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CurrencyConverter;
