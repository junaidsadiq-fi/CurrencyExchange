"use client";
import React from "react";
import Hero from "@/components/Hero";
import VisitSection from "@/components/VisitSection";
import ForexConverter from "@/components/ForexConverter";
import MarqueeSection from "@/components/MarqueeSection";
import CurrencyMovingList from "@/components/CurrencyMovingList";
import SubscribeSection from "@/components/SubscribeSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Hero />
      {/* <CurrencyMovingList /> */}
      <ForexConverter />
      <MarqueeSection />
      <VisitSection />
      <FaqSection />
      <SubscribeSection />
    </div>
  );
}
