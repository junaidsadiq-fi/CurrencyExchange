import SecondaryNavbar from "@/components/SecondaryNavbar";
import { ReactNode } from "react";

//define a layout component
function Layout({ children }: { children: ReactNode }) {
    return (
       <>
        <SecondaryNavbar />
        {children}
        </>
    );
}   
export default Layout;
