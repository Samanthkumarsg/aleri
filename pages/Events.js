import React from 'react';
import Header from '../components/Header';
import EventContainer from '../containers/EventContainer';

function Events() {
    return (
        <React.Fragment>
            <Header />
            <EventContainer />
        </React.Fragment>
    );
}

export default Events;
