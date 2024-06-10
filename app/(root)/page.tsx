"use client";
import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import Loading from "./loading";

const MainNavbar = dynamic(() => import("@/components/MainNavbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const MarqueeSection = dynamic(() => import("@/components/MarqueeSection"), { ssr: false });
const VisitSection = dynamic(() => import("@/components/VisitSection"), { ssr: false });
const FaqSection = dynamic(() => import("@/components/FaqSection"), { ssr: false });
const SubscribeSection = dynamic(() => import("@/components/SubscribeSection"), { ssr: false });

export default function Home() {


  return (
    <div className="w-full h-full overflow-hidden">
      <Suspense fallback={<Loading/>}>
        <Hero />
      </Suspense>
      <Suspense fallback={null}>
        <MarqueeSection />
      </Suspense>
      <Suspense fallback={null}>
        <VisitSection />
      </Suspense>
      <Suspense fallback={null}>
        <FaqSection />
      </Suspense>
      <Suspense fallback={null}>
        <SubscribeSection />
      </Suspense>
    </div>
  );
}
