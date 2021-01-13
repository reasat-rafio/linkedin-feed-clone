interface NavbarProfileDropDownProps {}

export const NavbarProfileDropDown: React.FC<NavbarProfileDropDownProps> = ({}) => {
   return (
      <>
         <section className="flex flex-col">
            <div className="grid grid-cols-6 p-2 border-solid border-b border-gray-200 ">
               <div className="col-span-1">
                  <img
                     className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
            <button className="text-blue-700 font-medium border-solid border-2 border-blue-700 rounded-full transform transition ease duration-150  hover:bg-blue-100 hover:shadow-md">
               View Profile
            </button>
         </section>
         <section></section>
         <section></section>
      </>
   );
};
