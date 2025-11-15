import { addDoc, collection } from "firebase/firestore";
import {db} from "../database/config.js";

export async function save(data) {
    try {
        const docRef = await addDoc(collection(db, "posts"), data);
        console.log("Document written with ID", docRef.id);
    } catch (error) {
        console.error("Error written with ID", error);
    }
}

export function update() {
    console.log('Updating ...')
}

