export const CHANGE_ISLOGGEDIN = "CHANGE_ISLOGGEDIN";
export const CHANGE_USER = "CHANGE_USER";
export const CHANGE_TOKEN = "CHANGE_TOKEN";
export const CHANGE_PRODUCTS = "CHANGE_PRODUCTS";
export const CHANGE_FAVORITE = "CHANGE_FAVORITE";

export const changeIsLoggedIn = isLoggedIn => ({
    type: CHANGE_ISLOGGEDIN,
    payload: isLoggedIn
});

export const changeUser = user => ({
    type: CHANGE_USER,
    payload: user
});

export const changeToken = token => ({
    type: CHANGE_TOKEN,
    payload: token
});

export const changeProducts = token => ({
    type: CHANGE_PRODUCTS,
    payload: token
});

export const changeFavorite = token => ({
    type: CHANGE_FAVORITE,
    payload: token
});
