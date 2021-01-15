import { motion } from "framer-motion";
import { useCtx } from "../../../../store/GlobalStore";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({}) => {
   const { dispatch } = useCtx();

   const closeModalAction = () => {
      dispatch({
         type: "TOGGLE_MODAL",
      });
   };

   // Animation
   let easing = [0.15, 0.85, 0.42, 0.96];

   // Framer motion animation variant
   const ModalVariants = {
      exit: {
         y: -150,
         opacity: 0,
         transition: { duration: 0.5, ease: easing },
      },
      enter: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: easing,
         },
      },
   };

   return (
      <>
         <div
            className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center "
            style={{ background: "rgba(0,0,0,.7)" }}
         >
            <motion.div
               initial="exit"
               animate="enter"
               exit="exit"
               variants={ModalVariants}
               className="border border-teal-500 smodal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
            >
               <div className="modal-content py-4 text-left px-6">
                  <div className="flex justify-between items-center pb-3 border-solid border-b-2">
                     <p className="text-2xl ">Create a post</p>
                     <div
                        onClick={closeModalAction}
                        className="modal-close cursor-pointer z-50 p-2 rounded-full transform translate duration-75 ease-in  hover:bg-gray-600 hover:bg-opacity-10"
                     >
                        <svg
                           className="fill-current text-black "
                           xmlns="http://www.w3.org/2000/svg"
                           width="18"
                           height="18"
                           viewBox="0 0 18 18"
                        >
                           <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                     </div>
                  </div>

                  <div className="my-5">
                     <p>
                        Inliberali Persius Multi iustitia pronuntiaret
                        expeteretur sanos didicisset laus angusti ferrentur
                        arbitrium arbitramur huic desiderent.?
                     </p>
                  </div>
               </div>
            </motion.div>
         </div>
      </>
   );
};
