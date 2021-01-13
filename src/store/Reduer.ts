interface actionInterface {
   type?: string;
   payload?: any;
}

export const Reducer = (state, action: actionInterface) => {
   switch (action.type) {
      case "TOGGLE_MORE":
         return {
            ...state,
            openMore: !state.openMore,
         };

      default:
         console.log(action.type);
         return state;
   }
};
