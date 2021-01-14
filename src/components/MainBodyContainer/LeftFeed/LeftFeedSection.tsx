import { RiBookmarkFill } from "react-icons/ri";

interface LeftFeedSectionProps {}

export const LeftFeedSection: React.FC<LeftFeedSectionProps> = ({}) => {
   return (
      <div>
         {/* Profile section */}
         <section className="border-solid border rounded-lg overflow-hidden shadow-sm ">
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

            <ul className="border-solid border-b">
               <li className="px-3 py-1 cursor-pointer flex justify-center items-center my-2 transform translate duration-75 ease-in  hover:bg-gray-500 hover:bg-opacity-10">
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
      </div>
   );
};
