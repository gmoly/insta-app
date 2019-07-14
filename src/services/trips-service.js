import { database } from './firebase-service';

export default class TripsService {

    data = [
        {
            id: 'tripId1',
            userId: 'userId1',
            title: 'Trip 1',
            description: 'Description for trip 1',
            baseStyle: {},
            places: [{
                placeTitle: 'Place 1',
                placeDescription: 'Place description 1',
                media: {},
                location: {},
                source: {
                    id: 'source_id',
                    type: 'INSTAGRAM'
                },
                style: {}
            }]
        }
    ];

    getTrips() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(this.data)
              // reject(new Error('Issue!!!'))
            }, 1000);
        });
    }

    saveTrip(tripData) {
        const id = tripData.id;
        const result = { ...tripData }
        delete result.id
        if(id===null || id==='') {
            return database.ref('/trips').push(result);
        } else {
            return database.ref('/trips/' + tripData.id).set(result);            
        }
       
    }

    getTripById(tripId) {
        return database.ref('/trips/' + tripId).once('value');
    }

    removeTrip(id) {
        return database.ref('/trips').child(id).remove();
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