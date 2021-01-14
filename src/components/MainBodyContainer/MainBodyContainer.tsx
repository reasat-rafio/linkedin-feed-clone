import { PostFeedSection } from "./PostFeedSection/PostFeedSection";
import { RightFeedSection } from "./RightFeedSection/RightFeedSection";
import { LeftFeedSection } from "./LeftFeed/LeftFeedSection";
import { useResize } from "../../utils/useResizer";
import { useMediaQuery } from "../../utils/useMediaQuery";

interface MainBodyContainerProps {}

export const MainBodyContainer: React.FC<MainBodyContainerProps> = ({}) => {
   const isBreakpoint = useMediaQuery(768);
   console.log(isBreakpoint);

   return (
      <div className="grid grid-cols-10 gap-4">
         {!isBreakpoint && (
            <section className="md:block md:col-span-2 sm:hidden ">
               <LeftFeedSection />
            </section>
         )}

         <section className=" md:col-span-5 sm:col-span-10">
            <PostFeedSection />
         </section>
         {!isBreakpoint && (
            <section className="md:col-span-3 md:block sm:hidden">
               <RightFeedSection />
            </section>
         )}
      </div>
   );
};
