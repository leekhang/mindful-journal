import firebase from 'firebase/app';
import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';


/* This React component renders a modal screen that provides the editing capabilities for entering a new journal entry or editing an exisiting entry */

// Needs to be passed the origin of call (i.e. create new journal entry or edit entry) --> this.props.type
// Needs to extract the data of the journal entry that is being edited --> if callType == edit, give data with this.props.journalData
// Needs to be passed in the userId in which the journal entry is saving to (this.props.userId)

class ModalScreen extends Component {

  constructor(props) {
    super(props);
    if (this.props.type === 'add') {
      this.state = {
        modal: false,
        title: '',
        date: '',
        emotion: 'Happy',
        body: ''
      };
    } else {
      this.state = {
        dropdownOpen: false,
        modal: false,
        title: this.props.entry.title,
        date: this.props.entry.date,
        emotion: this.props.entry.emotion,
        body: ''
      }
    }
    

    // binding for toggling modal
    this.toggle = this.toggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
    // binding data changes for form
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.saveButtonRender = this.saveButtonRender.bind(this);
    
    // binding buttons/submissions for form
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.resetStateToNone = this.resetStateToNone.bind(this);
    this.resetStateToInitial = this.resetStateToInitial.bind(this);
  }
  // whenever the edit journal is clicked you need to rerender the modal screen to bring back the new changes?
  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  handleClose() {
    if (this.props.type === 'add') this.resetStateToNone();
    if (this.props.type ==='edit') this.resetStateToInitial();
    this.toggle();
  }

  toggleDropdown() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  handleBody(value) {
    this.setState({ body: value });
  }

  handleEmotion(event) {
    this.setState({ emotion: event.target.id });
  }

  saveButtonRender() {
    let emptyConditions = (this.state.title === '') 
                          || (this.state.date === '') 
                          || (this.state.body === '');
    // let unChangedConditions;
    // if (this.props.type === 'edit') {
    //   unChangedConditions = (this.state.title === this.props.entry.title) 
    //                       && (this.state.date === this.props.entry.date) 
    //                       && (this.state.body === this.props.entry.body);
    // } else {
    //   unChangedConditions = true;
    // }
    
    if (emptyConditions) {
      return <Button color="danger" disabled onClick={this.handleSave}>Save</Button>;
    } else {
      return <Button color="danger" onClick={this.handleSave}>Save</Button>;
    }
  }

  render() {
    let editor, toggleBtn, deleteBtn, saveBtn;
    if (this.props.type === 'add') {
      editor = <ModalEditor
                 type={this.props.type}
                 onChange={(value) => this.handleBody(value)}
               />;
      toggleBtn = <Button color="light" onClick={this.toggle}>{this.props.buttonLabel}</Button>;
    } else {
      editor = <ModalEditor
                 type={this.props.type}
                 value={this.props.entry.body}
                 onChange={(value) => this.handleBody(value)}
               />;
      toggleBtn = <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
      deleteBtn = <Button color="danger" onClick={this.handleDelete}>Delete</Button>;
    }
    saveBtn = this.saveButtonRender();

    return (
      <div>
        {toggleBtn}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.handleClose}>{this.state.title}</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              <div className="inputs">
                <label>
                  Title:
                  <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                </label>
                <label>
                  Date:
                  <input type="date" value={this.state.date} onChange={this.handleDateChange} />
                </label>
              </div>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle caret>
                  {this.state.emotion}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem id="Happy" onClick={(event) => this.handleEmotion(event)}>Happy</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="Excited" onClick={(event) => this.handleEmotion(event)}>Excited</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="Calm" onClick={(event) => this.handleEmotion(event)}>Calm</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="Afraid" onClick={(event) => this.handleEmotion(event)}>Afraid</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="Sad" onClick={(event) => this.handleEmotion(event)}>Sad</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="Disgusted" onClick={(event) => this.handleEmotion(event)}>Disgusted</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="Angry" onClick={(event) => this.handleEmotion(event)}>Angry</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <div>
                {editor}
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            {saveBtn}
            {' '}
            {deleteBtn}
            <Button color="danger" onClick={this.handleClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleCancel(event) {
    this.setState();
    this.toggle();
  }

  handleDelete(event) {
    console.log(this.props.userId);
    let userJournals = firebase.database().ref(`users/${this.props.userId}/${this.props.entry.id}`);
    let deleteEntry = {};
    deleteEntry[this.props.entry.id] = null;
    userJournals.set(deleteEntry).catch(console.log);
    this.toggle(); // toggle modal screen
  }
  
  handleSave(event) {
    let userJournals = firebase.database().ref(`users/${this.props.userId}`);
    let newEntry = {
      title: this.state.title,
      date: this.state.date,
      emotion: this.state.emotion,
      body: this.state.body
    };
    
    if (this.props.type === 'add') { // push entry as a new child of userJournals
      userJournals.push(newEntry).catch(console.log);
    } else { // modal screen used for editting
      userJournals = firebase.database().ref(`users/${this.props.userId}/${this.props.entry.id}`);
      userJournals.set(newEntry).catch(console.log);
    }

    if (this.props.type === 'add') {
      this.resetStateToNone();
    }
    this.toggle();
  }

  resetStateToNone() {
    this.setState({
      modal: false,
      title: '',
      date: '',
      emotion: 'Happy',
      body: ''
    });
  }

  resetStateToInitial() {
    this.setState({
      title: this.props.entry.title,
      date: this.props.entry.date,
      emotion: this.props.entry.emotion,
      body: ''
    });
  }
}

class ModalEditor extends Component {

  constructor(props) {
    super(props);
    if (this.props.type === 'add') {
      this.state = {value: RichTextEditor.createEmptyValue()}
    } else {
      this.state = {value: RichTextEditor.createValueFromString(this.props.value,'html')}
    } 
  }
  
  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) this.props.onChange(value.toString('html'));
  };

  render() {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

export default ModalScreen;