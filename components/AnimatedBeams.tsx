"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { AiFillDollarCircle, AiFillEuroCircle, AiFillPoundCircle } from "react-icons/ai";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { TbArrowsExchange, TbCurrencyDinar, TbCurrencyRiyal } from "react-icons/tb";


// eslint-disable-next-line react/display-name
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-1.5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamGrid({className}: {className?: string}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute bottom-10 left-4 flex w-full className items-center justify-center [--duration:20s] [mask-image:linear-gradient(to_top,rgba(0,0,0,0.4)_40%,#000_100%)] overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
          <AiFillDollarCircle className="h-12 w-12"  />
          </Circle>
          <Circle ref={div5Ref}>
          <AiFillEuroCircle size={210} />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
          <RiMoneyRupeeCircleFill className="h-12 w-12" />
          </Circle>
          <Circle ref={div4Ref} className="h-16 w-16">
          <TbArrowsExchange className="h-12 w-12" />
          </Circle>
          <Circle ref={div6Ref}>
            <TbCurrencyRiyal className="h-12 w-12" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <TbCurrencyDinar className="h-12 w-12" />
          </Circle>
          <Circle ref={div7Ref}>
            <AiFillPoundCircle className="h-12 w-12" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        reverse
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        reverse
        endYOffset={10}
      />
    </div>
  );
}
