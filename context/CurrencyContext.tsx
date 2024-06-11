"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import TransferFeeRate from "@/data/TransferFeeRate";

// Define the Currency type
type Currency = {
  name: string;
  img: string;
  rate: number;
  symbol: string;
  visible: boolean; // Add a visible flag
  transferFeeRate?: number[][]; // Optional field for transfer fee rates
};

// Create the context with an initial empty array of Currency
const CurrencyContext = createContext<Currency[]>([]);

// Provider component
export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const initialCurrencies: Currency[] = [
          { name: "USD", img: "/images/flags/United-States-Circle.svg", rate: 1, symbol: "$", visible: false },
          { name: "EUR", img: "/images/flags/European-Union-Circle.svg", rate: 0.92, symbol: "€", visible: false },
          { name: "GBP", img: "/images/flags/United-Kingdom-Circle.svg", rate: 0.81, symbol: "£", visible: false },
          // Ghana
          {
            name: "GHS",
            img: "/images/flags/Africa/SVG/Ghana-Circle.svg",
            rate: 16.2,
            symbol: "GH₵",
            visible: true,
            transferFeeRate: TransferFeeRate.Ghana.ranges,
          },
          // Nigeria
          {
            name: "NGN",
            img: "/images/flags/Africa/SVG/Nigeria-Circle.svg",
            rate: 1622,
            symbol: "₦",
            visible: true,
            transferFeeRate: TransferFeeRate.Nigeria.ranges,
          },
          // Marocco
          {
            name: "MAD",
            img: "/images/flags/Africa/SVG/Morocco-Circle.svg",
            rate: 10.84,
            symbol: "د.م.",
            visible: true,
            transferFeeRate: TransferFeeRate.Marocco.ranges,
          },
          // Tunisia
          {
            name: "TND",
            img: "/images/flags/Africa/SVG/Tunisia-Circle.svg",
            rate: 3.37,
            symbol: "د.ت",
            visible: true,
            transferFeeRate: TransferFeeRate.Tunisia.ranges,
          },
          // Pakistan
          {
            name: "PKR",
            img: "/images/flags/Asia/SVG/Pakistan-Circle.svg",
            rate: 305,
            symbol: "Rs",
            visible: true,
            transferFeeRate: TransferFeeRate.Pakistan.ranges,
          },
          // Colombia
          {
            name: "COP",
            img: "/images/flags/Americas/SVG/Colombia-Circle.svg",
            rate: 4220,
            symbol: "$",
            visible: true,
            transferFeeRate: TransferFeeRate.Colombia.ranges,
          },
          // Republic Dominicana
          {
            name: "DOP",
            img: "/images/flags/Americas/SVG/Dominican-Republic-Circle.svg",
            rate: 64.76,
            symbol: "RD$",
            visible: true,
            transferFeeRate: TransferFeeRate["Republica Dominicana"].ranges,
          },
          // Guinea Conakry
          {
            name: "GNF",
            img: "/images/flags/Africa/SVG/Guinea-Circle.svg",
            rate: 9316,
            symbol: "FG",
            visible: true,
            transferFeeRate: TransferFeeRate["Guinea Conakry"].ranges,
          },
          // Senegal
          {
            name: "XOF",
            img: "/images/flags/Africa/SVG/Senegal-Circle.svg",
            rate: 655.95,
            symbol: "CFA",
            visible: true,
            transferFeeRate: TransferFeeRate.Senegal.ranges,
          },
          // Gambia
          {
            name: "GMD",
            img: "/images/flags/Africa/SVG/Gambia-Circle.svg",
            rate: 70.25,
            symbol: "D",
            visible: true,
            transferFeeRate: TransferFeeRate.Gambia.ranges,
          },
          // Brazil
          {
            name: "BRL",
            img: "/images/flags/Brazil-Circle.svg",
            rate: 5.72,
            symbol: "R$",
            visible: true,
            transferFeeRate: TransferFeeRate.Brazil.ranges,
          },
          // Philippine
          {
            name: "PHP",
            img: "/images/flags/Asia/SVG/Philippines-Circle.svg",
            rate: 63.93,
            symbol: "₱",
            visible: true,
            transferFeeRate: TransferFeeRate.Philippine.ranges,
          },
          // Mali
          {
            name: "Xof",
            img: "/images/flags/Mali-Circle.svg",
            rate: 655.95,
            symbol: "CFA",
            visible: true,
            transferFeeRate: TransferFeeRate.Mali.ranges,
          },
          // India
          {
            name: "INR",
            img: "/images/flags/India-Circle.svg",
            rate: 90.67,
            symbol: "₹",
            visible: true,
            transferFeeRate: TransferFeeRate.India.ranges,
          },
          // Bangladesh
          {
            name: "BDT",
            img: "/images/flags/Asia/SVG/Bangladesh-Circle.svg",
            rate: 128.24,
            symbol: "৳",
            visible: true,
            transferFeeRate: TransferFeeRate.Bangladesh.ranges,
          },
          // Peru
          {
            name: "PEN",
            img: "/images/flags/Americas/SVG/Peru-Circle.svg",
            rate: 4037,
            symbol: "S/",
            visible: true,
            transferFeeRate: TransferFeeRate.Peru.ranges,
          },
          // Costa d'Avorio
          {
            name: "XoF",
            img: "/images/flags/Cote-dIvoire.png",
            rate: 655.95,
            symbol: "CFA",
            visible: true,
            transferFeeRate: TransferFeeRate["Costa Davorio"].ranges,
          },
          // Sri Lanka
          {
            name: "LKR",
            img: "/images/flags/Asia/SVG/Sri-Lanka-Circle.svg",
            rate: 329.99,
            symbol: "Rs",
            visible: true,
            transferFeeRate: TransferFeeRate.Srilanka.ranges,
          },
        ];

        const convertedCurrencies = initialCurrencies.map((currency) => ({
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
