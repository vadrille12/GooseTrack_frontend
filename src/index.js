import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ProviderTheme } from 'components/ProviderTheme/ProviderTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/GooseTrack_frontend">
          <ProviderTheme>
            <App />
          </ProviderTheme>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
