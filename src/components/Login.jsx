import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Login.css";
class Login extends Component {
  state = {
    username: "",
    inputEmpty:false
  };
  render() {

    //this.props.user first time it renders is an empty object which is truthy,so we pass username to make sure is not empty and if so, return children of router
    if (this.props.user.username) return this.props.children;
    return <div className="main">
        <div id="login">
          <form action="" onSubmit={this.handleSubmit} className="inputButton">
            <input className="textInputs" type="text" name="username" id="username" onChange={this.handleChange} /> <br />
            <button type="submit">Login</button>
            {this.state.inputEmpty ? <h3 style={{ color: "white" }}>
            <span role="img" aria-label="sheep">⛔</span> Can't login without username!
              </h3> : ""}
            {this.props.guest ? <h3 style={{ color: "white" }}>
                {" "}
            <span role="img" aria-label="sheep">🚫</span> You entered Wrong Username!
              </h3> : ""}
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
    const {username} = this.state;
    if (!username) this.setState({inputEmpty:true});
    this.props.login(this.state.username);
    this.setState({
      username: ""
    });
  };
}

Login.propTypes = {
  user:PropTypes.object.isRequired
};

export default Login;
