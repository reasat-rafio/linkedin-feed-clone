import { useEffect } from "react";
import { useCtx } from "../store/GlobalStore";

export const useOutsideAlerter = (ref) => {
   const { dispatch } = useCtx();
   useEffect(() => {
      function handleClickOutside(event) {
         if (ref.current && !ref.current.contains(event.target)) {
            dispatch({
               type: "TOGGLE_MORE",
            });
         }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [ref]);
};
