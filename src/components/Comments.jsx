import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api'
import CommentCard from './CommentCard';

class Comments extends Component {
  state={
    comments:[]
  }
  render() {
    const{comments} = this.state
    return (
      <div>
        {comments.map(comment=>{
          return <CommentCard user={this.props.user} id={this.props.id} comment={comment}/>
        })}
      </div>
    );
  }

  componentDidMount(){
    this.fetchComments()
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.id !== this.props.id) {
  //     this.fetchComments();
  //   }
  // }

  fetchComments=() =>{
    api.getCommentsByArticleId(this.props.id)
    .then(comments=>{
      this.setState({
        comments
      })
    })
  }

}

Comments.propTypes = {

};

export default Comments;