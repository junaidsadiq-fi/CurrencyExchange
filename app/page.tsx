"use client";
import React from "react";
import Hero from "@/components/Hero";
import VisitSection from "@/components/VisitSection";
import MarqueeSection from "@/components/MarqueeSection";
import SubscribeSection from "@/components/SubscribeSection";
import FaqSection from "@/components/FaqSection";
import Navbar from "@/components/Navbar";
/* import ForexConverter from "@/components/ForexConverter"; */

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      {/* <Navbar/> */}
      <Hero/>
      {/* <ForexConverter /> */}
      <MarqueeSection />
      <VisitSection />
      <FaqSection />
      <SubscribeSection />
    </div>
  );
}
