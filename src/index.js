import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { DetalhesPacote } from "./views";

const App = () => (
  <Provider store={store}>
    <DetalhesPacote />
  </Provider>
);
ReactDOM.render(<App />, document.getElementById("root"));
