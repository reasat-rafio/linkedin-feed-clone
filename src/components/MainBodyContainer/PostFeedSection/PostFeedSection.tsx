import { useCtx } from "../../../store/GlobalStore";
import { Modal } from "./Modal/Modal";
import { PostInput } from "./postInput/PostInput";
import { Posts } from "./userPosts/Data";
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
            {/*User Post Section  */}
            {Posts.map(
               (
                  {
                     userName,
                     userImage,
                     postPosition,
                     userTitle,
                     days,
                     postBodyText,
                     postImage,
                     likeCounts,
                     commentCounts,
                  },
                  i
               ) => (
                  <div key={i}>
                     <UserPosts
                        userName={userName}
                        userImage={userImage}
                        postPosition={postPosition}
                        userTitle={userTitle}
                        days={days}
                        postBodyText={postBodyText}
                        postImage={postImage}
                        likeCounts={likeCounts}
                        commentCounts={commentCounts}
                     />
                  </div>
               )
            )}
         </section>
      </div>
   );
};
