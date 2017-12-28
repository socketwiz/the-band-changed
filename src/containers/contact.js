
import {connect} from 'react-redux';
import Contact from '../components/contact';
import {withRouter} from 'react-router';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        'sendMessage': event => {
            event.preventDefault();
            console.log('send message');
        }
    };
};

const BandApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);

export default withRouter(BandApp);
