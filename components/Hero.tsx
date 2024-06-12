import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import Loader from "./Loader";

const MarqueeSectionVertical = dynamic(() => import("./MarqueeSectionVertical"), {
  ssr: false,
  loading: () => <Loader />, // Add a consistent loading placeholder
});
const CurrencyContainer = dynamic(() => import("./CurrencyContainer"), {
  ssr: false,
  loading: () => <Loader />, // Add a consistent loading placeholder
});

const ForexConverter = dynamic(() => import("./ForexConverter"), {
  ssr: false,
  loading: () => <Loader />, // Add a consistent loading placeholder
});

const CurrencyMovingList = dynamic(() => import("./CurrencyMovingList"), {
  ssr: false,
  loading: () => <Loader />, // Add a consistent loading placeholder
});

export default function Hero() {
  return (
    <>
      <Suspense fallback={null}>
        <CurrencyMovingList />
      </Suspense>
      <div className="w-full flex flex-col justify-center items-center bg-background">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="w-full max-w-screen-xl relative px-4 min-h-[calc(40vh)] mx-auto flex flex-col justify-center items-center h-full">
          <div className="flex flex-col py-4 mt-6 gap-2 items-center w-full text-center">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl tracking-tighter">
                Telefonopiú Currency Exchange
              </h1>
             {/*  <p className="text-lg md:text-wrap lg:text-xl leading-relaxed tracking-tight text-muted-foreground">
                Send Money, Pay Bills, Transfer Funds, and More.
              </p> */}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-start gap-4">
            <div className="w-full md:w-3/4 p-4 order-1 md:order-2">
              <Suspense fallback={<Loader />}>
                <CurrencyContainer />
                {/* <MarqueeSectionVertical /> */}
              </Suspense>
            </div>
            <div className="w-full md:w-4/4 p-4 order-2 md:order-1">
              <Suspense fallback={<Loader />}>
                <ForexConverter />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
