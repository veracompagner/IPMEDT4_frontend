export const CHANGE_ISLOGGEDIN = "CHANGE_ISLOGGEDIN";
export const CHANGE_USER = "CHANGE_USER";

export const changeIsLoggedIn = isLoggedIn => ({
    type: CHANGE_ISLOGGEDIN,
    payload: isLoggedIn
});

export const changeUser = user => ({
    type: CHANGE_USER,
    payload: user
});
