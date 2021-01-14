import { useCtx } from "../../../store/GlobalStore";
import { Modal } from "./Modal/Modal";
import { PostInput } from "./postInput/PostInput";
import { UserPosts } from "./userPosts/UserPosts";

interface PostFeedSectionProps {}

export const PostFeedSection: React.FC<PostFeedSectionProps> = ({}) => {
   // Global Store
   const {
      state: { openModal },
   } = useCtx();

   return (
      <div>
         {/* Creating post Model */}
         {openModal && <Modal />}
         <section className=" border-solid border bg-white rounded-lg shadow-sm">
            {/* Post Input section */}
            <PostInput />
         </section>
         <section>
            <UserPosts />
         </section>
      </div>
   );
};
