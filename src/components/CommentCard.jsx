import React from 'react';
import PropTypes from 'prop-types';
import './CommentCard.css'
import Vote from './Vote'
import {Link} from '@reach/router';
import * as api from '../api'
import { navigate } from '@reach/router/lib/history';

const CommentCard = props => {
  const {
    votes,
    _id,
    body,
    belongs_to,
    created_by,
    created_at
  } = props.comment

  const deleteComment = () => {
    api.deleteCommentByCommentId(props.comment._id)
      .then(comment => {
        navigate(`/articles/${props.id}`)
      })
  }

  return <div className="comment-card-container">
  
    <span>{created_by.username} on {created_at.split("").slice(0, 10)} said: <h3>{body}</h3></span> 
      <Vote votes={votes} id={_id} />
      {props.user.username == props.comment.created_by.username?
      <button onClick={()=>deleteComment()}>
       Delete
      </button>:""}
    </div>;
};

CommentCard.propTypes = {

};

export default CommentCard;