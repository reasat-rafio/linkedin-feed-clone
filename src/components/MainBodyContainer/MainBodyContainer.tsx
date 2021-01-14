import { RightFeedSection } from "../RightFeedSection/RightFeedSection";
import { LeftFeedSection } from "./LeftFeed/LeftFeedSection";

interface MainBodyContainerProps {}

export const MainBodyContainer: React.FC<MainBodyContainerProps> = ({}) => {
   return (
      <div className="grid grid-cols-10 gap-4">
         <section className="col-span-2">
            <LeftFeedSection />
         </section>
         <section className="col-span-5">5</section>
         <section className="col-span-3">
            <RightFeedSection />
         </section>
      </div>
   );
};
