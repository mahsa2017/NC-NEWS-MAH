import React, { Component } from 'react';
import './App.css';
import {Router, Link} from '@reach/router'
import Home from './components/Home'
import Topic from './components/Topic'
import Nav from './components/Nav';
import Users from './components/Users';
import User from './components/User';
import Article from './components/Article'
import Articles from './components/Articles'

class App extends Component {
  render() {
    return <div className="App">
        <header><h1>N o r t h C o d e r s N e w s </h1></header>
        <Nav />
        <section> SIDE BAR</section>
        <Router className="main">
          <Home path="/" />
          <Articles path= "/topics/:topic" />
          <Article  path= "/articles/:article_id" />
          <Users    path="/users" />
          <User    path="/users/:user_id" />

        </Router>
        <footer> NC-NEWS-Project Made By Mahsa </footer>
      </div>;
  }
}

export default App;
