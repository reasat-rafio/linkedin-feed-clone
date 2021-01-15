import { PostFeedSection } from "./PostFeedSection/PostFeedSection";
import { RightFeedSection } from "./RightFeedSection/RightFeedSection";
import { LeftFeedSection } from "./LeftFeed/LeftFeedSection";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { MessageInbox } from "./MessageInbox/MessageInbox";

interface MainBodyContainerProps {}

export const MainBodyContainer: React.FC<MainBodyContainerProps> = ({}) => {
   const isBreakpoint = useMediaQuery(768);
   console.log(isBreakpoint);

   return (
      <>
         <div className={`${!isBreakpoint && "grid grid-cols-10 gap-4"}`}>
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
            <MessageInbox />
         </div>
      </>
   );
};
