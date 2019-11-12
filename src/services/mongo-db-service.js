import axios from 'axios';

export const get_trips = axios.get('http://localhost:3050/trip/')

export const get_trip = (id) => axios.get('http://localhost:3050/trip/'+id)

export const get_last_trips = (count) => axios.get('http://localhost:3050/last-trips/'+count)

export const add_trip = (body) => axios.post('http://localhost:3050/trip/', body)

export const update_trip = (id, body) => axios.put('http://localhost:3050/trip/'+id, body)

export const remove_trip = (id) => axios.delete('http://localhost:3050/trip/'+id)


export const get_user = (id) => axios.get('http://localhost:3050/user/'+id)

export const get_users = (body) => axios.post('http://localhost:3050/users/', body)

export const add_user = (body) => axios.post('http://localhost:3050/user/', body)

export const update_user = (id, body) => axios.put('http://localhost:3050/user/'+id, body)







