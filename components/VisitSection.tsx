import React from 'react'
import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GridPattern from './ui/grid-pattern';
import { cn } from '@/lib/utils';

function VisitSection() {
  return (
  <div className="w-full relative bg-blue-50 py-20 lg:py-40 bg-muted">
     <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    <div className="container z-10 mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge>Locate Us</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Visit us today
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            We are open for business. Visit us at our office or give us a call.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline">
            Contact Us <PhoneCall className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
}

export default VisitSection