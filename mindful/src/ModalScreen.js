import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

/* This React component renders a modal screen that provides the editing capabilities for entering a new journal entry or editing an exisiting entry */

// Needs to be passed the origin of call (i.e. create new journal entry or edit entry) --> this.props.callType
// Needs to extract the data of the journal entry that is being edited --> if callType == edit, give data with this.props.journalData

class ModalScreen extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            journalEntry: {}
        };
        // binding for toggling modal
        this.toggle = this.toggle.bind(this);

        // binding for input form
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle() {
        this.setState({modal: !this.state.modal});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
       return (
        <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>

                    <label>
                        Date:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </form>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
       );
   }
}

export default ModalScreen;