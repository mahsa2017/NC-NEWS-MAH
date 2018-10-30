import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '@reach/router'
import "./ArticleCard.css";
import Vote from "./Vote";

const ArticleCard = props => {
  const {
    title,
    votes,
    created_by,
    belongs_to,
    created_at,
    _id,
    body,
    comment_count
  } = props.article;

  return <div className="article-card-container">
      <span>
        <h2>{title}</h2>
      </span>
      Posted By: {created_by.username} {`On `}
      {created_at.split("").slice(0, 10)}
      <Link className="articleCardLinks" to={`/topics/${belongs_to}`}>
        <span>{`#${belongs_to}`}</span>
      </Link>
    <Link className="articleCardLinks" to={`/articles/${_id}`} key={_id}>
        {/* if we are on article single page we pass full body as props to article-card */}
        {props.body ? <p>{body}</p> : <p>{`${body
            .split(" ")
            .slice(0, 15)
            .join(" ")} ... `}</p>}

        <span>{comment_count} Comments</span>
      </Link>
      <Vote votes={votes} id={_id} comment_count={comment_count} />
    </div>;
};

ArticleCard.propTypes = {
  // article: PropTypes.object.isRequired,
  // votes: PropTypes.objectOf(PropTypes.number.isRequired),
  // title: PropTypes.objectOf(PropTypes.string.isRequired),
  // created_by: PropTypes.objectOf(PropTypes.string.isRequired),
  // belongs_to: PropTypes.objectOf(PropTypes.string.isRequired),
  // created_at: PropTypes.objectOf(PropTypes.string.isRequired),
  // _id: PropTypes.objectOf(PropTypes.string.isRequired)
};

export default ArticleCard;

