import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPageContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPageContainer} />
    </Switch>
  );
};

export default RoutesView;