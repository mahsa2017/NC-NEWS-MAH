import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import "../App.css";
import * as api from '../api';

class Nav extends Component {
  state={
    topics:[]
  }
  render() {
    const {topics} = this.state
    return (
      <nav>
        <Link to="/">HOME</Link>   {" | "}
      {topics.map(({slug,title,_id})=>{
        return <Link key={_id} to={`/topic/${slug}`}>
          {title}   {" | "}
        </Link>
      })}
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