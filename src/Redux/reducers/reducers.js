import { combineReducers } from "redux";
import { mReducer } from "./mReducer";
import vReducer from "./vReducer";

export const firstNamedReducer = (state = 1, action) => state;

export const secondNamedReducer = (state = 2, action) => state;

export const theDefaultReducer = (state = 0, action) => state;

export const rootReducer2 = combineReducers({
  mReducer,
  vReducer
});
