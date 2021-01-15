import { useRef, useState } from "react";
import { InboxHeader } from "./InboxHeader";
import { motion } from "framer-motion";
import { RiListSettingsLine } from "react-icons/ri";
import { Message } from "./Data";

interface MessageInboxProps {}

export const MessageInboxFull: React.FC<MessageInboxProps> = ({}) => {
   const [showMore, setShowMore] = useState<boolean>(true);

   // Framer motion animation variant
   const BoxVariants = {
      exit: { y: 150, transition: { duration: 0.4 } },
      enter: {
         y: 0,
         transition: {
            type: "spring",
            duration: 0.4,
         },
      },
   };

   // input click ref
   const inputRef = useRef<null | any>(null);

   // Handle inoutRef Click
   const handleInputRefClick = () => {
      inputRef.current.focus();
   };

   return (
      <motion.section
         initial="exit"
         animate="enter"
         exit="exit"
         variants={BoxVariants}
         className={`fixed mt-12 right-0 ${
            !showMore ? "h-14 bottom-0" : "h-full"
         }  w-96  z-20  rounded-lg bg-white  shadow-2xl overflow-auto  transform transition duration-100 ease-in`}
      >
         {/* Header */}
         <InboxHeader showMore={showMore} setShowMore={setShowMore} />

         {/* Input */}
         <div className="">
            <div className=" p-3">
               <div className="search-input">
                  <svg
                     onClick={handleInputRefClick}
                     className="h-5 mr-3 cursor-pointer"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                  >
                     <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                     />
                  </svg>
                  <input
                     ref={inputRef}
                     className="lg:w-40 md:w-28 bg-transparent transform transition duration-75 text-xs focus:translate-x-3 flex-1"
                     placeholder="Search Messages"
                     type="text"
                  />
                  <RiListSettingsLine />
               </div>
            </div>
            <ul className="p-3">
               {Message.map((m, i) => (
                  <li key={i} className="grid grid-cols-9 mb-4">
                     <span className="col-span-2 m-auto">{m.img}</span>
                     <div className="col-span-7 border-solid border-b">
                        <span className="block text-sm">{m.name}</span>
                        <span className="block text-xs font-light">
                           {m.message}
                        </span>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </motion.section>
   );
};
