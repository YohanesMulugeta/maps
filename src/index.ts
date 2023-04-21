import User from './user';
import Company from './Company';

const company = new Company();
const user = new User();

const map = new mapboxgl.Map({
  container: 'map', // container ID
  accessToken:
    'pk.eyJ1IjoieW9oYW5lczIxIiwiYSI6ImNsZ3FtbG4wcTBmeTkzZ21zdno2OW9ydDEifQ.QBjZZ40vPUm6Rjz0hgNAwQ',
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: { lng: 38.9, lat: 9.2 }, // starting position [lng, lat]
  zoom: 4, // starting zoom
});

console.log(user);
console.log(company);
