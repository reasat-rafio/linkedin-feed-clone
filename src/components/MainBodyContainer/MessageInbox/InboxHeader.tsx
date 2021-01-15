import { Icons } from "./Data";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
interface inboxHeaderProps {
   showMore: boolean;
   setShowMore: any;
}

export const InboxHeader: React.FC<inboxHeaderProps> = ({
   showMore,
   setShowMore,
}) => {
   return (
      <div className="flex p-3 border-solid border-b ">
         <div className="flex justify-start items-center gap-2 flex-1">
            <img
               className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
               src="https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
               alt=""
            />
            <h2 className="font-medium">Messaging</h2>
         </div>
         <ul className="flex justify-center items-center gap-3">
            {Icons.map((icon, i) => (
               <li
                  key={i}
                  className="p-2 flex  rounded-full transform transition duration-100 ease-in hover:bg-opacity-10  hover:bg-gray-800"
               >
                  <button>{icon}</button>
               </li>
            ))}
            <li className="p-2 flex  rounded-full transform transition duration-100 ease-in hover:bg-opacity-10  hover:bg-gray-800">
               <button
                  onClick={() => setShowMore((prevShowMore) => !prevShowMore)}
               >
                  {showMore ? (
                     <AiOutlineArrowDown fontSize="18" />
                  ) : (
                     <AiOutlineArrowUp fontSize="18" />
                  )}
               </button>
            </li>
         </ul>
      </div>
   );
};
