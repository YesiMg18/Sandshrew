import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

export default class App extends Component {
  render() {
    if (localStorage.getItem("lang") === null) {
      localStorage.setItem("lang", "en");
      window.location.reload();
    }
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    );
  }
}
