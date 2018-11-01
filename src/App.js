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
import YourArticles from "./components/YourArticles";
import Recent from "./components/Recent";
import MostPopular from "./components/MostPopular";
import MostCommented from "./components/MostCommented";
import PostArticle from './components/PostArticle'
import * as api from "./api";


class App extends Component {
  state = {
    user: {},
    guest:false
  };
  render() {
    return <div className="App">
        <header>
          <h1>N o r t h C o d e r s N e w s </h1>
        </header>
        <Nav />
        <section>
          {this.state.user.username ? <h2>
              {`Hi ${this.state.user.name.split(" ")[0]}! `}
        </h2> : <span style={{ fontSize: "25px" }}>🙋 Welcome!</span>
            } 
          {this.state.user.username ? <button
              onClick={() => this.setState({ user: {} })}
            >
              Log Out
            </button> : ""}
          <br />
          <Link className="sideBarLinks" to="/postArticle">
            &#x2795; Post an article
          </Link> <br />
          <Link className="sideBarLinks" to="/articles/yours">
            ✍ Your Articles
          </Link> <br />
          <Link className="sideBarLinks" to="/articles/recent">
            &#9203; Recent Articles
          </Link> <br />
          <Link className="sideBarLinks" to="/articles/popular">
            😍 Top 10 Popular Articles
          </Link> <br/>
          <Link className="sideBarLinks" to="/articles/commented">
            🔥 Top 10 Commented Articles
          </Link>
        </section>
        <Login user={this.state.user} login={this.login} guest={this.state.guest}> 
          <Router className="main">
            <Home path="/" />
            <Articles path="/topics/:topic" />
            <YourArticles user={this.state.user} path="/articles/yours" />
            <Recent user={this.state.user} path="/articles/recent" />
            <MostPopular user={this.state.user} path="/articles/popular" />
            <MostCommented user={this.state.user} path="/articles/commented" />
            <Article user={this.state.user} path="/articles/:article_id" />
            <Users path="/users" />
            <User path="/users/:user_id" />
            <PostArticle user={this.state.user} path="/postArticle" />
          </Router>
        </Login>
        <footer> NC-NEWS Front End Project By Mahsa </footer>
      </div>;
  }
  login = username => {
    api.login(username)
    .then(user => {
      this.setState({
        user
      });
    })
    .catch(err => {
      this.setState({guest:true}) 
    })
  };
}

export default App;
