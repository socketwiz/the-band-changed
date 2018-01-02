
import {connect} from 'react-redux';
import Gallery from '../components/gallery';
import {withRouter} from 'react-router';
import {updateImages} from '../actions/gallery';

const mapStateToProps = state => {
    return {
        'images': state.galleryReducer.images
    };
};

const mapDispatchToProps = dispatch => {
    return {
        'getImages': () => {
            const photos = require('./photos.json');

            dispatch(updateImages(photos));
        }
    };
};

const GalleryApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

export default withRouter(GalleryApp);
