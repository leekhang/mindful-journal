import firebase from 'firebase/app';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

import BlogPostListContainer from './BlogPostListContainer';
import ModalScreen from './ModalScreen';


export default class UserHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allEntries: []
    };
  }

  componentDidMount() {
    this.unregFunc = firebase.database().ref(`users/${this.props.userId}/`);
    this.unregFunc.on('value', (snapshot) => {
      console.log('database snapshot: ' + snapshot.val());
      this.setState({ allEntries: snapshot.val() });
    });
  }

  componentWillUnmount() {
    this.unregFunc.off();
  }

  handleSignOut() {
    this.props.signOutCallback();
  }

  // Renders the view of the home screen for the user
  render() {
    let testId = 'LHgmQ_nb0tsyep1qNRF';
    return (
      <div>
        <h1>You are now logged in!</h1>

        <BlogPostListContainer userId={this.props.userId} allEntries={this.state.allEntries} />

        {/* Render Edit Journal to every Journal entry */}
        <ModalScreen
          buttonLabel="Add Journal"
          type="add"
          userId={this.props.userId}
        />
        <Button onClick={() => { this.handleSignOut() }}>Log Out</Button>
      </div>
    );
  }
}

// journalId={testId}
// journalEntry={testEntry}