import React, { Component } from 'react';
import './App.css';
import {Router, Link} from '@reach/router'
import Home from './components/Home'
import Topic from './components/Topic'
import Nav from './components/Nav'
import Articles from './components/Articles'

class App extends Component {
  render() {
    return <div className="App">
        <header>FE2 NC_NEWS</header>
        <Nav />
        <section>SIDE BAR</section>
        <Router>
          <Home path="/" />
          <Articles path="/topics/:topic" />
        </Router>
        <footer>NC-NEWS-Project Made By Mahsa</footer>
      </div>;
  }
}

export default App;
