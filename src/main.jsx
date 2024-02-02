/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM'u içe aktarın

import { Provider } from 'react-redux';
import store from './redux/store'; // Redux store'unu içe aktarın
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
