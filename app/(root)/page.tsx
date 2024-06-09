"use client";
import React from "react";
import Hero from "@/components/Hero";
import VisitSection from "@/components/VisitSection";
import MarqueeSection from "@/components/MarqueeSection";
import SubscribeSection from "@/components/SubscribeSection";
import FaqSection from "@/components/FaqSection";
import MainNavbar from "@/components/MainNavbar";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <MainNavbar />
      <Hero/>
      <MarqueeSection />
      <VisitSection />
      <FaqSection />
      <SubscribeSection />
    </div>
  );
}
