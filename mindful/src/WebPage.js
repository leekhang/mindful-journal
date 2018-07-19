import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class WebPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years:['2018'],
      months:['July', 'June', 'May'],
      emotes:['#E7E7E7', '#3C4140', '#FF5151', '#FECC35', '#83E33F', '#80A4ED', '#F392FF']
    }
  }

  render() {
    return (
      <div className="App">
        <main>
          <PageContent 
            years={this.state.years} 
            months={this.state.months} 
            emotes={this.state.emotes} 
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
    constructor(props) {
        super(props);

        this.state = {
            years:['2018'],
            months:['July', 'June', 'May'],
            emotes:['#E7E7E7', '#3C4140', '#FF5151', '#FECC35', '#83E33F', '#80A4ED', '#F392FF']
        }
    }

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

        {/* TOGGLE THIS DIV IN BETWEEN MOBILE VS WEB */}
        <div className="web-user"> 
        {/* <WelcomeInfo/> */}

        <UserInfo email={this.props.userInfo.email} username={this.props.userInfo.username} password={this.props.userInfo.password} change={(e) => this.handleChange(e)} signup={()=>this.handleSignUp()} signin={()=>this.handleSignIn()}/>
        {this.props.userInfo.errorMessage && <p className="alert alert-primary">{this.props.userInfo.errorMessage}</p>}
        
        </div>
        
        {/* This has all the components for the rendered sidebar */}
          {/* <ul className="sidebar-nav">
            <li><a className="user bold" href="">John Appleseed</a></li>
            <li><p className="secondary">Personal Journal</p></li>
            
            <div className="entry">
            <button type="button" className="btn btn-light">New Entry</button>
            </div>

            <li><a href="" className="year bold">2018</a></li>

            <DateList years= {this.props.years} months={this.props.months}/>
            
            <li><a href="" className="bold">Emotion Filters</a></li>

            <EmoteList emotes={this.props.emotes}/>
            
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="privacy"/>
              <label className="form-check-label bold">Private?</label>
            </div>

            <li><a href="" className="secondary">Log Out</a></li>
          </ul> */}
        </div>  

        {/* THIS IS THE MAIN PAGE */}
        <div className="page-content-wrapper"> 

        {/* TOGGLE THIS DIV IN BETWEEN MOBILE VS WEB */}
         
        <WelcomeInfo/>

         <div className="mobile-user"> 
        <UserInfo email={this.props.userInfo.email} username={this.props.userInfo.username} password={this.props.userInfo.password} change={() => this.handleChange()} signup={()=>this.handleSignUp()} signin={()=>this.handleSignIn()}/>
        {this.props.userInfo.errorMessage && <p class="alert alert-primary">{this.props.userInfo.errorMessage}</p>}
        </div>


          <div className="container-fluid">
          <div className="menu">
            <button type="button" className="btn btn-dark" onClick={this.menuToggle}><i className="far fa-bars"></i>Menu</button>
            </div>
            {/* <i class="far fa-bars"></i> */}
            {/* Put page content in this div. */}
          </div>

        </div>
      </div>
    );
  }
}

class Month extends Component {
  render() {
    return(
        <li><a>{this.props.month}</a></li>
    );
  }
}

class DateList extends Component {
  render() {
    let monthArray = this.props.months.map((month) => {
      return <Month key={month} month={month}/>
    });
    
    return(
      <ul className="secondary">
        {monthArray}
      </ul>
    );
  }
}

class Emotes extends Component {
  render() {
    return(
      <div className="colors" 
        style={{
          backgroundColor:this.props.emote, 
          width:'40px', 
          height:'40px', 
          'marginLeft':'20px', 
          'marginBottom':'5px'
          }}>
      </div>
    );
  }
}

class EmoteList extends Component {
  render() {
    let emoteArray = this.props.emotes.map((emote) => {
      return <Emotes key={emote} emote={emote}/>
    })
    return(
      <div className="secondary">
          {emoteArray}
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

export default WebPage;
