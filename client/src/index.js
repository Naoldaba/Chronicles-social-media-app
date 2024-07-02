import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import {GoogleOAuthProvider} from '@react-oauth/google';

import postReducer from './reducers/posts';
import authReducer from './reducers/auth';

const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer
  }
})

const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <App/>
    </GoogleOAuthProvider>
  </Provider>
);