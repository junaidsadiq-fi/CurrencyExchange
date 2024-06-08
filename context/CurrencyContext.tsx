"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const currency_api = process.env.NEXT_PUBLIC_CURRENCY_API_KEY;

// Define the Currency type
type Currency = {
  name: string;
  img: string;
  rate: number;
  symbol: string;
};

// Create the context with an initial empty array of Currency
const CurrencyContext = createContext<Currency[]>([]);

// Provider component
export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        // Define the initial currencies with names, images, symbols, and rates
        const initialCurrencies: Currency[] = [
          //Africa
          {
            name: "NGN",
            img: "/images/flags/Africa/SVG/Nigeria-Circle.svg",
            rate: 0.000623761,
            symbol: "₦",
          }, // €1 = ₦1,603.1783
          {
            name: "GNF",
            img: "/images/flags/Africa/SVG/Guinea-Circle.svg",
            rate: 0.000108977,
            symbol: "FG",
          }, // €1 = FG
          {
            name: "XOF",
            img: "/images/flags/Africa/SVG/Senegal-Circle.svg",
            rate: 0.00152449,
            symbol: "CFA",
          }, // €1 = CFA
          {
            name: "GMD",
            img: "/images/flags/Africa/SVG/Gambia-Circle.svg",
            rate: 0.0136438,
            symbol: "D",
          }, // €1 = D151.495
          {
            name: "MGA",
            img: "/images/flags/Africa/SVG/Madagascar-Circle.svg",
            rate: 0.000206651,
            symbol: "Ar",
          }, // €1 = Ar
          //America
          {
            name: "USD",
            img: "/images/flags/United-States-Circle.svg",
            rate: 0.92,
            symbol: "$",
          }, // €1 = $0.92
          {
            name: "ARS",
            img: "/images/flags/Argentina-Circle.svg",
            rate: 0.001,
            symbol: "$",
          }, // €1 = $0.001
          {
            name: "CAD",
            img: "/images/flags/Canada-Circle.svg",
            rate: 0.67,
            symbol: "C$",
          }, // €1 = C$0.67
          {
            name: "BRL",
            img: "/images/flags/Brazil-Circle.svg",
            rate: 0.17,
            symbol: "R$",
          }, // €1 = R$0.17
          {
            name: "PEN",
            img: "/images/flags/Americas/SVG/Peru-Circle.svg",
            rate: 0.33,
            symbol: "S/",
          }, // €1 = S/0.33
          {
            name: "MXN",
            img: "/images/flags/Mexico-Circle.svg",
            rate: 0.05,
            symbol: "$",
          }, // €1 = $0.05
          {
            name: "COP",
            img: "/images/flags/Americas/SVG/Colombia-Circle.svg",
            rate: 0.33,
            symbol: "$",
          }, // €1 = $0.33
          //Asia
          {
            name: "PKR",
            img: "/images/flags/Asia/SVG/Pakistan-Circle.svg",
            rate: 0.003,
            symbol: "Rs",
          }, // €1 = Rs0.003
          {
            name: "INR",
            img: "/images/flags/India-Circle.svg",
            rate: 0.011,
            symbol: "₹",
          }, // €1 = ₹0.011
          {
            name: "CNY",
            img: "/images/flags/China-Circle.svg",
            rate: 0.127,
            symbol: "¥",
          }, // €1 = ¥0.127
          {
            name: "PHP",
            img: "/images/flags/Asia/SVG/Philippines-Circle.svg",
            rate: 0.33,
            symbol: "₱",
          }, // €1 = ₱0.33
          {
            name: "LKR",
            img: "/images/flags/Asia/SVG/Sri-Lanka-Circle.svg",
            rate: 1.325,
            symbol: "Rs",
          }, // €1 = Rs1.325
          {
            name: "ZAR",
            img: "/images/flags/South-Africa-Circle.svg",
            rate: 0.049,
            symbol: "R",
          }, // €1 = R0.049
          {
            name: "TRY",
            img: "/images/flags/Turkey-Circle.svg",
            rate: 0.028,
            symbol: "₺",
          }, // €1 = ₺0.028
          {
            name: "RUB",
            img: "/images/flags/Russia-Circle.svg",
            rate: 0.01,
            symbol: "₽",
          }, // €1 = ₽0.01
          //Europe
          {
            name: "EUR",
            img: "/images/flags/European-Union-Circle.svg",
            rate: 1,
            symbol: "€",
          }, // €1 = €1
          {
            name: "GBP",
            img: "/images/flags/United-Kingdom-Circle.svg",
            rate: 1.17,
            symbol: "£",
          }, // €1 = £1.17
          //middle east
          {
            name: "SAR",
            img: "/images/flags/Saudi-Arabia-Circle.svg",
            rate: 0.25,
            symbol: "﷼",
          }, // €1 = ﷼0.25
          {
            name: "AED",
            img: "/images/flags/United-Arab-Emirates-Circle.svg",
            rate: 0.25,
            symbol: "د.إ",
          }, // €1 = د.إ0.25
          //oceania
          {
            name: "AUD",
            img: "/images/flags/Australia-Circle.svg",
            rate: 0.61,
            symbol: "A$",
          }, // €1 = A$0.61
          {
            name: "JPY",
            img: "/images/flags/Japan-Circle.svg",
            rate: 0.01,
            symbol: "¥",
          }, // €1 = ¥0.01
          {
            name: "NZD",
            img: "/images/flags/New-Zealand-Circle.svg",
            rate: 0.57,
            symbol: "NZ$",
          }, // €1 = NZ$0.57
        ];
        const convertedCurrencies = initialCurrencies.map(currency => ({
          ...currency,
          rate: Number(currency.rate.toFixed(4)),
        }));
        setCurrencies(convertedCurrencies);
      } catch (error) {
        console.error("Error fetching currency rates", error);
      }
    };

    fetchCurrencyRates();
  }, []);

  return (
    <CurrencyContext.Provider value={currencies}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom hook to use the currency context
export const useCurrencies = () => {
  return useContext(CurrencyContext);
};
