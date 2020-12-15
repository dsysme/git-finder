import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <div className="container">
              <Navbar />
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:username" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
