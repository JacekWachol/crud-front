import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../Navigation';
import RegisterForm from './RegisterForm';


class RegisterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (!this.props.registerOutcome) {
            return (
                <div className="register">
                    <Navigation />
                    <h2> Register new account</h2>
                    <RegisterForm />
                </div>
            );
        }

       

        if (this.props.registerOutcome.error){
            
                return (
                    <div className="register">
                        <Navigation />
                        <h2> Register new account</h2>
                        <h3>Registration failed: {this.props.registerOutcome.errorType}</h3>
                        <RegisterForm />
                        
                    </div>
                );
            
        }

      

    }
}

function mapStateToProps(state) {
    return { registerOutcome: state.registerOutcome };
}

export default connect(mapStateToProps)(RegisterContainer);
