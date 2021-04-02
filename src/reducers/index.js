import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
const persistConfig = {
  key: "primary",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["library", "detail"],
  blacklist: ["games"],
};

const pReducer = persistReducer(persistConfig, rootReducer);

export default pReducer;
