"use client";
import { ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";

const MainNavbar = dynamic(() => import("@/components/MainNavbar"));
const Footer = dynamic(() => import("@/components/Footer"));

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <MainNavbar />
      </Suspense>
      <Suspense fallback={null}>{children}</Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
export default Layout;
