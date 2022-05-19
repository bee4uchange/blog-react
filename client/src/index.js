import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

root.render(
  <NextUIProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </NextUIProvider>
);
