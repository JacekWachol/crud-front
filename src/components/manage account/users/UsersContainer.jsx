import React, { Component } from 'react';
import axios from 'axios';
import Navigation from '../../Navigation';

class UsersContainer extends Component {

  componentDidMount() {
    axios.get('/api/v1/user').then((response) => {
      response.data.map((account) => {
        return console.log(account.email);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

    render() {
        return (
            <div className="users">
                <Navigation />
                <p> User list</p>

            </div>
        )
    }
}

export default UsersContainer;
