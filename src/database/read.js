import { collection, getDocs } from 'firebase/firestore';
import { db } from './config';

export async function load() {
    try {
        const querySnapshop = await getDocs(collection(db, "posts"));
        const data = [];

        querySnapshop.forEach((doc) => {
            data.push({
                ...doc.data(),
                id: doc.id
            }
            )
        });

        return data;

    } catch {
         // eslint-disable-next-line 
        throw 'Failed';
    }
}

export function loadById(id) {
    console.log('Loading ...', id)
}