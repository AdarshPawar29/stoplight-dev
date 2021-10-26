import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import StoplightProjectDoc from "./components/StoplightProjectDoc";
import { Navigation } from "./components/Navigation";
import "./App.css";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main className="main-content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/stoplight-project" />
            </Route>
            <Route path="/about" render={() => <>hello</>} />
            <Route path="/stoplight-project" component={StoplightProjectDoc} />
          </Switch>
        </main>
      </div>
    </Sentry.ErrorBoundary>
  );
}

export default App;
