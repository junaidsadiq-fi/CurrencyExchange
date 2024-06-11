import { ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";

const SecondaryNavbar = dynamic(() => import("@/components/SecondaryNavbar"), { ssr: false });
const NewFooter = dynamic(() => import("@/components/newFooter"));

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
        <NewFooter />
      </Suspense>
    </>
  );
}

export default Layout;
