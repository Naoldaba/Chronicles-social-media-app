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
const clientSecret = "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";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="745121366812-34mr2kci6sm7283bqc2hq01esjf0tbd6.apps.googleusercontent.com">
        <App/>
    </GoogleOAuthProvider>
  </Provider>
);


