import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configs/configureStore';
import './styles/index.scss';
import * as serviceWorker from './configs/serviceWorker';
import Routes from "./configs/routes";

// Initialize store
export const store = configureStore();

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
