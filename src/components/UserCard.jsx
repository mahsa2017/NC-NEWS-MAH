import React from 'react';
import PropTypes from 'prop-types';

const UserCard = props => {
  return (
    <div>
      
    </div>
  );
};

UserCard.propTypes = {
  
};

export default UserCard;

{
  articles.map(article => {
    return <ArticleCard key={article._id} article={article} id={article._id} />;
  })
}