import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// import logger from "redux-logger";

const middlewares = [thunk];

if (process.env.NODE_ENV === `production`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage
};

export default () => {
  let store = createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(...middlewares)
  );
  let persistor = persistStore(store, {}, () => {});
  return { store, persistor };
};
