import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import Topic from "./components/Topic";
import Nav from "./components/Nav";
import Users from "./components/Users";
import User from "./components/User";
import Article from "./components/Article";
import Articles from "./components/Articles";
import Login from "./components/Login";
import PostArticle from './components/PostArticle'
import * as api from "./api";


class App extends Component {
  state = {
    user: {}
  };
  render() {
    return <div className="App">
        <header>
          <h1>N o r t h C o d e r s N e w s </h1>
        </header>
        <Nav />
        <section>
          <Link id="postAnArticleLink" to="/postArticle">
            &#x2795; Post an article
          </Link>
        </section>
        <Login user={this.state.user} login={this.login}>
          <Router className="main">
            <Home path="/" />
            <Articles path="/topics/:topic" />
            <Article path="/articles/:article_id" />
            <Users path="/users" />
            <User path="/users/:user_id" />
            <PostArticle user={this.state.user} path="/postArticle" />
          </Router>
        </Login>
        <footer> NC-NEWS Front End Project Made By Mahsa </footer>
      </div>;
  }
  login = username => {
    api.login(username)
    .then(user => {
      // console.log(user,"<<<<")
      this.setState({
        user
      });
    });
  };
}

export default App;
