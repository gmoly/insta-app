import React from 'react';

const {
    Provider: TripsServiceProvider,
    Consumer: TripsServiceConsumer
} = React.createContext();

const {
    Provider: InstagramServiceProvider,
    Consumer: InstagramServiceConsumer
} = React.createContext();

export {
    TripsServiceConsumer,
    InstagramServiceConsumer,
    TripsServiceProvider,
    InstagramServiceProvider,
};