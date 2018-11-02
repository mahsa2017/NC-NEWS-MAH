import React, { Component } from 'react';
import * as api from '../api'
import  './Users.css';

class Users extends Component {
  state={
    users:[]
  }
  render() {
    const {users} = this.state
    return (
      <div className="grid-container">
        {users.map(({_id,username,name,avatar_url})=>{
          return(
              <li className="grid-item">
          Name: <h2>{name}</h2> <br/>
          User Name: <h2>{username}</h2> 
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

export default Users;