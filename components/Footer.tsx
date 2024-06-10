"use client";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
      items: [
        {
          title: "Forex Rates",
          href: "#converter",
        },
        {
          title: "Forex Calculator",
          href: "#converter",
        },
      ],
    },
    {
      title: "Services",
      description: "All the services we offer.",
      items: [
        {
          title: "Exchange Currencies",
          href: "/",
        },
        {
          title: "Money Transfer",
          href: "/",
        },
        {
          title: "Forex Trading",
          href: "/",
        },
      ],
    },
    {
      title: "Company",
      description: "find out more about us.",
      items: [
        {
          title: "Who We Are",
          href: "/about",
        },
        {
          title: "Branch Network",
          href: "/locations",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
        {
          title: "FAQS",
          href: "/faqs",
        },
        {
          title: "Media center",
          href: "/media",
        },
      ],
    },
  ];
  const handleWhatsappClick = () => {
    const phoneNumber = "+393276688805";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <div className="w-full bg-gray-50 relative pt-10 bg-foreground text-background">
      <div className="container z-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <Image
                src="/images/Logo.webp"
                width="350"
                height="350"
                alt="logo"
              />
              <p className="text-lg sm:text;md max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Telefonopiú Exchange Company is a leading currency exchange and
                money transfer company based in Italy with four branches in
                Italy so far and continuously expnadning.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>Viale Antonio Gramsci</p>
                <p>97 Modena 41122</p>
                <p>ITALY</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/">Terms & Conditions</Link>
                <Link href="/">File A Complaint</Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
                <div className="">
                  <p className="Copyrights © 2024 TELEFONOPIÚ. All rights reserved."></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container py-8 mx-auto">
        <hr /> {/* Separator line */}
        <div className="flex justify-between items-center pt-2">
          <div>
            <p>Copyrights © 2024 Telefonopiú. All rights reserved.</p>
          </div>
          <div className="flex items-center pt-2 justify-center">
            <Link href="https.twitter.com" className="mx-2">
              <FaXTwitter className="h-6 w-6" />
            </Link>
            <Link href="https.facebook.com" className="mx-2">
              <FaFacebook className="h-6 w-6" />
            </Link>
            <div onClick={handleWhatsappClick} className="mx-2">
              <IoLogoWhatsapp className="h-6 w-6" />
            </div>
            <Link href="https.Instagram.com" className="mx-2">
              <BsInstagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
