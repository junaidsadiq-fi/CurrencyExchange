"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
/* import TransferFeeRate from "@/data/TransferFeeRate";
 */
const TransferFeeRate = {
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
