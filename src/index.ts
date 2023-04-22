import User from './user';
import Company from './Company';
import CustomMap from './CustomMap';

const company = new Company();
const user = new User();

const map = new CustomMap();

map.addMarker(company);
map.addMarker(user);

// map.addMarker({ lng: 38.9, lat: 9.2 }, 'COMPANY');
