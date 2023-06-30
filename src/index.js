import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ProviderTheme } from 'components/ProviderTheme/ProviderTheme';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <GoogleOAuthProvider clientId="492877990688-sv4e2d6shdi5gvm2fq94sa6n62a7ah3a.apps.googleusercontent.com">
        <BrowserRouter basename="/GooseTrack_frontend">
          <ProviderTheme>
            <App />
          </ProviderTheme>
        </BrowserRouter>
      </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
