//import { database } from './firebase-service';
import { get_trips, get_trip, get_last_trips, add_trip, update_trip, remove_trip } from './mongo-db-service';

export default class TripsService {

    getTrips() {
        /*return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(this.data)
              // reject(new Error('Issue!!!'))
            }, 1000);
        });*/
        return get_trips();
    }

    saveTrip(tripData) {
        const id = tripData.id;
        const result = { ...tripData }
        delete result.id
        if(id===null || id==='') {
           // return database.ref('/trips').push(result);
           return add_trip()
        } else {
          //  return database.ref('/trips/' + tripData.id).set(result);
          return update_trip(id)           
        }
       
    }

    getTripById(id) {
       // return database.ref('/trips/' + tripId).once('value');
       return get_trip(id);
    }

    getLastTrips(count) {
        //return database.ref('/trips').limitToLast(count).once('value');
        return get_last_trips(count);
    }

    removeTrip(id) {
       // return database.ref('/trips').child(id).remove();
       return remove_trip(id);
    }

    mapInstItemsToTrip(items, user) {
       return {
            id: '',
            user: user,
            title: '',
            description: '',
            baseStyle: {},
            places: items.map((item) => { return {
                    placeTitle: item.title,
                    placeDescription: item.description,
                    media: {
                        image: item.images,
                        carousel: item.carousel
                    },
                    location: item.location,
                    source: {
                        id: item.id,
                        type: 'INSTAGRAM'
                    },
                    style: {}
                }
                })
        }
    }

}