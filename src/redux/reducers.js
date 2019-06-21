import { CHANGE_ISLOGGEDIN, CHANGE_USER } from "./actions.js";

export const isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case CHANGE_ISLOGGEDIN:
            return action.payload;
        default:
            return state;
    }
};

export const user = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_USER:
            return action.payload;
        default:
            return state;
    }
};
