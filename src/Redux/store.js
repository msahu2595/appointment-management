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

export default () => {
    let store = createStore( persistReducer(persistConfig, rootReducer), applyMiddleware(thunk, logger))
    let persistor = persistStore(store)
    return { store, persistor }
  }

// const store = createStore(rootReducer );

// export default store;

