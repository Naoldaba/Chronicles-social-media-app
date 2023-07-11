import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'

import postReducer from './reducers/posts';

const store = configureStore({
  reducer: {
    posts: postReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


