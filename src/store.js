import { combineReducers, createStore } from "redux";
import { isLoggedIn, user } from "./reducers";

export const store = createStore(
  combineReducers({
    isLoggedIn,
    user
  })
);
