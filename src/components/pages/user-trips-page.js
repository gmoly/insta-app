import React from 'react';
import { connect } from 'react-redux';
import AlgoliaTripList from '../algolia-trip-list/algolia-trip-list'
import  { Redirect } from 'react-router-dom';

const UserTripsPage = ({ location, match, loggedInUser }) => {
   var userId = match.params.userId
   userId = !userId && loggedInUser ? loggedInUser.id : userId

   if (userId) {
      return <AlgoliaTripList location={ location }  userId={ userId } />
   } else {
      return <Redirect to="/" />
   }

};

const mapStateToProps = ( { authData : { user } }) => {
   const loggedInUser = user;
   return { loggedInUser };
}

export default connect(mapStateToProps, null)(UserTripsPage);