import { motion } from "framer-motion";
import { useRef } from "react";
import { useCtx } from "../../../store/GlobalStore";
import { useOutsideAlerter } from "../../../utils/useOutSideAlerter";

interface SmDeviceNavProps {}

let easing = [0.175, 0.85, 0.42, 0.96];

// Framer motion animation variant
const NavVariants = {
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

export const SmDeviceNav: React.FC<SmDeviceNavProps> = ({}) => {
   // Calling the store
   const { state, dispatch } = useCtx();

   //  Toggle more action
   const toggleMoreAction = () => {
      dispatch({
         type: "TOGGLE_MOBILE_NAV",
      });
   };

   const wrapperRef = useRef<any>(null);
   useOutsideAlerter(wrapperRef, "TOGGLE_MOBILE_NAV");

   // Sm Nav action
   const smNavbarClose = () => {
      dispatch({ type: "DEACTIVE_MOBILE_NAV" });
   };

   return (
      <section
         className="fixed w-full h-100 inset-0 overflow-hidden mt-10 z-30 "
         style={{ background: "rgba(0,0,0,.7)" }}
      >
         <motion.div
            className="absolute right-0 w-3/5   h-full rounded-lg bg-white  shadow-xl overflow-scroll"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={NavVariants}
            ref={wrapperRef}
         >
            <ul className="flex flex-col w-full">
               <li className="flex flex-row items-center justify-end mt-3  h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                  <span>
                     <button onClick={smNavbarClose}>
                        <svg
                           className="h-8 mr-5 cursor-pointer"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                           />
                        </svg>
                     </button>
                  </span>
               </li>
               <li className="my-px">
                  <a
                     href="#"
                     className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                  >
                     <span className="flex items-center justify-center text-lg text-gray-500">
                        <svg
                           className="nav-svg"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                     </span>
                     <span className="ml-3">Home</span>
                  </a>
               </li>
               <li className="my-px">
                  <a
                     href="#"
                     className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                  >
                     <span className="flex items-center justify-center text-lg text-gray-500">
                        <svg
                           className="nav-svg"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                     </span>
                     <span className="ml-3">My Network</span>
                  </a>
               </li>
               <li className="my-px">
                  <a
                     href="#"
                     className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                  >
                     <span className="flex items-center justify-center text-lg text-gray-500">
                        <svg
                           className="nav-svg"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                              clipRule="evenodd"
                           />
                           <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                     </span>
                     <span className="ml-3">Jobs</span>
                     <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto">
                        1k
                     </span>
                  </a>
               </li>
               <li className="my-px">
                  <a
                     href="#"
                     className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                  >
                     <span className="flex items-center justify-center text-lg text-green-400">
                        <svg
                           className="nav-svg"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </span>
                     <span className="ml-3">Messaging</span>
                  </a>
               </li>
               <li className="my-px">
                  <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
                     Account
                  </span>
               </li>
               <li className="my-px">
                  <a
                     href="#"
                     className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                  >
                     <span className="flex items-center justify-center text-lg text-gray-500">
                        <svg
                           fill="none"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           className="h-6 w-6"
                        >
                           <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                     </span>
                     <span className="ml-3">Profile</span>
                  </a>
               </li>
               <li className="my-px">
                  <a
                     href="#"
                     className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                  >
                     <span className="flex items-center justify-center text-lg text-gray-500">
                        <svg
                           fill="none"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           className="h-6 w-6"
                        >
                           <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                     </span>
                     <span className="ml-3">Notifications</span>
                     <span className="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-300 h-6 px-2 rounded-full ml-auto">
                        10
                     </span>
                  </a>
               </li>
               <li className="my-px">
                  <a
                     href="#"
                     className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                  >
                     <span className="flex items-center justify-center text-lg text-gray-500">
                        <svg
                           fill="none"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           className="h-6 w-6"
                        >
                           <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                           <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                     </span>
                     <span className="ml-3">Settings</span>
                  </a>
               </li>
               <li className="my-px">
                  <a
                     href="#"
                     className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                  >
                     <span className="flex items-center justify-center text-lg text-red-400">
                        <svg
                           fill="none"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           className="h-6 w-6"
                        >
                           <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                        </svg>
                     </span>
                     <span className="ml-3">Logout</span>
                  </a>
               </li>
            </ul>
         </motion.div>
      </section>
   );
};
