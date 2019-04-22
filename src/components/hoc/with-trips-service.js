import React from 'react';
import { TripsServiceConsumer } from '../trips-service-context/trips-service-context';

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