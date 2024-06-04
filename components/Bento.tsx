import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Marquee from "./ui/Marquee";
import Globe from "./ui/NewGlobe";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Rubik_Pixels } from "next/font/google";
import { CiBadgeDollar } from "react-icons/ci";
import { HiOutlineCurrencyEuro } from "react-icons/hi";
import { AnimatedBeamGrid } from "./AnimatedBeams";
import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillPoundCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import {
  TbArrowsExchange,
  TbCurrencyDinar,
  TbCurrencyRiyal,
} from "react-icons/tb";
import { RiTimeZoneLine } from "react-icons/ri";
import { GrSend } from "react-icons/gr";
import { useCurrencies } from "@/context/CurrencyContext";

type Currency = {
  name: string;
  rate: string;
};

export function Bento() {
  const currencies = useCurrencies() as Currency[];

  const files = [
    {
      name: "Euro",
      body: `${currencies.find(currency => currency.name === 'EUR')?.rate || 'N/A'} Pkr`,
      rateIncreased: true,
    },
    {
      name: "Dollar",
      body: `${currencies.find(currency => currency.name === 'USD')?.rate || 'N/A'} Pkr`,
    },
    {
      name: "Yen",
      body: "2.5 Pkr",
      rateIncreased: true,
    },
    {
      name: "Dirham",
      body: "78 Pkr",
      rateIncreased: true,
    },
    {
      name: "Riyal",
      body: "75 Pkr",
      rateIncreased: true,
    },
  ];

  const features = [
    {
      Icon: TbArrowsExchange,
      name: "Currency Exchange",
      description: "We support all major currencies and more.",
      href: "/",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute flex [--duration:20s] [mask-image:linear-gradient(to_top,rgba(0,0,0,0.4)_40%,#000_100%)] h-[360px] w-full max-w-[42rem] items-center justify-center overflow-hidden rounded-lg border bg-background">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Exchange
          </span>

          <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
          >
            <AiFillDollarCircle size={210} />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[30px] w-[30px] border-none border-blue-800 border-opacity-50 bg-transparent"
            duration={20}
            delay={10}
            radius={80}
          >
            <CiBadgeDollar size={210} />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={190}
            duration={20}
          >
            <AiFillEuroCircle size={210} />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={190}
            duration={20}
            delay={20}
          >
            <RiMoneyRupeeCircleFill size={210} />
          </OrbitingCircles>
        </div>
      ),
    },
    {
      Icon: RiTimeZoneLine,
      name: "Real-time exchange rates",
      description: "Get the latest exchange rates for all major currencies.",
      href: "/",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,rgba(0,0,0,0.4)_40%,#000_100%)]"
        >
          {files.map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex gap-2 justify-between">
                  <figcaption className="flex text-sm font-medium dark:text-white">
                    {f.name}
                    {/* Add the arrow icon here */}
                   
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      ),
    },
    {
      Icon: GlobeIcon,
      name: "Locations",
      description: "5 branches in europe and continously expanding.",
      href: "/",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <Globe className="top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40" />
      ),
    },
    {
      Icon: GrSend,
      name: "Send & Receive Money",
      description:
        "Send & receive money with ease with your loved ones anywhere in the world.",
      className: "col-span-3 lg:col-span-1",
      href: "/",
      cta: "Learn more",
      background: <AnimatedBeamGrid />,
    },
  ];

  return (
    <BentoGrid className="min-w-full">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
