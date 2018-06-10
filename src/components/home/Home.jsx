import React, { Component } from 'react';
import Navigation from '../Navigation';

class HomeContainer extends Component {
    render() {
        return (
            <div className="page">

                <Navigation />
                <p>Landing page</p>

            </div>
        )
    }
}

export default HomeContainer;