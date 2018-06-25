import React, { Component } from 'react';
import LogoutButton from './LogoutButton.jsx';
import LoginButton from './LoginButton.jsx';
import Greeting from './Greeting.jsx';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: true }
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedInn = this.state.isLoggedIn;

        const button = isLoggedInn ? (<LogoutButton onClick={this.handleLogoutClick} />) :
                                    (<LoginButton onClick={this.handleLoginClick} />);

        return (
            <div className="Button">
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;