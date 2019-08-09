import axios from 'axios';

export const get_trips = axios.get('http://localhost:3050/trip/')

export const get_trip = (id) => axios.get('http://localhost:3050/trip/'+id)

export const get_last_trips = (count) => axios.get('http://localhost:3050/last-trips/'+count)

export const add_trip = axios.post('http://localhost:3050/trip/')

export const update_trip = (id) => axios.put('http://localhost:3050/trip/'+id)

export const remove_trip = (id) => axios.delete('http://localhost:3050/trip/'+id)







