"use client";
import React from "react";
import { globeConfig, colors, sampleArcs } from "@/lib/globalconfig";
import WorldGlobe from "@/components/WorldGlobe";
import { ModeToggle } from "@/components/ModeToggle";
import Hero from "@/components/Hero";
/* import { ForexTable } from "@/components/ForexTable"; */
import Globe from "@/components/ui/NewGlobe";
import VisitSection from "@/components/VisitSection";
import { Footer } from "@/components/Footer";
import { Bento } from "@/components/Bento";
import { Separator } from "@/components/ui/separator";
import ForexTable from "@/components/ForexTable";
import ForexConverter from "@/components/ForexConverter";
import MarqueeSection from "@/components/MarqueeSection";


export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Hero />
      <ForexConverter />
      <MarqueeSection />
      <VisitSection />
      <Bento/>
      <Footer/>
    </div>
  );
}
