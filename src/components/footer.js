
import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        const year = new Date().getFullYear();

        return <div className="container">
            <div className="row">
                <div className="col-sm text-center">
                    Copyright {year}. The Band-Changed. All rights reserved.
                </div>
            </div>
        </div>;
    }
}
