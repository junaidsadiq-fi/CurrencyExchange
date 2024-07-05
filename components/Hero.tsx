import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import Loader from "./Loader";

const MarqueeSectionVertical = dynamic(
  () => import("./MarqueeSectionVertical"),
  {
    ssr: false,
    loading: () => <Loader />, // Add a consistent loading placeholder
  }
);
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
const MarqueeSection = dynamic(() => import("./MarqueeSection"), {
  ssr: false,
  loading: () => <Loader />, // Add a consistent loading placeholder
});

export default function Hero() {
  return (
    <>
      <Suspense fallback={null}>
        <CurrencyMovingList />
      </Suspense>
      <div className="w-full flex flex-col justify-center items-center">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,rgba(255,255,255,0.1))]"
          )}
        />
        <div className="w-full max-w-screen-2xl relative lg:px-20 sm:px-8 md:px-16 min-h-[calc(60vh)] lg:min-h-[calc(65vh)] mx-auto flex flex-col md:flex-row justify-center items-center h-full gap-8 lg:ml-12">
          <div className="flex flex-col gap-4 order-2 md:order-1 mt-8 md:mt-16">
            <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter max-w-lg text-center lg:text-left font-regular">
              Telefonopiú Currency Exchange
            </h1>
            <p className="text-center sm:text-left sm:text-wrap sm:mx-4 text-lg md:text-wrap lg:text-xl leading-relaxed tracking-tight text-muted-foreground">
              Send Money, Pay Bills, Transfer Funds, and More.
            </p>
          </div>
          <div className="w-full lg:max-w-3xl p-4 order-2 md:order-1 md:mt:8">
            <Suspense fallback={null}>
              <div className="h-full">
                <ForexConverter />
              </div>
            </Suspense>
          </div>
        </div>
        <Suspense fallback={null}>
          <MarqueeSection />
        </Suspense>
      </div>
    </>
  );
}
