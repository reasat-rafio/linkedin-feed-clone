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

      case "TOGGLE_MODAL":
         return {
            ...state,
            openModal: !state.openModal,
         };

      case "TOGGLE_MOBILE_NAV":
         return {
            ...state,
            openMobileNav: !state.openMobileNav,
         };

      case "ACTIVEE_MOBILE_NAV":
         return {
            ...state,
            openMobileNav: true,
         };

      case "DEACTIVE_MOBILE_NAV":
         return {
            ...state,
            openMobileNav: false,
         };

      default:
         console.log(action.type);
         return state;
   }
};
