import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./store/store";

const initialState = {
  basket: {
    101: { id: 101, name: "Mountain Dew", quantity: 2, price: 3.6 },
    102: { id: 102, name: "Desperados", quantity: 6, price: 2.4 },
    103: { id: 103, name: "Jack Daniels", quantity: 4, price: 7.5 }
  }
};

const store = createStore(reducers, initialState, compose(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
