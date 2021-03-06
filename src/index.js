import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Provider from "./redux-provider";
import { Router, Route } from "react-router";
import appHistory from "./history";
import ArtistsModal from "./ArtistsModal";

ReactDOM.render(
  <React.StrictMode>
    <Provider store>
      <Router history={appHistory}>
        <Route path='/' component={App} />
        <Route path='/:id' exact component={ArtistsModal} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
