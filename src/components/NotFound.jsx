import React from 'react';

const NotFound = ({location}) => {
  if(location.state) return <h1>
    {location.state.code} No Article Found 
  </h1>
   return <div>
    <h1>404 PAGE NOT FOUND</h1>
    <h1><span role="img" aria-label="sheep">😮</span></h1>
    </div>;
};

export default NotFound;