import { motion } from "framer-motion";
import { useRef } from "react";
import { useCtx } from "../../store/GlobalStore";
import { useOutsideAlerter } from "../../utils/useOutSideAlerter";
import { Icons, Servicrs } from "./Utils";

interface MoreProps {}

let easing = [0.175, 0.85, 0.42, 0.96];

// Framer motion animation variant
const BoxVariants = {
   exit: { x: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
   enter: {
      x: 0,
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: easing,
      },
   },
};

export const More: React.FC<MoreProps> = () => {
   // Calling the store
   const { state, dispatch } = useCtx();

   //  Toggle more action
   const toggleMoreAction = () => {
      dispatch({
         type: "TOGGLE_MORE",
      });
   };

   const wrapperRef = useRef<any>(null);
   useOutsideAlerter(wrapperRef);
   return (
      <section className="absolute h-full w-full bg-black bg-opacity-60 ">
         <motion.div
            className="absolute h-full right-0 w-96   rounded-lg bg-white  shadow-xl"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={BoxVariants}
            ref={wrapperRef}
         >
            <div className="px-3 py-6 ">
               <svg
                  onClick={toggleMoreAction}
                  className="h-11 text-gray-600 ml-auto rounded-full transform transition duration-75 hover:bg-gray-50 p-2 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M6 18L18 6M6 6l12 12"
                  />
               </svg>
            </div>

            <div className="p-5 ">
               {/* More Linkedin Products Section */}

               <section className="border-solid border rounded-md shadow-sm   p-3">
                  <h2 className="text-xl p-3 border-solid border-b font-semibold">
                     Visit LinkedIn Products
                  </h2>
                  <div className="grid grid-cols-4 gap-4 p-3">
                     {Icons.map((ic, index) => (
                        <div
                           key={index}
                           className="grid-cols-1 flex flex-col justify-center items-center "
                        >
                           <div className="text-3xl border-solid border p-1 rounded-md shadow">
                              {ic.icon}
                           </div>
                           <p className="text-xs mt-1">{ic.text}</p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* Linked In Services Section  */}

               <section className="border-solid border rounded-md shadow-sm mt-5  p-3">
                  <h2 className="text-xl p-3 border-solid border-b font-semibold">
                     LinkedIn Business Services
                  </h2>
                  <ul className="p-3">
                     {Servicrs.map((sr, i) => (
                        <li className="my-2 transition transform ease-in duration-100 hover:bg-gray-500 hover:bg-opacity-5">
                           <a href="#">
                              <span className="text-sm font-semibold block">
                                 {sr.title}
                              </span>

                              <span className="text-xs">{sr.text}</span>
                           </a>
                        </li>
                     ))}
                  </ul>
               </section>
            </div>
         </motion.div>
      </section>
   );
};
