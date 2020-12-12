import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axions from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: "",
  };

  searchForUsers = async (searchText) => {
    this.setState({ loading: true });
    const res = await axions.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  setAlert = (msg, type) => {
    console.log("in set alert");
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setCurrentUser = (username) => this.setState({ user: username });

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Navbar title={this.numbers} />
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchForUsers={this.searchForUsers}
                      clearUsers={this.clearUsers}
                      showClearButton={this.state.users.length !== 0}
                      setAlert={this.setAlert}
                    />
                    <Users
                      users={this.state.users}
                      loading={this.state.loading}
                    ></Users>
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:username"
                render={(props) => <User />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
