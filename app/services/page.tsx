"use client";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Effortless Exchange</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Simplify Your Currency Conversions
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Manage your international finances with ease. We offer competitive rates and a seamless experience for all your currency exchange needs.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4 border rounded-full" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square">
            <Image
              src="/images/services4.jpg"
              alt="services"
              className="object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
