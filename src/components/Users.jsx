import React, { Component } from 'react';
import * as api from '../api'
import  './Users.css';
import UserCard from './UserCard.jsx';

class Users extends Component {
  state={
    users:[],
    isLoading:true
  }
  render() {
    const {users,isLoading} = this.state
    return isLoading ? <div className="loader" /> : <div className="grid-container-user">
        {users.map(user=>{
          return <UserCard key={user._id} user={user} />
        })}
      </div>;
  }

  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = () => {
    api.getUsers()
    .then(users=>{
      this.setState({
        isLoading:false,
        users
      })
    })
  }
}

export default Users;