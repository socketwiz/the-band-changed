
import React, {Component} from 'react';
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import Nav from '../components/nav';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        const {children} = this.props;

        return (
            <div>
              <Header />

              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <Nav />
                  </div>
                  <div className="col-9">
                    {children}
                  </div>
                </div>
              </div>

              <Footer />
            </div>
        );
    }
}

Main.propTypes = {
    'children': PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ])
};
