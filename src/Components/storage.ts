import { Storage } from '@ionic/storage';

//teh database
const store = new Storage();
async function initStorage() {
    await store.create();
}

initStorage();

export default store;