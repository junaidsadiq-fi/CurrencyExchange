import React, { useCallback, useEffect, useState } from "react";
import { useCurrencies } from "@/context/CurrencyContext";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function CurrencySendCalculator({ className }: { className?: string }) {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCountry, setToCountry] = useState("GHS"); // Use currency code to match the context data
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [sendFee, setSendFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const currencies = useCurrencies();

  const getCurrencyRate = useCallback(
    (from, to) => {
      const fromCurrencyObj = currencies.find((currency) => currency.name === from);
      const toCurrencyObj = currencies.find((currency) => currency.name === to);

      if (fromCurrencyObj && toCurrencyObj) {
        const fromRate = parseFloat(fromCurrencyObj.rate.toString()) || 1;
        const toRate = parseFloat(toCurrencyObj.rate.toString()) || 1;
        return toRate / fromRate;
      }
      return 1;
    },
    [currencies]
  );

  const calculateSendFee = useCallback(
    (country, amount) => {
      const countryData = currencies.find((currency) => currency.name === country);
      if (countryData && countryData.transferFeeRate) {
        const fees = countryData.transferFeeRate;
        for (const [min, max, fee] of fees) {
          if (amount >= min && (max === null || amount <= max)) {
            return fee;
          }
        }
        // Default fee for amounts over the highest range
        return fees[fees.length - 1][2];
      }
      return 0;
    },
    [currencies]
  );

  const handleInputChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  const calculateConversion = useCallback(
    (value, from, to, fee) => {
      const rate = getCurrencyRate(from, to);
      const convertedValue = value * rate;
      const totalValue = convertedValue + fee; // Adding sendFee to the converted amount
      setConvertedAmount(parseFloat(convertedValue.toFixed(2)));
      setTotalAmount(parseFloat(totalValue.toFixed(2)));
    },
    [getCurrencyRate]
  );

  const handleCurrencyChange = (currency, type) => {
    if (type === "from") {
      setFromCurrency(currency);
    }
  };

  useEffect(() => {
    const fee = calculateSendFee(toCountry, amount);
    setSendFee(fee);
    calculateConversion(amount, fromCurrency, toCountry, fee);
  }, [amount, toCountry, calculateSendFee, fromCurrency, calculateConversion]);

  return (
    <Card className={`border items-center shadow-2xl justify-center rounded-xl p-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-md ${className}`}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="destinationCountry">Destination Country</Label>
          <Select
            defaultValue={toCountry}
            onValueChange={(value) => setToCountry(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent className="bg-gray-200">
                {currencies.map((currency) => (
                  <SelectItem key={currency.name} value={currency.name}>
                    <div className="flex items-center">
                      <Image src={currency.img} alt={currency.name} width={20} height={20} className="mr-2" />
                      {currency.name}
                    </div>
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 items-center justify-center flex">
          <div className="flex-1">
            <Label htmlFor="sendAmountCurrency">You Send</Label>
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
              onChange={handleInputChange}
              placeholder="Enter amount to send"
              className="border rounded-full"
            />
          </div>
        </div>
        <div className="space-y-2 items-center justify-center flex">
          <div className="flex-1">
            <Label htmlFor="recipientGetsCurrency">Recipient Gets</Label>
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
            <Label className="font-bold" htmlFor="exchangeRate">Exchange Rate</Label>
            <IoMdInformationCircleOutline className="h-5 w-5 text-gray-700" />
          </div>
          <p id="rate" className="">
            {getCurrencyRate(fromCurrency, toCountry).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1">
            <Label className="font-bold" htmlFor="sendFee">Transfer Fee</Label>
            <IoMdInformationCircleOutline className="h-5 w-5 text-gray-700" />
          </div>
          <p id="sendFee" className="text-bold">
            {sendFee.toFixed(2)}
          </p>
        </div>
        <div className="border-b-gray-600 border-[1px]"></div>

        <div className="flex items-center justify-between">
          <div className="">
            <Label className="font-bold" htmlFor="total">Total</Label>
            <p id="total" className="">
              {totalAmount.toFixed(2)}
            </p>
          </div>
          <Button
            className="bg-gradient-to-b to-blue-800 from-sky-600 text-white border rounded-full"
            onClick={() => calculateConversion(amount, fromCurrency, toCountry, sendFee)}
          >
            Calculate
          </Button>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
