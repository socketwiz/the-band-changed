
import {Link} from 'react-router-dom';
import React from 'react';

function Nav(props) {
    return <div className="nav text-center">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <img alt="The Band Changed" src="/images/changed-logo.jpg" />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">&nbsp;</div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12"><Link to="/">Home</Link></div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12"><Link to="/media">Media</Link></div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12"><Link to="/contact">Contact</Link></div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12"><Link to="/gallery">Gallery</Link></div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12"><Link to="/events">Upcoming Events</Link></div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12"><Link to="/news">News Feed</Link></div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12"><Link to="/bios">Band Bios</Link></div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">&nbsp;</div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <img alt="The Band Changed" src="/images/band-nav.jpg" />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">&nbsp;</div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <h4>THE BAND - CHANGED</h4>
                <p>
                    &quot;Changed&quot; is a Rhythm and Blues, Rock and Soul Band. Our roots
                    are in Gospel, Soul, and the Blues. Our music is positive, uplifting,
                    and God-honoring.
                </p>
            </div>
        </div>
    </div>;
}

export default Nav;
