"use client";
import React from "react";
import { motion } from "framer-motion";
import CurrencyMovingList from "./CurrencyMovingList";
import { CurrencyContainer } from "./CurrencyContainer";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import ForexConverter from "./ForexConverter";

export default function Hero() {
  return (
    <>
      <CurrencyMovingList />
      <div className="w-full flex flex-col justify-center items-center bg-background ">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="w-full max-w-screen-xl relative px-4 min-h-[calc(50vh)]  mx-auto flex flex-col justify-center items-center h-full">
          <div className="flex flex-col pb-8 gap-4 items-center pt-4 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-4 text-center"
            >
              <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl tracking-tighter">
                Telefonopiú Currency Exchange
              </h1>
              <p className="text-lg md:text-wrap lg:text-xl leading-relaxed tracking-tight text-muted-foreground">
                Send Money, Pay Bills, Transfer Funds, and More.
              </p>
            </motion.div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-start gap-4">
            {/*  <div className="flex justify-center items-center w-full my-2"> */}
            <div className="w-full md:w-1/2 p-4 order-first sm:order-last">
              <ForexConverter />
            </div>
            <div className="w-full md:w-1/2 p-4 order-last sm:order-first" >
              <CurrencyContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
