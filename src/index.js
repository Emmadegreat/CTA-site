//import 'react-reveal/globals';

import 'animate.css/animate.min.css';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store = { Store}>
      <App />
    </Provider>

  </React.StrictMode>
);

