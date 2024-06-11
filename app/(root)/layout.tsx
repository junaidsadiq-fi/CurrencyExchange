"use client";
import { ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";

const MainNavbar = dynamic(() => import("@/components/MainNavbar"));
const NewFooter = dynamic(() => import("@/components/newFooter"));

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <MainNavbar />
      </Suspense>
      <Suspense fallback={null}>{children}</Suspense>
      <Suspense fallback={null}>
        <NewFooter />
      </Suspense>
    </>
  );
}
export default Layout;
