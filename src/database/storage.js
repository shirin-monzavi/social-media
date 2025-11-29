import { PiArrowUUpRightDuotone } from 'react-icons/pi';
import { app } from './config';
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const storage = getStorage(app);

export async function uploadPicture(file) {
    const storageRef = ref(storage, uuidv4() + '--' + file.name);
    const snapShot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapShot.ref);
    return url
 }