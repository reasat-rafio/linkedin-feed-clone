import { useRef, useState } from "react";
import { useCtx } from "../../store/GlobalStore";
import { useResize } from "../../utils/useResizer";
import { More } from "../More/More";
import { Navbar } from "../Navbar/Navbar";
import { SmDeviceNav } from "../Navbar/smDeviceNav/SmDeviceNav";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
   const pageRef = useRef<any>(null);

   // Getting the page inner width/hight
   const { width, height } = useResize(pageRef);

   const [more, setMore] = useState<boolean>(false);

   const {
      state: { openMore, openMobileNav },
   } = useCtx();

   return (
      <div style={{ outline: "none" }}>
         <header
            className="w-full bg-white shadow-sm fixed top-0 z-50"
            ref={pageRef}
         >
            <Navbar pageWidth={width} />
         </header>
         {openMore && <More />}
         {openMobileNav && <SmDeviceNav />}

         {children}
      </div>
   );
};
