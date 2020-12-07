import MagazinePublisher from './MagazinePublisher';
import Subscriber from './Subscriber';

const magazinePublisher = new MagazinePublisher();

const subscriber1 = new Subscriber('Shailesh');
const subscriber2 = new Subscriber('Arfat');
const subscriber3 = new Subscriber('Sidhartha');
const subscriber4 = new Subscriber('Satyam');

magazinePublisher.add(subscriber1);
magazinePublisher.add(subscriber2);
magazinePublisher.add(subscriber3);
magazinePublisher.add(subscriber4);

magazinePublisher.notify(`Hello Subscribers!, Welcome to December edition`);
