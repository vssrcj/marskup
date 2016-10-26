
import React from "react";

import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import Main from "./components/main";

const routes = (
   <Router history={browserHistory}>
      <Route path="/" component={Main}>
      </Route>
   </Router>
);

Meteor.startup(() => {
   ReactDOM.render(routes, document.querySelector("#app"));
})
