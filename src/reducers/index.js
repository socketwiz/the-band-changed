
import {combineReducers} from 'redux';
import eventReducer from './events';
import galleryReducer from './gallery';

const rootReducer = combineReducers({
    eventReducer,
    galleryReducer
});

export default rootReducer;
