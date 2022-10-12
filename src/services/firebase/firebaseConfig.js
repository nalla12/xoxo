import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAFP83wydO3HWVXnEPNCuoqqlJygoKaTnc',
    authDomain: 'xoxo-dn.firebaseapp.com',
    projectId: 'xoxo-dn',
    storageBucket: 'xoxo-dn.appspot.com',
    messagingSenderId: '848826607787',
    appId: '1:848826607787:web:793d2b8bb1f69a5bd92fee',
    databaseURL: 'https://xoxo-dn-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
export const firebaseInit = initializeApp(firebaseConfig);

