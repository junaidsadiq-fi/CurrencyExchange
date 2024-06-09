"use client";
import React from "react";
import Image from "next/image";
import Marquee from "./ui/Marquee";
import { cn } from "@/lib/utils";
import { useCurrencies } from "@/context/CurrencyContext";

type Currency = {
  name: string;
  rate: number | string;
  img: string;
};
// Currency Card component
const CurrencyCard = ({
  img,
  name,
  rate,
}: {
  img: string;
  name: string;
  rate: string | number; 
}) => {
  return (
    <figure
      className={cn(
        "relative w-40 cursor-pointer border-white overflow-hidden px-2 lg:py-1"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full lg:w-12 lg:h-12  md:h-10 md:w-10 "
          width="40"
          height="40"
          alt="country flag"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-white dark:text-white">
            {name}
          </figcaption>
          <p className="text-xl font-extrabold text-white  dark:text-white/40">{rate}</p>
        </div>
      </div>
    </figure>
  );
};

// Marquee Section
const CurrencyMovingList = () => {
  const currencies = useCurrencies() as Currency[];
  const visibleCurrencies = currencies.filter((currency) => currency.visible);
  return (
    // xl:my-12 sm:my-2 md:my-4 lg:my-6
    <div className="
    relative bg-gradient-to-b from-sky-600 to-blue-900 flex h-full
      w-full flex-col items-center justify-center overflow-hidden rounded-lg border-y-gray-200 bg-background py-1 ">
      <Marquee pauseOnHover className="[--duration:40s]">
        {visibleCurrencies.map((currency) => (
          <CurrencyCard key={currency.name} {...currency} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
};

export default CurrencyMovingList;
