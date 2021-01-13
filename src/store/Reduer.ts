import { Interface } from "readline";

interface actionInterface {
   type: string;
   payload: any;
}

export const Reducer = (state, action: actionInterface) => {
   switch (action.type) {
      default:
         return state;
   }
};
