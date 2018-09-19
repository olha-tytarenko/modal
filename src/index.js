import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App } from './app';
import { roomControlReducer } from './components/room-control-modal/room-control-reducer';

const store = createStore(roomControlReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
