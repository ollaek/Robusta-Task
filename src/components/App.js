import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Loader from "./Shared/Loader";

const MoviesList = lazy(() => import("./Movies/MoviesList"));
const CreateMovie = lazy(() => import("./Movies/CreateMovie"));
const EditMovie = lazy(()=> import("./Movies/EditMovie"));

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/Create" component={CreateMovie} />
        <Route path="/Edit/:id" component={EditMovie}/>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
