
import Main from '../../layouts/main';
import React from 'react';

function ContactUs() {
    return (
        <Main>
            <h1 className="title">Contact Us</h1>
            <h5>
                Inquiries regarding bookings and general information.
                We look forward to hearing from you! We Promise we&#39;ll contact you quickly!
            </h5>
            <div className="row">
                <div className="col-sm-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name <span className="required">*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address <span className="required">*</span></label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email address" />
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" /> Check here to receive email updates
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Subject <span className="required">*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="Enter subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Message <span className="required">*</span></label>
                            <textarea className="form-control" rows="3" placeholder="Enter message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
                <div className="col-sm-6">
                    <img src="/images/contact-guitar.jpg" alt="Aaron holding guitar" />
                </div>
            </div>
        </Main>
    );
}

export default ContactUs;
