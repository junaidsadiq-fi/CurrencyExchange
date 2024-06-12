"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border-transparent  rounded-full backdrop-blur-md bg-white/50  z-[5000] pr-8 pl-8 items-center justify-center space-x-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        <Link href="/" className="mr-4 ">
          <Image src="/images/Logo.webp" alt="logo" width={100} height={100} />
          <span className="sr-only">Money</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon">
              <CiMenuFries className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="opacity-[1] bg-white py-2" side="right">
            <Link href="/">
              <Image src="/images/Logo.webp" alt="logo" width={150} height={150} />
              <span className="sr-only">Money Exchange</span>
            </Link>
            <div className="grid gap-2 py-2">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  className="flex w-full items-center font-bold p-2 max-w-20 rounded-full focus:bg-gradient-to-b focus:from-blue-800 focus:to-sky-900 focus:text-white text-xl"
                  href={navItem.link}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:flex">
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 font-bold text-neutral-600 p-2 rounded-full focus:from-blue-800 focus:to-sky-900 focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:bg-gradient-to-b focus:outline-none "
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};