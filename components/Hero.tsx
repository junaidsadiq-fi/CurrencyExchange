"use client";
import React from "react";
import { motion } from "framer-motion";
import CurrencyMovingList from "./CurrencyMovingList";
import { CurrencyContainer } from "./CurrencyContainer";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-background ">
      <div className="w-full max-w-screen-xl relative px-4 min-h-[calc(50vh)]  mx-auto flex flex-col justify-center items-center h-full">
        <div className="flex flex-col pb-8 gap-4 items-center pt-20 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-4 text-center"
          >
            <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl tracking-tighter">
              Telefonopiú Currency Exchange
            </h1>
            <p className="text-lg sm:text-xl md:text-wrap lg:text-2xl leading-relaxed tracking-tight text-muted-foreground">
              Send Money, Pay Bills, Transfer Funds, and More.
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center items-center w-full my-8">
          <CurrencyContainer />
        </div>
        <div className="flex justify-center items-center w-full">
        </div>
      </div>
          <CurrencyMovingList />
    </div>
  );
}
