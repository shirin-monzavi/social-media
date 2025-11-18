import { app } from './config';
import { getStorage, uploadBytes, ref } from 'firebase/storage';

const storage = getStorage(app);

export async function uploadPicture(file) {
    console.log('f',file);
    const storageRef = ref(storage, 'some-child');

    const snapShot = await uploadBytes(storageRef, file);

    console.log('Snapshot', snapShot);
}