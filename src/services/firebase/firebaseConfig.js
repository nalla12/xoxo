import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAFP83wydO3HWVXnEPNCuoqqlJygoKaTnc',
    authDomain: 'xoxo-dn.firebaseapp.com',
    projectId: 'xoxo-dn',
    storageBucket: 'xoxo-dn.appspot.com',
    messagingSenderId: '848826607787',
    appId: '1:848826607787:web:793d2b8bb1f69a5bd92fee',
};

// Initialize Firebase
export function firebaseInit() {
    initializeApp(firebaseConfig);
}
