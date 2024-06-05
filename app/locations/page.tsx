import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Map from "@/components/ui/Map";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Import react-icons

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

];

const Page = () => (
  <div className="w-full my-16 py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Our Branches</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Find our office
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                We are rapidly expanding our branches across Italy and Europe.
                Our new locations also feature currency exchange services,
                making it easier for you to manage your finances while traveling
                or doing business abroad.
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
                  Take advantage of our currency exchange services available at
                  all branches.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Wide Network</p>
                <p className="text-muted-foreground text-sm">
                  Benefit from our extensive network of branches across Italy
                  and soon in other countries of Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md">
          <Map />
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
              <div key={index} className="flex flex-col justify-center items-center border rounded-xl p-4 gap-2">
                <Image
                  src="/images/store.png"
                  alt="branch"
                  width={200}
                  height={200}
                  className="object-cover rounded-xl mb-2"
                />
                <h3 className="text-lg font-bold tracking-tight">
                  {location.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {location.address}
                </p>
                <div className="flex gap-6 items-center justify-between">                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center  gap-2 text-sm text-muted-foreground">
                  <FaWhatsapp className="w-4 h-4" />
                  <span>{location.whatsapp}</span>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;
