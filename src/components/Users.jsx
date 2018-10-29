import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api'

class Users extends Component {
  state={
    users:[]
  }
  render() {
    const {users} = this.state
    return (
      <div>
        {users.map(({_id,username,name,avatar_url})=>{
          return(
          <li>
          Name: <h2>{name}</h2> <br/>
         User Name: <h4>{username}</h4> 
        {/* {avatar_url? <img src={`${avatar_url}`} alt="" />:"No image found"} */}
          </li>
          )
        })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = () => {
    api.getUsers()
    .then(users=>{
      this.setState({
        users
      })
    })
  }
}

Users.propTypes = {

};

export default Users;