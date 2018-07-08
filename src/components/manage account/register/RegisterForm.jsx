import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../../actions/action_registerUser';


class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.registerUser(this.state.email, this.state.password);
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div className="list-input col-sm-6 float-sm-right">
        <h2 className="alert alert-info text-center">Register</h2>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input
            className="form-control form-control-lg border-info text-info"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            className="form-control form-control-lg border-info text-info"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


function mapDispatchToProps(dispatchRegisterUser) {
  return bindActionCreators({ registerUser }, dispatchRegisterUser);
}

export default connect(null, mapDispatchToProps)(RegisterForm);
