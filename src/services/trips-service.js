import InstagramService from './instagram-service';

const instagramService = new InstagramService();

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

    getProfileItems(token) {
       return instagramService.getProfileItems(token);
    }

    getProfileInfo(token) {
        return instagramService.getProfileInfo(token);
    }

    saveTrip(tripData) {
        return new Promise((resolve, reject) => {
            resolve(console.log(tripData))
        } );
    }

    mapInstItemsToTrip(items, userId) {
       return {
            id: '',
            userId: userId,
            title: '',
            description: '',
            baseStyle: {},
            places: items.map((item) => { return {
                    placeTitle: item.title,
                    placeDescription: item.description,
                    media: item.images,
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