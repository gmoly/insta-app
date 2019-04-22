import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//import App from './App';

import App from './components/app/app'
import ErrorBoundry from './components/error-boundry/error-boundry';
import TripsService from './services/trips-service';
import { TripsServiceProvider } from './components/trips-service-context/trips-service-context'
import store from './store';

const tripsService = new TripsService();



const application = (
    <Provider store={store}>
        <ErrorBoundry>
            <TripsServiceProvider value={tripsService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </TripsServiceProvider>
        </ErrorBoundry>
    </Provider>
)

ReactDOM.render(application, document.getElementById('root'));