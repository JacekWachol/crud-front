import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../../actions/action_fetchUsers';
import Navigation from '../../Navigation';

class UsersContainer extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers(user) {
    return (
      <li key={user._id}>{user.email} </li>
    );
  }

  render() {
    if (!this.props.users) {
      return (
        <div>
          <p>Loading</p>
        </div>
      );
    }
    return (
      <div className="users">
        <Navigation />
        <p> User list</p>
        <ul>{this.props.users.map(this.renderUsers)}</ul>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatchFetchUsers) {
  return bindActionCreators({ fetchUsers }, dispatchFetchUsers);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

