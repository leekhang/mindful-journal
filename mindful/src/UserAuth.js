import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './App.css';

export default class UserAuth extends Component {

    handleChange(event) {
        this.props.changeCallback(event);
    }

    handleSignUp() {
        this.props.signUpCallback();
    }

    handleSignIn() {
        this.props.signInCallback();
    }

    //Renders a form for signups and logins
    render() {
        return (
            <div>

                <WelcomeInfo/>

                {this.props.userInfo.errorMessage &&
                    <p class="alert alert-primary">{this.props.userInfo.errorMessage}</p>
                }
                <UserInfo email={this.props.userInfo.email} username={this.props.userInfo.username} password={this.props.userInfo.password} change={() => this.handleChange()} signup={()=>this.handleSignUp()} signin={()=>this.handleSignIn()}/>
            </div>
        );
    }
}

class UserInfo extends Component {
    render() {
        return(
            <div className="user-info">
                    <main>
                        <Form>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" name="email" placeholder="Enter email (must have proper format)"
                                    value={this.props.email}
                                    onChange={(event) => { this.props.change(event) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password" placeholder="Enter password"
                                    value={this.props.password}
                                    onChange={(event) => { this.props.change(event) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input name="username" placeholder="Enter username"
                                    value={this.props.username}
                                    onChange={(event) => { this.props.change(event) }} />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={() => { this.props.signup() }}>Sign Up</Button>
                                <Button onClick={() => { this.props.signin() }}>Sign In</Button>
                            </FormGroup>
                        </Form>
                    </main>
                </div>
        );
    }
}

class WelcomeInfo extends Component {
    render() {
        return(
            <div className="welcome-info">
                <header className="jumbotron jumbotron-fluid">
                    <h1>Mindful Journal</h1>
                    <p>Enter your information below</p>
                </header>
            </div>
        );
    }
}

