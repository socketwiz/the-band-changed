
import {Alert} from 'react-bootstrap';
import {Button, Form, Input} from 'react-components';
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
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    onCloseAlert(event) {
        this.setState({'alertVisible': false});
    }

    render() {
        const {alertVisible} = this.state;
        const validations = [
            {'required': ''}
        ];

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
                        <Form onSubmit={this.onSendMessage.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="name">Name <span className="required">*</span></label>
                                <Input className="form-control"
                                    id="name"
                                    placeholder="Enter name"
                                    type="text"
                                    validations={validations} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address <span className="required">*</span></label>
                                <Input className="form-control"
                                    id="email"
                                    placeholder="Enter email address"
                                    type="email"
                                    validations={validations} />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input id="updates" type="checkbox" /> Check here to receive email updates
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject <span className="required">*</span></label>
                                <Input className="form-control"
                                    id="subject"
                                    placeholder="Enter subject"
                                    type="text"
                                    validations={validations} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message <span className="required">*</span></label>
                                <textarea className="form-control"
                                    id="message"
                                    placeholder="Enter message"
                                    rows="3"></textarea>
                            </div>
                            <Button className="btn btn-default"
                                data-primary={true}
                                disabled={true}
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
