import { ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";

const SecondaryNavbar = dynamic(() => import("@/components/SecondaryNavbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <SecondaryNavbar />
      </Suspense>
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Layout;
