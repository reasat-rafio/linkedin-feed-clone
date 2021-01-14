import { type } from "os";
import { useRef, useState } from "react";
import { useCtx } from "../../store/GlobalStore";
import { useResize } from "../../utils/useResizer";
import { NavbarProfileDropDown } from "./NavbarProfileDropDown";

interface NavbarProps {
   pageWidth: number;
}

export const Navbar: React.FC<NavbarProps> = ({ pageWidth }) => {
   // profile dropdown toggle state
   const [profileDropdown, SetProfileDropDown] = useState<boolean>(false);

   // input click ref
   const inputRef = useRef<null | any>(null);

   // Handle inoutRef Click
   const handleInputRefClick = () => {
      inputRef.current.focus();
   };

   // Calling the global state
   const { state, dispatch } = useCtx();

   const handleToggleMore = () => {
      dispatch({
         type: "TOGGLE_MORE",
      });
   };

   return (
      <nav className="lg:w-2/3 m-auto flex items-center ">
         {/* Logo & Search input */}

         <div className="">
            <div className="flex">
               <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" />
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
                     className="lg:w-40 md:w-28 bg-transparent transform transition duration-75 text-xs focus:translate-x-3 "
                     placeholder="Search"
                     type="text"
                  />
               </div>
            </div>
         </div>

         {/*------------------------- Nav List-------------------------- */}

         <div className="ml-auto">
            {pageWidth > 770 ? (
               <ul className="flex">
                  <li className="navli border-solid border-b-2 border-gray-800">
                     <svg
                        className="nav-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                     </svg>
                     {pageWidth > 1330 && (
                        <a className="nav-a " href="#home">
                           Home
                        </a>
                     )}
                  </li>
                  <li className="navli">
                     <svg
                        className="nav-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                     </svg>

                     {pageWidth > 1330 && (
                        <a className="nav-a text-center" href="#my-network">
                           My Network
                        </a>
                     )}
                  </li>
                  <li className="navli">
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

                     {pageWidth > 1330 && (
                        <a className="nav-a" href="#">
                           Jobs
                        </a>
                     )}
                  </li>
                  <li className="navli">
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

                     {pageWidth > 1330 && (
                        <a className="nav-a" href="#">
                           Messaging
                        </a>
                     )}
                  </li>
                  <li className="navli">
                     <svg
                        className="nav-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                     </svg>

                     {pageWidth > 1330 && (
                        <a className="nav-a" href="#">
                           Notifications
                        </a>
                     )}
                  </li>

                  {/*  ------------- my account drop down  ------------*/}

                  <li
                     className="navli border-solid border-r"
                     onClick={() =>
                        SetProfileDropDown(
                           (prevSetProfileDropdown) => !prevSetProfileDropdown
                        )
                     }
                  >
                     <div className="relative">
                        <img
                           className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                           src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                           alt=""
                        />
                        <button className="relative m-auto z-10 block rounded bg-white focus:outline-none">
                           <svg
                              className="h-5 w-5 text-gray-800"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </button>

                        <div
                           className={`fixed inset-0 h-full w-full z-20 ${
                              profileDropdown ? "block" : "hidden"
                           }`}
                        ></div>

                        <div
                           className={`absolute right-0 mt-2 py-2 w-72 bg-white rounded-md shadow-xl z-20 ${
                              profileDropdown ? "block" : "hidden"
                           }`}
                        >
                           <NavbarProfileDropDown />
                        </div>
                     </div>
                  </li>

                  <li
                     onClick={handleToggleMore}
                     className="navli cursor-pointer"
                  >
                     <svg
                        className="nav-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                        />
                     </svg>
                     <button className="relative m-auto z-10 block rounded bg-white focus:outline-none">
                        <svg
                           className="h-5 w-5 text-gray-800"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </button>
                  </li>

                  <li
                     className="navli m-auto"
                     style={{
                        display: `${pageWidth < 1500 ? "none" : "block "}`,
                     }}
                  >
                     <p className="text-yellow-600 text-xs cursor-pointer transition transform  duration-75 ease-in border-solid border-b hover:border-yellow-600 ">
                        Try Premium Free for 1 Month
                     </p>
                  </li>
               </ul>
            ) : (
               // Mobile burger menu
               <svg
                  className="h-8 mr-5 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <path
                     fillRule="evenodd"
                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                     clipRule="evenodd"
                  />
               </svg>
            )}
         </div>
      </nav>
   );
};
