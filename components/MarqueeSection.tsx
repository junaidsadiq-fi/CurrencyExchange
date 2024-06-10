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
    name: "Connect Plus",
    username: "@connectplus",
    body: "Connecting you to the world",
    img: "/images/partners/ConnectMoney.png",
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
    username: "@connectplus",
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
        "flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl border p-4",
        "border-gray-950/[.1] bg-white hover:bg-gray-100"
      )}
    >
        <Image
          className=""
          width="100"
          height="100"
          alt=""
          src={img}
        />
    </figure>
  );
};
const MarqueeSection = () => {
  return (
    <div className="relative  bg-blue-50  flex h-full my-8 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-sm">
      <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
        Our Partners
      </h2>
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
    </div>
  );
};

export default MarqueeSection;
