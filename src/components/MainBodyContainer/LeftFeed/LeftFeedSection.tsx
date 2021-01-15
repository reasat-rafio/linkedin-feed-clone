import { RiBookmarkFill } from "react-icons/ri";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import { Recent, recentHastags } from "./Data";
import { HelperFn } from "./HelperFn";

interface LeftFeedSectionProps {}

export const LeftFeedSection: React.FC<LeftFeedSectionProps> = ({}) => {
   const [hidden, setHidden] = useState<boolean>(true);
   const [followedHashtags, setFollowedHashtags] = useState<boolean>(true);

   // const GetTopheightRef = useRef(null);
   // const [height, setHeight] = useState(0);

   // useEffect(() => {
   //    setHeight(GetTopheightRef.current.offsetTop);
   // }, []);

   return (
      <div className="">
         {/* Profile section */}
         <section className="border-solid border bg-white overflow-hidden rounded-lg shadow-md">
            <img
               className="h-16 w-full object-cover"
               src="https://images.unsplash.com/photo-1610208311724-72e7baf69795?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
               alt="cover"
            />
            <div className="flex justify-center items-center">
               <img
                  style={{ transform: "translateY(-50%)" }}
                  className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="avatar"
               />
            </div>
            <div className="flex flex-col justify-center items-center px-3 pb-3 border-solid border-b">
               <h2 className="text-base font-semibold">AL Reasat Rafio</h2>
               <h2 className="text-xs text-gray-600 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, delectus.
               </h2>
            </div>

            <ul className="border-solid border-b ">
               <li className="px-3 py-1 cursor-pointer flex justify-center items-center my-2 transform translate duration-75 ease-in  hover:bg-gray-500 hover:bg-opacity-10 ">
                  <div className="flex-1">
                     <span className="block text-xs font-semibold text-gray-600">
                        Connections
                     </span>
                     <span className="block text-xs font-semibold">
                        Grow your network
                     </span>
                  </div>
                  <span className="block text-xs font-semibold text-blue-700">
                     322
                  </span>
               </li>
               <li className="px-3 pt-1 pb-2 cursor-pointer flex justify-center items-center my-2 transform translate duration-75 ease-in  hover:bg-gray-500 hover:bg-opacity-10 ">
                  <span className="block text-xs font-semibold text-gray-600 flex-1">
                     Who viwed your profile
                  </span>
                  <span className="block text-xs font-semibold text-blue-700 ">
                     19
                  </span>
               </li>
            </ul>
            <div>
               <li className="px-3 py-3 flex justify-start items-center transform translate duration-75 ease-in  hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer ">
                  <span className="text-gray-600 ">
                     <RiBookmarkFill />
                  </span>
                  <span className=" text-xs font-semibold text-gray-600 flex-1">
                     My items
                  </span>
               </li>
            </div>
         </section>

         {/* Bottom card */}
         <section className="border-solid border mt-3 rounded-lg shadow-md bg-white  ">
            <div className="flex p-3 ">
               <h2 className="flex-1 text-sm ">Followed hastags</h2>
               <button
                  onClick={() => setHidden((prevHdn) => !prevHdn)}
                  className="rounded-full transform transition duration-100 ease-in hover:bg-opacity-10  hover:bg-gray-800 p-1 "
                  style={{ outline: "none" }}
               >
                  {hidden ? (
                     <AiOutlineArrowDown className="" />
                  ) : (
                     <AiOutlineArrowUp />
                  )}
               </button>
            </div>
            <ul>
               {hidden &&
                  Recent.map((r, i) => (
                     <HelperFn key={i} icon={r.icon} text={r.text} />
                  ))}
            </ul>

            <div className="flex p-3  ">
               <h2 className="flex-1 text-sm ">Recent</h2>
               <button
                  onClick={() => setFollowedHashtags((prevHdn) => !prevHdn)}
                  className="rounded-full transform transition duration-100 ease-in hover:bg-opacity-10  hover:bg-gray-800 p-1 "
                  style={{ outline: "none" }}
               >
                  {followedHashtags ? (
                     <AiOutlineArrowDown className="" />
                  ) : (
                     <AiOutlineArrowUp />
                  )}
               </button>
            </div>
            <ul className="border-solid border-b pb-3">
               {followedHashtags &&
                  recentHastags.map((r, i) => (
                     <HelperFn key={i} icon={r.icon} text={r.text} />
                  ))}
            </ul>

            <div className="flex justify-center items-center  transform translate duration-75 ease-in  hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer z-0">
               <h1 className="p-3 text-sm font-semibold">Discorver more</h1>
            </div>
         </section>
      </div>
   );
};
