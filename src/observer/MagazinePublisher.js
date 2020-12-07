export default class MagazinePublisher {
  constructor() {
    this.subscribers = [];
  }

  add(subscriber) {
    if (subscriber.id) {
      const isIdAlreadyExist = this.subscribers.some(
        ({ id }) => id === subscriber.id
      );
      if (isIdAlreadyExist) {
        throw new Error(`Subscriber with ID ${subscriber.id} already exist`);
      }
      this.subscribers.push(subscriber);
    } else {
      throw new Error(`Every subscriber should have non empty ID field`);
    }
  }

  remove(subscriberId) {
    const subsriberIndex = this.subscribers.findIndex(
      ({ id }) => id === subscriberId
    );
    this.subscribers.splice(subsriberIndex, 1);
  }

  get(subscriberId) {
    // get subscriber
  }

  notify(context) {
    for (let i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i].update(context);
    }
  }
}
