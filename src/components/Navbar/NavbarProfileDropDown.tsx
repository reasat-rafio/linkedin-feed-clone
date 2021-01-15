interface NavbarProfileDropDownProps {}

export const NavbarProfileDropDown: React.FC<NavbarProfileDropDownProps> = ({}) => {
   return (
      <>
         <section className="flex flex-col border-solid border-b border-gray-200">
            <div className="grid grid-cols-6 p-2 ">
               <div className="col-span-1">
                  <img
                     className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                     src="https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                     alt=""
                  />
               </div>
               <div className="col-span-5">
                  <h2 className="text-lg font-semibold">AL Reasat Rafio</h2>
                  <h5 className="text-sm font-light">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Totam, delectus.
                  </h5>
               </div>
            </div>
            <button className="mb-2 text-blue-700 font-medium border-solid border-2 border-blue-700 rounded-full transform transition ease duration-150  hover:bg-blue-100 hover:shadow-md">
               View Profile
            </button>
         </section>
         <section className="flex p-2 flex-col border-solid border-b border-gray-200">
            <h2 className="text-lg font-semibold my-2">Account</h2>
            <ul>
               <li className="cursor-pointer">
                  <a
                     className="text-sm text-gray-600 font-light border-solid border-b hover:border-gray-600 "
                     href="#"
                  >
                     Settings & Privacy
                  </a>
               </li>
               <li className="cursor-pointer">
                  <a
                     className="text-sm text-gray-600 font-light border-solid border-b hover:border-gray-600 "
                     href="#"
                  >
                     Help
                  </a>
               </li>
               <li className="cursor-pointer">
                  <a
                     className="text-sm text-gray-600 font-light border-solid border-b hover:border-gray-600 "
                     href="#"
                  >
                     Language
                  </a>
               </li>
            </ul>
         </section>
         <section className="flex flex-col border-solid border-b border-gray-200  p-2">
            <h2 className="text-lg font-semibold my-2">Account</h2>
            <ul>
               <li className="cursor-pointer">
                  <a
                     className="text-sm text-gray-600 font-light border-solid border-b hover:border-gray-600 "
                     href="#"
                  >
                     Manage
                  </a>
               </li>
               <li className="cursor-pointer">
                  <a
                     className="text-sm text-gray-600 font-light border-solid border-b hover:border-gray-600 "
                     href="#"
                  >
                     Post & Activity
                  </a>
               </li>
               <li className="cursor-pointer">
                  <a
                     className="text-sm text-gray-600 font-light border-solid border-b hover:border-gray-600 "
                     href="#"
                  >
                     Job Posting Account
                  </a>
               </li>
            </ul>
         </section>
         <section className="p-2">
            <ul>
               <li className="cursor-pointer">
                  <a
                     className="text-sm text-gray-600 font-light border-solid border-b hover:border-gray-600 "
                     href="#"
                  >
                     Sign Out
                  </a>
               </li>
            </ul>
         </section>
      </>
   );
};
