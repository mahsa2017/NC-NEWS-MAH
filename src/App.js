import React, { Component } from "react";
import "./App.css";
import { Router} from "@reach/router";
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
import SideBarLinks from "./components/SideBarLinks";
import * as api from "./api";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    user: {},
    guest:false
  };
  render() {
    const {user,guest} = this.state;
    return <div className="App">
        <header>
          <h1>N o r t h C o d e r s N e w s </h1>
        </header>
        <Nav />
        <section>
          {user.username ? <h2>
              {`Hi ${user.name.split(" ")[0]}! `}
            </h2> : <span id="wel">
               Welcome!
            </span>}
          {user.username ? <button
              onClick={() => this.logout()}
            >Log Out
            </button> : ""}
          <br />
            <SideBarLinks />
        </section>
        <Login user={user} login={this.login} guest={guest}>
          <Router className="main">
            <Articles path="/" />
            <Articles path="/topics/:topic" />
            <YourArticles user={user} path="/articles/yours" />
            <Recent user={user} path="/articles/recent" />
            <MostPopular user={user} path="/articles/popular" />
            <MostCommented user={user} path="/articles/commented" />
            <Article user={user} path="/articles/:article_id" />
            <Users path="/users" />
            <PostArticle user={user} path="/postArticle" />
            <NotFound default />
            <NotFound path="/error" />
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
  logout = () => {
    this.setState({
      user:{}
    })
  }
}

export default App;
