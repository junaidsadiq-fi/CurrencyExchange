"use client";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      items: [
        { title: "Forex Rates", href: "#converter" },
        { title: "Forex Calculator", href: "#converter" },
      ],
    },
    {
      title: "Services",
      items: [
        { title: "Exchange Currencies", href: "/" },
        { title: "Money Transfer", href: "/" },
        { title: "Forex Trading", href: "/" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "Who We Are", href: "/about" },
        { title: "Branch Network", href: "/locations" },
        { title: "Contact us", href: "/contact" },
        { title: "FAQS", href: "/faqs" },
        { title: "Media center", href: "/media" },
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
        <div className="grid lg:grid-cols-4 gap-10 items-start">
          <div className="lg:col-span-1 flex flex-col items-start">
            <div style={{ position: 'relative', width: '150px', height: '150px' }}>
              <Image
                src="/images/Logo.webp"
                alt="logo"
                fill
                sizes="(max-width: 600px) 100vw, 150px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className="text-lg sm:text-md max-w-lg leading-relaxed tracking-tight text-background/75 text-left mt-4">
              Telefonopiú Exchange Company is a leading currency exchange and
              money transfer company based in Italy with four branches in
              Italy so far and continuously expanding.
            </p>
          </div>
          <div className="lg:col-span-3 grid lg:grid-cols-3 gap-10">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex flex-col items-start">
                <h3 className="text-xl mb-2">{item.title}</h3>
                {item.items && item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className="text-background/75 mb-1"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container py-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col items-start text-sm text-background/75 mb-4 lg:mb-0">
            <p>Viale Antonio Gramsci</p>
            <p>97 Modena 41122</p>
            <p>ITALY</p>
          </div>
          <div className="flex flex-col items-start text-sm text-background/75 mb-4 lg:mb-0">
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">File A Complaint</Link>
          </div>
          <div className="flex items-center">
            <Link href="https://twitter.com" className="mx-2" aria-label="Twitter">
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link href="https://facebook.com" className="mx-2" aria-label="Facebook">
              <FaFacebook className="h-6 w-6" />
            </Link>
            <div onClick={handleWhatsappClick} className="mx-2 cursor-pointer" aria-label="Whatsapp">
              <FaWhatsapp className="h-6 w-6" />
            </div>
            <Link href="https://instagram.com" className="mx-2" aria-label="Instagram">
              <FaInstagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <p>Copyrights © 2024 Telefonopiú. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
