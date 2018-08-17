import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ListaPacotes, DetalhesPacote } from "./views";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:pacoteId" component={DetalhesPacote} />
          <Route path="/" component={ListaPacotes} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById("root"));
