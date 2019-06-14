export const CHANGE_ISLOGGEDIN = "CHANGE_ISLOGGEDIN";

export const changeIsLoggedIn = isLoggedIn => ({
  type: CHANGE_ISLOGGEDIN,
  payload: isLoggedIn
});
