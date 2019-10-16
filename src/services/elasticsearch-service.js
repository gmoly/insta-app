import axios from 'axios';

export default class TripsService {

findTrips(from, size) {
    if(!size)
        var size = 10
    if(!from)
        var from = 0
    var query = {
         "from" : from, "size" : size 
    }
    return this._baseBody(query)
}

    _baseBody = (query) => {
        return axios.get('http://localhost:3050/trips/_search', {
            data: JSON.stringify(query),
        }
        )
    }
}