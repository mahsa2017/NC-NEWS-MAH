import React from 'react';
import PropTypes from 'prop-types';
import './CommentCard.css'
import Vote from './Vote'


const CommentCard = props => {
  const {
    votes,
    _id,
    body,
    belongs_to,
    created_by,
    created_at
  } = props.comment

  return <div className="comment-card-container">
    <span>{created_by.username} on {created_at.split("").slice(0, 10)} said: <h3>{body}</h3></span> 
      <Vote votes={votes} id={_id} />
      {props.user.username === props.comment.created_by.username?
      <button onClick={()=>props.deleteComment(props.comment._id)}>
       Delete
      </button>:""}
    </div>;
};

CommentCard.propTypes = {

};

export default CommentCard;