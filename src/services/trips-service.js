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
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 1000);
        });
    }
}