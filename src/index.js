import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ProfileProvider } from './components/profileProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProfileProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ProfileProvider>
);
