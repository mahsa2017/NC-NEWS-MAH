import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  state={
    user:{}
  }
  render() {
    return (
      <div>
        Single User
      </div>
    );
  }
}

User.propTypes = {

};

export default User;