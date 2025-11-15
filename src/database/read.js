import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { db } from './config';
import { wait } from '@testing-library/user-event/dist/utils';

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

/**
 * Get post by id
 * @param {number} id 
 * @returns 
 * Post by id
 */
export async function loadById(id) {

    try {
        const decRef = doc(db, "posts", id);
        const docSnap = await getDoc(decRef);

        if (docSnap.exists()) {
            return docSnap.data();
        }
    }
     catch {}

    return null;
}