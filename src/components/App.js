import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Loader from "./shared/Loader";

const MoviesList = lazy(() => import("./Movies/MoviesList"));
const CreateMovie = lazy(() => import("./Movies/CreateMovie"));

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/Create" component={CreateMovie} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
