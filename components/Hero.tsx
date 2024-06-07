"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import CurrencyMovingList from "./CurrencyMovingList";
import CurrencyConverter from "./CurrencyConverter";

export default function Hero() {
  return (
    <div>
      <div className="w-full flex justify-between items-center bg-background min-h-[calc(100vh-15vh)]">
        <div className="w-full max-w-screen-xl relative px-4 md:px-8 lg:px-12 mx-auto flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 gap-8 2xl:gap-16 items-center lg:grid-cols-2">
            <div className="flex justify-center lg:order-last lg:ml-32 items-center lg:items-end">
              <Image
                src="/banner.png"
                alt="Currency Exchange Illustration"
                width={750}
                height={750}
                className="w-full h-auto sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl order-first lg:hidden"
              />
              <CurrencyConverter className=" hidden lg:block" />
            </div>
            <div className="flex flex-col pb-8 gap-4 items-center lg:items-start max-w-full lg:max-w-xl xl:max-w-4xl xl:mr-80 2xl:max-w-8xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col gap-4 text-center lg:pt-24 lg:text-left 2xl:gap-16"
              >
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tigh md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tighter">
                  Telefonopiú Currency Exchange
                </h1>
                <p className="text-lg sm:text-xl md:text-wrap lg:text-2xl leading-relaxed tracking-tight text-muted-foreground">
                  Send Money, Pay Bills, Transfer Funds, and More.
                </p>
              </motion.div>
              <div className="flex flex-row gap-4 mt-4">
                <Link
                  href="/contact_us"
                  className="flex py-3 sm:py-4 justify-center items-center bg-gradient-to-b from-sky-600 to-blue-900 rounded-full text-white px-6 sm:px-8 xl:px-10"
                >
                  Get A Quote{" "}
                  <PhoneCall className="ml-2 w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CurrencyMovingList />
    </div>
  );
}
