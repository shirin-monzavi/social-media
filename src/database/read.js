import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './config';

/**
 * loads all posts
 * @returns 
 * all posts
 */
export async function load() {
    try {
        const querySnapshop = await getDocs(collection(db, "posts"));
        return processQuery(querySnapshop);

    } catch {

        throw new Error('Failed all data');
    }
}

/**
 * Loads all promoted posts
 * @returns all promoted posts
 */
export async function loadPromoted() {
    try {
        const q = query(collection(db, "posts"), where("promote", "==", true));
        const querySnapshop = await getDocs(q);
        return processQuery(querySnapshop);

    } catch {

        throw new Error('Failed promoted data');
    }
}

/**
 * Process snapshot
 * @param {object} querySnapshop 
 * @returns data
 */
function processQuery(querySnapshop) {
    const data = [];

    querySnapshop.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id
        }
        )
    });

    return data;
}

export function loadById(id) {
    console.log('Loading ...', id)
}