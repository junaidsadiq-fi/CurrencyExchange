import React from "react";
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
      <FloatingNav navItems={navItems} />
    </>
  );
};

export default MainNavbar;