"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

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
              apikey: 'cur_live_7U2crTn9NMvMG2FiJDL1Nvy88oNWCPao4pluKhgN',
              base_currency: 'PKR',
            },
          }
        );
        console.log('API Response Data:', response.data);
        const rates = response.data.data;
        const initialCurrencies: Omit<Currency, 'rate'>[] = [
          {
            name: 'USD',
            img: '/images/flags/Americas/Svg/United States-Circle.svg',
          },
          {
            name: 'EUR',
            img: '/images/flags/Europe/Svg/European Union-Circle.svg',
          },
          {
            name: 'GBP',
            img: '/images/flags/Europe/Svg/United Kingdom-Circle.svg',
          },
          {
            name: 'SAR',
            img: '/images/flags/Asia/Svg/Saudi Arabia-Circle.svg',
          },
          {
            name: 'AED',
            img: '/images/flags/Asia/Svg/United Arab Emirates-Circle.svg',
          },
          {
            name: 'AUD',
            img: '/images/flags/Australia and Oceania/Svg/Australia-Circle.svg',
          },
          {
            name: 'CAD',
            img: '/images/flags/Americas/Svg/Canada-Circle.svg',
          },
          {
            name: 'JPY',
            img: '/images/flags/Asia/Svg/Japan-Circle.svg',
          },
          {
            name: 'TRY',
            img: '/images/flags/Asia/Svg/Turkey-Circle.svg',
          },
          {
            name: 'INR',
            img: '/images/flags/Asia/Svg/India-Circle.svg',
          },
          {
            name: 'CNY',
            img: '/images/flags/Asia/Svg/China-Circle.svg',
          },
          {
            name: 'NZD',
            img: '/images/flags/Australia and Oceania/Svg/New Zealand-Circle.svg',
          },
          {
            name: 'ZAR',
            img: '/images/flags/Africa/Svg/South Africa-Circle.svg',
          },
          {
            name: 'BRL',
            img: '/images/flags/Americas/Svg/Brazil-Circle.svg',
          },
          {
            name: 'ARS',
            img: '/images/flags/Americas/Svg/Argentina-Circle.svg',
          },
          {
            name: 'MXN',
            img: '/images/flags/Americas/Svg/Mexico-Circle.svg',
          },
          {
            name: 'RUB',
            img: '/images/flags/Asia/Svg/Russia-Circle.svg',
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
