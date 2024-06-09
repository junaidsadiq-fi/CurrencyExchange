"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { FloatingNav } from "./ui/floating-navbar";

const MainNavbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Locations", link: "/locations" },
    { name: "Contact", link: "/contact-us" },
    { name: "About", link: "/about" },
  ];

  return (
    <>
     {/*  <header className="flex fixed top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-950/80 shadow-sm shrink-0 bg-gray-900 py-2 lg:py-1 items-center px-4 md:px-6 lg:px-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon">
              <CiMenuFries className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="opacity-[1] bg-white py-2" side="right">
            <Link href="/">
              <Image src="/images/logo.png" alt="logo" width={150} height={150} />
              <span className="sr-only">Money Exchange</span>
            </Link>
            <div className="grid gap-2 py-2">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  className="flex w-full items-center border rounded-full p-2 focus:bg-gradient-to-b focus:from-blue-800 focus:to-sky-900 focus:text-white text-lg font-semibold"
                  href={navItem.link}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link className="mr-4 hidden lg:flex" href="/">
          <Image src="/images/logo.png" alt="logo" width={130} height={130} />
          <span className="sr-only">Money</span>
        </Link>
        <div className="flex w-full justify-center">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((navItem, idx) => (
                <NavigationMenuLink key={idx} asChild>
                  <Link
                    className="group inline-flex h-8 w-max items-center justify-center rounded-full px-4 py-2 text-lg font-medium transition-colors focus:bg-gradient-to-b focus:from-blue-800 focus:to-sky-900 focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href={navItem.link}
                  >
                    {navItem.name}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link href="#visit" className="ml-auto">
          <Button className="py-2 rounded-full font-bold bg-gradient-to-b from-sky-600 to-blue-900 focus:text-white hover:bg-blue-100 text-white hover:text-white">
            Visit Today
          </Button>
        </Link>
      </header> */}
      <FloatingNav navItems={navItems} />
    </>
  );
};

export default MainNavbar;

