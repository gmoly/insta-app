import React from 'react';

const {
    Provider: TripsServiceProvider,
    Consumer: TripsServiceConsumer
} = React.createContext();

export {
    TripsServiceConsumer,
    TripsServiceProvider
};