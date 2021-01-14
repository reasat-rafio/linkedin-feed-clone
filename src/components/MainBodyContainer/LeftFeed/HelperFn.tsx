interface helperFnProps {
   icon: any;
   text: string;
}

export const HelperFn: React.FC<helperFnProps> = ({ icon, text }) => {
   return (
      <li className="flex justify-start items-center text-xs font-medium cursor-pointer text-gray-600 transform translate duration-75 ease-in  hover:bg-gray-500 hover:bg-opacity-10 p-1">
         <span className="mr-2">{icon}</span>
         <span>{text}</span>
      </li>
   );
};
