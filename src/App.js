import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  user = {
    id: "1",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v-4",
    html_url: "https://github.com/mojombo",
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users></Users>
        </div>
      </div>
    );
  }
}

export default App;
