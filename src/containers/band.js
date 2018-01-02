
import {connect} from 'react-redux';
import Band from '../components/band';
import {withRouter} from 'react-router';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

const BandApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Band);

export default withRouter(BandApp);
