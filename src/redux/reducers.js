import { CHANGE_ISLOGGEDIN, CHANGE_USER, CHANGE_TOKEN, CHANGE_PRODUCTS } from "./actions.js";

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

export const token = (state = "", action) => {
    switch (action.type) {
        case CHANGE_TOKEN:
            return action.payload;
        default:
            return state;
    }
};

export const products = (state = [], action) => {
    switch (action.type) {
        case CHANGE_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};
