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
            "[mask-image:radial-gradient(600px_circle_at_center,white,rgba(255,255,255,0.1))]",	
          )}
        />
        <div className="w-full max-w-screen-2xl relative lg:px-28 px-12 min-h-[calc(60vh)] mx-auto flex flex-col md:flex-row justify-center items-center h-full gap-2">
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <h1 className="text-6xl font-extrabold lg:text-6xl tracking-tighter max-w-xl text-left font-regular">
              Telefonopiú Currency Exchange
            </h1>
            <p className="text-lg md:text-wrap lg:text-xl leading-relaxed tracking-tight text-muted-foreground">
              Send Money, Pay Bills, Transfer Funds, and More.
            </p>
          </div>
          <div className="w-full md:w-4/4 p-4 order-1 md:order-2">
            <Suspense fallback={<Loader />}>
              <ForexConverter />
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
