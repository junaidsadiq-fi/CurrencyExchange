"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const currency_api = process.env.NEXT_PUBLIC_CURRENCY_API_KEY;
// Define the Currency type
type Currency = {
  name: string;
  img: string;
  rate: number;
};

// Create the context with an initial empty array of Currency
const CurrencyContext = createContext<Currency[]>([]);

// Provider component
export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        /* const response = await axios.get(
          'https://api.currencyapi.com/v3/latest',
          {
            params: { 
              apikey: currency_api,
              base_currency: 'PKR',
            },
          }
        );
        console.log('API Response Data:', response.data);
        const rates = response.data.data; */
        const initialCurrencies: Currency[] = [
          {
            name: 'USD',
            img: '/images/flags/United-States-Circle.svg',
            rate: 278.39
          },
          {
            name: 'EUR',
            img: '/images/flags/European-Union-Circle.svg',
            rate: 302.99
          },
          {
            name: 'GBP',
            img: '/images/flags/United-Kingdom-Circle.svg',
            rate: 355.63
          },
          {
            name: 'SAR',
            img: '/images/flags/Saudi-Arabia-Circle.svg',
            rate: 74.32
          },
          {
            name: 'AED',
            img: '/images/flags/United-Arab-Emirates-Circle.svg',
            rate: 75.83
          },
          {
            name: 'AUD',
            img: '/images/flags/Australia-Circle.svg',
            rate: 185.08
          },
          {
            name: 'CAD',
            img: '/images/flags/Canada-Circle.svg',
            rate: 203.58
          },
          {
            name: 'JPY',
            img: '/images/flags/Japan-Circle.svg',
            rate: 1.79
          },
          {
            name: 'TRY',
            img: '/images/flags/Turkey-Circle.svg',
            rate: 8.53
          },
          {
            name: 'INR',
            img: '/images/flags/India-Circle.svg',
            rate:  3.34
          },
          {
            name: 'CNY',
            img: '/images/flags/China-Circle.svg',
            rate: 38.47
          },
          {
            name: 'NZD',
            img: '/images/flags/New-Zealand-Circle.svg',
            rate: 171.92
          },
          {
            name: 'ZAR',
            img: '/images/flags/South-Africa-Circle.svg',
            rate: 14.87
          },
          {
            name: 'BRL',
            img: '/images/flags/Brazil-Circle.svg',
            rate: 52.63
          },
          {
            name: 'ARS',
            img: '/images/flags/Argentina-Circle.svg',
            rate: 0.31
          },
          {
            name: 'MXN',
            img: '/images/flags/Mexico-Circle.svg',
            rate: 15.64
          },
          {
            name: 'RUB',
            img: '/images/flags/Russia-Circle.svg',
            rate: 3.14
          },
        ];

        /* const updatedCurrencies = initialCurrencies.map((currency) => {
            const rate = rates[currency.name]?.value;
            // Calculate the reciprocal and format it
            const formattedRate = rate ? (1 / rate).toFixed(2) : 'N/A';
            return {
              ...currency,
              rate: formattedRate,
            };
          }); */
  
          setCurrencies(initialCurrencies);
        } catch (error) {
          console.error('Error fetching currency rates', error);
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
