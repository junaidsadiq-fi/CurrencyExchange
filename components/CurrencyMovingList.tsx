"use client";
import React from "react";
import Image from "next/image";
import Marquee from "./ui/Marquee";
import { cn } from "@/lib/utils";
import LinearGradient from "./ui/linear-gradient";
import { useCurrencies } from "@/context/CurrencyContext";

// Currency Card component
const CurrencyCard = ({
  img,
  name,
  rate,
}: {
  img: string;
  name: string;
  rate: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-40 cursor-pointer border-white   overflow-hidden p-2"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="52"
          height="52"
          alt=""
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
  const currencies = useCurrencies();

  return (
    <div className="relative bg-gradient-to-b from-blue-700 to-blue-800 flex h-full my-16 w-full flex-col items-center justify-center overflow-hidden rounded-lg border-y-gray-200 bg-background py-2 ">
      {/* <LinearGradient /> */}
      <Marquee pauseOnHover className="[--duration:40s]">
        {currencies.map((currency) => (
          <CurrencyCard key={currency.name} {...currency} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default CurrencyMovingList;
