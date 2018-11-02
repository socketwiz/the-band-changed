
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import Band from './containers/band';
import BandBios from './components/bios';
import ContactUs from './containers/contact';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Gallery from './containers/gallery';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Lyrics from './components/lyrics';
import LyricsNewDayRising from './components/lyrics/new-day-rising';
import LyricsTraveler from './components/lyrics/traveler';
import Media from './components/media';
import News from './components/news';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';
import UpcomingEvents from './containers/events';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Band} />
                <Route exact path="/media" component={Media} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/events" component={UpcomingEvents} />
                <Route exact path="/news" component={News} />
                <Route exact path="/bios" component={BandBios} />
                <Route exact path="/lyrics" component={Lyrics} />
                <Route exact path="/lyrics/new-day-rising" component={LyricsNewDayRising} />
                <Route exact path="/lyrics/traveler" component={LyricsTraveler} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
