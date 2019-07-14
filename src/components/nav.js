
import {Link} from 'react-router-dom';
import React from 'react';

function Nav(props) {
    return <div className="container nav text-center">
        <div className="row">
            <div className="col">
                <img alt="The Band Changed" src="/images/changed-logo.jpg" />
            </div>
        </div>
        <div className="row">
            <div className="col">&nbsp;</div>
        </div>
        <div className="row">
            <div className="col"><Link to="/">Home</Link></div>
        </div>
        <div className="row">
            <div className="col"><Link to="/media">Media</Link></div>
        </div>
        <div className="row">
            <div className="col"><Link to="/contact">Contact</Link></div>
        </div>
        <div className="row">
            <div className="col"><Link to="/gallery">Gallery</Link></div>
        </div>
        <div className="row">
            <div className="col"><Link to="/events">Upcoming Events</Link></div>
        </div>
        <div className="row">
            <div className="col"><Link to="/bios">Band Bios</Link></div>
        </div>
        <div className="row">
            <div className="col"><Link to="/lyrics">Lyrics</Link></div>
        </div>
        <div className="row">
            <div className="col">
                <a href="https://www.facebook.com/thebandChanged">
                    <i className="fa-2x fab fa-facebook"></i>
                </a>
            </div>
        </div>
        <div className="row">
            <div className="col">&nbsp;</div>
        </div>
        <div className="row">
            <div className="col">
                <img alt="The Band Changed" src="/images/band-nav.jpg" />
            </div>
        </div>
        <div className="row">
            <div className="col">&nbsp;</div>
        </div>
        <div className="row">
            <div className="col">
                <h4 className="band-title">THE BAND - CHANGED</h4>
                <p>
                    &quot;Changed&quot; is a Rhythm and Blues, Rock and Soul Band. Our roots
                    are in Gospel, Soul, and the Blues. Our music is positive, uplifting,
                    and God-honoring.
                </p>
            </div>
        </div>

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="S5LJQH5LX52EJ" />
            <input alt="PayPal - The safer, easier way to pay online!"
                border="0"
                name="submit"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                type="image" />
            <img alt=""
                border="0"
                height="1"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1" />
        </form>

    </div>;
}

export default Nav;
