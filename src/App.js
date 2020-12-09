import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axions from "axios";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
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

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    return (
      <div className="App">
        <Navbar title={this.numbers} />
        <div className="container">
          <Search
            searchForUsers={this.searchForUsers}
            clearUsers={this.clearUsers}
            showClearButton={this.state.users.length !== 0}
          ></Search>
          <Users users={this.state.users} loading={this.state.loading}></Users>
        </div>
      </div>
    );
  }
}

export default App;
