import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axions from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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

  render() {
    return (
      <div className="App">
        <Navbar title={this.numbers} />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchForUsers={this.searchForUsers}
            clearUsers={this.clearUsers}
            showClearButton={this.state.users.length !== 0}
            setAlert={this.setAlert}
          />
          <Users users={this.state.users} loading={this.state.loading}></Users>
        </div>
      </div>
    );
  }
}

export default App;
