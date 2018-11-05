import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import "./ArticleCard.css";
import Vote from "./Vote";
import Moment from "react-moment";
import { imgs } from '../utils';

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
      <img className="profileImg" src={imgs(created_by.username)} alt="img" />
      <i>posted by: {created_by.username}</i>
      <Moment fromNow>{created_at}</Moment>
      <Link className="articleCardLinks" id="artCTop" to={`/topics/${belongs_to}`}>
        <span>{`#${belongs_to}`}</span>
      </Link>
      {props.body ? <p>
          {body}
        </p> : <Link className="articleCardLinks" to={`/articles/${_id}`} key={_id}>
          {/* if we are on article single page we pass full body as props to article-card */}
          <p>{`${body
            .split(" ")
            .slice(0, 15)
            .join(" ")} ... `}</p>
        </Link>}
      <span>{comment_count} Comments</span>
      <Vote votes={votes} id={_id} comment_count={comment_count} />
    </div>;
};

ArticleCard.propTypes = {
 article:PropTypes.object.isRequired,
 body:PropTypes.string,
 id:PropTypes.string.isRequired
};

export default ArticleCard;
