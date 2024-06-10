"use client";
import { useRef, useState } from "react";
import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Map from "@/components/ui/Map";
import locations from "@/data/locations";
import { BsWhatsapp } from "react-icons/bs";

export default function Page() {
  const [selectedLocation, setSelectedLocation] = useState<
    [number, number] | null
  >(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const handleLocationClick = (coordinates: [number, number]) => {
    setSelectedLocation(coordinates);
    
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="w-full my-16 py-20 lg:py-20">
        <div className="container mx-auto">
          <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
            <div className="flex gap-10 flex-col">
              <div className="flex gap-4 flex-col">
                <div>
                  <Badge variant="outline">Our Branches</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter max-w-xl text-left font-regular">
                    Find our office
                  </h2>
                  <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                    We are rapidly expanding our branches across Italy and
                    Europe. Our new locations also feature currency exchange
                    services, making it easier for you to manage your finances
                    while traveling or doing business abroad.
                  </p>
                </div>
              </div>
              <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 xl gap-6">
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Easily Find Our Locations</p>
                    <p className="text-muted-foreground text-sm">
                      Use our map to quickly locate our offices near you.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Convenient Currency Exchange</p>
                    <p className="text-muted-foreground text-sm">
                      Take advantage of our currency exchange services available
                      at all branches.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Wide Network</p>
                    <p className="text-muted-foreground text-sm">
                      Benefit from our extensive network of branches across
                      Italy and soon in other countries of Europe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="map" className="rounded-md">
              <Map locations={locations} selectedLocation={selectedLocation} />
            </div>
          </div>
        </div>
        <div className="w-full py-3">
          <div className="container mx-auto">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 flex-col">
                <h2 className="text-2xl md:text-4xl tracking-tighter max-w-xl font-regular text-center">
                  All branches
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center border rounded-xl p-4 gap-2"
                  >
                    <div className="relative w-[300px] h-[200px] ">
                      <Image
                        src={location.image}
                        alt="branch"
                        layout="fill"
                        className="object-contain"
                      />
                    </div>
                    <h2
                      onClick={() => handleLocationClick(location.coordinates)}
                      className="text-md font-semibold hover:underline hover:cursor-pointer hover:text-gray-700"
                    >
                      {location.name}
                    </h2>
                    <p>{location.address}</p>
                    <div className="flex gap-6 items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <a
                          href={`tel:${location.phone}`}
                          className="flex items-center hover:text-blue-400 hover:cursor-pointer hover:underline gap-2"
                        >
                          <PhoneCall className="text-blue-400" size={16} />
                          <span>{location.phone}</span>
                        </a>
                      </div>
                      <div className="flex items-center  gap-2 text-sm text-muted-foreground">
                        {location.whatsapp && (
                          <a
                            href={`https://wa.me/${location.whatsapp}`}
                            className="flex items-center hover:cursor-pointer hover:text-green-500 hover:underline gap-2"
                          >
                            <BsWhatsapp className="text-green-700" size={16} />
                            <span>{location.whatsapp}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
