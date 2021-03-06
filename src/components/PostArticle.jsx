import React, { Component } from "react";
import "./PostArticle.css";
import * as api from "../api";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

class PostArticle extends Component {
  state = {
    topic: "",
    title: "",
    body: "",
    bodyEmpty:false,
    topicEmpty:false
  };
  render() {
    return <div>
        <form className="post-article-form" action="" onSubmit={this.handleSubmit}>
          <select name="topicSelection" id="topic" onChange={this.handleChange}>
            <option value="">Choose Topic</option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
          <label htmlFor="title">Title: </label>
          <input className="textInputs" type="text" name="title" id="title" onChange={this.handleChange} />
          <br />
          <textarea className="textInputs" name="" id="body" cols="30" style={{ width: "521px", height: "182px" }} rows="10" onChange={this.handleChange} placeholder="write your article ..." />
          <button type="submit">Add Article</button>
        </form>

        {this.state.bodyEmpty ? <h2>
            {" "}
            ❌ can't post an empty article ❌
          </h2> : ""}
      </div>;
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
    const { title, body} =this.state;
    if (!body) this.setState({ bodyEmpty:true})
    else{
      api
      .postArticleByTopic(this.state.topic, {
        title,
        body,
        created_by: this.props.user._id
      })
      .then(article => {
        navigate(`/articles/${article._id}`);
      });
    }
  };
}

PostArticle.propTypes = {
  user:PropTypes.object.isRequired
};

export default PostArticle;
