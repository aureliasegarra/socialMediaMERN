import React from 'react';
import ReactDOM from 'react-dom';
/*
  Initialize REDUX
  Provider manage the store, global state, allows to access the store from anywhere in the app
*/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));