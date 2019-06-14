import { CHANGE_ISLOGGEDIN } from "./actions.js";

export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case CHANGE_ISLOGGEDIN:
      return action.payload;
    default:
      return state;
  }
};
