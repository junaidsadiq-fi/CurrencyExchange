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
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
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
      const totalValue = convertedValue + fee;
      setConvertedAmount(parseFloat(convertedValue.toFixed(2)));
      setTotalAmount(parseFloat(totalValue.toFixed(2)));
    },
    [getCurrencyRate]
  );

  useEffect(() => {
    calculateConversion(amount, sendFee, fromCurrency, toCurrency);
  }, [amount, sendFee, fromCurrency, toCurrency, calculateConversion]);

  return (
    <Card className="border items-center shadow-2xl justify-center rounded-xl p-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-md">
      {/* <CardHeader>
        <CardTitle>Send Money</CardTitle>
      </CardHeader> */}
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="destinationCountry">Destination country</Label>
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
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to send"
              className="border rounded-full"
            />
          </div>
        </div>
        <div className="space-y-2 items-center justify-cente flex">
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
          <p id="rate" className="" >
            {getCurrencyRate(fromCurrency, toCurrency)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1">
          <Label className="font-bold" htmlFor="sendFee">Send Fee</Label>
          <IoMdInformationCircleOutline className="h-5 w-5 text-gray-700" />
          </div>
          <p
            id="sendFee"
            className="text-bold"
          >
            {sendFee}
          </p>
        </div>
        <div className="border-b-gray-600 border-[1px]"></div>

        <div className="flex items-center justify-between">
          <div className="">
          <Label className="font-bold" htmlFor="total">Total</Label>
          <p id="total" className="" >
            {totalAmount}
          </p>
          </div>
        <Button className="bg-gradient-to-b to-blue-800 from-sky-600 text-white border rounded-full">Calculate</Button>
        </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}