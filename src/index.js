import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

//import App from './App';

import App from './components/app/app'
import ErrorBoundry from './components/error-boundry/error-boundry';
import TripsService from './services/trips-service';
import { TripsServiceProvider } from './components/trips-service-context/trips-service-context'
import { store } from './store';
import { persistor } from './store';


const tripsService = new TripsService();



const application = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundry>
                <TripsServiceProvider value={tripsService}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </TripsServiceProvider>
            </ErrorBoundry>
        </PersistGate>
    </Provider>
)

ReactDOM.render(application, document.getElementById('root'));