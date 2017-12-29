
import {UPDATE_IMAGES} from '../actions/gallery';

const initialState = {
    'images': []
};

function galleryReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_IMAGES:
            return Object.assign({}, state, {
                'images': action.images
            });

        default:
            return state;
    }
}

export default galleryReducer;
