import React from 'react';
import PropTypes from 'prop-types';
import './CommentCard.css'
import Vote from './Vote'
import Moment from "react-moment";

const CommentCard = props => {
  const {
    votes,
    _id,
    body,
    created_by,
    created_at
  } = props.comment
  const {user} = props

  return <div className="comment-card-container">
      <span>
      {created_by.username === "jessjelly" && <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png" alt="" />}
      {created_by.username === "tickle122" && <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg" alt="" />}
      {created_by.username === "happyamy2016" && <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivtQQNdntsxANTvTI4RPoWm-v7YK6X9ftvjsXaRFgiAPiqcgQ" alt="" />}
      {created_by.username === "cooljmessy" && <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700" alt="" />}
        {created_by.username} <Moment fromNow>{created_at}</Moment> said: <h3
        >
          {body}
        </h3>
      </span>
      <Vote votes={votes} id={_id} />
      {user.username === props.comment.created_by.username ? <button
          onClick={() => props.deleteComment(props.comment._id)}
        >
          Delete
        </button> : ""}
    </div>;
};

CommentCard.propTypes = {
user:PropTypes.object.isRequired,
comment:PropTypes.object.isRequired
};

export default CommentCard;