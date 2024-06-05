import React from "react";
import { MoveRight, MoveRightIcon, MoveUpIcon, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GridPattern from "./ui/grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Check } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import Map from "./ui/Map";

function VisitSection() {
  return (
    <div id="visit" className="w-full relative bg-white py-10 lg:py-20">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]",
          "z-[20]"
        )}
      />
      <div className="container z-10 mx-auto">
        <div className="grid border-[2px] border-grey-50 bg-white shadow-2xl rounded-xl container py-4 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">find us</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-6xl font-extrabold tracking-tigh lg:text-8xl tracking-tighter max-w-xl text-left font-regular">
                  Find our branches
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  We are rapidly expanding our branches across Italy and europe.
                </p>
              </div>
            </div>
            <Link href="/locations" className="flex items-center justify-around w-32 bg-gradient-to-b from-sky-600 to-blue-900 rounded-full px-4 py-2">
            <FaLocationArrow className="text-white w-4 h-4" />
            <span className="text-white">Locate Us</span>
          </Link>
          </div>
          <div className="rounded-md pt-12 aspect-square">
            <Map />
           {/*  <Image
              src="/map.jpg"
              alt="Locate Us"
              width={1000}
              height={1000}
              className="rounded-md lg:mt-40 opacity-90"
            /> */}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default VisitSection;

