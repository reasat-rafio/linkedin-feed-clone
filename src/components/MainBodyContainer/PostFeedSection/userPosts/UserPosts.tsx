import { Actions } from "./Data";

interface UserPostsProps {
   userName: string;
   userImage: any;
   postPosition: string;
   userTitle: string;
   days: string;
   postBodyText: string;
   postImage: any;
   likeCounts: string;
   commentCounts: string;
}

export const UserPosts: React.FC<UserPostsProps> = ({
   userName,
   userImage,
   postPosition,
   userTitle,
   days,
   postImage,
   postBodyText,
   likeCounts,
   commentCounts,
}) => {
   return (
      <div className="bg-gray-100 pt-3 flex items-center justify-center">
         <div className="bg-white border shadow-sm px-4 py-3 rounded-lg ">
            <div className="flex items-center">
               {userImage}
               <div className="ml-2">
                  <div className="text-sm ">
                     <span className="font-semibold">{userName}</span>
                     <span className="text-gray-500">{postPosition}</span>
                  </div>
                  <div className="text-gray-500 text-xs ">{userTitle}</div>
                  <div className="text-gray-500 text-xs flex">
                     <span className="inline-block">{days}</span>
                     <svg
                        className="inline-block ml-1 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                     >
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                     </svg>
                  </div>
               </div>
            </div>
            <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">
               {postBodyText}
            </p>
            <div className="mt-2"> {postImage && postImage}</div>

            {/* Icons */}
            <div className="text-gray-500 text-xs flex items-center mt-3 border-solid border-b pb-3">
               <img
                  className="mr-0.5"
                  src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
               />
               <img
                  className="mr-0.5"
                  src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
               />
               <img
                  className="mr-0.5"
                  src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
               />
               <span className="ml-1">
                  {likeCounts} • {commentCounts}
               </span>
            </div>
            <ul className="flex mt-2">
               {/* Like, Comment action section */}
               {Actions.map((a, i) => (
                  <li
                     key={i}
                     className="flex cursor-pointer rounded  py-3 px-2 justify-center items-center gap-2 text-gray-600 transform translate duration-75 ease-in  hover:bg-gray-500 hover:bg-opacity-10 "
                  >
                     <span>{a.icon}</span>
                     <span className="font-medium text-sm">{a.title}</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};
