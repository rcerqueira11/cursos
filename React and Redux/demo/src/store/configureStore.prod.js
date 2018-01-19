import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
//accepts the initial state for your app
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}