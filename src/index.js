import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import storeFunc from "./Redux/store";
import * as serviceWorker from "./serviceWorker";
const { store, persistor } = storeFunc();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
