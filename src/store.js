import { combineReducers, createStore } from "redux";
import { isLoggedIn } from "./reducers";

export const store = createStore(
  combineReducers({
    isLoggedIn
  })
);
