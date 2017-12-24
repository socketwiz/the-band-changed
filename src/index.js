
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import Band from './containers/band';
import BandBios from './components/bios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContactUs from './components/contact';
import {createStore} from 'redux';
import UpcomingEvents from './components/events';
import Gallery from './components/gallery';
import Media from './components/media';
import News from './components/news';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Band} />
                <Route exact path="/media" component={Media} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/events" component={UpcomingEvents} />
                <Route exact path="/news" component={News} />
                <Route exact path="/bios" component={BandBios} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
