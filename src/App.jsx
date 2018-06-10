import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import RegisterContainer from './components/manage account/register/RegisterContainer';
import UsersContainer from './components/manage account/users/UsersContainer';

class App extends Component {
  componentDidMount() {
    /*  axios.get('/api/v1/user').then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });*/
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main-body">
          <Route exact path="/" component={Home} />
          <Route path="/manage_account/register" component={RegisterContainer} />
          <Route path="/manage_account/users" component={UsersContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
