import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

http.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

const listEvents = ({ city, limit }) => http.get('/events', { params: { city, _limit: limit }});

const getEvent = (id) => http.get(`/events/${id}`);

const deleteEvent = (id) => http.delete(`/events/${id}`);

export {
  listEvents,
  getEvent,
  deleteEvent
}