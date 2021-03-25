import { combineReducers } from "redux";
import gamesReducer from "./gameReducer";
import detailReducer from "./detailReducer";
import libraryReducer from "./libraryReducer";
const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
  library: libraryReducer,
});

export default rootReducer;
