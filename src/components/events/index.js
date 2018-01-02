
import './events.css';
import Main from '../../layouts/main';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class UpcomingEvents extends Component {
    componentDidMount() {
        const {getEvents, getEventsPassed} = this.props;

        if (typeof getEvents === 'function') {
            getEvents();
        }
        if (typeof getEventsPassed === 'function') {
            getEventsPassed();
        }
    }

    render() {
        const {events, eventsPassed} = this.props;
        const eventPartial = map(events, (event, index) => {
            const time = event.time ? event.time : 'TBD';

            return <div className="event" key={index}>
                <div className="row">
                    <div className="col-xs-12 date">{event.date}</div>
                </div>
                <div className="row">
                    <div className="col-xs-12 time">Time: {time}</div>
                </div>
                <div className="row">
                    <div className="col-xs-12 location">{event.location}</div>
                </div>
                <div className="row">
                    <div className="col-xs-12 address">{event.address}</div>
                </div>
                <div className="row">
                    <div className="col-xs-12 phone">{event.phone}</div>
                </div>
                <div className="row">
                    <div className="col-xs-12 hours">{event.hours}</div>
                </div>
            </div>;
        });
        const eventPassedPartial = map(eventsPassed, (eventsPassed, index) => {
            const year = eventsPassed.year;
            const eventsPartial = map(eventsPassed.events, (event, index) => {
                return <div className="event-passed" key={index}>
                    <div className="row">
                        <div className="col-xs-12 location">{event.location}</div>
                    </div>
                </div>;
            });

            return <div className="col-xs-12" key={index}>
                <h2 className="past-events-title">Past Events {year}</h2>
                {eventsPartial}
            </div>;
        });

        return (
            <Main>
                <h1 className="title">Upcoming Events</h1>
                <div className="row">
                    <div className="col-xs-6">{eventPartial}</div>
                    <div className="col-xs-6">
                        <div className="row">
                            <div className="col-xs-12">
                                <img src="/images/events-drums.jpg" alt="drums" />
                            </div>
                        </div>
                        <div className="row">
                            {eventPassedPartial}
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
}

UpcomingEvents.propTypes = {
    'events': PropTypes.array,
    'eventsPassed': PropTypes.array,
    'getEvents': PropTypes.func,
    'getEventsPassed': PropTypes.func
};

export default UpcomingEvents;
