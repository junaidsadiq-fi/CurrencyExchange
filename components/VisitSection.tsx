"use client";
import React, { useState, useRef, Suspense } from "react";
import Link from "next/link";
import locations from "../data/locations";
import dynamic from 'next/dynamic';

import { cn } from "@/lib/utils";
import GridPattern from "./ui/grid-pattern";
import { FaLocationArrow } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Loading from "@/app/(nav-routes)/services/loading";

const Map = dynamic(() => import("./ui/Map"), { ssr: false });

function VisitSection() {
  const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const handleLocationClick = (coordinates: [number, number]) => {
    setSelectedLocation(coordinates);
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                <h2 className="text-6xl font-extrabold tracking-tigh lg:text-6xl lg:w-1/2 tracking-tighter max-w-xl text-left font-regular">
                  Find our branches
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  We are rapidly expanding our branches across Italy and Europe.
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
                <div
                  key={index}
                  className="mb-4 cursor-pointer"
                  onClick={() => handleLocationClick(location.coordinates)}
                >
                  <h2 className="text-md font-semibold hover:underline hover:cursor-pointer hover:text-gray-700">{location.name}</h2>
                  <p>{location.address}</p>
                  <p>
                    <a
                      href={`tel:${location.phone}`}
                      className="flex items-center hover:text-blue-400 hover:cursor-pointer hover:underline gap-2"
                    >
                      <PhoneCall className="text-blue-400" size={16} />
                      <span>{location.phone}</span>
                    </a>
                  </p>
                  {location.whatsapp && (
                    <a
                      href={`https://wa.me/${location.whatsapp}`}
                      className="flex items-center hover:cursor-pointer hover:text-green-500 hover:underline gap-2"
                    >
                      <FaWhatsapp className="text-green-700" size={16} />
                      <span>{location.whatsapp}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div ref={mapRef} className="rounded-md pt-12 aspect-square">
            <Suspense fallback={<Loading/>}>
            <Map locations={locations} selectedLocation={selectedLocation} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitSection;
