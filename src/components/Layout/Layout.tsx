import { useEffect, useRef, useState } from "react";
import { useResize } from "../../utils/useResizer";
import { Navbar } from "../Navbar/Navbar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
   const pageRef = useRef<any>(null);

   // Getting the page inner width/hight
   const { width, height } = useResize(pageRef);

   return (
      <>
         <header
            className="w-full bg-white shadow-sm fixed top-0"
            ref={pageRef}
         >
            <Navbar pageWidth={width} />
         </header>
         {children}
      </>
   );
};
