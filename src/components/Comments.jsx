import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api'
import CommentCard from './CommentCard';

class Comments extends Component {
  state = {
    comments: [],
    body: "",
    bodyEmpty:false
  };
  render() {
    const { bodyEmpty, comments} = this.state
    const { user,id } = this.props;
    return <div>
        <h3 style={{ textAlign: "left", marginLeft: "70px" }}>
          What do you think?{" "}
        </h3>
        <form action="" onSubmit={this.handleSubmit}>
          <textarea className="textInputs" name="" id="" cols="30" rows="10" style={{ width: "876px", height: "59px" }} placeholder="what do you think? ..." onChange={this.handleChange} value={this.state.body} /> <br />
        {bodyEmpty ? <h3> <span role="img" aria-label="sheep">❌ </span>can't post an empty comment  </h3> : ""}
          <button type="submit">send</button>
        </form>
        {comments.map(comment => {
          return <CommentCard key={comment._id} user={user} id={id} comment={comment} deleteComment={this.deleteComment} />;
        })}
      </div>;
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api.getCommentsByArticleId(this.props.id)
    .then(comments => {
      this.setState({
        comments
      });
    });
  };
  handleChange = e => {
    this.setState({ body: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.postComment();
  };

  deleteComment = (id) => {
    api.deleteCommentByCommentId(id)
      .then(removedComment => {
        const remainedComments = this.state.comments
        .filter(comment => comment._id !== removedComment._id);
        this.setState({
          comments: remainedComments
        }
        )
      })
  }

  postComment = () => {
    const {body} = this.state;
    if(!body) this.setState({bodyEmpty:true});
    api.postCommentByArticleId(this.props.id, {
        body,
        created_by: this.props.user._id
      })
      .then(newcomment => {
        this.setState(state => {
          state.body=""
          return {comments:[newcomment, ...state.comments]}
        })
      });
  };
}

Comments.propTypes = {
user:PropTypes.object.isRequired,
id:PropTypes.string.isRequired
};

export default Comments;