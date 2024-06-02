"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import WorldGlobe from "./WorldGlobe";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "./ui/badge";
import RadialGradient from "./ui/radial-gradient";
const words = ["fast", "secure", "reliable", "easy"];
export default function Hero() {
  return (
    <div className="h-full w-full">
      {/* <Navbar /> */}
      <div className="w-full relative bg-background">
        <div className="z-10 container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 lg:flex-row">
            <div className="bg-muted rounded-md aspect-square order-first lg:order-last">
              <Image
                src="/banner.png"
                alt="Currency Exchange Illustration"
                width={500}
                height={500}
                className="w-full h-full object-cover md:mx-auto lg:w-[40rem] lg:h-[40rem]"
              />
            </div>
            <div className="flex gap-4 md:mx-auto  flex-col">
              {/*  <RadialGradient /> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex gap-4 flex-col"
              >
                <h1 className="text-5xl md:text-5xl lg:text-8xl max-w-lg tracking-tighter text-left font-regular">
                  Powerful Currency Exchange
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                  Send & receive money with ease with your loved ones anywhere
                  in the world with convenient and safe transactions.
                </p>
              </motion.div>
              <div className="flex flex-row gap-4">
                <Link
                  href="/contact_us"
                  className="gap-4 flex py-4 justify-center items-center bg-blue-800 rounded-full text-white focus:bg-blue-600 hover:bg-blue-400 px-6"
                  variant="outline"
                >
                  Get A Quote <PhoneCall className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
