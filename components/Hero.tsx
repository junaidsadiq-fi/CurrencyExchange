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
    <>
    <div className="w-full flex flex-col justify-between items-center bg-background min-h-screen">
    <div className="w-full max-w-screen-xl relative px-4 md:px-8 lg:px-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center py-8 sm:py-16 lg:grid-cols-2 xl:grid-cols-2">
            <div className="flex flex-col order-first lg:order-last h-3/4 items-center lg:items-end">
              <Image
                src="/banner.png"
                alt="Currency Exchange Illustration"
                width={500}
                height={500}
                className="w-full h-auto object-cover sm:max-w-md lg:max-w-lg xl:max-w-2xl"
              />
             {/*  <CurrencyConverter /> */}
            </div>
            <div className="flex flex-col gap-4 items-center lg:items-start max-w-full lg:max-w-xl xl:max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col gap-4 text-center lg:pt-24 lg:text-left"
              >
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tigh md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter">
                  TELEFONOPIÚ Currency Exchange
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-tight text-muted-foreground">
                  Send Money, Pay Bills, Transfer Funds, and More.
                </p>
              </motion.div>
              <div className="flex flex-row gap-4 mt-4">
                <Link
                  href="/contact_us"
                  className="flex py-3 sm:py-4 justify-center items-center bg-gradient-to-b from-sky-600 to-blue-900 rounded-full text-white px-6 sm:px-8 xl:px-10"
                >
                  Get A Quote <PhoneCall className="ml-2 w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CurrencyMovingList />
      </div>
            </>
  );
}
