
import {UPDATE_EVENTS, UPDATE_EVENTS_PAST} from '../actions/events';

const initialState = {
    'events': [],
    'eventsPassed': []
};

function eventReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_EVENTS:
            return Object.assign({}, state, {
                'events': action.events
            });
        case UPDATE_EVENTS_PAST:
            return Object.assign({}, state, {
                'eventsPassed': action.events
            });

        default:
            return state;
    }
}

export default eventReducer;
