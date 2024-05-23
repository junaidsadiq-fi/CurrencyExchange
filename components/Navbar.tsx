"use client";
import React, { useState } from "react";
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
      <header className="flex h-full w-full shrink-0 items-center px-8 my-4 md:px-12 lg:px-16">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon">
            <CiMenuFries className="h-6 w-6" />
             {/*  <MenuIcon className="h-6 w-6" /> */}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="opacity-[1] bg-white py-2" side="right">
            <Link href="#">
              {/* <MountainIcon className="h-6 w-6" /> */}
              <Image 
             src='/logo.png'
             alt="logo"
              width={190}
              height={190}
          />
              <span className="sr-only">Money Exchange</span>
            </Link>
            <div className="grid gap-2 py-2">
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Home
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                About
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Services
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link className="mr-6 hidden lg:flex" href="#">
          <Image 
             src='/logo.png'
             alt="logo"
              width={200}
              height={200}
          />
          {/* <MountainIcon className="h-6 w-6" /> */}
          <span className="sr-only">Money</span>
        </Link>
        <div className="flex w-full justify-center">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-md font-medium transition-colors focus:bg-blueish focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-md font-medium transition-colors focus:bg-blueish focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  About
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group  inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-md font-medium transition-colors focus:bg-blueish focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Services
                </Link>
              </NavigationMenuLink>
  
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-md font-medium transition-colors focus:bg-blueish focus:text-white hover:bg-blue-100 hover:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="/"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto">
          <Button className="py-4 rounded-full font-bold bg-blue-800 text-white focus:bg-blue-800 focus:text-white hover:bg-blue-100 hover:text-white ">Get Started</Button>
        </div>
      </header>
    );
  };
export default Navbar

  
  function MenuIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  }
  
  function MountainIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    );
  }
  