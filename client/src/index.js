//index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createRoot } from 'react-dom/client';
import thunk from "redux-thunk";
import reducers from "/Users/mptay/Desktop/myblog/client/src/reducers/blogPosts.js";
import App from "./App";
import "/Users/mptay/Desktop/myblog/client/src/index.css";

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);