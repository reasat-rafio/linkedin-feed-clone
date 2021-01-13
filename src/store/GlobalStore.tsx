import { createContext, useContext, useReducer } from "react";
import { Reducer } from "./Reduer";

const Store = createContext(null);

const initalState = {
   openMore: false,
};

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(Reducer, initalState);

   return (
      <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
   );
};

export const useCtx = () => useContext(Store);
