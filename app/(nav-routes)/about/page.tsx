"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MoveDownLeft, MoveUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const Globe = dynamic(() => import("@/components/ui/NewGlobe"), { ssr: false });

const page = () => (
  <>
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-blue-100 text-blue-800">about us</Badge>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex gap-2 flex-col"
            >
              <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                Exchange Currencies with Ease
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                We provide a platform for you to exchange currencies with ease
                with your loved ones anywhere in the world with convenient and
                safe transactions.
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-xl bg-gray-100">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                  4
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  With over 4 exchanges and continuously expanding in Italy and
                  euprope.
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-xl bg-sky-50">
                <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                  24/7
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  We are available 24/7 to assist you with any queries or
                  assistance.
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-xl bg-blue-50">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                  Thousands of happy Customers
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  We have thousands of happy customers and counting.
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-xl bg-gray-50">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                  Serving hundreds of currencies and countries
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  We are serving hundreds of currencies and countries with
                  convenient and safe transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-20 mt-6 mb-4">
      <div className="relative flex h-full w-full lg:max-w-[128rem] items-center justify-center overflow-hidden rounded-xl border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-50/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Exchange Currencies with Ease Globally
        </span>
        <Suspense fallback={null}>
          <Globe className="top-28" />
        </Suspense>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </div>
  </>
);
export default page;
