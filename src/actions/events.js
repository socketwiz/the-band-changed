
export const UPDATE_EVENTS = 'UPDATE_EVENTS';
export const UPDATE_EVENTS_PAST = 'UPDATE_EVENTS_PAST';

export function updateEvents(events) {
    return {
        'type': UPDATE_EVENTS,
        'events': events
    };
}

export function updateEventsPast(events) {
    return {
        'type': UPDATE_EVENTS_PAST,
        'events': events
    };
}
