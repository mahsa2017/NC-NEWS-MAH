import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import "../App.css";
import './Nav.css';
import Home from './Home';
import Users from './Users';

import * as api from '../api';

class Nav extends Component {
  state={
    topics:[]
  }
  render() {
    const {topics} = this.state
    return (
      <nav>
        <Link to="/"><h2>Home</h2></Link> 
      {topics.map(({slug,title,_id})=>{
          return <Link key={_id} to={`/topics/${slug}`}>
        {" | "}  <h2>{title}</h2>  
        </Link>
      })}
        {" | "}
        <Link to="/users"><h2>Users</h2></Link>
      </nav>
    );
  }
  componentDidMount(){
    this.fetchTopics();
  }
  fetchTopics=()=>{
    api.getTopics()
    .then(topics=>{
      this.setState({
        topics
      })
    })
  }
}

Nav.propTypes = {

};

export default Nav;