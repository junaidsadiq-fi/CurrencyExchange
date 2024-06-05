"use client";
import { MoveRight, PhoneCall, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Bento } from "@/components/Bento";
import { User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

export default function page() {
  const handlePhoneClick = () => {
    const phoneNumber = "+393276688805";
    window.open(`tel:${phoneNumber}`);
  };
  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Effortless Exchange</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tigh max-w-lg tracking-tighter text-left font-regular">
                Simplify Your Currency Conversions
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Manage your international finances with ease. We offer
                competitive rates and a seamless experience for all your
                currency exchange needs.
              </p>
            </div>
          </div>
          <div className="bg-muted pt-20 rounded-md aspect-square">
            <Image
              src="/images/services1.jpg"
              alt="services"
              className="object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      {/* feature cards */}
      <div className="w-full py-10 lg:py-20">
        <div className="container mx-auto">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3x font-bold md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                Our Exchange Features
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                Exchanging forex has never been easier.
              </p>
            </div>
            <div className="grid pt-20 text-center grid-cols-1 lg:grid-cols-3 w-full gap-8">
              <Card className="w-full rounded-xl">
                <CardHeader>
                  <Image
                    src="/images/services5.jpg"
                    alt="feature 1"
                    className="object-cover mx-auto"
                    width={220}
                    height={220}
                  />
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal justify-center">
                      Lowest Rates in the Market
                    </span>
                  </CardTitle>
                  <CardDescription>
                    We offer the cheapest rates for any currency in the market.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Save money on your forex transactions with our
                    industry-leading rates. Our commitment to providing the best
                    value means you get more for your money, whether you’re
                    traveling abroad or conducting international business.
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full shadow-2xl rounded-xl">
                <CardHeader>
                  <Image
                    src="/images/services2.jpg"
                    alt="feature 2"
                    className="object-cover mx-auto"
                    width={220}
                    height={220}
                  />
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal justify-center">
                      Fast and Secure Transactions
                    </span>
                  </CardTitle>
                  <CardDescription>
                    Our platform ensures quick and secure transactions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Experience the peace of mind that comes with fast and secure
                    forex transactions. Our advanced technology and robust
                    security measures ensure your funds are transferred safely
                    and efficiently, minimizing any risk of fraud.
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full rounded-xl">
                <CardHeader>
                  <Image
                    src="/images/features7.png"
                    alt="feature 3"
                    className="object-cover mx-auto"
                    width={220}
                    height={220}
                  />
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal justify-center">
                      Wide Range of Currencies
                    </span>
                  </CardTitle>
                  <CardDescription>
                    We support a wide range of currencies for your convenience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Whether you need euros, yen, or pesos, we’ve got you
                    covered. Our extensive range of supported currencies makes
                    it easy to exchange the money you need, no matter where
                    you're going or what you're doing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Still got questions call us section */}
      <div className="container z-10 mx-auto">
        <div className="grid border-[2px] border-grey-50 bg-blue-800 shadow-2xl rounded-xl container py-4 grid-cols-1 gap-4 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl max-w-xl text-left">
                Still Got Questions?
              </h2>
              <p className="text-lg leading-relaxed text-white tracking-tight max-w-xl text-left">
                Call our customer service team for any queries or concerns.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button
                onClick={handlePhoneClick}
                size="lg"
                className="gap-4 border hover:border-black bg-gray-50 hover:bg-blue-950 hover:text-white rounded-full"
                variant="outline"
              >
                Call us <PhoneCall className="hover:text-white w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="rounded-md pt-2 lg:flex lg:justify-end">
            <Image
              src="/images/faces/thinking.png"
              alt="Locate Us"
              width={120}
              height={120}
              className="rounded-md opacity-90"
            />
          </div>
        </div>
      </div>
       <div className="mx-20 my-16">
        <Bento />
      </div>
    </div>
  );
}
