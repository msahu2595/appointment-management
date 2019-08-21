import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import logger from "redux-logger";

const persistConfig = {
    key: 'root',
    storage,
  }

export let store = createStore( persistReducer(persistConfig, rootReducer), applyMiddleware(thunk, logger))
export let persistor = persistStore(store)

//  default { store, persistor };

// const store = createStore(rootReducer );

// export default store;
// persistor
