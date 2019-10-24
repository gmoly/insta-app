import axios from 'axios';

export default class TripsService {

findTrips(from, size, query) {
    if(!size)
        var size = 10
    if(!from)
        var from = 0
    var body = {
         "from" : from, 
         "size" : size 
    }
    if (query) {
        body = {...body, 
            "query": {
                "query_string" : {
                    "query" : "*"+query+"*",
                    "fields" : ["title", "description"]
                }
            }    
        }
    }

    return this._baseBody(body)
}

    _baseBody = (query) => {
        return axios.post('http://localhost:3050/trips/_search', query)
    }
}