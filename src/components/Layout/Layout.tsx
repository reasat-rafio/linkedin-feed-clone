import { useRef, useState } from "react";
import { useCtx } from "../../store/GlobalStore";
import { useResize } from "../../utils/useResizer";
import { More } from "../Navbar/More";
import { Navbar } from "../Navbar/Navbar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
   const pageRef = useRef<any>(null);

   // Getting the page inner width/hight
   const { width, height } = useResize(pageRef);

   const [more, setMore] = useState<boolean>(false);

   const {
      state: { openMore },
   } = useCtx();

   return (
      <>
         <header
            className="w-full bg-white shadow-sm fixed top-0"
            ref={pageRef}
         >
            <Navbar pageWidth={width} />
         </header>
         {openMore && <More />}

         {children}
      </>
   );
};
