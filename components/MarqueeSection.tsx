import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/Marquee";
import Image from "next/image";

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
    img: "/images/partners/RIA.png",
  },
  {
    name: "MoneyGram",
    username: "@moneygram",
    body: "Bringing you closer",
    img: "/moneyg.png",
  },
  {
    name: "Orange Money",
    username: "@orangemoney",
    body: "The mobile money revolution",
    img: "/images/partners/Monty.png",
  },
  {
    name: "Connect Plus",
    username: "@connectplus",
    body: "Connecting you to the world",
    img: "/images/partners/ConnectMoney.png",
  },
  {
    name: "Wave",
    username: "@wave",
    body: "Send money with love",
    img: "/images/partners/Wave.png",
  },
  {
    name: "MTN",
    username: "@mtn",
    body: "Everywhere you go",
    img: "/images/partners/mtn.png",
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
    img: "/images/PaymentPartners/RyanAir.png",
  },
  {
    name: "Turkish Airline",
    username: "@TurkishAirline",
    body: "Widen your world",
    img: "/images/PaymentPartners/TurkishAirline.png",
  },
  {
    name: "Connect Plus",
    username: "@connectplus",
    body: "Connecting you to the world",
    img: "/images/partners/ConnectMoney.png",
  },
];


const firstRow = reviews;
const secondRow = reviews2;

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64  cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-white hover:bg-gray-100",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-900/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="52" height="52" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-sky-600 to-blue-900 flex h-full my-16 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
        <h2 className="font-bold text-5xl text-white mb-4">Our Partners</h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
};

export default MarqueeSection;
