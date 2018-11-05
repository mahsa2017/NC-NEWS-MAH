import React from 'react';
import PropTypes from 'prop-types';
import {imgs} from '../utils';
import './UserCard.css';

const UserCard = props => {
  const { username, name} = props.user;
  return <div className="eachUser">
      <li>
       <img id="imgUserPage" src={imgs(username)} alt="img" /> <br/>
         Name: <span>{name}</span> <br />
         Username: <span>{username}</span>
      </li>
    </div>
};

UserCard.propTypes = {
  user:PropTypes.object.isRequired
};

export default UserCard;