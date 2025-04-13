import { Storage } from '@ionic/storage';

//the database
const store = new Storage();
await store.create();

export default store;