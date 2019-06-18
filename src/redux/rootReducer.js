import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  playerReducer,
  gameReducer
});
