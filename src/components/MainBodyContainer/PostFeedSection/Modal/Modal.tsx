import { motion } from "framer-motion";
import { useCtx } from "../../../../store/GlobalStore";
import { Icons } from "./Data";
import { BiCommentDetail } from "react-icons/bi";

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
               {/* Header */}
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

                  {/* Profile */}
                  <div className="my-5">
                     <div className="grid grid-cols-10  ">
                        <div className="col-span-1 m-auto">
                           <img
                              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                              src="https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                              alt=""
                           />
                        </div>
                        <div className="col-span-5 ml-3">
                           <h2 className="text-lg font-medium">
                              AL Reasat Rafio
                           </h2>
                           <button className="mb-2 py-1 px-4 text-gray-600-700 font-medium border-solid border-2 border-gray-700-700 rounded-full transform transition ease duration-150  hover:bg-blue-100 hover:shadow-md">
                              <svg
                                 className="inline-block mx-1 fill-current"
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
                              <span>Anyone</span>
                           </button>
                        </div>
                     </div>
                  </div>
                  {/* Text area for posting*/}
                  <div>
                     <textarea
                        id="w3review"
                        name="w3review"
                        className="w-full h-28 "
                        placeholder="What do you want to talk about"
                     ></textarea>
                  </div>

                  <div className=" font-semibold flex">
                     <h1 className="font-bold text-blue-700 p-1 hover:bg-opacity-20 hover:bg-blue-600 rounded transition transform duration-200 ease cursor-pointer">
                        Add hastag
                     </h1>
                  </div>

                  <div className="flex justify-around  items-center">
                     <ul className="flex justify-start gap-2 items-center text-gray-700 ">
                        {Icons.map((icon, i) => (
                           <li
                              className="  p-2 rounded-full cursor-pointer hover:bg-opacity-20 hover:bg-gray-600  transition transform duration-200 ease"
                              key={i}
                           >
                              {icon}
                           </li>
                        ))}
                     </ul>

                     <div className="flex border-solid border-l">
                        <button className="flex items-center justify-start flex-1 mr-7  p-2 rounded-full cursor-pointer hover:bg-opacity-20 hover:bg-gray-600  transition transform duration-200 ease">
                           <BiCommentDetail />
                           <span>Anyone</span>
                        </button>
                        <button className="flex items-center justify-start  px-2 py-1 rounded-full cursor-pointer bg-blue-700 text-white">
                           Post
                        </button>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </>
   );
};
