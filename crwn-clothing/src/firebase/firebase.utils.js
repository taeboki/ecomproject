import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAtOmdy3CLb-d8EvRWZ0Zkld7O5B-3mzVs",
    authDomain: "crwn-db-17e97.firebaseapp.com",
    databaseURL: "https://crwn-db-17e97.firebaseio.com",
    projectId: "crwn-db-17e97",
    storageBucket: "crwn-db-17e97.appspot.com",
    messagingSenderId: "804913047840",
    appId: "1:804913047840:web:19544eae8a65b1233c4f45",
    measurementId: "G-M95RMPQC4G"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;