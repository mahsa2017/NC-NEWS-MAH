import React, { Component } from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import * as api from "../api";

class PostComment extends Component {
  state = {
    body: ""
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            style={{ width: "876px", height: "59px" }}
            placeholder="what do you think? ..."
            onChange={this.handleChange}
          /> <br/>
          <button type="submit">send</button>
        </form>
      </div>
    );
  }
  handleChange = e => {
    this.setState({ body: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.postComment();
  };
  postComment = () => {
    api
      .postCommentByArticleId(this.props.id, {
        body: this.state.body,
        created_by: this.props.user._id
      })
      .then(comment => {
        navigate(`/articles/${this.props.id}`);
      });
  };
}

PostComment.propTypes = {};

export default PostComment;
