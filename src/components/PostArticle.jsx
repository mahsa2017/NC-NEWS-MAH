import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import "./PostArticle.css";
import * as api from "../api";
import { navigate } from "@reach/router/lib/history";

class PostArticle extends Component {
  state = {
    topic: "",
    title: "",
    body: ""
  };
  render() {
    return (
      <div>
        <form
          className="post-article-form"
          action=""
          onSubmit={this.handleSubmit}
        >
          <select name="topicSelection" id="topic" onChange={this.handleChange}>
            <option value="">Choose Topic</option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>

          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.handleChange}
          />
          <label htmlFor="body">Body: </label>
          <textarea
            name=""
            id="body"
            cols="30"
            style={{ width: "521px", height: "182px" }}
            rows="10"
            onChange={this.handleChange}
            defaultValue="write ..."
          />
          <button type="submit">Add Article</button>
        </form>
      </div>
    );
  }
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.postArticle();
  };

  postArticle = () => {
    api
      .postArticleByTopic(this.state.topic, {
        title: this.state.title,
        body: this.state.body,
        created_by: this.props.user._id
      })
      .then(article => {
        navigate(`/articles/${article._id}`);
      });
  };
}

PostArticle.propTypes = {

};

export default PostArticle;
