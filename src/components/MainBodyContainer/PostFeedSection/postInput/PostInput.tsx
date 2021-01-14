import { IoCreateOutline } from "react-icons/io5";
import { useCtx } from "../../../../store/GlobalStore";
import { Activites } from "../utils";
interface PostInputProps {}

export const PostInput: React.FC<PostInputProps> = ({}) => {
   const { dispatch } = useCtx();

   // Open modal Action
   const openModal = () => {
      dispatch({
         type: "TOGGLE_MODAL",
      });
   };

   return (
      <>
         <div className="p-3">
            <div
               onClick={openModal}
               className="flex text-lg justify-start items-center border-solid border-2 p-2 rounded-full transform transition duration-150 ease-in hover:bg-black cursor-pointer hover:bg-opacity-5"
            >
               <IoCreateOutline className="mx-2 text-gray-900" fontSize="25" />
               <div className="bg-transparent text-gray-900 cursor-pointer">
                  Start a post
               </div>
            </div>
            <ul className="flex justify-evenly items-center pt-2 gap-5 ">
               {Activites.map(({ icon, title }, i) => (
                  <li
                     key={i}
                     className="flex justify-center items-center gap-2  p-2 rounded transform transition duration-150 ease-in hover:bg-black cursor-pointer hover:bg-opacity-5"
                  >
                     <span>{icon}</span>
                     <span className="text-gray-600 text-sm font-semibold">
                        {title}
                     </span>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};
