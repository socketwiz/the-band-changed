
import {Link} from 'react-router-dom';
import Main from '../../layouts/main';
import React from 'react';

function Lyrics() {
    return (
        <Main>
            <h1 className="title">Lyrics</h1>
            <h2>&quot;Live&quot; From Muscle Shoals</h2>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <Link to="/lyrics/new-day-rising">
                        New Day Rising
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12"><Link to="/lyrics/traveler">Traveler</Link></div>
            </div>
        </Main>
    );
}

export default Lyrics;

