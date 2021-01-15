import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

export const Posts = [
   {
      userName: "Dallin Baumbach",
      userImage: (
         <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1591295967474-278e1aa10ecd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODB8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
         />
      ),
      postPosition: " • 1st",
      userTitle: "Software Engineer at Pathao BD",
      days: "3d • Edited •",
      postBodyText:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postImage: (
         <img
            className="rounded"
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            alt=""
         />
      ),
      likeCounts: "47",
      commentCounts: "26 comments",
   },

   {
      userName: "IsaaK Alexandre KaRslian",
      userImage: (
         <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1585675100414-add2e465a136?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
         />
      ),
      postPosition: " • 2nd",
      userTitle: "Software Engineer at foodPanda.com",
      days: "5d • Edited •",
      postBodyText:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum  ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u  ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u",
      postImage: null,
      likeCounts: "12",
      commentCounts: "2 comments",
   },

   {
      userName: "Clark Tibbs",
      userImage: (
         <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1607017137021-5dc7e8cd4317?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
         />
      ),
      postPosition: " • 2nd",
      userTitle: "Software Engineer at reddit",
      days: "1d • Edited •",
      postBodyText:
         "Lorem ipsum dolor sit amco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugia cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum  ipsum dolor sit amunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u",
      postImage: (
         <div>
            <img
               src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
               alt=""
            />
            <img
               src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
               alt=""
            />
         </div>
      ),

      likeCounts: "59",
      commentCounts: "35 comments",
   },
];

export const Actions = [
   {
      icon: <AiOutlineLike fontSize="21" />,
      title: "Like",
   },
   {
      icon: <FaRegCommentDots fontSize="21" />,
      title: "Comment",
   },
   {
      icon: <AiOutlineShareAlt fontSize="21" />,
      title: "Share",
   },
   {
      icon: <RiSendPlaneFill fontSize="21" />,
      title: "Send",
   },
];
