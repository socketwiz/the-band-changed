
import {connect} from 'react-redux';
import Contact from '../components/contact';
import 'whatwg-fetch';
import {withRouter} from 'react-router';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        'sendMessage': (event, payload) => {
            event.preventDefault();

            const options = {
                'method': 'POST',
                'body': JSON.stringify(payload)
            };

            return fetch('http://104.236.45.37/contact', options);
        }
    };
};

const BandApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);

export default withRouter(BandApp);
