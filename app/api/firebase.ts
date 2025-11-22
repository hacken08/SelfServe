
import { getFirestore } from 'firebase/firestore';
import app  from './firebase-config'; // Assuming firebase-config initializes the app

export const db = getFirestore(app);
