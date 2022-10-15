import { getDatabase, ref, set, onValue } from 'firebase/database';
import { firebaseInit } from './firebaseConfig';
import { getAuth, signInAnonymously } from 'firebase/auth';

const db = getDatabase(firebaseInit);

export function firebaseAuth() {
    return signInAnonymously(getAuth())
        .then(() => 'ok')
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            return [errorCode, errorMessage];
        });
}

export function writeGameData(gameId, gameAsString) {
    set(ref(db, 'games/' + gameId), {
        currentGame: gameAsString,
    }).then(r => r);
}

export function subscribeCurrentGame(gameId, dataReceiver) {
    onValue(ref(db, 'games/' + gameId + '/currentGame'), (snapshot) => {
        const data = snapshot.val();
        dataReceiver(data);
    });
}
