"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { globeConfig, colors, sampleArcs } from "@/lib/globalconfig";
import { Button } from "./ui/button";

const World = dynamic(
  () => import("@/components/ui/Globe").then((m) => m.World),
  {
    ssr: false,
  }
);

function WorldGlobe({ ...props }) {
  return (
    <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] py-8 px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left lg:mt-32 lg:w-1/2"
        >
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-extra text-black dark:text-white leading-tight">
            Powerful Currency Exchange
          </h2>
          <p className="font-poppins text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto lg:mx-0">
            We make sure all your transactions are convenient and safe.
          </p>
          <div className="mt-8 flex space-x-4">
            <Button className="bg-blue-500 rounded-full text-white focus:bg-blue-600 hover:bg-blue-400 px-6 py-2">Explore now</Button>
            <a href="#" className="flex items-center text-blue-500 hover:underline">
              How it works?
            </a>
          </div>
        </motion.div>
        <div className="relative w-full mt-8 lg:mt-0 lg:w-1/2 h-72 md:h-full flex justify-center lg:justify-end">
          <div className="w-full h-full lg:w-[40rem] lg:h-[40rem]">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldGlobe;
