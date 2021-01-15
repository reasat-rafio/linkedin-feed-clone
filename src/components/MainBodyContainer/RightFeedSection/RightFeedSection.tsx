interface RightFeedSectionProps {}
import { BsFillInfoSquareFill } from "react-icons/bs";
import { addToYourFeed, mostViewdCourse, Navs } from "./Data";
import { AiOutlinePlus } from "react-icons/ai";

export const RightFeedSection: React.FC<RightFeedSectionProps> = ({}) => {
   return (
      <div className="">
         {/*Top card  */}
         <section>
            <div className=" bg-white border-solid border rounded-lg shadow-sm">
               <div className="flex p-2 text-base">
                  <h2 className="flex-1">Add to your feed</h2>
                  <button className="text-gray-600">
                     <BsFillInfoSquareFill />
                  </button>
               </div>

               <ul className="p-2 overflow-hidden">
                  {addToYourFeed.map((a, i) => (
                     <li
                        key={i}
                        className="grid grid-cols-10 gap-1 mb-2 cursor-pointer"
                     >
                        <span className="col-span-2">{a.icon}</span>
                        <div className=" lg:col-span-5  sm:col-span-4">
                           <span className=" text-sm font-bold block">
                              {a.titile}
                           </span>
                           <span className="text-sm font-light">
                              {a.subTitle}
                           </span>
                        </div>

                        <button className="lg:col-span-3 sm:col-span-4 flex m-auto lg:px-3 lg:py-1 md:px-2 md:py-1  justify-center items-center border-solid border border-blue-700 text-blue-700 font-bold  rounded-full hover:bg-opacity-20 hover:bg-blue-600 w-20">
                           <AiOutlinePlus className="sm:hidden  md:hidden lg:block" />
                           <p className="text-xs">Follow</p>
                        </button>
                     </li>
                  ))}
               </ul>
               <div className="px-3 pb-3 flex">
                  <h2 className="text-sm font-bold text-blue-700 p-1 hover:bg-opacity-20 hover:bg-blue-600 rounded transition transform duration-200 ease cursor-pointer">
                     View all recommendations
                  </h2>
               </div>
            </div>
         </section>

         {/* Middle card */}
         <section>
            <div className="bg-white mt-3 border-solid border rounded-lg shadow-sm ">
               <div className="flex p-2 text-base">
                  <h2 className="flex-1">Today’s most viewed courses</h2>
                  <button className="text-gray-600">
                     <BsFillInfoSquareFill />
                  </button>
               </div>
               <ul>
                  {mostViewdCourse.map((m, i) => (
                     <li
                        key={i}
                        className="px-3 py-1  mb-1 cursor-pointertransform translate duration-75 ease-in  hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer"
                     >
                        <span className="block text-sm font-semibold">
                           {m.title}
                        </span>
                        <span className="block text-xs text-gray-600">
                           {m.subTitle}
                        </span>
                     </li>
                  ))}
               </ul>

               <div className="px-3 pb-3 flex">
                  <h2 className="text-sm font-bold text-blue-700 p-1 hover:bg-opacity-20 hover:bg-blue-600 rounded transition transform duration-200 ease cursor-pointer">
                     Show more on LinkedIn Learning
                  </h2>
               </div>
            </div>
         </section>

         {/* Bottom Section */}
         <section className="sticky top-2">
            {/* img */}
            <div className="bg-white mt-3 border-solid border rounded-lg shadow-sm overflow-hidden p-2 cursor-pointer">
               <img
                  className="w-full object-cover"
                  src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
                  alt="pic"
               />
            </div>

            <ul className="grid grid-cols-3 justify-center mt-4 px-4  items-center">
               {Navs.map((n, i) => (
                  <li
                     className="m-1 text-xs flex justify-center items-center text-gray-600 border-solid border-b hover:border-black"
                     key={i}
                  >
                     <a className="m-auto" href={`#${n}`}>
                        {n}
                     </a>
                  </li>
               ))}
            </ul>
         </section>
      </div>
   );
};
