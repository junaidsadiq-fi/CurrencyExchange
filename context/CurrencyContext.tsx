"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const currency_api = process.env.NEXT_PUBLIC_CURRENCY_API_KEY;
// Define the Currency type
type Currency = {
  name: string;
  img: string;
  rate: string;
};

// Create the context with an initial empty array of Currency
const CurrencyContext = createContext<Currency[]>([]);

// Provider component
export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await axios.get(
          'https://api.currencyapi.com/v3/latest',
          {
            params: { 
              apikey: currency_api,
              base_currency: 'PKR',
            },
          }
        );
        console.log('API Response Data:', response.data);
        const rates = response.data.data;
        const initialCurrencies: Omit<Currency, 'rate'>[] = [
          {
            name: 'USD',
            img: '/images/flags/United-States-Circle.svg',
          },
          {
            name: 'EUR',
            img: '/images/flags/European-Union-Circle.svg',
          },
          {
            name: 'GBP',
            img: '/images/flags/United-Kingdom-Circle.svg',
          },
          {
            name: 'SAR',
            img: '/images/flags/Saudi-Arabia-Circle.svg',
          },
          {
            name: 'AED',
            img: '/images/flags/United-Arab-Emirates-Circle.svg',
          },
          {
            name: 'AUD',
            img: '/images/flags/Australia-Circle.svg',
          },
          {
            name: 'CAD',
            img: '/images/flags/Canada-Circle.svg',
          },
          {
            name: 'JPY',
            img: '/images/flags/Japan-Circle.svg',
          },
          {
            name: 'TRY',
            img: '/images/flags/Turkey-Circle.svg',
          },
          {
            name: 'INR',
            img: '/images/flags/India-Circle.svg',
          },
          {
            name: 'CNY',
            img: '/images/flags/China-Circle.svg',
          },
          {
            name: 'NZD',
            img: '/images/flags/New-Zealand-Circle.svg',
          },
          {
            name: 'ZAR',
            img: '/images/flags/South-Africa-Circle.svg',
          },
          {
            name: 'BRL',
            img: '/images/flags/Brazil-Circle.svg',
          },
          {
            name: 'ARS',
            img: '/images/flags/Argentina-Circle.svg',
          },
          {
            name: 'MXN',
            img: '/images/flags/Mexico-Circle.svg',
          },
          {
            name: 'RUB',
            img: '/images/flags/Russia-Circle.svg',
          },
        ];

        const updatedCurrencies = initialCurrencies.map((currency) => {
            const rate = rates[currency.name]?.value;
            // Calculate the reciprocal and format it
            const formattedRate = rate ? (1 / rate).toFixed(2) : 'N/A';
            return {
              ...currency,
              rate: formattedRate,
            };
          });
  
          setCurrencies(updatedCurrencies);
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
