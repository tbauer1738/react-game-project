import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import gameReducer from "./gameReducer";
import enemyReducer from "./enemyReducer";

export default combineReducers({
  playerReducer,
  gameReducer,
  enemyReducer
});
