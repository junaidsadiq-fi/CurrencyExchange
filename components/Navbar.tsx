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

const Navbar = () => {
  return (
    <header className="flex h-full w-full shrink-0 items-center px-8 my-4 md:px-12 lg:px-16 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon">
            <CiMenuFries className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="opacity-[1] bg-white py-2" side="right">
          <Link href="/">
            <Image 
              src='/images/Logo.png'
              alt="logo"
              width={190}
              height={190}
            />
            <span className="sr-only">Money Exchange</span>
          </Link>
          <div className="grid gap-2 py-2">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/services">
              Services
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/about_us">
              About
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/contact_us">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="/">
        <Image 
          src='/images/Logo.png'
          alt="logo"
          width={200}
          height={200}
        />
        <span className="sr-only">Money</span>
      </Link>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-xl font-medium transition-colors focus:bg-blueish focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="/">
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="group  inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-xl font-medium transition-colors focus:bg-blueish focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="/services">
                Services
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-xl font-medium transition-colors focus:bg-blueish focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="/about">
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-xl font-medium transition-colors focus:bg-blueish focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="/contact">
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto">
        <Button className="py-4 rounded-full font-bold  bg-gradient-to-b from-sky-600 to-blue-900 focus:text-white hover:bg-blue-100 text-white hover:text-white">Get Started</Button>
      </div>
    </header>
  );
};

export default Navbar;
