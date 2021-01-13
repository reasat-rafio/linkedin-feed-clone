import { motion } from "framer-motion";
import { useRef } from "react";
import { useCtx } from "../../store/GlobalStore";
import { useOutsideAlerter } from "../../utils/useOutSideAlerter";

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
         </motion.div>
      </section>
   );
};
