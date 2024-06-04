"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <div className="h-full w-full">
      <div className="w-full relative bg-background">
        <div className="z-10 container mx-auto px-4 xl:px-8 2xl:px-12">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 2xl:gap-24">
            <div className="flex gap-4 flex-col order-first lg:order-last">
              <Image
                src="/banner.png"
                alt="Currency Exchange Illustration"
                width={500}
                height={500}
                className="w-full h-full object-cover md:mx-auto lg:w-[40rem] lg:h-[40rem] xl:w-[50rem] xl:h-[50rem] 2xl:w-[50rem] 2xl:h-[50rem]"
              />
            </div>
            <div className="flex gap-4 md:mx-auto flex-col max-w-3xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex gap-4 flex-col"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl tracking-tighter text-left font-regular">
                  Powerful Currency Exchange
                </h1>
                <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed tracking-tight text-muted-foreground text-left">
                  Send & receive money with ease with your loved ones anywhere in the world with convenient and safe transactions.
                </p>
              </motion.div>
              <div className="flex flex-row gap-4">
                <Link
                  href="/contact_us"
                  className="gap-4 flex py-4 justify-center items-center bg-gradient-to-b from-sky-600 to-blue-900 rounded-full text-white px-6 xl:px-8 2xl:px-10"
                >
                  Get A Quote <PhoneCall className="text-blue-50 w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
