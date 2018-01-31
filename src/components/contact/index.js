
import './contact.css';

import {Alert} from 'react-bootstrap';
import {Button, Form, TextArea, TextInput} from 'rwidgets';
import Main from '../../layouts/main';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'alertVisible': false
        };
    }

    onSendMessage(event) {
        const {sendMessage} = this.props;

        if (typeof sendMessage === 'function') {
            sendMessage(event)
                .then(() => {
                    this.setState({'alertVisible': true});

                    const name = document.querySelector('#name');
                    const email = document.querySelector('#email');
                    const updates = document.querySelector('#updates');
                    const subject = document.querySelector('#subject');
                    const message = document.querySelector('#message');

                    name.value = '';
                    email.value = '';
                    updates.checked = false;
                    subject.value = '';
                    message.value = '';
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    onCloseAlert(event) {
        this.setState({'alertVisible': false});
    }

    validateRequired(values) {
        const validateField = field => {
            return field ? '' : 'Required';
        };

        return {
            'name': validateField(values.name),
            'email': validateField(values.email),
            'subject': validateField(values.subject),
            'message': validateField(values.message)
        };
    }

    render() {
        const {alertVisible} = this.state;

        let alertClass = ['alert', 'alert-success', 'alert-dismissable'];

        if (alertVisible === false) {
            alertClass.push('hidden');
        }

        return (
            <Main>
                <Alert bsClass={alertClass.join(' ')} onDismiss={this.onCloseAlert.bind(this)}>
                    <p>Your message has been sent and we will respond as quickly as we can.</p>
                </Alert>
                <h1 className="title">Contact Us</h1>
                <h5>
                    Inquiries regarding bookings and general information.
                    We look forward to hearing from you! We Promise we&#39;ll contact you quickly!
                </h5>
                <div className="row">
                    <div className="col-sm-6">
                        <Form onSubmit={this.onSendMessage.bind(this)}
                            validateError={this.validateRequired.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="name">Name <span className="required">*</span></label>
                                <TextInput className="form-control"
                                    field="name"
                                    placeholder="Enter name"
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address <span className="required">*</span></label>
                                <TextInput className="form-control"
                                    field="email"
                                    placeholder="Enter email address"
                                    type="email" />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input id="updates" type="checkbox" /> Check here to receive email updates
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject <span className="required">*</span></label>
                                <TextInput className="form-control"
                                    field="subject"
                                    placeholder="Enter subject"
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message <span className="required">*</span></label>
                                <TextArea className="form-control"
                                    field="message"
                                    placeholder="Enter message"
                                    rows="3"></TextArea>
                            </div>
                            <Button className="btn btn-default"
                                type="submit" >Submit</Button>
                        </Form>
                    </div>
                    <div className="col-sm-6">
                        <img src="/images/contact-guitar.jpg" alt="Aaron holding guitar" />
                    </div>
                </div>
            </Main>
        );
    }
}

ContactUs.propTypes = {
    'sendMessage': PropTypes.func
};

export default ContactUs;
