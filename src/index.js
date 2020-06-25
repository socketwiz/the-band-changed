
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import Band from './containers/band';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Band} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
