import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Login.css";
class Login extends Component {
  state = {
    username: ""
  };
  render() {

    //this.props.user first time it renders is an empty object which is truthy,so we pass username to make sure is not empty and if so, return children of router
    if (this.props.user.username) return this.props.children;
    return <div className="main">
        <div id="login">
          <form action="" onSubmit={this.handleSubmit} className="inputButton">
            <input className="textInputs" type="text" name="username" id="username" onChange={this.handleChange} /> <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>;
  }
  handleChange = e => {
    this.setState({
      username: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username);
    this.setState({
      username: ""
    });
  };
}

Login.propTypes = {};

export default Login;
