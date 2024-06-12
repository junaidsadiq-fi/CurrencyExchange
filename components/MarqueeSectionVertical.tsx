'use client';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/Marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Western Union",
    username: "@westernunion",
    body: "Moving Money for Better",
    img: "/images/partners/WesternUnion.png",
  },
  {
    name: "Small World",
    username: "@smallworld",
    body: "Your local money transfer service",
    img: "/images/partners/small.webp",
  },
  {
    name: "MoneyGram",
    username: "@moneygram",
    body: "Bringing you closer",
    img: "/images/partners/MoneyGram.png",
  },
  {
    name: "Orange Money",
    username: "@orangemoney",
    body: "The mobile money revolution",
    img: "/images/partners/Monty.png",
  },
  {
    name: "Wave",
    username: "@wave",
    body: "Send money with love",
    img: "/images/partners/wave.png",
  },
  {
    name: "MTN",
    username: "@mtn",
    body: "Everywhere you go",
    img: "/images/partners/mtn.svg",
  },
  {
    name: "Connect Plus",
    username: "@connectplus",
    body: "Connecting you to the world",
    img: "/images/partners/ConnectMoney.png",
  },
  {
    name: "Ria",
    username: "@Ria",
    body: "Connecting you to the world",
    img: "/images/partners/ria.png",
  },
];

const reviews2 = [
  {
    name: "Easy Jet",
    username: "@easyjet",
    body: "Europe by EasyJet",
    img: "/images/PaymentPartners/EasyJet.png",
  },
  {
    name: "Flix Bus",
    username: "@flixbus",
    body: "Travel for all",
    img: "/images/PaymentPartners/FlixBus.png",
  },
  {
    name: "Royal Air Maroc",
    username: "@royalairmaroc",
    body: "The wings of Morocco",
    img: "/images/PaymentPartners/RoyalAir.png",
  },
  {
    name: "Ryan Air",
    username: "@ryanair",
    body: "Low fares. Made simple.",
    img: "/images/partners/ryan.png",
  },
  {
    name: "Turkish Airline",
    username: "@TurkishAirline",
    body: "Widen your world",
    img: "/images/PaymentPartners/TurkishAirline.png",
  },
];

const firstRow = reviews;
const secondRow = reviews2;

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "flex items-center justify-center cursor-pointer overflow-hidden rounded-full border",
        "border-gray-950/[.1] bg-blue-50 hover:bg-gray-100"
      )}
      style={{ width: '100px', height: '100px' }} 
    >
      <Image
        className=""
        width={60}
        height={60}
        layout="fixed"
        alt="partner logo"
        src={img}
      />
    </figure>
  );
};

const MarqueeSectionVertical = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-blue-600 to-black flex h-72 max-w-lg mx-auto flex-row items-center justify-center overflow-hidden rounded-2xl border bg-background sm:px-20 gap-2 md:shadow-xl">
     {/*  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-4">
        Our Partners
      </h2> */}
      {isClient && (
        <>
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
        </>

      )}
    </div>
  );
};

export default MarqueeSectionVertical;
