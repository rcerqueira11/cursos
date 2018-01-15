import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
// higher order component that attaches our store to our React container components
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

// we create a instance of our store
// initial state is an optional parameter
// if you are creating a server render app you might choose to do so
const store = configureStore();
// approach does not requiere server rendering
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
    // provider just take a props which is the store
    <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);