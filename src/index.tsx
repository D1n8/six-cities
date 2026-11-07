import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { AMSTERDAM_LOCATION, mockOffers, POINTS } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers={mockOffers} city={AMSTERDAM_LOCATION} points={POINTS} />
  </React.StrictMode>,
);
