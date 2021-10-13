import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App/App';
import {createStore} from 'redux';
import allReduce from './App/js/reduce/index';

const store = createStore(allReduce);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);