import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBG6fjMP39aE1NOtBuRPqPtNmAzZ3vjsQA",
    authDomain: "crwn-db-91376.firebaseapp.com",
    projectId: "crwn-db-91376",
    storageBucket: "crwn-db-91376.appspot.com",
    messagingSenderId: "816460945851",
    appId: "1:816460945851:web:0834f3a4b29e156438cc9e",
    measurementId: "G-X600KL3KP1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
