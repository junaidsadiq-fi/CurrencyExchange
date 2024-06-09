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
import { BsWhatsapp } from "react-icons/bs";

const locations = [
  {
    name: "Viale Antonio Gramsci 97",
    address: "City Modena cap 41122",
    phone: "059454430",
    whatsapp: "3276688805",
  },
  {
    name: "Viale Guido Mazzoni 31/33",
    address: "City Modena cap 41121",
    phone: "0597874540",
    whatsapp: "3511699193",
  },
  {
    name: "Piazza della libertà 37",
    address: "Sassuolo cap 41049",
    phone: "0536583874",
    whatsapp: "3401094619",
  },
  {
    name: "Via Ciro Menotti 26",
    address: "Carpi cap 41012",
    phone: "3514304021",
    /* whatsapp: "3401094619", */
  },
];

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
      <div className="grid w-full bg-white rounded-xl container py-4 grid-cols-1 gap-16 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-2 flex-col">
                <h2 className="text-6xl font-extrabold tracking-tigh lg:text-8xl tracking-tighter max-w-xl text-left font-regular">
                  Find our branches
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  We are rapidly expanding our branches across Italy and europe.
                </p>
              </div>
            </div>
            <Link
              href="/locations"
              className="flex items-center justify-around w-32 bg-gradient-to-b from-sky-600 to-blue-900 rounded-full px-4 py-2 "
            >
              <FaLocationArrow className="text-white w-4 h-4" />
              <span className="text-white">Locate Us</span>
            </Link>
            <div className="mt-2 flex align-center flex-row gap-8 flex-wrap">
              {locations.map((location, index) => (
                <div key={index} className="mb-4">
                  <h2 className="text-md font-semibold">{location.name}</h2>
                  <p>{location.address}</p>
                  <p>
                    <a href={`tel:${location.phone}`} className="flex items-center hover:text-blue-400 hover:cursor-pointer hover:underline gap-2">
                      <PhoneCall className="text-blue-400" size={16} />
                      <span>{location.phone}</span>
                    </a>
                  </p>
                  {!location.whatsapp ? null :  (
                    <a
                      href={`https://wa.me/${location.whatsapp}`}
                      className="flex items-center hover:cursor-pointer hover:text-green-500 hover:underline gap-2"
                    >
                      <BsWhatsapp className="text-green-700" size={16} />
                      <span>{location.whatsapp}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md pt-12 aspect-square">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitSection;
