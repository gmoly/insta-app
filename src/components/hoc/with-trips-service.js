import React from 'react';
import { TripsServiceConsumer } from '../app-service-context/app-service-context';

const withTripsService = () => (Wrapped) => {
    
    return (props) => {
        return (
            <TripsServiceConsumer>
                {
                    (tripsService) => {
                      return (<Wrapped {... props} 
                                tripsService={tripsService}/>);
                    }
                }
            </TripsServiceConsumer>
        )
    }
}

export { withTripsService };