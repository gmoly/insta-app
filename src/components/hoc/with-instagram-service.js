import React from 'react';
import { InstagramServiceConsumer } from '../app-service-context/app-service-context';

const withInstagramService = () => (Wrapped) => {
    
    return (props) => {
        return (
            <InstagramServiceConsumer>
                {
                    (instagramService) => {
                      return (<Wrapped {... props} 
                        instagramService={instagramService}/>);
                    }
                }
            </InstagramServiceConsumer>
        )
    }
}

export { withInstagramService };