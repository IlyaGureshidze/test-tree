import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';

import AppContainer from './containers/AppContainer';
import '../scss/main.scss';

const render = (Component) => {
    ReactDOM.render(
        <Provider store={configureStore()}>
            <Component />
        </Provider>,
        document.getElementById('root'),
    )
};

render(AppContainer);