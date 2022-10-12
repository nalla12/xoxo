import { getDatabase, ref, set } from 'firebase/database';
import { firebaseInit } from './firebaseConfig';
import { getAuth, signInAnonymously } from 'firebase/auth';

export function writeGameData(gameId, gameAsString) {
    const db = getDatabase(firebaseInit);
    const auth = getAuth();
    signInAnonymously(auth)
        .then(() => {
            // Signed in
            set(ref(db, 'games/' + gameId), {
                currentGame: gameAsString,
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}