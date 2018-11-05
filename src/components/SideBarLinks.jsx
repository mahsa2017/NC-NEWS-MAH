import React from 'react';
import {Link} from '@reach/router'
const SideBarLinks = props => {
  return (
    <div>
      <Link className="sideBarLinks" to="/postArticle">
        <span role="img" aria-label="sheep">&#x2795;</span> Post an article
          </Link> <br />
      <Link className="sideBarLinks" to="/articles/yours">
        <span role="img" aria-label="sheep">✍</span> Your Articles
          </Link> <br />
      <Link className="sideBarLinks" to="/articles/recent">
        <span role="img" aria-label="sheep">&#9203; </span>Recent Articles
          </Link> <br />
      <Link className="sideBarLinks" to="/articles/popular">
        <span role="img" aria-label="sheep">😍</span> Top 10 Popular Articles
          </Link> <br />
      <Link className="sideBarLinks" to="/articles/commented">
        <span role="img" aria-label="sheep">🔥 </span>
        Top 10 Commented Articles
          </Link>
    </div>
  );
};

export default SideBarLinks;