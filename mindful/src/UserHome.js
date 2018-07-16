import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class UserHome extends Component {
    handleSignOut() {
        this.props.signOutCallback();
    }
    // Renders the view of the home screen for the user
    render() {
        return (
            <div>
                <h1>You are now logged in!</h1>
                <Button onClick={() => { this.handleSignOut() }}>Log Out</Button>
            </div>
        );
    }
}