export const CHANGE_ISLOGGEDIN = "CHANGE_ISLOGGEDIN";
export const CHANGE_USER = "CHANGE_USER";
export const CHANGE_TOKEN = "CHANGE_TOKEN";

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
