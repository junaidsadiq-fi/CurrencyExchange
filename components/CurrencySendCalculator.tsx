"use client";
import { useCurrencies } from "@/context/CurrencyContext";
import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function CurrencySendCalculator({ className }: { className?: string }) {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("GHS");
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [sendFee, setSendFee] = useState(10); // Example sending fee
  const [totalAmount, setTotalAmount] = useState(0);
  const currencies = useCurrencies();

  const getCurrencyRate = useCallback(
    (from, to) => {
      const fromCurrencyObj = currencies.find((currency) => currency.name === from);
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
    calculateConversion(amount, sendFee, fromCurrency, toCurrency);
  };

  const calculateConversion = useCallback(
    (value, fee, from, to) => {
      const rate = getCurrencyRate(from, to);
      const convertedValue = value * rate;
      const convertedFee = fee * rate;
      const totalValue = convertedValue + convertedFee;
      setConvertedAmount(parseFloat(convertedValue.toFixed(2)));
      setTotalAmount(parseFloat(totalValue.toFixed(2)));
    },
    [getCurrencyRate]
  );

  useEffect(() => {
    calculateConversion(amount, sendFee, fromCurrency, toCurrency);
  }, [amount, sendFee, fromCurrency, toCurrency, calculateConversion]);

  const calculateSendFee = useCallback(
    (country, amount) => {
      const feeStructure = {
        Ghana: { ranges: [[1, 50, 3.5], [50, 100, 4], [100, 150, 5], [150, 200, 6], [200, 300, 7], [300, 400, 8], [400, 500, 12], [500, 600, 14], [600, 700, 17.5], [700, 800, 20.5], [800, 900, 21.5], [900, 1000, 22.5]] },
        Nigeria: { ranges: [[1, 50, 4.5], [50, 100, 5], [100, 200, 8], [200, 300, 12], [300, 400, 14], [400, 500, 14], [500, 600, 22], [600, 700, 25], [700, 800, 27], [800, 900, 28], [900, 1000, 29]] },
        Marocco: { ranges: [[1, 100, 3.8], [100, 200, 7.5], [200, 300, 9.9], [300, 400, 11.5], [400, 500, 12.9], [500, 600, 17.4], [600, 700, 20], [700, 800, 22], [800, 900, 25], [900, 1000, 29.5]] },
        Tunisia: { ranges: [[1, 100, 4.5], [100, 200, 8.5], [200, 300, 10], [300, 400, 12], [400, 500, 14], [500, 600, 17], [600, 700, 20], [700, 800, 23], [800, 900, 25], [900, 1000, 28]] },
        Pakistan: { ranges: [[1, 500, 3.9], [500, 1000, 6.9]] },
        Colombia: { ranges: [[1, 200, 4], [200, 300, 6], [300, 400, 8], [400, 500, 10], [500, 600, 12], [600, 700, 14], [700, 800, 16], [800, 900, 18], [900, 1000, 20]] },
        "Republica Dominicana": { ranges: [[1, 200, 4], [200, 600, 6], [600, 700, 7], [700, 800, 8], [800, 900, 9], [900, 1000, 10]] },
        "Guinea Conakry": { ranges: [[1, 100, 4], [100, 200, 5], [200, 400, 8], [400, 500, 10], [500, 600, 10], [600, 800, 15], [900, 100, 20]] },
        Senegal: { ranges: [[1, 100, 2.7], [100, 200, 4], [200, 400, 6], [400, 500, 10], [500, 600, 12], [600, 700, 13], [700, 800, 16], [800, 900, 17], [900, 1000, 22]] },
        Gambia: { ranges: [[1, 200, 4], [200, 300, 5], [300, 500, 8], [500, 700, 10], [700, 800, 14], [800, 900, 15], [900, 1000, 18]] },
        Brazil: { ranges: [[1, 200, 4], [200, 300, 5.88], [300, 400, 7.84], [400, 500, 9.8], [500, 600, 11.76], [600, 700, 13.73], [700, 800, 15.69], [800, 900, 17.65], [900, 1000, 19.61]] },
        Philippine: { ranges: [[1, 100, 4.8], [100, 500, 5.5], [500, 1000, 7.5]] },
        Mali: { ranges: [[1, 200, 2.9], [200, 600, 5.9], [600, 1000, 9.9]] },
        Turkey: { ranges: [[1, 100, 4], [100, 200, 8], [200, 300, 12], [300, 400, 16], [400, 500, 20], [500, 600, 24], [600, 700, 28], [700, 800, 32], [800, 900, 36], [900, 1000, 38.5]] },
        India: { ranges: [[1, 100, 3.5], [100, 500, 3.9], [500, 1000, 6.9]] },
        Bangladesh: { ranges: [[1, 500, 3.9], [500, 1000, 6.9]] },
        Peru: { ranges: [[1, 100, 3], [100, 400, 4.9], [400, 500, 7.5], [500, 600, 9], [600, 700, 10.5], [700, 800, 16], [800, 900, 18], [900, 1000, 20]] },
        "Costa Davorio": { ranges: [[1, 200, 2.9], [200, 600, 5.9], [600, 1000, 9.9]] },
        Srilanka: { ranges: [[1, 400, 5], [500, 1000, 6]] },
      };

      const fees = feeStructure[country]?.ranges;
      if (fees) {
        for (const [min, max, fee] of fees) {
          if (amount >= min && amount <= max) {
            return fee;
          }
        }
      }
      return 0;
    },
    []
  );
  const calculateRate = (country, amount) => {
    const countryFees = fees[country];
    if (!countryFees) return 0; // return 0 if the country is not in the fees object
  
    for (let range of countryFees.ranges) {
      if (amount >= range[0] && amount <= range[1]) {
        return range[2]; // return the rate if the amount is within the range
      }
    }
  
    return 0; // return 0 if the amount is not within any range
  };

  useEffect(() => {
    const fee = calculateSendFee(toCurrency, amount);
    setSendFee(fee);
    calculateConversion(amount, fee, fromCurrency, toCurrency);
  }, [amount, toCurrency, calculateSendFee, fromCurrency, calculateConversion]);

  return (
    <Card className="border items-center shadow-2xl justify-center rounded-xl p-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-md">
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="destinationCountry">Destination country</Label>
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
        <div className="space-y-2 items-center justify-center flex">
          <div className="flex-1">
            <Label htmlFor="sendAmountCurrency">You send</Label>
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
                      <Image src={img} alt={`${name} flag`} width={20} height={20} />
                      <span className="ml-2">{name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 mb-4 ml-2">
            <Label htmlFor="sendAmount">Amount</Label>
            <Input
              id="sendAmount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              placeholder="Enter amount to send"
              className="border rounded-full"
            />
          </div>
        </div>
        <div className="space-y-2 items-center justify-center flex">
          <div className="flex-1">
            <Label htmlFor="recipientGetsCurrency">Recipient gets</Label>
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
          <div className="flex-1 items-center mb-4 justify-center ml-2">
            <Label htmlFor="recipientGets">Amount</Label>
            <Input
              id="recipientGets"
              value={convertedAmount}
              placeholder="Enter recipient amount"
              readOnly
              className="border rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1">
            <Label className="font-bold" htmlFor="sendFee">Rate</Label>
            <IoMdInformationCircleOutline className="h-5 w-5 text-gray-700" />
          </div>
          <p id="rate" className="">
            {getCurrencyRate(fromCurrency, toCurrency).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1">
            <Label className="font-bold" htmlFor="sendFee">Send Fee</Label>
            <IoMdInformationCircleOutline className="h-5 w-5 text-gray-700" />
          </div>
          <p id="sendFee" className="text-bold">
            {sendFee}
          </p>
        </div>
        <div className="border-b-gray-600 border-[1px]"></div>

        <div className="flex items-center justify-between">
          <div className="">
            <Label className="font-bold" htmlFor="total">Total</Label>
            <p id="total" className="">
              {totalAmount}
            </p>
          </div>
          <Button
            className="bg-gradient-to-b to-blue-800 from-sky-600 text-white border rounded-full"
            onClick={() => calculateConversion(amount, sendFee, fromCurrency, toCurrency)}
          >
            Calculate
          </Button>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}