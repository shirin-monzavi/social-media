import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from './config';

export async function load() {
    return 'ok';
    // const dbCollection = collection(db, "posts");
    // const data = [];

    // getDocs(dbCollection)
    //     .then((querySnapshop) => {
    //         querySnapshop.forEach((doc) => {
    //             const post = {
    //                 ...doc.data(),
    //                 id: doc.id
    //             };
    //             data .push(post);
    //         })
    //     })
    //     .catch((e) => {
    //         console.log('error', e);
    //     });
    // // const querySnapshop = await getDocs(collection(db, "users"));
    // // querySnapshop.forEach((doc) => {
    // //     console.log(`${doc.id} => ${doc.data()}`);
    // // })
    // return new Promise((resolve, reject) => {
    //     resolve('ok');
    // });
}

export function loadById(id) {
    console.log('Loading ...', id)
}