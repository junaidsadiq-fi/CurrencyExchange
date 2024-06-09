import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsappButton } from "@/components/WhatsappButton";
import MainNavbar from "@/components/MainNavbar";
/* import Navbar from "@/components/Navbar";
import {Footer} from "@/components/Footer" */
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: " Telefonopiú",
  description: "Europs most reliable Currency Exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SpeedInsights />
        {/* <MainNavbar /> */}
        <CurrencyProvider>
          {children}
          <WhatsappButton />
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}




