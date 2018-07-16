import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


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
                <header className="jumbotron jumbotron-fluid">
                    <h1>Mindful Journal</h1>
                    <p>Enter your information below</p>
                </header>

                {/* {this.state.errorMessage &&
                    <p class="alert alert-danger">{this.state.errorMessage}</p>
                } */}

                <main>
                    <Form>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" name="email" placeholder="Must be legal email address"
                                value={this.props.userInfo.email}
                                onChange={(event) => { this.handleChange(event) }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" name="password" placeholder="Enter password"
                                value={this.props.userInfo.password}
                                onChange={(event) => { this.handleChange(event) }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input name="username" placeholder="Enter username"
                                value={this.props.userInfo.username}
                                onChange={(event) => { this.handleChange(event) }} />
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={() => { this.handleSignUp() }}>Sign Up</Button>
                            <Button onClick={() => { this.handleSignIn() }}>Sign In</Button>
                        </FormGroup>
                    </Form>
                </main>
            </div>
        );
    }
}