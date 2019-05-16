import React from 'react';
import UserData  from '../user-data/user-data';

const UserDataPage = ({ location }) => {
   return (
        <UserData hash={location.hash}/>
   );
};

export { UserDataPage };