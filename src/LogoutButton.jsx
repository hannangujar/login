import React, { Component } from 'react'


class LogoutButton extends Component {
    render() {
        return (
            <div className="button" >
                <button onClick={this.props.onClick}>
                    Logout</button>
            </div>
        )
    }
}

export default LogoutButton;