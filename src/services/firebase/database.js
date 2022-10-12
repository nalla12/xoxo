import { getDatabase } from 'firebase/database';
import { firebaseInit } from './firebaseConfig';

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(firebaseInit);
