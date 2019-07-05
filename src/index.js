import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/app/app'
import ErrorBoundry from './components/error-boundry/error-boundry';
import { store } from './store';
import { persistor } from './store';

import "leaflet/dist/leaflet.css";

const application = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundry>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
            </ErrorBoundry>
        </PersistGate>
    </Provider>
)

ReactDOM.render(application, document.getElementById('root'));