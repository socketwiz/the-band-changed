
import {connect} from 'react-redux';
import Events from '../components/events';
import {withRouter} from 'react-router';
import {updateEvents} from '../actions/events';
import {updateEventsPast} from '../actions/events';

const mapStateToProps = state => {
    return {
        'events': state.eventReducer.events,
        'eventsPassed': state.eventReducer.eventsPassed
    };
};

const mapDispatchToProps = dispatch => {
    return {
        'getEvents': () => {
            const events = require('./events.json');

            dispatch(updateEvents(events));
        },
        'getEventsPassed': () => {
            const events = require('./events-passed.json');

            dispatch(updateEventsPast(events));
        }
    };
};

const EventsApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Events);

export default withRouter(EventsApp);
