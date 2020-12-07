import { v4 as uuidv4 } from 'uuid';

export default class Subscriber {
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
  }
  update(context) {
    console.log(`Subscriber with id ${this.id} Received:`);
    console.log(context);
  }
}
