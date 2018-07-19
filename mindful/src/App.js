import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import firebase from 'firebase/app';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: ''
        };
    }

    componentDidMount() {
        this.removeListenerFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) { //if exists, then logged in
                console.log("User has logged in: ", firebaseUser.email);
                console.log('firebaseUser: ' + firebaseUser);
                this.setState({ user: firebaseUser });
            }
            else {
                console.log("User has logged out");
                this.setState({ user: undefined });
            }
        })
    }

    componentWillUnmount() {
        //turn off the state listener
        this.removeListenerFunction();
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;

        let changes = {}
        changes[field] = value;
        this.setState(changes);
    }

    // Sets up a new firebase user account
    handleSignUp() {
        this.setState({ errorMessage: null }); //clear old error

        //create new firebase user
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((firebaseUser) => {
                let user = firebase.auth().currentUser;
                let profilePromise = user.updateProfile({ displayName: this.state.username })
                return profilePromise;
            })
            .then(() => console.log("done"))
            .catch((error) => {
                this.setState({ errorMessage: error.message });
            });
    }

    //A callback function for logging in existing users
    handleSignIn() {
        this.setState({ errorMessage: null }); //clear old error

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            // THEN pull user journal entries from database
            // pass this as prop into homepage to render journal entries
            // .then(firebase.database)
            .catch((err) => {
                console.log(err);
                this.setState({ errorMessage: err.message });
            });
    }

    //A callback function for logging out the current user
    handleSignOut() {
        this.setState({ errorMessage: null }); //clear any old errors
        firebase.auth().signOut()
            .catch((error) => {
                this.setState({ errorMessage: error.message });
            });
    }

    render() {
        let welcomePageFunction = (routerProps) => {
            if (this.state.user) {
                return (<HomePage signOutCallback={() => this.handleSignOut()} />);
                // return (<Redirect to={`/${this.state.username}`} />);
            } else {
                return (<LoginPage changeCallback={(e) => { this.handleChange(e) }}
                    signUpCallback={() => { this.handleSignUp() }}
                    signInCallback={() => { this.handleSignIn() }}
                    userInfo={this.state} />);
            }
        };

        // NEED TO CHECK THIS FUNCTION
        let homePageFunction = () => {
            if (this.state.user) {
                return (<HomePage signOutCallback={() => this.handleSignOut()} />);
            } else {
                return (<LoginPage changeCallback={(e) => { this.handleChange(e) }}
                    signUpCallback={() => { this.handleSignUp() }}
                    signInCallback={() => { this.handleSignIn() }}
                    userInfo={this.state} />);
            }
        }

        return (
            <div className="App">
            <BrowserRouter>
                <Switch> {/* Here is where you would add another page/component with pathway */}
                    <Route exact path='/' render={welcomePageFunction} />
                    <Route path='/:username' render={homePageFunction} />
                    <Redirect to='/' /> {/* Redirect to '/' when nonexisting urls are inputted */}
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

