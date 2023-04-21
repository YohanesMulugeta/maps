import { faker } from '@faker-js/faker';

class User {
  name: string;
  location: { lat: number; lng: number };

  constructor() {
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
}

export default User;
