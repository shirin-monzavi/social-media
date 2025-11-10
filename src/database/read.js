import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from './config';

export function load() {
    const dbCollection = collection(db, "posts");

    getDocs(dbCollection)
        .then((querySnapshop) => {
            querySnapshop.forEach((doc) => {
                const post = {
                    ...doc.data(),
                    id: doc.id
                };
                console.log('post', post)
            })
        })
        .catch((e) => {
            console.log('error', e);
        });
    // const querySnapshop = await getDocs(collection(db, "users"));
    // querySnapshop.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // })
}

export function loadById(id) {
    console.log('Loading ...', id)
}