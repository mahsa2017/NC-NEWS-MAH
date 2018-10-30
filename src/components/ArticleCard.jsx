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
    Posted By: {created_by.username} On 
    {created_at
      .split("")
      .slice(0, 10)}
    <Link to={`/topics/${belongs_to}`}>
      <span>{`#${belongs_to}`}</span>
    </Link>
    <Link to={`/articles/${_id}`} key={_id}>
      <span><h2>{title}</h2></span>
      <p>{body.substr(0, 200) + ` ...`}</p>
      <span>{comment_count} Comments</span>
    </Link>
    {votes} votes
    <Vote votes={votes} _id={_id} />
  </div>;
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  votes: PropTypes.objectOf(PropTypes.number.isRequired),
  title: PropTypes.objectOf(PropTypes.string.isRequired),
  created_by: PropTypes.objectOf(PropTypes.string.isRequired),
  belongs_to: PropTypes.objectOf(PropTypes.string.isRequired),
  created_at: PropTypes.objectOf(PropTypes.string.isRequired),
  _id: PropTypes.objectOf(PropTypes.string.isRequired)
};

export default ArticleCard;

