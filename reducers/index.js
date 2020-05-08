import { combineReducers } from "redux";
import teamReducer from "./teamReducer";

const combinedReducers = combineReducers({
  team: teamReducer,
});

export default combinedReducers;
