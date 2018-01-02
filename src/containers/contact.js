
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
        'sendMessage': event => {
            event.preventDefault();

            const form = event.currentTarget;
            const name = form.querySelector('#name');
            const email = form.querySelector('#email');
            const updates = form.querySelector('#updates');
            const subject = form.querySelector('#subject');
            const message = form.querySelector('#message');
            const payload = {
                'name': name.value,
                'email': email.value,
                'updates': updates.checked,
                'subject': subject.value,
                'message': message.value
            };
            const options = {
                'method': 'POST',
                'body': JSON.stringify(payload)
            };

            return fetch('http://104.236.45.37:8080/contact', options);
        }
    };
};

const BandApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);

export default withRouter(BandApp);
