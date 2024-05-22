import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {AuthorizationStatus} from './const';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      authorizationStatus = {AuthorizationStatus.Auth}
      store = {store}
    />
  </React.StrictMode>
);
