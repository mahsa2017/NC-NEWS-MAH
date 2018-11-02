import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import "./ArticleCard.css";
import Vote from "./Vote";
import Moment from "react-moment";

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
  // console.log(created_by, '<<<<');
  return <div className="article-card-container">
      <span>
        <h2>{title}</h2>
      </span>
      {created_by.username === "jessjelly" && <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png" alt="" />}
      {created_by.username === "tickle122" && <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg" alt="" />}
      {created_by.username === "happyamy2016" && <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivtQQNdntsxANTvTI4RPoWm-v7YK6X9ftvjsXaRFgiAPiqcgQ" alt="" />}
    {created_by.username === "cooljmessy" && <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700" alt="" />}
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
