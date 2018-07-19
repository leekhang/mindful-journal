import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class LoginPage extends Component {

  render() {
    return (
      <div className="App">
        <main>
          <PageContent 
            changeCallback={(e) => this.props.changeCallback(e) }
            signUpCallback={() => this.props.signUpCallback() }
            signInCallback={() => this.props.signInCallback() }
            userInfo={this.props.userInfo}
            />
        </main>
      </div>
    );
  }
}

//Bootstrap sidebar example
class PageContent extends Component {

    handleChange(event) {
        this.props.changeCallback(event);
    }

    handleSignUp() {
        this.props.signUpCallback();
    }

    handleSignIn() {
        this.props.signInCallback();
    }

    menuToggle(e) {
        e.preventDefault();
        let wrapper = document.querySelector('.wrapper');
        if(wrapper.classList.contains('toggled')) {
        wrapper.classList.remove('toggled');
        } else {
        wrapper.classList.add('toggled');
        }
    }

  render() {
    return(

      <div className="wrapper toggled">
        
        {/* THIS IS THE SIDEBAR */}
        <div className="sidebar-wrapper">
            <UserInfo email={this.props.userInfo.email} username={this.props.userInfo.username} password={this.props.userInfo.password} change={(e) => this.handleChange(e)} signup={()=>this.handleSignUp()} signin={()=>this.handleSignIn()}/>
            {this.props.userInfo.errorMessage && <p className="alert alert-primary">{this.props.userInfo.errorMessage}</p>}
        </div>  

        {/* THIS IS THE MAIN PAGE */}
        <div className="page-content-wrapper"> 
            <div className="container-fluid">
                <div className="login-menu">
                    <button type="button" className="btn btn-dark" onClick={this.menuToggle}><i className="far fa-bars"></i>Menu</button>
                </div>
            </div>
            <WelcomeInfo/>
            <div className="mobile-user"> 
                <UserInfo email={this.props.userInfo.email} username={this.props.userInfo.username} password={this.props.userInfo.password} change={() => this.handleChange()} signup={()=>this.handleSignUp()} signin={()=>this.handleSignIn()}/>
                {this.props.userInfo.errorMessage && <p className="alert alert-primary">{this.props.userInfo.errorMessage}</p>}
            </div>

        </div>
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
                        <FormGroup className="button-group text-center">
                            <Button className="log-button" onClick={() => { this.props.signup() }}>Sign Up</Button>
                            <Button className="log-button" onClick={() => { this.props.signin() }}>Sign In</Button>
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
                    <p>Express yourself</p>
                </header>
            </div>
        );
    }
}

export default LoginPage;
