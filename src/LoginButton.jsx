import React, { Component } from 'react'


class LoginButton extends Component {
    render() {
        return (
            <span className="button" >
                <button onClick={this.props.onClick}>
                    Login
                </button>
                
            </span>
        )
    }
}

export default LoginButton;