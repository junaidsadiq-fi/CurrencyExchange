import Link from "next/link";
import LinearGradient from "./ui/linear-gradient";
import Image from "next/image";
import RadialGradient from "./ui/radial-gradient";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
      items: [
        {
          title: "Forex Converter",
          href: "/",
        },
        {
          title: "Forex Rates",
          href: "/",
        },
        {
          title: "Forex Calculator",
          href: "/",
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
          title: "About us",
          href: "/about",
        },
        {
          title: "Locate Us",
          href: "/locations",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full relative py-20 lg:py-40 bg-foreground text-background">
     {/*  <LinearGradient/> */}
     <RadialGradient/>
      <div className="container z-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <Image src='/images/Logo.png' width='350' height='350' alt="logo"  />
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
              Telephonopiu' Exchange Company is a leading currency exchange and money transfer company based in Italy with five brnaches in italy so far.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>Viale Antonio Gramsci</p>
                <p>97 Modena 41122</p>
                <p>ITALY</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};