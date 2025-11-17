import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../database/config.js";

export async function save(data) {
    try {
        const docRef = await addDoc(collection(db, "posts"), data);
        return docRef.id;
    } catch (error) {
        console.error("Error written with ID", error);
    }
}

export async function update(id, data) {
    try {
        const docRef = doc(db, "posts", id);
        await updateDoc(docRef, data);
        return true;
    } catch {
        return false;
    }
}

