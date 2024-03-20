import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {AuthorizationStatus} from './const';
import placeCards from './mocks/placeCards';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      authorizationStatus = {AuthorizationStatus.NoAuth}
      placeCards = {placeCards}
    />
  </React.StrictMode>
);
