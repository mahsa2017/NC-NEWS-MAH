import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Users from "./components/Users";
import Article from "./components/Article";
import Articles from "./components/Articles";
import Login from "./components/Login";
import YourArticles from "./components/YourArticles";
import Recent from "./components/Recent";
import MostPopular from "./components/MostPopular";
import MostCommented from "./components/MostCommented";
import PostArticle from './components/PostArticle'
// import Emoji from './components/Emoji'
import * as api from "./api";
import NotFound from "./components/NotFound";


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
            </h2> : <span style={{ fontSize: "25px" }}>
              <span role="img" aria-label="sheep">
                🙋
              </span>
               Welcome!
            </span>}
          {this.state.user.username ? <button
              onClick={() => this.setState({ user: {} })}
            >
              {" "}
              Log Out
            </button> : ""}
          <br />
          <Link className="sideBarLinks" to="/postArticle">
          <span role="img" aria-label="sheep">&#x2795;</span> Post an article
          </Link> <br />
          <Link className="sideBarLinks" to="/articles/yours">
          <span role="img" aria-label="sheep">✍</span> Your Articles
          </Link> <br />
          <Link className="sideBarLinks" to="/articles/recent">
          <span role="img" aria-label="sheep">&#9203; </span>Recent Articles
          </Link> <br />
          <Link className="sideBarLinks" to="/articles/popular">
          <span role="img" aria-label="sheep">😍</span> Top 10 Popular Articles
          </Link> <br />
          <Link className="sideBarLinks" to="/articles/commented">
          <span role="img" aria-label="sheep">🔥 </span>
            Top 10 Commented Articles
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
            <PostArticle user={this.state.user} path="/postArticle" />
            <NotFound default />
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
